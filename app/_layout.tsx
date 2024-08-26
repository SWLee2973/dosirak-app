import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import Splash from "@/components/common/Splash";
import authStore, { IAuthStore } from "@/store/authStore";
import { Platform, StatusBar } from "react-native";
import pbStore from "@/store/pbStore";
import { AuthProvider } from "@/context/auth";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const initializePocketBase = pbStore((state) => state.initializePocketBase);
  const [loaded] = useFonts({
    GongGothic: require("../assets/fonts/gong-gothic.ttf"),
    GongGothicLight: require("../assets/fonts/gong-gothic-light.ttf"),
    Pretendard: require("../assets/fonts/pretendard.ttf"),
    NotoSans: require("../assets/fonts/NotoSansKR-Regular.ttf"),
    NotoSansBold: require("../assets/fonts/NotoSansKR-Bold.ttf"),
    NotoSansExtraBold: require("../assets/fonts/NotoSansKR-ExtraBold.ttf"),
  });

  const [appLoaded, setAppLoaded] = useState(false);

  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("white");
  }

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(false);
    }, 3500);
  }, []);

  useEffect(() => {
    initializePocketBase();
  }, [initializePocketBase]);

  return appLoaded || !loaded ? <Splash /> : <RootLayoutNav />;
}

function RootLayoutNav() {
  // const { isLoggedIn } = authStore<IAuthStore>((state) => state);

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  );
}
