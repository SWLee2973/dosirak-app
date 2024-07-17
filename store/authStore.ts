import { TUser } from "@/types/user";
import { create } from "zustand";

export interface IAuthStore {
  user: null | TUser;
  isLoggedIn: boolean;
  setUser: (user: TUser) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const authStore = create<IAuthStore>((set) => ({
  user: {} as TUser,
  isLoggedIn: false,

  setUser: (user: TUser) => set({ user }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));

export default authStore;
