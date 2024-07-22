import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontText from "../common/FontText";

type TProps = {
  enabled: boolean;
  location: string;
  innerText: string;
  onPress?: () => void;
};

const RegisterInfoCheckButton = ({
  enabled,
  location,
  innerText,
  onPress,
}: TProps) => {
  return (
    <TouchableOpacity
      disabled={!enabled}
      style={[
        styles.buttonStyle,
        {
          backgroundColor: enabled ? "#145044" : "transparent",
          borderColor: enabled ? "" : "#145044",
          borderWidth: enabled ? 0 : 1,
        },
      ]}
      className={location}
      onPress={onPress}
    >
      <FontText
        style={{
          color: enabled ? "white" : "#145044",
        }}
        font="NotoSans"
        className="text-white"
      >
        {innerText}
      </FontText>
    </TouchableOpacity>
  );
};

export default RegisterInfoCheckButton;

const styles = StyleSheet.create({
  buttonStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    width: 100,
    paddingVertical: 8,
  },
});
