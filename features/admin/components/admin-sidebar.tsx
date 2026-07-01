"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Home,
  Package,
  ShoppingBag,
  Users,
  Tags,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const items = [
  { title: "داشبورد", href: "/admin", icon: Home },
  { title: "محصولات", href: "/admin/products", icon: Package },
  { title: "سفارش‌ها", href: "/admin/orders", icon: ShoppingBag },
  { title: "مشتریان", href: "/admin/customers", icon: Users },
  { title: "دسته‌بندی‌ها", href: "/admin/categories", icon: Tags },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen border-l bg-background flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-72"
      )}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-3 border-b">
        {!collapsed && (
          <div>
            <h2 className="text-sm font-bold">پنل مدیریت</h2>
            <p className="text-xs text-muted-foreground">فروشگاه</p>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="hover:bg-muted md:hidden "
        >
          {collapsed ? (
            <ChevronsRight className="size-4" />
          ) : (
            <ChevronsLeft className="size-4" />
          )}
        </Button>
      </div>

      {/* MENU */}
      <TooltipProvider>
        <nav className="flex flex-col gap-1 p-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            const btn = (
              <Link href={item.href} className="relative">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 h-11 relative transition-all",
                    collapsed && "justify-center px-0",
                    active && "bg-muted font-medium"
                  )}
                >
                  <Icon className="size-4 shrink-0" />

                  {!collapsed && item.title}

                  {/* Active indicator */}
                  {active && (
                    <span className="absolute right-0 top-2 h-7 w-1 rounded-full bg-primary" />
                  )}
                </Button>
              </Link>
            );

            if (collapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{btn}</TooltipTrigger>
                  <TooltipContent side="left">
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              );
            }

            return btn;
          })}
        </nav>
      </TooltipProvider>

      {/* FOOTER */}
      <div className="mt-auto p-3 border-t">
        {!collapsed ? (
          <div className="rounded-lg bg-muted p-3 text-xs text-muted-foreground">
           
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="size-2 rounded-full bg-orange-500" />
          </div>
        )}
      </div>
    </aside>
  );
}