// src/features/auth/api/auth.api.ts
import { apiClient } from "@/lib/api-client";
import type { AuthResponse, LoginInput, RegisterInput, User } from "../types";

export const authApi = {
    login: async (data: LoginInput) => {
        const res = await apiClient.post<AuthResponse>("/auth/login", data);
        return res.data;
    },

    register: async (data: RegisterInput) => {
        const res = await apiClient.post<AuthResponse>("/auth/register", data);
        return res.data;
    },

    refresh: async () => {
        const res = await apiClient.post<AuthResponse>("/auth/refresh");
        return res.data;
    },

    me: async () => {
        const res = await apiClient.get<{ user: User }>("/auth/me");
        return res.data.user;
    },

    logout: async () => {
        const res = await apiClient.post<{ message: string }>("/auth/logout");
        return res.data;
    },
};