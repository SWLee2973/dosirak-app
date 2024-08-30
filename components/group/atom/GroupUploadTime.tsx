import { View, Text } from "react-native";
import React from "react";
import ClockIcon from "@/assets/images/clock.svg";
import FontText from "@/components/common/FontText";
import dayjs from "dayjs";

type TProps = {
  uploadTime: Date;
};

const GroupUploadTime = ({ uploadTime }: TProps) => {
  //@ts-ignore
  const timeLabel = dayjs(uploadTime).fromNow();

  return (
    <View className="flex-row items-center space-x-1">
      <ClockIcon style={{ marginTop: 2 }} />
      <FontText className="text-[12px] text-gray700">
        {uploadTime ? timeLabel : "피드 없음"}
      </FontText>
    </View>
  );
};

export default GroupUploadTime;
