import { View, Text } from "react-native";
import React from "react";
import Chat from "@/assets/images/chat.svg";
import FontText from "../common/FontText";
import Heart from "@/assets/images/heart-fill.svg";
import authStore from "@/store/authStore";

const LikeStatus = () => {
  const user = authStore((state) => state.user);

  return (
    <View className="relative mt-28 px-9">
      <Chat className="absolute left-9" />
      <View className="px-5 py-4">
        <FontText font="NotoSansBold" className="text-[17px] text-white">
          이번 달, {user?.nickname}님은
        </FontText>
        <View className="relative mt-2 flex-row items-center gap-x-2">
          <Heart />
          <FontText font="GongGothic" className="mt-1 text-[20px] text-white">
            48개의 좋아요를 받았어요
          </FontText>
        </View>
      </View>
    </View>
  );
};

export default LikeStatus;
