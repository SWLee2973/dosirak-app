import { View, Text, FlatList } from "react-native";
import React from "react";
import RecommendGroupCard from "./RecommendGroupCard";
// import { useFetchRecommendGroup } from "@/hooks/useGroup";

const RecommendGroupList = () => {
  // const groups = useFetchRecommendGroup();

  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      style={{ rowGap: 20 }}
      renderItem={({ item }) => <RecommendGroupCard />}
    />
  );
};

export default RecommendGroupList;
