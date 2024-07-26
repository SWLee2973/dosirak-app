import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontText from "../common/FontText";
import CheckFalse from "@/assets/images/check_false.svg";
import CheckTrue from "@/assets/images/check_true.svg";

type TProps = {
  onPress: () => void;
  checkState: boolean;
  label: string;
};

const RegisterCheckBox = ({ onPress, checkState, label }: TProps) => {
  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center gap-x-4"
      >
        {checkState ? <CheckTrue /> : <CheckFalse />}
        <FontText
          style={{ fontSize: 16 }}
          className={checkState ? "text-primary" : "text-gray500"}
        >
          {label}
        </FontText>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontText style={{ fontSize: 16 }}>보기</FontText>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterCheckBox;
