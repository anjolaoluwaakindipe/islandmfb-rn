import { Schema, z } from "zod";

export const createYourAccountSchema = z
    .object({
        bvn: z
            .string({ required_error: "Your BVN is required" })
            .length(11, "Your BVN must be 11 digits"),
        phoneNumber: z.string({
            required_error: "Your phone number is required",
        }),
        email: z
            .string({
                required_error: "Your Email is required",
            })
            .email({ message: "Must be a valid email address" }),
    })
    .refine((schema) => schema.phoneNumber, {
        path: ["phoneNumber"],
        message: "Must be a valid phone number",
    });

export type CreateYourAccountFormType = z.infer<typeof createYourAccountSchema>;
