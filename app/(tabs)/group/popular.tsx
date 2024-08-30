import FontText from "@/components/common/FontText";
import PopularGroupCardSwiper from "@/components/group/PopularGroupCardSwiper";
import RecommendGroupList from "@/components/group/RecommendGroupList";
import { useGroup } from "@/hooks";
import { TGroup } from "@/types/group";
import LottieView from "lottie-react-native";
import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

const popular = () => {
  const { popularGroups } = useGroup();
  const { data, isLoading } = popularGroups();

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
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View className="p-9">
          <FontText font="GongGothicLight" className="text-[20px]">
            지금 가장 인기있어요!
          </FontText>
          <View className="py-6">
            <PopularGroupCardSwiper data={data ?? ([] as TGroup[])} />
          </View>
        </View>
      }
      ListEmptyComponent={() => (
        <View className="px-9 pb-28">
          <FontText font="GongGothicLight" className="text-[20px]">
            이런 모임 어때요?
          </FontText>
          <View className="py-6">
            <RecommendGroupList />
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default popular;
