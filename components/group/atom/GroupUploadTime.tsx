import { View, Text } from "react-native";
import React from "react";
import ClockIcon from "@/assets/images/clock.svg";
import FontText from "@/components/common/FontText";
import dayjs from "dayjs";

type TProps = {
  uploadTime: Date;
};

const GroupUploadTime = ({ uploadTime }: TProps) => {
  const now = dayjs();
  const diff = Math.floor(now.diff(uploadTime) / 1000);

  const timeLabel =
    diff < 60
      ? `조금 전`
      : diff < 60 * 60
        ? `${Math.floor(diff / 60)}분 전`
        : `${Math.floor(diff / 60 / 60)}시간 전`;

  return (
    <View className="flex-row items-center space-x-1">
      <ClockIcon style={{ marginTop: 2 }} />
      <FontText className="text-[12px] text-gray700">{timeLabel}</FontText>
    </View>
  );
};

export default GroupUploadTime;
