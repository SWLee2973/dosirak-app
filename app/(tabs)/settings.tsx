import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontText from "@/components/common/FontText";
import { useRouter } from "expo-router";

const settings = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>settings</Text>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/login");
        }}
      >
        <FontText>로그인</FontText>
      </TouchableOpacity>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
