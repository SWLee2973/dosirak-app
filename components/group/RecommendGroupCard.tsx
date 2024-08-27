import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import GroupStatus from "./atom/GroupStatus";
import GroupLikeButton from "./atom/GroupLikeButton";
import FontText from "../common/FontText";
import ParticipantIcon from "@/assets/images/people.svg";
import LikeCountIcon from "@/assets/images/likecount.svg";
import GroupUploadTime from "./atom/GroupUploadTime";

const RecommendGroupCard = () => {
  return (
    <Shadow style={{ borderRadius: 16, width: "100%" }} distance={6}>
      <TouchableOpacity className="h-32 w-full flex-row overflow-hidden">
        <Image
          source={require("@/assets/images/groupExample.png")}
          className="h-32 w-32 rounded-[16px]"
          resizeMode="cover"
        />
        <View className="flex-1 py-3.5 pl-4 pr-6">
          <View className="flex-row items-center justify-between">
            <GroupStatus isRecruiting />
            <GroupLikeButton />
          </View>
          <FontText font="GongGothicLight" className="mt-2 text-[16px]">
            매일매일 도시락
          </FontText>
          <View className="mt-3 flex-row items-center">
            <FontText font="NotoSansBold" className="text-[12px] text-gray700">
              # 밀프렙
            </FontText>
          </View>
          <View className="flex-row items-center justify-between">
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
            <GroupUploadTime uploadTime={new Date()} />
          </View>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

export default RecommendGroupCard;
