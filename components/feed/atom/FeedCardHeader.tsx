import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Guest from "@/assets/images/guest.svg";
import FontText from "@/components/common/FontText";
import Add from "@/assets/images/add.svg";
import { TUser } from "@/types/user";
import { getPbImage } from "@/utils";

type TProps = {
  writer: TUser;
  createDate: string;
};

const FeedCardHeader = ({ writer, createDate }: TProps) => {
  const { thumbnail } = writer;
  const uri = getPbImage(writer);

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row gap-x-2">
        {thumbnail ? (
          <Image className="h-11 w-11 rounded-full" source={{ uri }} />
        ) : (
          <Guest className="h-11 w-11 rounded-full" />
        )}
        <View className="justify-center gap-y-0.5">
          <FontText font="NotoSansBold">{writer.nickname}</FontText>
          <FontText className="text-xs text-gray700">{createDate}</FontText>
        </View>
      </View>
      <TouchableOpacity className="flex-row items-center gap-x-1 rounded-3xl bg-primary py-1.5 pl-1 pr-2.5">
        <Add />
        <FontText font="NotoSansBold" className="text-white">
          팔로우
        </FontText>
      </TouchableOpacity>
    </View>
  );
};

export default FeedCardHeader;
