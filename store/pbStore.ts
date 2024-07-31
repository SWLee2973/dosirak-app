import AsyncStorage from "@react-native-async-storage/async-storage";
import PocketBase, { AsyncAuthStore } from "pocketbase";
import { create } from "zustand";

interface IPbStore {
  pb: PocketBase | null;
  initializePocketBase: () => void;
}

const pbStore = create<IPbStore>((set) => ({
  pb: null,
  initializePocketBase: async () => {
    const store = new AsyncAuthStore({
      save: async (serialized) => AsyncStorage.setItem("pb_auth", serialized),
      initial: (await AsyncStorage.getItem("pb_auth")) ?? undefined,
      clear: async () => AsyncStorage.removeItem("pb_auth"),
    });

    const pbInstance = new PocketBase(process.env.PB_URL, store);

    set({ pb: pbInstance });
  },
}));

export default pbStore;
