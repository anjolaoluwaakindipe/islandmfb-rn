import { Schema, z } from "zod";

export const setProfileSchema = z
    .object({
        accountNumber: z
            .string({ required_error: "Account Number is required" })
            .length(10, "Account Number must be 10 digits"),
        password: z
            .string({ required_error: "Password is required" })
            .min(8, "Password must be more than 8 characters"),
        confirmPassword: z.string({
            required_error: "Confirm Password is required",
        }),
    })
    .refine((schema) => schema.password === schema.confirmPassword, {
        path: ["confirmPassword"],
        message: "Confirm Password must match password",
    });

export type SetProfileFormType = z.infer<typeof setProfileSchema>