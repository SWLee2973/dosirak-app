import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FillHeartIcon from "@/assets/images/heart-fill.svg";
import UnFillHeartIcon from "@/assets/images/heart-unfill.svg";

type TProps = {
  like?: boolean;
};

const FeedLikeButton = ({ like = false }: TProps) => {
  const [state, setState] = useState(like);

  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      {state ? <FillHeartIcon /> : <UnFillHeartIcon />}
    </TouchableOpacity>
  );
};

export default FeedLikeButton;
