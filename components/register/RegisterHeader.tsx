import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontText from "../common/FontText";
import { useNavigation } from "expo-router";

const RegisterHeader = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View className="items-center justify-center py-4">
      <TouchableOpacity className="absolute left-4" onPress={handleBack}>
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
