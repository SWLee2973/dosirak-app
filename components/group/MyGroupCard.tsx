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

const MyGroupCard = ({ item }: TProps) => {
  const uri = getPbImage(item);
  const imageSource = uri
    ? { uri }
    : require("@/assets/images/groupExample.png");

  if (item.id === "empty") return <View className="flex-1"></View>;

  return (
    <TouchableOpacity className="flex-1 overflow-hidden rounded-[16px] border-[1px] border-gray300 bg-white">
      <View className="h-24 w-full justify-between overflow-hidden">
        <Image
          className="absolute -z-10"
          style={{ width: "100%", height: "100%" }}
          source={imageSource}
        />
        <View className="flex-row items-center justify-end p-5">
          <GroupLikeButton white like />
        </View>
      </View>
      <View className="justify-between px-5 py-4">
        <FontText
          font="GongGothicLight"
          className="mb-2 text-[16px]"
          numberOfLines={1}
        >
          {item.title}
        </FontText>
        <View className="flex-row justify-between">
          <View className="flex-row gap-x-2">
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
  );
};

export default MyGroupCard;
