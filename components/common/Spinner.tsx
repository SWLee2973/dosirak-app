import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import FontText from "./FontText";
import SpinnerSVG from "../../assets/images/spinner.svg";
import LottieView from "lottie-react-native";

type TProps = {
  textArray?: string[];
};

const Spinner = ({
  textArray = ["한 끼 만드는 중", "탕수육 만드는 중", "도시락 포장 중"],
}: TProps) => {
  const [index, addIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      addIndex((index) => index + 1);

      if (index === textArray.length - 1) {
        addIndex(0);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <View className="absolute z-50 h-full w-full items-center justify-center bg-white">
      <LottieView
        style={styles.spinner}
        source={require("@/assets/lottie/spinner.json")}
        autoPlay
        loop={true}
      />
      <FontText font="GongGothic" className="text-[20px]">
        {textArray[index]}
      </FontText>
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    width: "40%",
    height: "15%",
  },
});
