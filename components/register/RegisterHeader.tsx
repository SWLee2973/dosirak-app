import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontText from "../common/FontText";

const RegisterHeader = () => {
  return (
    <View className="items-center justify-center py-4">
      <TouchableOpacity className="absolute left-4">
        <Image
          className="h-6 w-6"
          source={require("@/assets/images/prev.png")}
        />
      </TouchableOpacity>
      <FontText font="GongGothicLight" className="text-[20px]">
        회원가입
      </FontText>
    </View>
  );
};

export default RegisterHeader;
