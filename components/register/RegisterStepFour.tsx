import {
  View,
  Text,
  Animated,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import RegisterProgressInfo from "./RegisterProgressInfo";
import FormInput from "../common/FormInput";
import { Control } from "react-hook-form";
import { IRegisterInfo } from "@/app/register";
import FontText from "../common/FontText";
import RegisterInfoCheckButton from "./RegisterInfoCheckButton";
import { Shadow } from "react-native-shadow-2";
import RegisterCheckBox from "./RegisterCheckBox";

type TProps = {
  step: number;
  isAgreed: boolean;
  control: Control<IRegisterInfo, any>;
  setIsAgreed: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterStepFour = ({ step, isAgreed, control, setIsAgreed }: TProps) => {
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
    if (step === 3) {
      load();
    } else if (step === 2) {
      unLoad();
    }
  }, [step]);

  const [checkState, setCheckState] = useState({
    service: false,
    privacy: false,
    marketing: false,
  });

  const handleAllCheck = () => {
    setIsAgreed(!isAgreed);
    if (isAgreed) {
      setCheckState({
        service: false,
        privacy: false,
        marketing: false,
      });
    } else {
      setCheckState({
        service: true,
        privacy: true,
        marketing: true,
      });
    }
  };

  return (
    <Animated.View
      style={{ opacity: loader, zIndex: step === 2 ? 10 : -1 }}
      className="absolute left-9 top-16 w-full"
    >
      <RegisterProgressInfo
        step={step}
        information="약관에 동의하시면"
        additionalText="회원가입이 완료됩니다."
      />
      <View className="mt-12 flex-1 justify-center">
        <View className="flex-1">
          <Shadow
            startColor="rgba(204, 204, 204, 0.25)"
            distance={4}
            style={{ width: "100%", borderRadius: 15 }}
          >
            <TouchableOpacity
              onPress={handleAllCheck}
              className="flex-1 px-6 py-4"
            >
              <View className="flex-row items-center gap-x-2">
                {isAgreed ? (
                  <Image
                    className="h-6 w-6"
                    source={require("@/assets/images/round_check_true.png")}
                  />
                ) : (
                  <Image
                    className="h-6 w-6"
                    source={require("@/assets/images/round_check_false.png")}
                  />
                )}
                <FontText
                  font="NotoSansBold"
                  className="pb-0.5 text-[20px] text-primary"
                >
                  약관 전체동의
                </FontText>
              </View>
            </TouchableOpacity>
          </Shadow>
        </View>
        <View className="p-6" style={{ gap: 16 }}>
          <RegisterCheckBox
            onPress={() =>
              setCheckState({ ...checkState, service: !checkState.service })
            }
            checkState={checkState.service}
            label="서비스 이용약관(필수)"
          />
          <RegisterCheckBox
            onPress={() =>
              setCheckState({ ...checkState, privacy: !checkState.privacy })
            }
            checkState={checkState.privacy}
            label="개인정보 처리방침(필수)"
          />
          <RegisterCheckBox
            onPress={() =>
              setCheckState({ ...checkState, marketing: !checkState.marketing })
            }
            checkState={checkState.marketing}
            label="마케팅 정보 수신 동의(선택)"
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default RegisterStepFour;
