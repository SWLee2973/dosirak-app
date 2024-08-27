import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import FontText from "../common/FontText";
import Arrow from "@/assets/images/move-arrow.svg";
import { Link } from "expo-router";

type TProps = {
  name: String;
  type: "group" | "feed";
};

const MyCard = ({ name, type }: TProps) => {
  return (
    <Shadow
      startColor="rgba(171, 171, 171, 0.25)"
      distance={6}
      style={{ borderRadius: 15, width: "100%" }}
    >
      <Link href={`/${type}/my${type}`}>
        <View className="h-36 w-40 px-5 py-6">
          <FontText font="NotoSansBold" className="text-[17px]">
            {name}
          </FontText>
          <View className="mt-6 flex-row items-center justify-between">
            <View className="mt-2 flex-row items-center gap-x-1">
              <FontText font="GongGothic" className="text-[26px]">
                2
              </FontText>
              <FontText className="text-[15px]">
                개의 {type === "feed" ? "게시글" : "모임"}
              </FontText>
            </View>
            <Arrow className="mt-2.5" />
          </View>
        </View>
      </Link>
    </Shadow>
  );
};

export default MyCard;
