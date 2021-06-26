import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MovieAPI from "../api/Movies";
import ImageView from "../components/ImageView";
import { Movie } from "../models/movie";

interface MovieState {
  popularMovies: Movie[];
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];
  loading: boolean;
  activeIndex: number;
}
export default class Movies extends Component<{}, MovieState> {
  _carousel: any;
  state = {
    popularMovies: new Array<Movie>(),
    upcomingMovies: new Array<Movie>(),
    topRatedMovies: new Array<Movie>(),
    loading: true,
    activeIndex: 0,
  };

  async componentDidMount() {
    let popularMovies: Movie[] = await MovieAPI.getInstance().getPopular();
    let topRatedMovies: Movie[] = await MovieAPI.getInstance().getTopRated();
    let upcomingMovies: Movie[] = await MovieAPI.getInstance().getUpcoming();
    this.setState({
      popularMovies,
      topRatedMovies,
      upcomingMovies,
      loading: false,
    });
  }

  _prepareItems = (movies: Movie[]) => {
    return (
      <FlatList
        horizontal={true}
        data={movies}
        extraData={this.state}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item.title);
              this.props.navigation.navigate("MoviesDetails", { item });
            }}>
            <ImageView url={item.poster_path} />
          </TouchableOpacity>
        )}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Loading</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        <Text style={styles.text}>Popular</Text>
        {this._prepareItems(this.state.popularMovies)}
        <Text style={styles.text}>Top Rated</Text>
        {this._prepareItems(this.state.topRatedMovies)}
        <Text style={styles.text}>Upcoming</Text>
        {this._prepareItems(this.state.upcomingMovies)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  item: {
    width: 0,
    height: 0,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 15,
    fontSize: 18,
    paddingLeft: 10,
  },
});
