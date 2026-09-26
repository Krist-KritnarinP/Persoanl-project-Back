import nodemailer from 'nodemailer';

let cachedTransport;

export function isPasswordResetMailConfigured(env = process.env) {
  return ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM'].every(key => Boolean(env[key]));
}

export async function sendPasswordResetEmail({ to, resetUrl }) {
  if (!isPasswordResetMailConfigured()) throw new Error('MAIL_NOT_CONFIGURED');
  const port = Number(process.env.SMTP_PORT);
  cachedTransport ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: { minVersion: 'TLSv1.2' },
  });
  await cachedTransport.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: 'Reset your AI LHOUNG password',
    text: `Use this one-time link to reset your password. It expires in 30 minutes:\n\n${resetUrl}\n\nIf you did not request this, you can ignore this email.`,
    html: `<p>Use this one-time link to reset your AI LHOUNG password. It expires in 30 minutes.</p><p><a href="${resetUrl}">Reset password</a></p><p>If you did not request this, you can ignore this email.</p>`,
  });
}
