import createError from 'http-errors';

export function configuredModels(env = process.env) {
  const primary = env.GEMINI_MODEL?.trim();
  const fallback = env.GEMINI_FALLBACK_MODEL?.trim();
  if (!primary) throw createError(503, 'AI model is not configured');
  return [...new Set([primary, fallback].filter(Boolean))];
}

// Each provider attempt consumes durable quota, including the fallback.
// Never retry authentication, permission, quota, timeout or invalid-input errors.
export async function generateWeather(ai, contents, { models = configuredModels(), reserve, now = Date.now } = {}) {
  const deadline = now() + 25000;
  for (let i = 0; i < models.length; i++) {
    if (now() >= deadline) throw createError(504, 'AI request timed out');
    await reserve();
    try {
      const response = await ai.models.generateContent({
        model: models[i], contents,
        config: { maxOutputTokens: 1500, httpOptions: { timeout: Math.max(1, deadline - now()) } },
      });
      if (!response.text?.trim()) throw createError(502, 'AI returned an empty response');
      return { response, model: models[i] };
    } catch (error) {
      const status = Number(error.status ?? error.code);
      if (i + 1 >= models.length || ![404, 503].includes(status)) throw error;
    }
  }
}
