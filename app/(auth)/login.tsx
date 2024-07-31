import Introduction from "@/components/login/Introduction";
import LoginForm from "@/components/login/LoginForm";
import SNSLogin from "@/components/login/SNSLogin";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 justify-center bg-white px-9">
        <Introduction />
        <LoginForm />
        <SNSLogin />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default index;
