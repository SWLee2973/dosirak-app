import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import Splash from "@/components/common/Splash";
import authStore, { IAuthStore } from "@/store/authStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    GongGothic: require("../assets/fonts/gong-gothic.ttf"),
    GongGothicLight: require("../assets/fonts/gong-gothic-light.ttf"),
    Pretendard: require("../assets/fonts/pretendard.ttf"),
  });

  const [appLoaded, setAppLoaded] = useState(false);
  const { isLoggedIn } = authStore<IAuthStore>((state) => state);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(false);
    }, 3500);
  }, []);

  return appLoaded || !loaded ? (
    <Splash />
  ) : isLoggedIn ? (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  ) : (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
