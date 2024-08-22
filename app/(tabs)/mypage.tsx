import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontText from "@/components/common/FontText";
import { useRouter } from "expo-router";
import authStore from "@/store/authStore";
import pbStore from "@/store/pbStore";

const MyPage = () => {
  const pb = pbStore((state) => state.pb);
  const router = useRouter();
  const { logOut } = authStore((state) => state);

  return (
    <View className="flex-1 items-center justify-center">
      <Text>MyPage</Text>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/login");
        }}
      >
        <FontText>로그인</FontText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logOut(pb!)}>
        <FontText>로그아웃</FontText>
      </TouchableOpacity>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({});
