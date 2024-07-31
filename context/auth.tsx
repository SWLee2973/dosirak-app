import { IRegisterInfo } from "@/app/(auth)/register";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import authStore, { IAuthStore } from "@/store/authStore";
import pbStore from "@/store/pbStore";
import { useEffect, useState } from "react";

type TProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: TProps) {
  const {
    user,
    isInitialized,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setIsInitialized,
  } = authStore<IAuthStore>((state) => state);
  // const pb = usePocketBase();
  const pb = pbStore((state) => state.pb);

  useEffect(() => {
    const checkAuthStatus = async () => {
      if (pb) {
        const isLoggedIn = pb.authStore.isValid;

        setIsLoggedIn(isLoggedIn);
        setUser(isLoggedIn ? pb.authStore.model : null);
        setIsInitialized(true);
      }
    };

    checkAuthStatus();
  }, [pb]);

  useProtectedRoute(user, isInitialized);

  return <>{children}</>;
}
