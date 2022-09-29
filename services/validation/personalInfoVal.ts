import { Schema, z } from "zod";

export const personalInfoSchema = z
    .object({
        firstName: z.string({
            required_error: " Please input your First Name"
        }),
        lastName: z.string({
            required_error: "Please Input your Last Name"
        }),
        email: z
            .string({
                required_error: "Your Email is required",
            })
            .email({ message: "Must be a valid email address" }),

        gender: z.string({
            required_error: "Please Input Your Gender"
        }),

        dob: z.string({
            required_error: " Please Input Your Gender"
        })

    })

export type personalInfoFormType = z.infer<typeof personalInfoSchema>