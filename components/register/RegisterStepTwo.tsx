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
  setIsDisableNext: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterStepTwo = ({ step, control, setIsDisableNext }: TProps) => {
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

  const [authState, setAuthState] = useState({
    isAvailPhoneNumber: false,
    isCodeSent: false,
    authCode: "",
    isCodeEntered: false,
    isAuthCodeChecked: false,
  });

  const handlePhoneNumber = (text: string) => {
    if (text.match(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/)) {
      setAuthState({ ...authState, isAvailPhoneNumber: true });
    } else setAuthState({ ...authState, isAvailPhoneNumber: false });
  };

  const handleSendCode = () => {
    setAuthState({ ...authState, isCodeSent: true });
  };

  const handleConfirmAuthCode = (text: string) => {
    console.log("text : ", text.length);
    console.log("authState : ", authState);
    if (text.length > 0) {
      setAuthState({ ...authState, authCode: text, isCodeEntered: true });
    } else setAuthState({ ...authState, authCode: text, isCodeEntered: false });

    // setAuthState({ ...authState, authCode: text });
  };

  const handleCheckAuthCode = () => {
    if (authState.authCode === "1111") {
      setIsDisableNext(false);
      setAuthState({ ...authState, isAuthCodeChecked: true });
    }
  };

  useEffect(() => {
    if (step === 1 && authState.isAvailPhoneNumber && authState.isCodeSent) {
      setIsDisableNext(false);
    }
  }, [step]);

  return (
    <Animated.View
      style={{ opacity: loader, zIndex: step === 1 ? 10 : -1 }}
      className="absolute left-9 top-16 w-full"
    >
      <RegisterProgressInfo
        step={step}
        information="휴대폰 번호를"
        additionalText="알려주세요."
      />
      <View className="mt-12 flex-1 justify-center">
        <View className="relative">
          <FormInput<IRegisterInfo>
            control={control}
            name="phone"
            label="휴대폰 번호"
            placeholder="휴대폰 번호 입력"
            containerStyle="gap-y-1"
            labelStyle="text-[17px] font-[NotoSansBold] text-primary"
            inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
            onChangeText={handlePhoneNumber}
          />
          <RegisterInfoCheckButton
            enabled={authState.isAvailPhoneNumber}
            location="bottom-1.5 right-0"
            innerText="인증 요청"
            onPress={handleSendCode}
          />
        </View>
        <View className="relative">
          <FormInput<IRegisterInfo>
            control={control}
            name="authCode"
            label="휴대폰 인증"
            placeholder="인증 번호 입력"
            containerStyle="gap-y-1 mt-6"
            labelStyle="text-[17px] font-[NotoSansBold] text-primary"
            inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
            onChangeText={handleConfirmAuthCode}
          />
          <RegisterInfoCheckButton
            enabled={authState.isCodeEntered}
            location="bottom-1.5 right-0"
            innerText="확인"
            onPress={handleCheckAuthCode}
          />
          {authState.isAuthCodeChecked && (
            <FontText className="absolute -bottom-6 text-[15px] text-green-700">
              인증되었습니다.
            </FontText>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default RegisterStepTwo;
