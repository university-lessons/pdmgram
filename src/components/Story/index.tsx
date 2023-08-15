import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function Story() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.storyBackground}
        source={require("../../../assets/images/story_background.png")}
      />

      <View style={styles.storyProfileImgBorder}>
        <Image
          style={styles.storyProfileImg}
          source={require("../../../assets/images/profile1.png")}
        />
      </View>

      <Text style={styles.profileName}>fusca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 8,
  },

  storyBackground: {
    width: 54,
    height: 54,
    borderRadius: 50,
  },

  storyProfileImgBorder: {
    position: "absolute",
    width: 50,
    height: 50,
    top: 2,
    backgroundColor: "white",
    borderRadius: 50,
  },

  storyProfileImg: {
    width: 46,
    height: 46,
    top: 2,
    left: 2,
    borderRadius: 50,
  },

  profileName: {
    fontSize: 12,
    color: "#444",
    marginTop: 2,
  },
});
