import { useNavigationContainerRef, useRouter, useSegments } from "expo-router";
import { AuthModel } from "pocketbase";
import { useEffect, useState } from "react";

export const useProtectedRoute = (user: AuthModel, isInitialized: boolean) => {
  const router = useRouter();
  const segments = useSegments();

  const [isNavigationReady, setIsNavigationReady] = useState(false);
  const rootNavRef = useNavigationContainerRef();

  useEffect(() => {
    const unsubscribe = rootNavRef?.addListener("state", (event) => {
      setIsNavigationReady(true);
    });

    return function cleanup() {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [rootNavRef.current]);

  useEffect(() => {
    if (!isNavigationReady) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isInitialized) return;

    if (!user && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      router.replace("/(tabs)/");
    }
  }, [user, segments, isNavigationReady, isInitialized]);
};
