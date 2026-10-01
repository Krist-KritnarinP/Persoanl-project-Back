// Only days with an explicitly chosen insertion use custom order.
// Untouched days retain the original private/public query order.
export function orderDayActivities(day) {
  const { activityOrder, ...rest } = day;
  if (!Array.isArray(activityOrder) || !day.activities) return rest;
  const ranks = new Map(activityOrder.map((id, index) => [id, index]));
  return { ...rest, activities: [...day.activities].sort((a, b) =>
    (ranks.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (ranks.get(b.id) ?? Number.MAX_SAFE_INTEGER)) };
}
export function insertedActivityOrder(day, newId, placement, anchorId) {
  const ids = orderDayActivities(day).activities.map((a) => a.id);
  if (placement === "end") return [...ids, newId];
  const anchor = ids.indexOf(anchorId);
  if (anchor < 0) return null;
  ids.splice(anchor + (placement === "after" ? 1 : 0), 0, newId);
  return ids;
}
