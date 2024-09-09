import { TFeed } from "@/types/feed";
import { displayDate } from "@/utils";
import React from "react";
import { View } from "react-native";
import FeedCardHeader from "./atom/FeedCardHeader";
import FeedImageSwiper from "./FeedImageSwiper";

type TProps = {
  item: TFeed;
};

const FeedCard = ({ item }: TProps) => {
  const createDate = displayDate(item.created);

  return (
    <View className="mb-5">
      <FeedCardHeader writer={item.expand.writer} createDate={createDate} />
      <FeedImageSwiper data={item} />
    </View>
  );
};

export default FeedCard;
