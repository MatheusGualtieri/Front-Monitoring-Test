import { z } from "zod";
import { DeepPartial } from "react-hook-form";

export const userSchema = z.object({
  id: z.number(),
  username: z.string().nonempty("Full Name is required"),
  name: z.string().nonempty("Full Name is required"),
  email: z.string().max(120).email("Must be an email"),
  password: z.string().nonempty("Password is required").or(z.literal("")),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  contacts: true,
});

export const userSchemaUpdate2 = z
  .object({
    username: z.string().nonempty("Full Name is required"),
    name: z.string().nonempty("Full Name is required"),
    email: z.string().max(120).email("Must be an email"),
    password: z.string().nonempty("Password is required").or(z.literal("")),
  })
  .partial();

export const userSchemaResponse = userSchema.omit({ password: true });

export const userSchemaUpdate = userSchemaRequest.partial();

export type TUser = z.infer<typeof userSchema>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TUserUpdate = DeepPartial<TUserRequest>;
