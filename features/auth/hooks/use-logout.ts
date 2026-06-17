import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { setAccessToken } from "@/lib/auth-token";
import { useAuthStore } from "@/stores/auth.store";

export function useLogout() {
    const queryClient = useQueryClient();
    const resetAuth = useAuthStore((state) => state.resetAuth);

    return useMutation({
        mutationFn: authApi.logout,
        onSuccess: () => {
            setAccessToken(null);
            resetAuth();
            queryClient.clear();
        },
    });
}