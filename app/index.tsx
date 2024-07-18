import Introduction from "@/components/Login/Introduction";
import LoginForm from "@/components/Login/LoginForm";
import SNSLogin from "@/components/Login/SNSLogin";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 justify-center px-9">
        <Introduction />
        <LoginForm />
        <SNSLogin />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default index;
