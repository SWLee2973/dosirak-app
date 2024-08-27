import HomeHeader from "@/components/home/HomeHeader";
import LikeStatus from "@/components/home/LikeStatus";
import MyCard from "@/components/home/MyCard";
import Recommend from "@/components/home/Recommend";
import React from "react";
import { Platform, SafeAreaView, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView
      className="bg-white"
      style={{ paddingTop: Platform.OS === "ios" ? 0 : 40 }}
    >
      <HomeHeader />
      <View className="h-full bg-white">
        <Recommend />
        <LikeStatus />
        <View className="mt-10 w-full flex-row justify-between px-9">
          <MyCard name="내 모임" type="group" />
          <MyCard name="내 피드" type="feed" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
