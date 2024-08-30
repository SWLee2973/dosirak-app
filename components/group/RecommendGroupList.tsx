import { useGroup } from "@/hooks";
import React from "react";
import { FlatList, RefreshControl, View } from "react-native";
import LottieView from "lottie-react-native";
import clsx from "clsx";
import SmallGroupCard from "./SmallGroupCard";

const RecommendGroupList = () => {
  const { recommendGroups } = useGroup();

  const {
    data,
    isLoading,
    isRefreshing,
    onRefresh,
    onEndReached,
    isFetchingNextPage,
  } = recommendGroups();

  return isLoading ? (
    <View className="h-44 flex-1 items-center justify-center">
      <LottieView
        loop
        autoPlay
        style={{ width: "50%", height: "50%" }}
        source={require("@/assets/lottie/spinner.json")}
      />
    </View>
  ) : (
    <FlatList
      keyExtractor={(item) => item.id}
      initialNumToRender={5}
      data={data}
      onEndReached={onEndReached}
      removeClippedSubviews={true}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      style={{ rowGap: 20 }}
      renderItem={({ item }) => <SmallGroupCard item={item} />}
      ListFooterComponent={
        <View
          className={clsx(
            "flex-1 items-center justify-center",
            isFetchingNextPage ? "h-12" : "hidden",
          )}
        >
          {isFetchingNextPage && (
            <LottieView
              loop
              autoPlay
              style={{ width: "100%", height: "100%" }}
              source={require("@/assets/lottie/spinner.json")}
            />
          )}
        </View>
      }
    />
  );
};

export default RecommendGroupList;
