import { z } from 'zod';

const userSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const todoSchema = z.object({
    title: z.string(),
    description: z.string()
})

export { userSchema, todoSchema };