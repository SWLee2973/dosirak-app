import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { RouteNames } from "@/types/navigation";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";

const tabLayout = () => {
  return (
    <Tabs
      screenOptions={(options) => ({
        headerShown: false,
        tabBarActiveTintColor: "#145044",
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            name={options.route.name as RouteNames}
            color={color}
            focused={focused}
          />
        ),
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        unmountOnBlur: true,
      })}
      initialRouteName={RouteNames.HOME}
    >
      <Tabs.Screen name={RouteNames.HOME} />
      <Tabs.Screen name={RouteNames.GROUP} />
      <Tabs.Screen name={RouteNames.FEED} />
      <Tabs.Screen name={RouteNames.MYPAGE} />
    </Tabs>
  );
};

export default tabLayout;

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === "ios" ? 100 : 80,
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
