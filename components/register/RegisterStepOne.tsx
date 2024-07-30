import { View, Text, Animated, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useRef } from "react";
import RegisterProgressInfo from "./RegisterProgressInfo";
import FormInput from "../common/FormInput";
import { Control } from "react-hook-form";
import { IRegisterInfo } from "@/app/register";

type TProps = {
  step: number;
  control: Control<IRegisterInfo, any>;
  setIsDisableNext: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterStepOne = ({ step, control, setIsDisableNext }: TProps) => {
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
    if (step === 0) {
      load();
    } else if (step === 1) {
      unLoad();
    }
  }, [step]);

  const handleNameChange = (text: string) => {
    if (text.length > 0) {
      setIsDisableNext(false);
    } else setIsDisableNext(true);
  };

  return (
    <Animated.View
      style={{ opacity: loader, zIndex: step === 0 ? 10 : -1 }}
      className="absolute left-9 top-16 w-full"
    >
      <RegisterProgressInfo step={step} information="이름을 알려주세요." />
      <View className="mt-12 flex-1 justify-center">
        <FormInput<IRegisterInfo>
          control={control}
          name="name"
          label="이름"
          placeholder="이름 입력"
          containerStyle="gap-y-1"
          labelStyle="text-[17px] font-[NotoSansBold] text-primary"
          inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans]"
          onChangeText={handleNameChange}
        />
      </View>
    </Animated.View>
  );
};

export default RegisterStepOne;
