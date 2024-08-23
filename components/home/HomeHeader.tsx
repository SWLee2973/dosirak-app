import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "@/assets/images/logo.svg";
import AlarmButton from "@/assets/images/alarm.svg";
import FavoriteButton from "@/assets/images/favorite.svg";

const HomeHeader = () => {
  return (
    <View className="flex-row justify-between bg-white px-9 pb-5">
      <Logo />
      <View className="flex-row gap-x-6 pt-3">
        <TouchableOpacity>
          <AlarmButton />
        </TouchableOpacity>
        <TouchableOpacity>
          <FavoriteButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
