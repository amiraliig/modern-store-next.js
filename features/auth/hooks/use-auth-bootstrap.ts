"use client";

import { useEffect } from "react";
import { authApi } from "../api/auth.api";
import { setAccessToken } from "@/lib/auth-token";
import { useAuthStore } from "@/stores/auth.store";

export function useAuthBootstrap() {
  const setUser = useAuthStore((state) => state.setUser);
  const setAuthReady = useAuthStore((state) => state.setAuthReady);
  const resetAuth = useAuthStore((state) => state.resetAuth);

  useEffect(() => {
    let isMounted = true;

    async function bootstrap() {
      try {
        const data = await authApi.refresh();

        if (!isMounted) return;

        setAccessToken(data.accessToken);
        setUser(data.user);
      } catch {
        if (!isMounted) return;

        setAccessToken(null);
        resetAuth();
      } finally {
        if (isMounted) {
          setAuthReady(true);
        }
      }
    }

    bootstrap();

    return () => {
      isMounted = false;
    };
  }, [setUser, setAuthReady, resetAuth]);
}