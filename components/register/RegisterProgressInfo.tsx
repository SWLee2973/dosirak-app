import { View, Text, Platform } from "react-native";
import React from "react";
import FontText from "../common/FontText";
import WrappedText from "react-native-wrapped-text";

type TProps = {
  step: number;
  information: string;
  additionalText?: string;
};

const RegisterProgressInfo = ({
  step,
  information,
  additionalText,
}: TProps) => {
  return (
    <View className="gap-y-4">
      <View className="h-8 w-8 items-center justify-center rounded-full bg-primary">
        <FontText font="GongGothic" className="text-[16px] text-white">
          {step + 1}
        </FontText>
      </View>

      <View>
        <FontText font="GongGothicLight" className="text-[30px]">
          {information}
        </FontText>
        {additionalText && (
          <FontText font="GongGothicLight" className="text-[30px]">
            {additionalText}
          </FontText>
        )}
      </View>
    </View>
  );
};

export default RegisterProgressInfo;
