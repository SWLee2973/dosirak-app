import { TFeed } from "@/types/feed";
import { getPbImageArray } from "@/utils/getPbImage";
import clsx from "clsx";
import React, { useState } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

type TProps = {
  data: TFeed;
};

const PAGE_WIDTH = Dimensions.get("window").width;

const FeedImageSwiper = ({ data }: TProps) => {
  const [index, setIndex] = useState(0);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH - 72,
    height: 200,
  } as const;

  const feedImages = getPbImageArray(data);

  const handleSnap = (index: number) => {
    setIndex(index);
  };

  return feedImages.length === 0 ? (
    <View className="mt-4 w-full items-center">
      <Image
        source={require("@/assets/images/groupExample.png")}
        style={{ width: PAGE_WIDTH - 72, height: 200 }}
        className="rounded-xl"
      />
    </View>
  ) : (
    <View className="relative">
      <Carousel
        {...baseOptions}
        pagingEnabled
        style={{ marginTop: 16 }}
        data={feedImages}
        onSnapToItem={handleSnap}
        renderItem={({ item }) => (
          <View className="items-center">
            <Image
              source={{ uri: item }}
              className="h-full w-full rounded-xl"
              resizeMode="contain"
            />
          </View>
        )}
      />
      <View
        className="absolute bottom-2 w-full flex-row items-center justify-center"
        style={{ columnGap: 4 }}
      >
        {feedImages.map((_, i) => (
          <View
            className={clsx("h-2 w-2 rounded-full bg-tertiary", {
              "h-2.5 w-2.5 bg-primary": i === index,
            })}
          />
        ))}
      </View>
    </View>
  );
};

export default FeedImageSwiper;
