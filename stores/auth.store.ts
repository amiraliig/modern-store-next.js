import { create } from "zustand";
import type { User } from "../features/auth/types";

type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    isAuthReady: boolean;
    setUser: (user: User | null) => void;
    setAuthReady: (value: boolean) => void;
    resetAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isAuthReady: false,

    setUser: (user) =>
        set({
            user,
            isAuthenticated: Boolean(user),
        }),

    setAuthReady: (value) => set({ isAuthReady: value }),

    resetAuth: () =>
        set({
            user: null,
            isAuthenticated: false,
            isAuthReady: true,
        }),
}));