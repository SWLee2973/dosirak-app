import GroupHeader from "@/components/group/GroupHeader";
import clsx from "clsx";
import { Navigator, Slot } from "expo-router";
import React from "react";
import { Platform, SafeAreaView } from "react-native";

export const unstable_settings = {
  initialRouteName: "popular",
};

const GroupLayout = () => {
  return (
    <SafeAreaView
      className={clsx("bg-white", {
        "pt-10": Platform.OS === "android",
      })}
    >
      <Navigator>
        <GroupHeader />
        <Slot />
      </Navigator>
    </SafeAreaView>
  );
};

export default GroupLayout;
