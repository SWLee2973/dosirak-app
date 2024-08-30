import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import React from "react";
import GroupHeader from "@/components/group/GroupHeader";
import authStore from "@/store/authStore";
import { useGroup } from "@/hooks";
import LottieView from "lottie-react-native";
import FontText from "@/components/common/FontText";
import clsx from "clsx";
import MyGroupCard from "@/components/group/MyGroupCard";
import { TGroup } from "@/types/group";

const mygroup = () => {
  const user = authStore((state) => state.user);
  const { myGroups } = useGroup();

  const {
    data,
    isLoading,
    isRefreshing,
    onRefresh,
    onEndReached,
    isFetchingNextPage,
  } = myGroups(user?.id);

  if (data.length % 2 !== 0) {
    data.push({ id: "empty" } as TGroup);
  }

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
      numColumns={2}
      data={data}
      onEndReached={onEndReached}
      removeClippedSubviews={true}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      className="w-full px-9"
      contentContainerStyle={{ rowGap: 20, paddingBottom: 144 }}
      columnWrapperStyle={{ gap: 20 }}
      renderItem={({ item }) => <MyGroupCard item={item} />}
      ListHeaderComponent={
        <View className="pt-9">
          <FontText font="GongGothicLight" className="text-[20px]">
            {user?.nickname}님이 참여 중인 모임이에요
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

export default mygroup;
