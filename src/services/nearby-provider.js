import createError from "http-errors";
const types = { restaurant: "restaurant", attraction: "tourist_attraction", park: ["national_park", "park"], hotel: "hotel" };
const filters = {
  restaurant: '["amenity"~"^(restaurant|cafe|food_court)$"]',
  attraction: '["tourism"~"^(attraction|museum|viewpoint|zoo|theme_park)$"]',
  park: '["boundary"="national_park"]',
  hotel: '["tourism"~"^(hotel|motel|hostel|guest_house)$"]',
};
export function distanceMeters(lat1, lng1, lat2, lng2) {
  const rad = n => n * Math.PI / 180;
  const a = Math.sin(rad(lat2-lat1)/2)**2 + Math.cos(rad(lat1))*Math.cos(rad(lat2))*Math.sin(rad(lng2-lng1)/2)**2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(Math.max(0,1-a)));
}
function finalize(candidates, input) {
  const seen = new Set();
  return candidates.filter(p => p.name && p.name.length <= 150 && Number.isFinite(p.latitude) && Math.abs(p.latitude)<=90 && Number.isFinite(p.longitude) && Math.abs(p.longitude)<=180)
    .map(p => ({...p, distanceMeters:Math.round(distanceMeters(input.latitude,input.longitude,p.latitude,p.longitude))}))
    .filter(p => p.distanceMeters <= input.radiusKm*1000 && !(p.distanceMeters<30 && p.name.trim().toLowerCase()===input.sourceName?.trim().toLowerCase()))
    .filter(p => {const key=p.name.trim().toLowerCase()+":"+p.latitude.toFixed(4)+":"+p.longitude.toFixed(4);if(seen.has(key))return false;seen.add(key);return true;});
}
export async function fetchNearbyPlaces(input, fetchImpl = fetch, apiKey = process.env.GOOGLE_PLACES_API_KEY) {
  const google = Boolean(apiKey);
  try {
    const response = await fetchImpl(google ? "https://places.googleapis.com/v1/places:searchNearby" : "https://overpass-api.de/api/interpreter", {
      method:"POST", signal:AbortSignal.timeout(20000),
      headers: google ? {"Content-Type":"application/json","X-Goog-Api-Key":apiKey,"X-Goog-FieldMask":"places.id,places.displayName,places.location,places.formattedAddress,places.rating,places.userRatingCount,places.businessStatus"} : {"Content-Type":"application/x-www-form-urlencoded","User-Agent":"AilhoungTravelPlanner/1.0"},
      body: google ? JSON.stringify({includedTypes:[types[input.category]].flat(),maxResultCount:Math.min(20,input.limit+5),rankPreference:"POPULARITY",languageCode:input.language,locationRestriction:{circle:{center:{latitude:input.latitude,longitude:input.longitude},radius:input.radiusKm*1000}}}) : new URLSearchParams({data:`[out:json][timeout:15][maxsize:16777216];(${`nwr(around:${input.radiusKm*1000},${input.latitude},${input.longitude})${filters[input.category]}["name"];`}${input.category === "park" ? `nwr(around:${input.radiusKm*1000},${input.latitude},${input.longitude})["leisure"~"^(park|nature_reserve)$"]["name"];` : ""});out center tags 300;`}).toString(),
    });
    if (!response.ok) throw createError(response.status===429 ? 429 : 503,"Nearby provider unavailable");
    const body = await response.json();
    if (!google && body.remark) throw createError(503,"Nearby provider incomplete response");
    if (google && !Array.isArray(body.places) && body.places !== undefined) throw createError(503,"Nearby provider invalid response");
    if (!google && !Array.isArray(body.elements)) throw createError(503,"Nearby provider invalid response");
    const candidates = google ? (body.places || []).filter(p => p.businessStatus!=="CLOSED_PERMANENTLY").map(p=>({id:p.id,name:p.displayName?.text,latitude:p.location?.latitude,longitude:p.location?.longitude,address:p.formattedAddress||"",rating:p.rating??null,reviewCount:p.userRatingCount??null})) : body.elements.map(p=>({id:`${p.type}/${p.id}`,name:p.tags?.[`name:${input.language}`]||p.tags?.name,latitude:p.lat??p.center?.lat,longitude:p.lon??p.center?.lon,address:[p.tags?.["addr:street"],p.tags?.["addr:city"]].filter(Boolean).join(", "),rating:null,reviewCount:null,notability:(p.tags?.wikipedia?2:0)+(p.tags?.wikidata?1:0)}));
    const filtered=finalize(candidates,input);
    if(!google) filtered.sort((a,b)=>b.notability-a.notability||a.distanceMeters-b.distanceMeters);
    return {provider:google?"google":"osm", ranking:google?"popularity":"notability_distance", places:filtered.slice(0,input.limit).map(({notability,...p})=>({...p,category:input.category}))};
  } catch(error) {
    if(error.status) throw error;
    throw createError(503,"Nearby provider unavailable");
  }
}
