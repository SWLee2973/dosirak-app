import Guest from "@/assets/images/guest.svg";
import { TFeed } from "@/types/feed";
import { displayDate, getPbImage } from "@/utils";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import FontText from "../common/FontText";
import Add from "@/assets/images/add.svg";
import FeedCardHeader from "./atom/FeedCardHeader";

type TProps = {
  item: TFeed;
};

const FeedCard = ({ item }: TProps) => {
  const createDate = displayDate(item.created);

  return (
    <View className="mb-5">
      <FeedCardHeader writer={item.expand.writer} createDate={createDate} />
    </View>
  );
};

export default FeedCard;
