import {z} from "zod";

export const studentSignupTypes= z.object({
    mobileNo: z.number().min(9),
    password: z.string().min(6)

})

export const studentLoginTypes=z.object({
    mobileNo: z.number().min(9),
    password: z.string().min(6)

})