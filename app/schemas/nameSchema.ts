import { z } from "zod";

export const nameValidationSchema = z.object({
    firstName: z.string().min(2, "Please enter a first name longer than 2 characters").regex(/^[a-zA-Z\s]*$/, "First name should not contain special characters or numbers"),
    lastName: z.string().min(2, "Please enter a first name longer than 2 characters").regex(/^[a-zA-Z\s]*$/, "Last name should not contain special characters or numbers"),
})