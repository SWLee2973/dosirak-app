import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

type TProps = {
  currentStep: number;
};

const RegisterStatusBar = ({ currentStep }: TProps) => {
  const animation = useRef(new Animated.Value(0)).current;

  const progress = (step: number) => {
    Animated.timing(animation, {
      toValue: step * 33.3,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    progress(currentStep);
  }, [currentStep]);

  const width = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  return (
    <View className="h-1.5 bg-gray300">
      <Animated.View style={{ width, flex: 1 }} className="bg-primary" />
    </View>
  );
};

export default RegisterStatusBar;
