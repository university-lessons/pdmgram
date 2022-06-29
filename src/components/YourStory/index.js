import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function YourStory(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImg}
        source={require("../../../assets/images/my_profile.png")}
      />

      <View style={styles.icBorder}>
        <Entypo name="circle-with-plus" size={24} color="#2181D5" />
      </View>

      <Text style={styles.profileName}>Seu Story</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 8,
  },

  profileImg: {
    borderRadius: 50,
    width: 48,
    height: 48,
  },

  profileName: {
    fontSize: 12,
    color: "#444",
    marginTop: 8,
  },

  icBorder: {
    position: "absolute",
    top: 32,
    left: 32,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
