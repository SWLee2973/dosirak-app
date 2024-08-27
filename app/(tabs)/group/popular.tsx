import FontText from "@/components/common/FontText";
import PopularGroupCardSwiper from "@/components/group/PopularGroupCardSwiper";
import RecommendGroupList from "@/components/group/RecommendGroupList";
import React from "react";
import { FlatList, ScrollView, View } from "react-native";

const popular = () => {
  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View className="p-9">
          <FontText font="GongGothicLight" className="text-[20px]">
            지금 가장 인기있어요!
          </FontText>
          <View className="py-6">
            <PopularGroupCardSwiper />
          </View>
        </View>
      }
      // ListHeaderComponent={<PopularGroupCardSwiper />}
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
