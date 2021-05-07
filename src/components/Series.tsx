import React, { Component } from "react";
import { Text, View } from "react-native";
import SeriesAPI from "../api/Series";
import { Serie } from "../models/series";

export class Series extends Component<{}, { title: String }> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
    };
  }
  async componentDidMount() {
    let series: Serie[] = await SeriesAPI.getInstance().getPopular();
    this.setState({ title: series.map((serie) => serie.name).toString() });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> {this.state.title} </Text>
      </View>
    );
  }
}

export default Series;
