import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontText from "../common/FontText";
import { Shadow } from "react-native-shadow-2";
import Refresh from "@/assets/images/refresh.svg";
import authStore from "@/store/authStore";

const Recommend = () => {
  const user = authStore((state) => state.user);

  return (
    <View className="h-64 rounded-b-[40px] bg-primary px-9 pt-10">
      <FontText font="NotoSansBold" className="text-[17px] text-white">
        반가워요 {user?.nickname}님!
      </FontText>
      <FontText font="GongGothic" className="mb-7 mt-2 text-[26px] text-white">
        오늘은 이런 도시락 어때요?
      </FontText>
      <Shadow
        startColor="rgba(171, 171, 171, 0.25)"
        distance={6}
        style={{ width: "100%", borderRadius: 15 }}
      >
        <View className="relative h-48 w-full flex-row items-center rounded-[15px] bg-white p-5">
          <Image
            source={require("@/assets/images/tuna.png")}
            className="h-36 w-36 rounded-[15px]"
          />
          <View className="flex-1 px-5">
            <FontText
              font="NotoSansBold"
              className="pb-3 text-[17px] text-primary"
            >
              참치마요 샐러드
            </FontText>
            <FontText className="flex-wrap text-[13px]">
              참치캔 150g, 양파 1/4개 파프리카 1/4개, 레몬즙 1큰술, 설탕
              1작은술, 마요네즈 3큰술, 후추가루
            </FontText>
          </View>
          <TouchableOpacity className="absolute bottom-5 right-5">
            <Refresh />
          </TouchableOpacity>
        </View>
      </Shadow>
    </View>
  );
};

export default Recommend;
