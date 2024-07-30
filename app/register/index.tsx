import {
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import FontText from "@/components/common/FontText";
import RegisterHeader from "@/components/register/RegisterHeader";
import RegisterStatusBar from "@/components/register/RegisterStatusBar";
import RegisterProgressInfo from "@/components/register/RegisterProgressInfo";
import FormInput from "@/components/common/FormInput";
import { useForm } from "react-hook-form";
import RegisterStepOne from "@/components/register/RegisterStepOne";
import RegisterStepTwo from "@/components/register/RegisterStepTwo";
import RegisterStepThree from "@/components/register/RegisterStepThree";
import RegisterStepFour from "@/components/register/RegisterStepFour";

export interface IRegisterInfo {
  name: string;
  phone: string;
  authCode: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

const register = () => {
  const { control, handleSubmit } = useForm<IRegisterInfo>();
  const [step, setStep] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleNext = () => {
    setIsDisabled(true);
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
    setIsDisabled(false);
  };

  const handleRegister = handleSubmit((data) => console.log(data));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.androidSafety}>
        <RegisterHeader />
        <RegisterStatusBar currentStep={step} />
        <View className="h-full justify-end px-9 py-16">
          <RegisterStepOne
            step={step}
            control={control}
            setIsDisableNext={setIsDisabled}
          />
          <RegisterStepTwo
            step={step}
            control={control}
            setIsDisableNext={setIsDisabled}
          />
          <RegisterStepThree step={step} control={control} />
          <RegisterStepFour
            step={step}
            control={control}
            isAgreed={isAgreed}
            setIsAgreed={setIsAgreed}
          />

          <View className="h-60 justify-end gap-y-4 pb-32">
            {step !== 3 && (
              <TouchableOpacity
                onPress={handleNext}
                disabled={isDisabled}
                className="items-center justify-center rounded border-[1px] border-primary py-4"
                style={{
                  backgroundColor: isDisabled ? "transparent" : "#145044",
                }}
              >
                <FontText
                  font="NotoSansBold"
                  className={isDisabled ? "text-primary" : "text-white"}
                >
                  다음으로
                </FontText>
              </TouchableOpacity>
            )}
            {step === 3 && (
              <TouchableOpacity
                className="items-center justify-center rounded border-2 border-primary py-4"
                onPress={handleRegister}
              >
                <FontText font="NotoSansBold" className="text-primary">
                  가입하기
                </FontText>
              </TouchableOpacity>
            )}
            {step !== 0 && (
              <TouchableOpacity
                onPress={handlePrev}
                className="items-center justify-center rounded border-[1px] border-primary bg-primary py-4"
              >
                <FontText font="NotoSansBold" className="text-white">
                  이전으로
                </FontText>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default register;

const styles = StyleSheet.create({
  androidSafety: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
