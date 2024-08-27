import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import UnFillHeartIcon from "@/assets/images/heart-unfill.svg";
import UnFillWhiteHeartIcon from "@/assets/images/heart-unfill-white.svg";
import FillHeartIcon from "@/assets/images/heart-fill.svg";

type TProps = {
  like?: boolean;
  white?: boolean;
};

const GroupLikeButton = ({ like = false, white = false }: TProps) => {
  const [state, setState] = useState(like);

  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      {state ? (
        <FillHeartIcon />
      ) : white ? (
        <UnFillWhiteHeartIcon />
      ) : (
        <UnFillHeartIcon />
      )}
    </TouchableOpacity>
  );
};

export default GroupLikeButton;
