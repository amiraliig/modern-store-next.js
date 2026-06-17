import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمز عبور حداقل باید ۶ کاراکتر باشد"),
});

export type LoginSchema = z.infer<typeof loginSchema>;