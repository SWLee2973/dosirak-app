import { View, Text } from "react-native";
import React from "react";
import FontText from "../../common/FontText";
import clsx from "clsx";

/**
 * isRecruiting
 * false: 모집 완료
 * true: 모집 중
 */
type TProps = {
  isRecruiting?: boolean;
};

const GroupStatus = ({ isRecruiting = false }: TProps) => {
  return (
    <View
      className={clsx(
        "items-center justify-center rounded-[16px] border-[1px] border-gray500 bg-white px-2.5 py-1.5",
        {
          "border-0 bg-content": isRecruiting,
        },
      )}
    >
      <FontText
        font="NotoSansBold"
        className={clsx("text-[12px] text-gray500", {
          "text-white": isRecruiting,
        })}
      >
        {isRecruiting ? "모집 중" : "모집 완료"}
      </FontText>
    </View>
  );
};

export default GroupStatus;
