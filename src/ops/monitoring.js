import * as Sentry from '@sentry/node';

// An allowlist is safer than trying to redact arbitrary exception messages.
export function safeEvent(event) {
  return {
    event_id: event.event_id,
    timestamp: event.timestamp,
    level: 'error',
    platform: 'node',
    message: 'API server failure',
    environment: event.environment,
    release: event.release,
    tags: { status: event.tags?.status, requestId: event.tags?.requestId },
    fingerprint: ['api-server-error', String(event.tags?.status || 500)],
  };
}
export function initMonitoring(env = process.env) {
  if (!env.SENTRY_DSN) return;
  Sentry.init({
    dsn: env.SENTRY_DSN, environment: env.APP_ENV || 'development', release: env.APP_RELEASE,
    sendDefaultPii: false, defaultIntegrations: false, autoSessionTracking: false,
    tracesSampleRate: 0, beforeSend: safeEvent,
  });
}
export function reportServerError(status, requestId) {
  if (Sentry.isInitialized()) Sentry.captureEvent({ level: 'error', tags: { status, requestId } });
}
export const flushMonitoring = () => Sentry.flush(2000);
