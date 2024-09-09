import Review from "@/assets/images/review.svg";
import { TFeed } from "@/types/feed";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import FeedLikeButton from "./atom/FeedLikeButton";
import FontText from "../common/FontText";
import FeedBookmarkButton from "./atom/FeedBookmarkButton";

type TProps = {
  data: TFeed;
};

const FeedInteraction = ({ data }: TProps) => {
  return (
    <View className="w-full flex-row items-center justify-between border-b-[0.5px] border-gray300 py-4">
      <View className="flex-row items-center" style={{ columnGap: 8 }}>
        <TouchableOpacity>
          <Review />
        </TouchableOpacity>
        <FeedLikeButton />
        <View className="relative w-36 items-center justify-center px-4">
          <Image
            className="absolute -top-1.5"
            source={require("@/assets/images/likecount.png")}
          />
          <FontText className="text-xs text-content">
            {data.like.length}명이 좋아합니다.
          </FontText>
        </View>
      </View>
      <FeedBookmarkButton />
    </View>
  );
};

export default FeedInteraction;
