import React, { Component } from "react";
import { Dimensions } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";

interface ImageViewProps {
  url: string;
}
const { width: screenWidth } = Dimensions.get('window')

export default class ImageComponent extends Component<ImageViewProps, {}> {
  render() {
    const fullUrl = "https://image.tmdb.org/t/p/w500" + this.props.url;
    return <Image style={styles.poster} source={{ uri: fullUrl }} />;
  }
}
const styles = StyleSheet.create({
  poster: {
    width: 100,
    height: 200,
    resizeMode: "cover",
  },
});