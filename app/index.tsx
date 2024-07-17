import Introduction from "@/components/Login/Introduction";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="px-9">
      <Introduction />
    </SafeAreaView>
  );
};

export default index;
