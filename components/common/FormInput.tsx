import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { Control, Controller, useFormState } from "react-hook-form";
import { TextInput, View } from "react-native";
import FontText from "./FontText";

type TProps<T> = {
  control: Control<any, any>;
  label: string;
  name: keyof T & string;
  rules?: { [key: string]: any };
  containerStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  errorLabelStyle?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
};

const FormInput = <T extends {}>({
  control,
  label,
  rules,
  containerStyle,
  labelStyle,
  inputStyle,
  errorLabelStyle,
  placeholder,
  name,
  ...rest
}: TProps<T>) => {
  const { errors } = useFormState({
    control,
  });
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
            <View className={containerStyle}>
              <FontText className={labelStyle}>{label}</FontText>
              <TextInput
                className={inputStyle}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                {...rest}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                  <FontText
                    style={{ color: "red" }}
                    className={errorLabelStyle}
                  >
                    {message}
                  </FontText>
                )}
              />
            </View>
          </>
        )}
      />
    </>
  );
};

export default FormInput;
