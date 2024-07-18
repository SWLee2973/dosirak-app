import Introduction from "@/components/Login/Introduction";
import LoginForm from "@/components/Login/LoginForm";
import SNSLogin from "@/components/Login/SNSLogin";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center px-9">
      <Introduction />
      <LoginForm />
      <SNSLogin />
    </SafeAreaView>
  );
};

export default index;
