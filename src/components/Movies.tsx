import React, { Component } from "react";
import { Text, View } from "react-native";
import MovieAPI from "../api/Movies";
import { Movie } from "../models/movie";

export class Movies extends Component<{}, { title: String }> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
    };
  }

  async componentDidMount() {
    let movies: Movie[] = await MovieAPI.getInstance().getTopRated();
    this.setState({ title: movies.map( movie => movie.original_title ).toString()})
  }
  render() {
    const auxTitle = this.state.title;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> {this.state.title} </Text>
      </View>
    );
  }
}

export default Movies;
