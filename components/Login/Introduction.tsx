import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontText from "../common/FontText";

const Introduction = () => {
  return (
    <View className="justify-center gap-1">
      <FontText font="GongGothicLight" className="text-[36px]">
        오늘의
      </FontText>
      <View className="flex-row">
        <FontText font="GongGothicLight" className="text-[36px]">
          하루{" "}
        </FontText>
        <FontText font="GongGothic" className="text-[36px]">
          한 끼
        </FontText>
        <FontText font="GongGothicLight" className="text-[36px]">
          ,
        </FontText>
      </View>
      <View className="flex-row">
        <FontText font="GongGothic" className="text-[36px]">
          도시락{" "}
        </FontText>
        <FontText font="GongGothicLight" className="text-[36px]">
          어때요?
        </FontText>
      </View>
    </View>
  );
};

export default Introduction;
