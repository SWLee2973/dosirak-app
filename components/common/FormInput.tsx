import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { Control, Controller, useFormState } from "react-hook-form";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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
  eyeButtonStyle?: string;
  secureTextEntry?: boolean;
} & TextInputProps;

const FormInput = <T extends {}>({
  control,
  label,
  rules,
  containerStyle,
  labelStyle,
  inputStyle,
  errorLabelStyle,
  eyeButtonStyle,
  placeholder,
  name,
  secureTextEntry,
  ...rest
}: TProps<T>) => {
  const { errors } = useFormState({
    control,
  });
  const [innerSecureTextEntry, setInnerSecureTextEntry] =
    useState(secureTextEntry);
  const [isEnable, setIsEnable] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSecurity = () => {
    setIsEnable(!isEnable);
    setInnerSecureTextEntry(!innerSecureTextEntry);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <View className={containerStyle}>
          <FontText className={labelStyle}>{label}</FontText>
          <TextInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={inputStyle}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={innerSecureTextEntry}
            {...rest}
          />
          {secureTextEntry && isFocused && (
            <TouchableOpacity
              onPress={handleSecurity}
              className={eyeButtonStyle}
            >
              {isEnable ? (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("../../assets/images/eye_false.png")}
                />
              ) : (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("../../assets/images/eye.png")}
                />
              )}
            </TouchableOpacity>
          )}
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <FontText style={{ color: "red" }} className={errorLabelStyle}>
                {message}
              </FontText>
            )}
          />
        </View>
      )}
    />
  );
};

export default FormInput;
