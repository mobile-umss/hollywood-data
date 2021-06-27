import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import MovieAPI from "../api/Movies";
import SeriesAPI from "../api/Series";
import { Genre } from "../models/Genre";

interface ItemLayoutProps {
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
  overview: string;
  genres: number[];
  serie: boolean;
}

const { width, height } = Dimensions.get("window");

export class ItemLayout extends Component<ItemLayoutProps, {}> {
  title = this.props.title;
  imgUrl = this.props.poster_path;
  release_date = this.props.release_date;
  popularity = this.props.popularity;
  overview = this.props.overview;
  genres = this.props.genres;
  serie = this.props.serie;
  state = {
    genres: new Array<Genre>()
  }

  async componentDidMount() {
    let genresMovies: Genre[];
    if (this.serie) {
      genresMovies = await SeriesAPI.getInstance().getGenres();
    } else {
      genresMovies = await MovieAPI.getInstance().getGenres();
    }
    let genresThisMovie: string[] = [];
    genresMovies.forEach(genre => {
      this.genres.forEach(id => {
        if (id == genre.id) genresThisMovie.push(" " + genre.name);
      });
    });
    this.setState({
      genres: genresThisMovie
    });
  }

  render() {
    return (
      //<ImageBackground source={{ uri: imgUrl }} style={styles.image}>
      <ScrollView style={styles.bottomContainer}>
        <Image style={styles.image} source={{ uri: this.imgUrl }}></Image>

        <View style={styles.flexRow}>
          <Text style={[styles.textBlack, styles.textBackGYellow]}>
            FIRST AIR DATE:
          </Text>
          <Text style={[styles.textBlack]}> {this.release_date}</Text>
        </View>
        <View>
          <Text
            style={[
              styles.textWhite,
              styles.title,
              styles.textCenter,
              styles.textBackGBlack,
            ]}
          >
            {this.title}
          </Text>
          <View>
            <Text
              style={styles.textBackGGreen}
            >GENRES: {this.state.genres.toString()}</Text>
          </View>
          <View style={[styles.flexRow, styles.flexEnd]}>
            <Text
              style={[styles.textBlack, styles.popularity, styles.textBackGRed]}
            >
              POPULARITY: {this.popularity}
            </Text>
          </View>
          <Text
            style={[styles.textBlack, styles.desc, styles.textJustif]}
            numberOfLines={36}
          >
            {this.overview}
          </Text>
        </View>
      </ScrollView>
      //</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  //topContainer:{ height: (height - 150) / 2, width },/
  image: {
    width: 300,
    height: 450,
    resizeMode: "cover",
    flex: 1,
    //width,
    //height: height - 130,
    //position: "absolute",
    top: 0,
    left: 30,
    zIndex: 5,
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 25,
    position: "relative",
    zIndex: 10,
  },
  flexRow: { flexDirection: "row" },
  textWhite: { color: "#D6D6D6" },
  textBlack: { color: "#000000" },
  textJustif: { textAlign: "justify" },
  textCenter: { textAlign: "center" },
  textBackGRed: { backgroundColor: "red" },
  textBackGBlack: { backgroundColor: "black" },
  textBackGYellow: { backgroundColor: "yellow" },
  textBackGGreen: { backgroundColor: "green" },
  textBackGLBlue: { backgroundColor: "lightblue" },
  flexEnd: { alignItems: "flex-end" },
  popularity: { fontSize: 18 },
  desc: { marginTop: 10 },
  title: {
    fontSize: 48,
    textTransform: "uppercase",
    lineHeight: 56,
    marginVertical: 20,
  },
});

export default ItemLayout;
