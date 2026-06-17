// features/auth/components/auth-shell.tsx
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

type AuthShellProps = {
  children: React.ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden border-l bg-muted/30 lg:flex lg:flex-col lg:justify-between lg:p-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ShoppingBag className="size-5" />
            </div>

            <div>
              <p className="text-lg font-semibold">Modern Store</p>
              <p className="text-sm text-muted-foreground">
                فروشگاه مدرن آنلاین
              </p>
            </div>
          </Link>

          <div className="max-w-md space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              وارد حساب کاربری خود شوید.
            </h1>

            <p className="text-base leading-7 text-muted-foreground">
              سفارش‌ها، سبد خرید، پروفایل و پنل مدیریت از همین بخش در دسترس هستند.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            ساخته شده با Next.js، Tailwind CSS و shadcn/ui.
          </p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-4 py-10">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  );
}