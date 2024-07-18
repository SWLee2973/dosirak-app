import React from "react";
import { TouchableOpacity, View } from "react-native";
import FontText from "../common/FontText";
import { router } from "expo-router";

const LoginFooter = () => {
  const moveRegister = () => {
    router.push("/register");
  };

  return (
    <View className="flex-row gap-x-4 pt-6">
      <TouchableOpacity className="justify-center">
        <FontText className="text-[12px] text-gray700">아이디 찾기</FontText>
      </TouchableOpacity>
      <View className="border-[0.5px] border-gray700" />
      <TouchableOpacity className="justify-center">
        <FontText className="text-[12px] text-gray700">비밀번호 찾기</FontText>
      </TouchableOpacity>
      <View className="border-[0.5px] border-gray700" />
      <TouchableOpacity className="justify-center" onPress={moveRegister}>
        <FontText className="text-[12px] text-gray700">회원가입 하기</FontText>
      </TouchableOpacity>
    </View>
  );
};

export default LoginFooter;
