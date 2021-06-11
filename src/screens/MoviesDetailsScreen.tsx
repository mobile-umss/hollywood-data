import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function MoviesDetailsScreen({ route }) {
  const { item } = route.params;
  const imgUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
  return (
    <ScrollView>
      <Image style={styles.poster} source={{ uri: imgUrl }} />
      <Text>Title: {item.title}</Text>
      <Text>Release Date: {item.release_date}</Text>
      <Text>Popularity: {item.popularity}</Text>
      <Text>Plot: {item.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: 200,
    height: 400,
    resizeMode: "cover",
  },
});
