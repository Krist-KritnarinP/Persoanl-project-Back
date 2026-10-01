import { searchNearbyService, addNearbyActivityService } from "../services/nearby.service.js";
export async function searchNearby(req,res,next) {
  try { res.json({data:await searchNearbyService(req.params.activityId,req.user.id,req.body)}); } catch(error){next(error);}
}
export async function addNearby(req,res,next) {
  try { res.status(201).json({data:await addNearbyActivityService(req.params.activityId,req.user.id,req.body)}); } catch(error){next(error);}
}
