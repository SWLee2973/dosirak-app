import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { TFeed } from "@/types/feed";
import FontText from "../common/FontText";
import RenderHtml, {
  HTMLContentModel,
  HTMLElementModel,
} from "react-native-render-html";

type TProps = {
  data: TFeed;
};

const FeedMainContent = ({ data }: TProps) => {
  const { width } = useWindowDimensions();
  const customHTMLElementModels = {
    iframe: HTMLElementModel.fromCustomModel({
      tagName: "iframe",
      contentModel: HTMLContentModel.block,
    }),
  };

  return (
    <View>
      <FontText className="py-4">{data.title}</FontText>
      <View>
        <RenderHtml
          contentWidth={width - 72}
          source={{
            html: `
            ${data.maintext?.replaceAll("<p>", `<p style="font-size: 12px;">`)}
          `,
          }}
          customHTMLElementModels={customHTMLElementModels}
        />
      </View>
    </View>
  );
};

export default FeedMainContent;
