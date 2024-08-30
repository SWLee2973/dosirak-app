import FontText from "@/components/common/FontText";
import SmallGroupCard from "@/components/group/SmallGroupCard";
import { useGroup } from "@/hooks";
import clsx from "clsx";
import LottieView from "lottie-react-native";
import React from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";

const newgroup = () => {
  const { newGroups } = useGroup();
  const {
    data,
    isLoading,
    isRefreshing,
    onRefresh,
    onEndReached,
    isFetchingNextPage,
  } = newGroups();

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
    <FlatList
      keyExtractor={(item) => item.id}
      initialNumToRender={5}
      data={data}
      onEndReached={onEndReached}
      removeClippedSubviews={true}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      className="px-9"
      contentContainerStyle={{ rowGap: 20, paddingBottom: 144 }}
      renderItem={({ item }) => <SmallGroupCard item={item} />}
      ListHeaderComponent={
        <View className="pt-9">
          <FontText font="GongGothicLight" className="text-[20px]">
            따끈따근한 신규 오픈 모임
          </FontText>
        </View>
      }
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
    />
  );
};

export default newgroup;
