import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Splash = () => {
  return (
    <View style={styles.splashContainer}>
      <LottieView
        style={styles.splash}
        source={require("../../assets/lottie/splash.json")}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  splash: {
    width: "100%",
    height: "100%",
  },
});
