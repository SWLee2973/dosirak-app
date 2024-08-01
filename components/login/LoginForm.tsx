import React from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import FontText from "../common/FontText";
import FormInput from "../common/FormInput";

export interface ILoginInput {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>();

  const handleLogin = handleSubmit((data) => console.log(data));

  return (
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
        />
      </View>
      <TouchableOpacity
        className="items-center justify-start rounded bg-primary py-4"
        onPress={handleLogin}
      >
        <FontText
          font="NotoSansExtraBold"
          className="text-[16px] font-bold text-white"
        >
          로그인
        </FontText>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
