import z from 'zod'

export const registerSchema = z.object({
    username: z.string().trim().min(4, "username minimum 4 letters").max(50),
    email: z.string().trim().email("should be email").max(100),
    password: z.string().min(4, "password minimum 4 letters").max(100),
})

export const loginSchema = z.object({
    email: z.string().trim().email("should be email").max(100),
    password: z.string().min(1, "password is required").max(100),
})

export const weatherSchema = z.object({
    tripId: z.coerce.number().int().positive().optional(),
    location: z.string().trim().max(200).optional().default(""),
    startDate: z.string().trim().max(50).optional().default(""),
    endDate: z.string().trim().max(50).optional().default(""),
    activities: z.array(z.object({
        date: z.string().max(50).optional().nullable(),
        time: z.string().max(50).optional().nullable(),
        location: z.string().max(200).optional().nullable(),
        type: z.string().max(50).optional().nullable(),
    }).passthrough()).max(200).optional().default([]),
})