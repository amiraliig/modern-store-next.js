// features/auth/components/register-form.tsx
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
import {
    registerSchema,
    type RegisterSchema,
} from "../schemas/register.schema";
import { useRegister } from "../hooks/use-register";

export function RegisterForm() {
    const router = useRouter();
    const registerMutation = useRegister();

    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        mode: "onSubmit",
    });

    function onSubmit(values: RegisterSchema) {
        const { confirmPassword, ...payload } = values;

        registerMutation.mutate(payload, {
            onSuccess: () => {
                toast.success("حساب کاربری با موفقیت ساخته شد");
                router.push("/");
            },
            onError: () => {
                toast.error("ثبت‌نام ناموفق بود");
            },
        });
    }

    const isPending = registerMutation.isPending;

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FieldGroup>
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>نام</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                placeholder="مثلاً Amirali"
                                autoComplete="name"
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
                                placeholder="حداقل ۸ کاراکتر"
                                autoComplete="new-password"
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
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>تکرار رمز عبور</FieldLabel>

                            <PasswordInput
                                {...field}
                                id={field.name}
                                placeholder="رمز عبور را دوباره وارد کنید"
                                autoComplete="new-password"
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
                ساخت حساب
            </Button>
        </form>
    );
}