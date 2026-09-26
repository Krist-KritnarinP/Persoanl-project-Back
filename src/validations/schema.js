import z from 'zod';
export const idSchema = z.coerce.number().int().positive().max(2147483647);
const password = z.string().min(15, 'Use at least 15 characters').refine(v => Buffer.byteLength(v, 'utf8') <= 72, 'Password must not exceed 72 UTF-8 bytes');
const username = z.string().trim().min(4).max(50);
const email = z.string().trim().email().max(100);
export const registerSchema = z.object({ username, email, password }).strict();
export const loginSchema = z.object({ email, password: z.string().min(1).max(100) }).strict();
export const profileSchema = z.object({ username: username.optional(), password: password.optional(), currentPassword: z.string().max(100).optional() }).strict()
  .refine(v => v.username !== undefined || v.password !== undefined, 'No changes supplied');
const date = z.string().max(40).refine(v => /^\d{4}-\d{2}-\d{2}(T.*)?$/.test(v) && Number.isFinite(Date.parse(v)) && new Date(v).toISOString().slice(0,10) === v.slice(0,10), 'Invalid date');
const optionalDate = z.union([date, z.literal(''), z.null()]).optional();
const text = z.string().max(4000);
const tripFields = z.object({ tripName: z.string().trim().min(1).max(100), destination: z.string().trim().max(100).nullable().optional(), startDate: optionalDate, endDate: optionalDate, tripDescription: text.nullable().optional() }).strict();
const ordered = v => !v.startDate || !v.endDate || Date.parse(v.startDate) <= Date.parse(v.endDate);
export const tripCreateSchema = tripFields.refine(ordered, 'End date must follow start date');
export const tripUpdateSchema = tripFields.partial().refine(ordered, 'End date must follow start date');
export const dayCreateSchema = z.object({ dayDate: optionalDate, description: text.optional() }).strict();
export const dayUpdateSchema = dayCreateSchema.extend({ dayCount: idSchema.optional() }).strict();
const coord = (min, max) => z.union([z.literal(''), z.null(), z.coerce.number().finite().min(min).max(max)]).optional();
const activityFields = z.object({
  dayId: idSchema,
  locationName: z.string().trim().min(1).max(150),
  activityType: z.enum(['ACCOMMODATION','TRANSPORT','RESTAURANT','ATTRACTION']).optional(),
  activityDate: optionalDate, activityTime: optionalDate,
  price: z.coerce.number().finite().min(0).max(99999999.99).optional(),
  description: text.nullable().optional(), status: z.enum(['planned','completed','cancelled']).optional(),
  latitude: coord(-90,90), longitude: coord(-180,180)
}).strict();
export const activityCreateSchema = activityFields;
export const activityUpdateSchema = activityFields.omit({ dayId: true }).partial().strict();
export const weatherSchema = z.object({
  tripId: idSchema,
  location: z.string().max(200).nullable().optional(), startDate: optionalDate, endDate: optionalDate,
  activities: z.array(z.object({ date: optionalDate, time: optionalDate, location: z.string().max(200).nullable().optional(), type: z.string().max(50).nullable().optional() }).strict()).max(200).optional()
}).strict();
export const validateBody = schema => (req, res, next) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return next(parsed.error);
  req.body = parsed.data; next();
};
export const validateIds = (req, res, next) => {
  try { for (const [name, value] of Object.entries(req.params)) if (name.endsWith('Id')) idSchema.parse(value); next(); }
  catch (error) { next(error); }
};
