import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { setAccessToken } from "@/lib/auth-token";
import { useAuthStore } from "@/stores/auth.store";

export function useRegister() {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setUser(data.user);
    },
  });
}