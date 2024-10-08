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
import Spinner from "@/components/common/Spinner";
import pbStore from "@/store/pbStore";
import authStore from "@/store/authStore";

export interface IRegisterInfo {
  name: string;
  phone: string;
  authCode?: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

const register = () => {
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = useForm<IRegisterInfo>();
  const pb = pbStore((state) => state.pb);
  const { logIn, register } = authStore((state) => state);
  const [step, setStep] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setIsDisabled(true);
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
    setIsDisabled(false);
  };

  const handleRegister = handleSubmit(async (data) => {
    if (!pb) return;

    const result = await register(pb, data);

    if (result) {
      setLoading(true);
      await logIn(pb, data.username, data.password);

      setLoading(false);
    }
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.androidSafety}>
          <RegisterHeader />
          <RegisterStatusBar currentStep={step} />
          <View className="h-full justify-end px-9 py-16">
            <RegisterStepOne
              step={step}
              control={control}
              setValue={setValue}
              setIsDisableNext={setIsDisabled}
            />
            <RegisterStepTwo
              step={step}
              control={control}
              setValue={setValue}
              setIsDisableNext={setIsDisabled}
            />
            <RegisterStepThree
              step={step}
              control={control}
              setValue={setValue}
              setIsDisableNext={setIsDisabled}
            />
            <RegisterStepFour
              step={step}
              control={control}
              isAgreed={isAgreed}
              setIsAgreed={setIsAgreed}
              setIsDisableNext={setIsDisabled}
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
                  onPress={handleRegister}
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
      {(isSubmitting || loading) && <Spinner />}
    </>
  );
};

export default register;

const styles = StyleSheet.create({
  androidSafety: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
