import authStore from "@/store/authStore";
import { dayjsExtend } from "@/utils";
import dayjs from "dayjs";
import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

dayjsExtend();

const index = () => {
  const { isInitialized, isLoggedIn } = authStore((state) => ({
    isInitialized: state.isInitialized,
    isLoggedIn: state.isLoggedIn,
  }));

  const router = useRouter();
  const segments = useSegments();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!isInitialized || !navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isLoggedIn && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (isLoggedIn) {
      router.replace("/(tabs)/home");
    }
  }, [segments, navigationState?.key, isInitialized]);

  return (
    <View className="flex-1 items-center justify-start">
      {!navigationState.key ? <ActivityIndicator /> : <></>}
    </View>
  );
};

export default index;
