import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import RegisterProgressInfo from "./RegisterProgressInfo";
import FormInput from "../common/FormInput";
import { Control } from "react-hook-form";
import { IRegisterInfo } from "@/app/register";

type TProps = {
  step: number;
  control: Control<any, any>;
};

const RegisterStepTwo = ({ step, control }: TProps) => {
  const loader = useRef(new Animated.Value(0)).current;

  const load = () => {
    Animated.timing(loader, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  const unLoad = () => {
    Animated.timing(loader, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (step === 1) {
      load();
    } else if (step === 0 || step === 2) {
      unLoad();
    }
  }, [step]);

  return (
    <Animated.View
      style={{ opacity: loader }}
      className="absolute left-9 top-16 w-full"
    >
      <RegisterProgressInfo
        step={step}
        information="휴대폰 번호를"
        additionalText="알려주세요."
      />
      <View className="mt-12 flex-1 justify-center">
        <FormInput<IRegisterInfo>
          control={control}
          name="phone"
          label="휴대폰 번호"
          placeholder="휴대폰 번호 입력"
          containerStyle="gap-y-1"
          labelStyle="text-[17px] font-[NotoSansBold] text-primary"
          inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
        />
        <FormInput<IRegisterInfo>
          control={control}
          name="authCode"
          label="휴대폰 인증"
          placeholder="인증 번호 입력"
          containerStyle="gap-y-1 mt-6"
          labelStyle="text-[17px] font-[NotoSansBold] text-primary"
          inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
        />
      </View>
    </Animated.View>
  );
};

export default RegisterStepTwo;
