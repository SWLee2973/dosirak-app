import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import FontText from "@/components/common/FontText";

const register = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 justify-center px-9">
        <FontText>register</FontText>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default register;

const styles = StyleSheet.create({});
