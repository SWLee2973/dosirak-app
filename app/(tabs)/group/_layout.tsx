import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Navigator, Slot, Stack } from "expo-router";
import GroupHeader, { TTabProps } from "@/components/group/GroupHeader";

export const unstable_settings = {
  initialRouteName: "popular",
};

const GroupLayout = () => {
  return (
    // <Stack
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    //   initialRouteName="popular"
    // >
    //   <Stack.Screen name="popular" />
    //   <Stack.Screen name="newgroup" />
    //   <Stack.Screen name="mygroup" />
    // </Stack>
    <SafeAreaView className="bg-white">
      <Navigator>
        <GroupHeader />
        <Slot />
      </Navigator>
    </SafeAreaView>
  );
};

export default GroupLayout;
