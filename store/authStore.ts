import { IRegisterInfo } from "@/app/(auth)/register";
import Client, { AuthModel, RecordModel } from "pocketbase";
import { create } from "zustand";

export interface IAuthStore {
  user: AuthModel | null;
  isLoggedIn: boolean;
  isInitialized: boolean;

  setUser: (user: AuthModel) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setIsInitialized: (isInitialized: boolean) => void;

  logIn: (
    pb: Client,
    username: string,
    password: string,
  ) => Promise<{ user: RecordModel } | { error: unknown }>;
  logOut: (pb: Client) => { user: null } | { error: unknown };
  register: (
    pb: Client,
    { name, phone, username, password, passwordConfirm }: IRegisterInfo,
  ) => Promise<{ user: RecordModel } | { error: unknown }>;
}

const authStore = create<IAuthStore>((set) => ({
  user: null,
  isLoggedIn: false,
  isInitialized: false,

  setUser: (user: AuthModel) => set({ user }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setIsInitialized: (isInitialized: boolean) => set({ isInitialized }),

  logIn: async (pb: Client, username: string, password: string) => {
    if (!pb) return { error: "PocketBase를 초기화하는데 문제가 발생했습니다." };

    try {
      const response = await pb
        .collection("users")
        .authWithPassword(username, password);

      set({
        user: pb.authStore.isValid ? pb.authStore.model : null,
        isLoggedIn: pb.authStore.isValid ?? false,
      });

      return { user: response?.record };
    } catch (error) {
      return { error };
    }
  },
  logOut: (pb: Client) => {
    try {
      pb.authStore.clear();
      set({ user: null, isLoggedIn: false });

      return { user: null };
    } catch (error) {
      return { error };
    }
  },
  register: async (
    pb: Client,
    { name, phone, username, password, passwordConfirm }: IRegisterInfo,
  ) => {
    try {
      const response = await pb.collection("users").create({
        username,
        password,
        passwordConfirm,
        phone,
        name,
      });

      return { user: response };
    } catch (error) {
      return { error };
    }
  },
}));

export default authStore;
