import { IRegisterInfo } from "@/app/(auth)/register";
import React, { useEffect, useRef, useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";
import { Animated, View } from "react-native";
import FormInput from "../common/FormInput";
import RegisterInfoCheckButton from "./RegisterInfoCheckButton";
import RegisterProgressInfo from "./RegisterProgressInfo";
import pbStore from "@/store/pbStore";
import FontText from "../common/FontText";

type TProps = {
  step: number;
  control: Control<IRegisterInfo, any>;
  setIsDisableNext: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: UseFormSetValue<IRegisterInfo>;
};

const RegisterStepThree = ({
  step,
  control,
  setIsDisableNext,
  setValue,
}: TProps) => {
  const pb = pbStore((state) => state.pb);
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

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  // 0: 확인 안됨, 1: 사용 가능, 2: 중복
  const [isDuplicate, setIsDuplicate] = useState(0);
  // 0: 입력 안함, 1: 체크 완료, 2: 사용 불가
  const [passwordCheck, setPasswordCheck] = useState(0);
  // 0: 입력 안함, 1: 같음, 2: 다름
  const [isPasswordSame, setIsPasswordSame] = useState(0);

  const handleLoginInfo = (key: keyof typeof loginInfo) => (text: string) => {
    setLoginInfo({ ...loginInfo, [key]: text });

    if (key === "username" && isDuplicate !== 0) {
      setIsDuplicate(0);
    }

    if (key === "password") {
      setValue("password", text);

      if (text.match(passwordRegex)) {
        setPasswordCheck(1);
        if (text === loginInfo.passwordConfirm) {
          setIsPasswordSame(1);
        }
      } else if (text.length < 8) {
        setPasswordCheck(0);
      } else {
        setPasswordCheck(2);
      }
    }
    if (key === "passwordConfirm") {
      setValue("passwordConfirm", text);

      if (text !== loginInfo.password && text.length >= 8) {
        setIsPasswordSame(2);
      } else {
        setIsPasswordSame(1);
      }
    }
  };

  const handleCheckDuplicate = async () => {
    const { username } = loginInfo;

    const existData = await pb?.collection("users").getList(1, 1, {
      filter: `username ?= "${username}"`,
    });

    if (existData?.totalItems === 0) {
      setIsDuplicate(1);
      setValue("username", username);
    }
    if (existData?.totalItems === 1) {
      setIsDuplicate(2);
      setValue("username", "");
    }
  };

  useEffect(() => {
    if (
      loginInfo.password !== "" &&
      loginInfo.password === loginInfo.passwordConfirm &&
      loginInfo.password.match(passwordRegex) &&
      isDuplicate === 1
    ) {
      setIsDisableNext(false);
    } else {
      setIsDisableNext(true);
    }
  }, [isDuplicate, loginInfo.password, loginInfo.passwordConfirm]);

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
            autoCapitalize="none"
          />
          <RegisterInfoCheckButton
            enabled={loginInfo.username.length > 0}
            location="bottom-1.5 right-0"
            innerText="중복 확인"
            onPress={handleCheckDuplicate}
          />
          {isDuplicate === 1 && (
            <FontText className="absolute -bottom-6 text-[15px] text-green-700">
              사용 가능한 아이디입니다.
            </FontText>
          )}
          {isDuplicate === 2 && (
            <FontText className="absolute -bottom-6 text-[15px] text-red-700">
              이미 사용중인 아이디입니다.
            </FontText>
          )}
        </View>
        <View className="relative mt-6">
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
          {passwordCheck === 1 && (
            <FontText className="absolute -bottom-6 text-[15px] text-green-700">
              사용 가능한 비밀번호 입니다.
            </FontText>
          )}
          {passwordCheck === 2 && (
            <FontText className="absolute -bottom-6 text-[15px] text-red-700">
              숫자와 영문자만 사용해 8글자 이상으로 입력해 주세요.
            </FontText>
          )}
        </View>
        <View className="relative mt-6">
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
          {isPasswordSame === 2 && (
            <FontText className="absolute -bottom-6 text-[15px] text-red-700">
              같은 비밀번호를 입력해 주세요.
            </FontText>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default RegisterStepThree;
