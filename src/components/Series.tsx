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
  //Original para ver nombres series popular
  /*async componentDidMount() {
    let series: Serie[] = await SeriesAPI.getInstance().getPopular();
    this.setState({ title: series.map((serie) => serie.name).toString() });
  }*/

  //Prueba para ver latest
  /*async componentDidMount() {
    let serie: Serie = await SeriesAPI.getInstance().getLatest();
    this.setState({ title: serie.name})
  }*/
  //paso

  //Prueba para ver airing today
  /*async componentDidMount() {
    let series: Serie[] = await SeriesAPI.getInstance().getTvAringToday();
    this.setState({ title: series.map((serie) => serie.name).toString() });
  }*/

  /*
  //Prueba para airing today
  async componentDidMount() {
    let series: Serie[] = await SeriesAPI.getInstance().getTvAringToday();
    this.setState({ title: series.map((serie) => serie.name).toString() });
  }
  //paso
  */

  //Prueba para top rated
  ///*
  async componentDidMount() {
    let series: Serie[] = await SeriesAPI.getInstance().getTvAringToday();
    this.setState({ title: series.map((serie) => serie.name).toString() });
  }  
  //*/
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> {this.state.title} </Text>
      </View>
    );
  }
}

export default Series;
