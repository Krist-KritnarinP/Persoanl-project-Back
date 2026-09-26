import z from 'zod';
import { reportServerError } from '../ops/monitoring.js';
import { randomUUID } from 'node:crypto';
export default function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);
  const requestId = randomUUID();
  if (err instanceof z.ZodError) return res.status(400).json({ status: 'Error', message: 'Validation error', error: z.flattenError(err).fieldErrors, requestId });
  const prismaStatus = { P2002: 409, P2003: 400, P2025: 404 }[err.code];
  const candidate = prismaStatus || err.status || 500;
  const status = Number.isInteger(candidate) && candidate >= 400 && candidate <= 599 ? candidate : 500;
  const messages = { 400: 'Invalid request', 401: 'Unauthorized', 403: 'Forbidden', 404: 'Not found', 409: 'Record conflicts with existing data', 413: 'Request too large', 429: 'Too many requests. Please try again later.' };
  // Never log request bodies, Prisma queries, tokens, or upstream error messages.
  console.error(JSON.stringify({ requestId, status, method: req.method, code: prismaStatus ? err.code : 'REQUEST_FAILED' }));
  if (status >= 500) reportServerError(status, requestId);
  res.status(status).json({ status: 'Error', message: status >= 500 ? 'Service temporarily unavailable' : messages[status] || 'Request failed', requestId });
}
