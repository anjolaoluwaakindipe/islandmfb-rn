import { z } from 'zod';
export const verificationSchema = z.object({
    verificationPin: z.string({required_error:"Pin is required"}).length(4, "Pin must be exactly 4 digits")
})

export type VerificationFormType = z.infer<typeof verificationSchema>