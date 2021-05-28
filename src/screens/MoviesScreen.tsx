import React, { Component } from "react";
import { Text, View } from "react-native";
import MovieAPI from "../api/Movies";
import { Movie } from "../models/movie";


interface MoviesState{
  title:String
}

export default class MoviesScreen extends Component<{}, MoviesState> {
  
  state = {
    title: '',
  }

  async componentDidMount() {
    let movies: Movie[] = await MovieAPI.getInstance().getUpcoming();
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

