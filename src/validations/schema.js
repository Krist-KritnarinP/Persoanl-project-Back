import z from 'zod'

export const registerSchema = z.object({
    username: z.string().min(4, "username minimum 4 letters"),
    email: z.string().email("should be email"),
    password: z.string(),
    
})

export const loginSchema = z.object({
    email: z.string().email("should be email"),
    password: z.string(),
})