import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import FontText from "../common/FontText";
import LoginFooter from "./LoginFooter";

const MENUITEM = ["아이디 찾기", "비밀번호 찾기", "회원가입"];

const SNSLogin = () => {
  return (
    <View className="items-center gap-y-4">
      <FontText className="text-gray700">SNS 계정으로 간편 로그인하기</FontText>
      <View className="flex-row gap-x-6">
        <TouchableOpacity className="rounded-full">
          <Image
            className="h-14 w-14"
            source={require("../../assets/images/kakao.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full">
          <Image
            className="h-14 w-14"
            source={require("../../assets/images/naver.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full">
          <Image
            className="h-14 w-14"
            source={require("../../assets/images/instagram.png")}
          />
        </TouchableOpacity>
      </View>
      <LoginFooter />
    </View>
  );
};

export default SNSLogin;
