import {z} from 'zod';

export const workerSignUp=z.object({
    mobileNo: z.number().min(9),
    password: z.string().min(6)
})

export const workerLogin= z.object({
    mobileNo: z.number().min(9),
    password: z.string().min(6)
})