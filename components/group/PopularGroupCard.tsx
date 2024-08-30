import LikeCountIcon from "@/assets/images/likecount.svg";
import ParticipantIcon from "@/assets/images/people.svg";
import { TGroup } from "@/types/group";
import { getPbImage } from "@/utils";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import FontText from "../common/FontText";
import GroupLikeButton from "./atom/GroupLikeButton";
import GroupStatus from "./atom/GroupStatus";
import GroupUploadTime from "./atom/GroupUploadTime";

type TProps = {
  item: TGroup;
};

const PopularGroupCard = ({ item }: TProps) => {
  const uri = getPbImage(item);
  const imageSource = uri
    ? { uri }
    : require("@/assets/images/groupExample.png");

  return (
    <Shadow style={{ borderRadius: 16 }} safeRender distance={6}>
      <TouchableOpacity className="h-64 w-64 overflow-hidden rounded-[16px] bg-white">
        <View className="h-44 w-full justify-between overflow-hidden">
          <Image
            className="absolute -z-10"
            style={{ width: "100%", height: "100%" }}
            source={imageSource}
          />
          <View className="flex-row items-center justify-between p-5">
            <GroupStatus isRecruiting={item.isRecruiting} />
            <GroupLikeButton white like />
          </View>
          <View className="flex-row items-center space-x-2 p-5">
            {item.hashTag.hashTag.map((tag, index) => (
              <View
                key={index}
                className="items-center rounded-2xl bg-secondary px-2.5 py-1"
              >
                <FontText
                  font="NotoSansBold"
                  className="text-[12px] text-white"
                >
                  # {tag}
                </FontText>
              </View>
            ))}
          </View>
        </View>
        <View className="h-20 justify-between px-5 py-4">
          <FontText font="GongGothicLight" className="text-[16px]">
            {item.title}
          </FontText>
          <View className="flex-row justify-between">
            <GroupUploadTime uploadTime={item.last_upload_time ?? undefined} />
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
          </View>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

export default PopularGroupCard;
