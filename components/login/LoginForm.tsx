import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";
import FontText from "../common/FontText";
import FormInput from "../common/FormInput";
import pbStore from "@/store/pbStore";
import authStore from "@/store/authStore";

export interface ILoginInput {
  username: string;
  password: string;
}

const LoginForm = () => {
  const pb = pbStore((state) => state.pb);
  const { logIn } = authStore((state) => state);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginInput>();
  const [error, setError] = useState(false);

  const handleLogin = handleSubmit(async (data) => {
    if (!pb) return;

    const res = await logIn(pb, data.username, data.password);

    if ("error" in res) {
      console.log("res : ", res);
      setError(true);
    }
  });

  return (
    <>
      <KeyboardAvoidingView className="my-12">
        <View className="mb-9 h-[168px] justify-between">
          <FormInput<ILoginInput>
            control={control}
            label="아이디"
            rules={{ required: "아이디를 입력해 주세요." }}
            placeholder="아이디를 입력해 주세요"
            name="username"
            containerStyle="gap-1"
            labelStyle="text-[16px] font-[NotoSans]"
            inputStyle="h-12 rounded border-[1px] border-gray300 px-4 pb-0 pt-0 font-[NotoSans] text-sm"
            errorName="username"
            errorLabelStyle="absolute -bottom-5 ml-1"
            autoCapitalize="none"
            onChange={() => setError(false)}
          />
          <FormInput<ILoginInput>
            secureTextEntry
            control={control}
            label="비밀번호"
            rules={{ required: "비밀번호를 입력해 주세요." }}
            placeholder="비밀번호를 입력해 주세요"
            name="password"
            errorName="password"
            containerStyle="gap-1"
            labelStyle="text-[16px] font-[NotoSans]"
            inputStyle="h-12 rounded border-[1px] border-gray300 px-4 pb-0 pt-0 font-[NotoSans] text-sm"
            errorLabelStyle="absolute -bottom-5 ml-1"
            eyeButtonStyle="absolute right-2 bottom-3"
            onChange={() => setError(false)}
            onSubmitEditing={handleLogin}
          />
        </View>
        <TouchableOpacity
          className="h-14 items-center justify-start rounded py-4"
          style={{ backgroundColor: isSubmitting ? "gray" : "#145044" }}
          onPress={handleLogin}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="white" />
          ) : (
            <FontText
              font="NotoSansExtraBold"
              className="text-[16px] font-bold text-white"
            >
              로그인
            </FontText>
          )}
        </TouchableOpacity>
        {error && (
          <FontText className="absolute bottom-14 left-0 text-red-500">
            아이디 혹은 비밀번호가 틀렸습니다.
          </FontText>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginForm;
