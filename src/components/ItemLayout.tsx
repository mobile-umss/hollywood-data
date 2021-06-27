import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MovieAPI from "../api/Movies";
import SeriesAPI from "../api/Series";
import { Actor } from "../models/actor";
import { Genre } from "../models/Genre";
import ImageView from "./ImageView";

interface ItemLayoutProps {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: number[];
  serie: boolean;
}

const { width, height } = Dimensions.get("window");

export class ItemLayout extends Component<ItemLayoutProps, {}> {
  title = this.props.title;
  id = this.props.id;
  imgUrl = this.props.poster_path;
  release_date = this.props.release_date;
  vote_average = this.props.vote_average;
  overview = this.props.overview;
  genres = this.props.genres;
  serie = this.props.serie;
  state = {
    genres: new Array<Genre>(),
    cast: new Array<Actor>(),
  };

  async componentDidMount() {
    let genres: Genre[];
    let cast: Actor[];
    if (this.serie) {
      genres = await SeriesAPI.getInstance().getGenres();
      cast = await SeriesAPI.getInstance().getCredits(this.id);
    } else {
      genres = await MovieAPI.getInstance().getGenres();
      cast = await MovieAPI.getInstance().getCredits(this.id);
    }
    let genresThisMovie: string[] = [];
    genres.forEach((genre) => {
      this.genres.forEach((id) => {
        if (id == genre.id) genresThisMovie.push(" " + genre.name);
      });
    });
    this.setState({
      genres: genresThisMovie,
      cast: cast,
    });
  }

  _prepareActors = (actors: Actor[]) => {
    return (
      <FlatList
        horizontal={true}
        data={actors}
        extraData={this.state}
        keyExtractor={(actor, index) => index.toString()}
        renderItem={({ item: actor }) => (
          <View style={{marginRight: 3}}>
            <TouchableOpacity
            style={{alignItems: "center"}}
              onPress={() => {
                console.log(actor.name);
                Linking.openURL("https://www.google.com/search?q="+actor.name);
              }}
            >
              <ImageView
                url={
                  "https://www.themoviedb.org/t/p/w138_and_h175_face" + actor.profile_path
                }
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.textWhite,
                styles.actorsNames,
                styles.textCenter,
                styles.textBackGBlack,
              ]}
            >
              {actor.name}
            </Text>
            <Text
              style={[
                styles.textWhite,
                styles.actorsNames,
                styles.textCenter,
                styles.textBackGGray,
              ]}
            >
              {actor.character}
            </Text>
          </View>
        )}
      />
    );
  };

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
            <Text style={styles.textBackGGreen}>
              GENRES: {this.state.genres.toString()}
            </Text>
          </View>
          <View style={[styles.flexRow, styles.flexEnd]}>
            <Text
              style={[styles.textBlack, styles.popularity, styles.textBackGRed]}
            >
              VOTE AVERAGE: {this.vote_average}/10
            </Text>
          </View>
          <Text
            style={[styles.textBlack, styles.desc, styles.textJustif]}
            numberOfLines={36}
          >
            {this.overview}
          </Text>
          <View>
            <Text
              style={[
                styles.textWhite,
                styles.actorsTitle,
                styles.textCenter,
                styles.textBackGBlack,
              ]}
            >
              Actors
            </Text>
            {this._prepareActors(this.state.cast)}
          </View>
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
  textBackGGray: { backgroundColor: "gray" },
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
  actorsTitle: {
    fontSize: 24,
    textTransform: "uppercase",
    lineHeight: 36,
    marginVertical: 20,
  },
  actorsNames: {
    fontSize: 8,
    lineHeight: 18,
    marginTop: 3,
  },
});

export default ItemLayout;
