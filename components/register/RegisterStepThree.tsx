import {
  View,
  Text,
  Animated,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import RegisterProgressInfo from "./RegisterProgressInfo";
import FormInput from "../common/FormInput";
import { Control } from "react-hook-form";
import { IRegisterInfo } from "@/app/register";
import FontText from "../common/FontText";
import RegisterInfoCheckButton from "./RegisterInfoCheckButton";

type TProps = {
  step: number;
  control: Control<IRegisterInfo, any>;
};

const RegisterStepThree = ({ step, control }: TProps) => {
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
    if (step === 2) {
      load();
    } else if (step === 1 || step === 3) {
      unLoad();
    }
  }, [step]);

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleLoginInfo = (key: keyof typeof loginInfo) => (text: string) => {
    setLoginInfo({ ...loginInfo, [key]: text });
  };

  const handleCheckDuplicate = () => {
    // setAuthState({ ...authState, isCodeSent: true });
  };

  return (
    <Animated.View
      style={{ opacity: loader, zIndex: step === 2 ? 10 : -1 }}
      className="absolute left-9 top-16 w-full"
    >
      <RegisterProgressInfo
        step={step}
        information="사용할 아이디와"
        additionalText="비밀번호를 알려주세요."
      />
      <View className="mt-12 flex-1 justify-center">
        <View className="relative">
          <FormInput<IRegisterInfo>
            control={control}
            name="username"
            label="아이디"
            placeholder="아이디 입력"
            containerStyle="gap-y-1"
            labelStyle="text-[17px] font-[NotoSansBold] text-primary"
            inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
            onChangeText={handleLoginInfo("username")}
          />
          <RegisterInfoCheckButton
            enabled={loginInfo.username.length > 0}
            location="bottom-1.5 right-0"
            innerText="중복 확인"
            onPress={handleCheckDuplicate}
          />
        </View>
        <View className="relative mt-3">
          <FormInput<IRegisterInfo>
            secureTextEntry
            control={control}
            name="password"
            label="비밀번호"
            placeholder="비밀번호 입력"
            containerStyle="gap-y-1"
            labelStyle="text-[17px] font-[NotoSansBold] text-primary"
            inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
            eyeButtonStyle="absolute right-2 bottom-3"
            onChangeText={handleLoginInfo("password")}
          />
        </View>
        <View className="relative mt-3">
          <FormInput<IRegisterInfo>
            secureTextEntry
            control={control}
            name="passwordConfirm"
            label="비밀번호 확인"
            placeholder="비밀번호 입력"
            containerStyle="gap-y-1"
            labelStyle="text-[17px] font-[NotoSansBold] text-primary"
            inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
            eyeButtonStyle="absolute right-2 bottom-3"
            onChangeText={handleLoginInfo("passwordConfirm")}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default RegisterStepThree;
