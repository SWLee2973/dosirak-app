import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import GroupStatus from "./atom/GroupStatus";
import GroupLikeButton from "./atom/GroupLikeButton";
import FontText from "../common/FontText";
import ParticipantIcon from "@/assets/images/people.svg";
import LikeCountIcon from "@/assets/images/likecount.svg";
import GroupUploadTime from "./atom/GroupUploadTime";
import { TGroup } from "@/types/group";
import { getPbImage } from "@/utils";

type TProps = {
  item: TGroup;
};

const SmallGroupCard = ({ item }: TProps) => {
  const uri = getPbImage(item);
  const imageSource = uri
    ? { uri }
    : require("@/assets/images/groupExample.png");

  return (
    <Shadow style={{ borderRadius: 16, width: "100%" }} distance={6}>
      <TouchableOpacity className="h-32 w-full flex-row overflow-hidden">
        <Image source={imageSource} className="h-32 w-32 rounded-[16px]" />
        <View className="flex-1 py-3.5 pl-4 pr-6">
          <View className="flex-row items-center justify-between">
            <GroupStatus isRecruiting />
            <GroupLikeButton />
          </View>
          <FontText font="GongGothicLight" className="mt-2 text-[16px]">
            {item.title}
          </FontText>
          <View className="mt-3 flex-row items-center">
            {item.hashTag.hashTag.map((tag, index) => (
              <FontText
                key={index}
                font="NotoSansBold"
                className="text-[12px] text-gray700"
              >
                # {tag}
              </FontText>
            ))}
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row gap-x-4">
              <View className="flex-row items-center space-x-1">
                <ParticipantIcon style={{ marginTop: 2 }} />
                <FontText className="text-[12px] text-gray700">
                  {item.i_participate_it}
                </FontText>
              </View>
              <View className="flex-row items-center space-x-1">
                <LikeCountIcon style={{ marginTop: 2 }} />
                <FontText className="text-[12px] text-gray700">
                  {item.i_like_it}
                </FontText>
              </View>
            </View>
            <GroupUploadTime uploadTime={item.last_upload_time ?? undefined} />
          </View>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

export default SmallGroupCard;
