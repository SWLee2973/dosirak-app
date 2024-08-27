import { View, Text, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import PopularGroupCard from "./PopularGroupCard";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";

const PAGE_WIDTH = Dimensions.get("window").width;

const PopularGroupCardSwiper = () => {
  const ref = useRef<ICarouselInstance>(null);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH * 0.7,
    height: PAGE_WIDTH * 0.6,
  } as const;

  return (
    <Carousel
      {...baseOptions}
      loop
      autoPlay
      autoPlayInterval={2000}
      ref={ref}
      style={{ width: "100%", overflow: "visible" }}
      data={[1, 2, 3, 4]}
      pagingEnabled={false}
      renderItem={({ item }) => <PopularGroupCard />}
    />
  );
};

export default PopularGroupCardSwiper;
