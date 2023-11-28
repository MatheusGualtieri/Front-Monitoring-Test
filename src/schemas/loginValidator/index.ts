import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().max(120).email("Must be an email"),
  password: z.string().nonempty("Password is required"),
});

export type TLogin = z.infer<typeof loginSchema>;
