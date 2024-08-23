// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { View } from "react-native";
import FontText from "../common/FontText";

import HOME from "../../assets/images/home.svg";
import GROUP from "../../assets/images/group.svg";
import FEED from "../../assets/images/feed.svg";
import MYPAGE from "../../assets/images/mypage.svg";

import HOMESELECT from "../../assets/images/home_select.svg";
import GROUPSELECT from "../../assets/images/group_select.svg";
import FEEDSELECT from "../../assets/images/feed_select.svg";
import MYPAGESELECT from "../../assets/images/mypage_select.svg";

type TProps = {
  name: "home" | "group" | "feed" | "mypage";
  color?: string;
  focused: boolean;
};

const MENU = {
  home: "홈",
  group: "모임",
  feed: "피드",
  mypage: "마이페이지",
};

export function TabBarIcon({ name, color, focused, ...rest }: TProps) {
  return (
    <View className="items-center justify-center">
      <IconImage name={name} focused={focused} />
      <FontText style={{ color }}>{MENU[name]}</FontText>
    </View>
  );
}

function IconImage({ name, focused }: TProps) {
  switch (name) {
    case "home":
      return focused ? <HOMESELECT /> : <HOME />;
    case "group":
      return focused ? <GROUPSELECT /> : <GROUP />;
    case "feed":
      return focused ? <FEEDSELECT /> : <FEED />;
    case "mypage":
      return focused ? <MYPAGESELECT /> : <MYPAGE />;
  }
}
