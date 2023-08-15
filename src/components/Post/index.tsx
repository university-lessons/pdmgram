import React from "react";
import { Image, StyleSheet, View } from "react-native";

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function Post() {
  return (
    <View style={styles.container}>
      <PostHeader />

      <Image source={require("../../../assets/images/photo1.jpg")} />

      <PostFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 4,
    backgroundColor: "white",
  },
});
