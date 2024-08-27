import { TGroup } from "@/types/group";
import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import PopularGroupCard from "./PopularGroupCard";

type TProps = {
  data: TGroup[];
};

const PAGE_WIDTH = Dimensions.get("window").width;

const PopularGroupCardSwiper = ({ data }: TProps) => {
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
      style={{ width: "100%", overflow: "visible" }}
      data={data}
      pagingEnabled={false}
      renderItem={({ item }) => <PopularGroupCard item={item} />}
    />
  );
};

export default PopularGroupCardSwiper;
