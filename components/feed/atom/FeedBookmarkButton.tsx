import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FillBookmarkIcon from "@/assets/images/bookmark-true.svg";
import UnFillBookmarkIcon from "@/assets/images/bookmark-false.svg";

type TProps = {
  bookmarked?: boolean;
};

const FeedBookmarkButton = ({ bookmarked = false }: TProps) => {
  const [state, setState] = useState(bookmarked);

  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      {state ? <FillBookmarkIcon /> : <UnFillBookmarkIcon />}
    </TouchableOpacity>
  );
};

export default FeedBookmarkButton;
