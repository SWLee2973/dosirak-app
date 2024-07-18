import React from "react";
import { Text, TextProps } from "react-native";

type TProps = TextProps & {
  children: React.ReactNode;
  font?:
    | "Pretendard"
    | "GongGothic"
    | "GongGothicLight"
    | "NotoSans"
    | "NotoSansBold"
    | "NotoSansExtraBold";
  className?: string;
};

const FontText = ({ style, font = "NotoSans", ...rest }: TProps) => {
  return (
    <Text
      style={[{ fontFamily: font, includeFontPadding: false }, style]}
      {...rest}
    />
  );
};

export default FontText;
