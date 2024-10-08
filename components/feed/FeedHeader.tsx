import AddButton from "@/assets/images/pencil.svg";
import SearchButton from "@/assets/images/search.svg";
import { Link, Navigator } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import FontText from "../common/FontText";

export type TTabProps = {
  tab: "newfeed" | "popular" | "following" | "my";
  setTab: React.Dispatch<
    React.SetStateAction<"newfeed" | "popular" | "following" | "my">
  >;
};

const FeedHeader = () => {
  return (
    <Shadow
      startColor="rgba(171, 171, 171, 0.25)"
      offset={[0, 3]}
      distance={3}
      // sides={}
      style={{ width: "100%", zIndex: 10 }}
    >
      <View className="z-10 h-24 justify-between bg-white">
        <View className="flex-row items-center justify-between px-9 pt-2">
          <FontText font="GongGothic" className="text-[26px]">
            피드
          </FontText>
          <View className="flex-row gap-x-6">
            <TouchableOpacity>
              <AddButton />
            </TouchableOpacity>
            <TouchableOpacity>
              <SearchButton />
            </TouchableOpacity>
          </View>
        </View>
        <View
          className="flex-row items-end px-9 py-2"
          style={{ columnGap: 36 }}
        >
          <TabLink name="newfeed" href="/feed/newfeed">
            최신
          </TabLink>
          <TabLink name="popular" href="/feed/popular">
            인기
          </TabLink>
          <TabLink name="following" href="/feed/following">
            팔로잉
          </TabLink>
          <TabLink name="myfeed" href="/feed/myfeed">
            내 피드
          </TabLink>
        </View>
      </View>
    </Shadow>
  );
};

const TabLink = ({
  children,
  name,
  href,
}: {
  children?: React.ReactNode;
  name: string;
  href: string;
}) => {
  const { state } = Navigator.useContext();
  const currentTab = state.routes.find((route, i) => state.index === i);

  return (
    <Link href={href}>
      <View className="relative">
        <FontText
          font="GongGothicLight"
          className="text-[20px]"
          style={{
            color: currentTab?.name === name ? "#145044" : "#a3a3a3",
          }}
        >
          {children}
        </FontText>
        {currentTab?.name === name && (
          <>
            <View className="absolute -right-1 -z-10 h-[9px] w-[9px] rounded-full bg-secondary" />
            <View className="absolute -bottom-3.5 h-1 w-full rounded-lg bg-primary" />
          </>
        )}
      </View>
    </Link>
  );
};

export default FeedHeader;
