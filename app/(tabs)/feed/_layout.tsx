// import GroupHeader from "@/components/group/GroupHeader";
import FeedHeader from "@/components/feed/FeedHeader";
import clsx from "clsx";
import { Navigator, Slot } from "expo-router";
import React from "react";
import { Platform, SafeAreaView } from "react-native";

export const unstable_settings = {
  initialRouteName: "newfeed",
};

const FeedLayout = () => {
  return (
    <SafeAreaView
      className={clsx("bg-white", {
        "pt-10": Platform.OS === "android",
      })}
    >
      <Navigator>
        <FeedHeader />
        <Slot />
      </Navigator>
    </SafeAreaView>
  );
};

export default FeedLayout;
