import FontText from "@/components/common/FontText";
import FeedCard from "@/components/feed/FeedCard";
import { useFeed } from "@/hooks";
import authStore from "@/store/authStore";
import LottieView from "lottie-react-native";
import React from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { TFeed } from "@/types/feed";
import clsx from "clsx";

const newfeed = () => {
  const { newFeeds } = useFeed();

  const {
    data,
    isLoading,
    isRefreshing,
    onRefresh,
    onEndReached,
    isFetchingNextPage,
  } = newFeeds();

  return isLoading ? (
    <View className="h-full items-center justify-center pb-32">
      <LottieView
        loop
        autoPlay
        style={{ width: "30%", height: "30%" }}
        source={require("@/assets/lottie/spinner.json")}
      />
    </View>
  ) : (
    <View className="min-h-full">
      <FlatList<TFeed>
        keyExtractor={(item) => item.id}
        initialNumToRender={5}
        data={data}
        onEndReached={onEndReached}
        removeClippedSubviews={true}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{
          rowGap: 20,
          padding: 36,
          paddingBottom: 170,
        }}
        renderItem={({ item }) => <FeedCard item={item} />}
        showsVerticalScrollIndicator={false}
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
        ItemSeparatorComponent={() => (
          <View className="h-1 w-full rounded-lg bg-gray400" />
        )}
      />
    </View>
  );
};

export default newfeed;
