import { IRegisterInfo } from "@/app/(auth)/register";
import React, { useEffect, useRef, useState } from "react";
import { Control } from "react-hook-form";
import { Alert, Animated, View } from "react-native";
import FontText from "../common/FontText";
import FormInput from "../common/FormInput";
import RegisterInfoCheckButton from "./RegisterInfoCheckButton";
import RegisterProgressInfo from "./RegisterProgressInfo";
import RegisterTimer from "./RegisterTimer";

type TProps = {
  step: number;
  control: Control<IRegisterInfo, any>;
  setIsDisableNext: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface IAuthState {
  isAvailPhoneNumber: boolean;
  isCodeSent: boolean;
  authCode: string;
  isAuthCodeChecked: number;
}

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
    isAuthCodeChecked: 0,
  });

  const [typeAuthCode, setTypeAuthCode] = useState("");
  const [timerRunning, setTimerRunning] = useState(false);

  const handlePhoneNumber = (text: string) => {
    if (text.match(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/)) {
      setAuthState({ ...authState, isAvailPhoneNumber: true });
    } else setAuthState({ ...authState, isAvailPhoneNumber: false });
  };

  const handleSendCode = () => {
    const authCode = String(Math.floor(Math.random() * 1000000)).padStart(
      6,
      "0",
    );

    setAuthState({ ...authState, isCodeSent: true, authCode });
    setTimerRunning(true);

    Alert.alert(`인증번호는 ${authCode} 입니다.`);
  };

  const handleConfirmAuthCode = (text: string) => {
    setTypeAuthCode(text);
    if (authState.isAuthCodeChecked === 2) {
      setAuthState({ ...authState, isAuthCodeChecked: 0 });
    }
  };

  const handleCheckAuthCode = () => {
    if (authState.authCode === typeAuthCode && timerRunning) {
      setIsDisableNext(false);
      setAuthState({ ...authState, isAuthCodeChecked: 1 });
    } else if (authState.authCode !== typeAuthCode && timerRunning) {
      setAuthState({ ...authState, isAuthCodeChecked: 2 });
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
            editable={authState.isAuthCodeChecked !== 1}
          />
          <RegisterInfoCheckButton
            enabled={authState.isAvailPhoneNumber && !authState.isCodeSent}
            location="bottom-1.5 right-0"
            innerText="인증 요청"
            onPress={handleSendCode}
          />
        </View>
        <View className="relative">
          {timerRunning && authState.isAuthCodeChecked !== 1 && (
            <RegisterTimer
              isRunning={timerRunning}
              authState={authState}
              setIsRunning={setTimerRunning}
              setAuthState={setAuthState}
            />
          )}
          <FormInput<IRegisterInfo>
            control={control}
            name="authCode"
            label="휴대폰 인증"
            placeholder="인증 번호 입력"
            containerStyle="gap-y-1 mt-6"
            labelStyle="text-[17px] font-[NotoSansBold] text-primary"
            inputStyle="h-12 border-b-[2px] border-primary justify-center font-[NotoSans] "
            onChangeText={handleConfirmAuthCode}
            editable={authState.isAuthCodeChecked !== 1}
          />
          <RegisterInfoCheckButton
            enabled={
              typeAuthCode.length > 0 && authState.isAuthCodeChecked !== 1
            }
            location="bottom-1.5 right-0"
            innerText="확인"
            onPress={handleCheckAuthCode}
          />
          {authState.isAuthCodeChecked === 1 && (
            <FontText className="absolute -bottom-6 text-[15px] text-green-700">
              인증되었습니다.
            </FontText>
          )}
          {authState.isAuthCodeChecked === 2 && (
            <FontText className="absolute -bottom-6 text-[15px] text-red-700">
              인증번호를 정확히 입력해 주세요.
            </FontText>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default RegisterStepTwo;
