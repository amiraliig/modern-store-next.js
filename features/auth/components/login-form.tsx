"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { PasswordInput } from "./password-input";
import { loginSchema, type LoginSchema } from "../schemas/login.schema";
import { useLogin } from "../hooks/use-login";

export function LoginForm() {
  const router = useRouter();
  const loginMutation = useLogin();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginSchema) {
    loginMutation.mutate(values, {
      onSuccess: (data) => {
        toast.success("با موفقیت وارد شدید");

        if (data.user.role === "admin") {
          router.push("/admin");
          return;
        }

        router.push("/");
      },
      onError: () => {
        toast.error("ایمیل یا رمز عبور اشتباه است");
      },
    });
  }

  const isPending = loginMutation.isPending;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>ایمیل</FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                disabled={isPending}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>رمز عبور</FieldLabel>

              <PasswordInput
                {...field}
                id={field.name}
                placeholder="••••••••"
                autoComplete="current-password"
                disabled={isPending}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="ml-2 size-4 animate-spin" />}
        ورود
      </Button>
    </form>
  );
}