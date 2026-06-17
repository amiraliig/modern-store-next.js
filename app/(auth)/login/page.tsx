
import { AuthShell } from "@/features/auth/components/auth-shell";
import { AuthCard } from "@/features/auth/components/auth-card";
import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <AuthShell>
      <AuthCard
        title="ورود به حساب"
        description="برای ادامه خرید و مشاهده سفارش‌ها وارد شوید."
        footerText="حساب کاربری ندارید؟"
        footerLinkText="ثبت‌نام کنید"
        footerHref="/register"
      >
        <LoginForm />
      </AuthCard>
    </AuthShell>
  );
}