import ClockIcon from "@/assets/images/clock.svg";
import LikeCountIcon from "@/assets/images/likecount.svg";
import ParticipantIcon from "@/assets/images/people.svg";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import FontText from "../common/FontText";
import GroupLikeButton from "./atom/GroupLikeButton";
import GroupStatus from "./atom/GroupStatus";
import GroupUploadTime from "./atom/GroupUploadTime";
import dayjs from "dayjs";

const PopularGroupCard = () => {
  return (
    <Shadow style={{ borderRadius: 16 }} distance={6}>
      <TouchableOpacity className="h-64 w-64 overflow-hidden rounded-[16px] bg-white">
        <View className="h-44 w-full justify-between overflow-hidden p-5">
          <Image
            className="absolute -z-10"
            source={require("@/assets/images/groupExample.png")}
            resizeMode="cover"
          />
          <View className="flex-row items-center justify-between">
            <GroupStatus isRecruiting />
            <GroupLikeButton like white />
          </View>
          <View className="flex-row items-center space-x-2">
            <View className="items-center rounded-2xl bg-secondary px-2.5 py-1">
              <FontText font="NotoSansBold" className="text-[12px] text-white">
                # 매일
              </FontText>
            </View>
            <View className="items-center rounded-2xl bg-secondary px-2.5 py-1">
              <FontText font="NotoSansBold" className="text-[12px] text-white">
                # 밀프렙
              </FontText>
            </View>
          </View>
        </View>
        <View className="h-20 justify-between px-5 py-4">
          <FontText font="GongGothicLight" className="text-[16px]">
            매일매일 도시락
          </FontText>
          <View className="flex-row justify-between">
            <GroupUploadTime uploadTime={dayjs().subtract(1, "h").toDate()} />
            <View className="flex-row gap-x-4">
              <View className="flex-row items-center space-x-1">
                <ParticipantIcon style={{ marginTop: 2 }} />
                <FontText className="text-[12px] text-gray700">180</FontText>
              </View>
              <View className="flex-row items-center space-x-1">
                <LikeCountIcon style={{ marginTop: 2 }} />
                <FontText className="text-[12px] text-gray700">180</FontText>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

export default PopularGroupCard;
