// src/features/auth/schemas/register.schema.ts
import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "نام حداقل باید ۲ کاراکتر باشد")
      .max(50, "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"),

    email: z.string().trim().email("ایمیل معتبر نیست"),

    password: z
      .string()
      .min(8, "رمز عبور حداقل باید ۸ کاراکتر باشد")
      .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
      .regex(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
      .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "تکرار رمز عبور با رمز عبور یکسان نیست",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;