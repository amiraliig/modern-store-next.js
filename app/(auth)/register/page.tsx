import { AuthShell } from "@/features/auth/components/auth-shell";
import { AuthCard } from "@/features/auth/components/auth-card";
import { RegisterForm } from "@/features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <AuthShell>
      <AuthCard
        title="ساخت حساب کاربری"
        description="یک حساب بسازید و خرید خود را سریع‌تر مدیریت کنید."
        footerText="قبلاً حساب ساخته‌اید؟"
        footerLinkText="وارد شوید"
        footerHref="/login"
      >
        <RegisterForm />
      </AuthCard>
    </AuthShell>
  );
}