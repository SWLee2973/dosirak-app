import React from "react";
import { Text, TextProps } from "react-native";

type TProps = TextProps & {
  children: React.ReactNode;
  font?: "Pretendard" | "GongGothic" | "GongGothicLight";
  className?: string;
};

const FontText = ({ style, font = "Pretendard", ...rest }: TProps) => {
  return <Text style={[{ fontFamily: font }, style]} {...rest} />;
};

export default FontText;
