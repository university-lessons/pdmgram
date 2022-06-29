import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../components/Header";
import Post from "../components/Post";
import YourStory from "../components/YourStory";
import Story from "../components/Story";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <ScrollView horizontal={true} style={styles.storiesContainer}>
          <YourStory />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </ScrollView>

        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgray",
  },

  storiesContainer: {
    backgroundColor: "white",
  },
});
