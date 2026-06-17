"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";

type AuthGuardProps = {
    children: React.ReactNode;
};

export function AuthGuard({ children }: AuthGuardProps) {
    const router = useRouter();

    const isAuthReady = useAuthStore((state) => state.isAuthReady);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    useEffect(() => {
        if (isAuthReady && !isAuthenticated) {
            router.replace("/login");
        }
    }, [isAuthReady, isAuthenticated, router]);

    if (!isAuthReady) {
        return <div>Loading session...</div>;
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}