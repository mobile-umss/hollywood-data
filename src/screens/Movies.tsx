import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from "react-native-snap-carousel";
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
interface RenderItem {
  item: Movie;
  index: number;
  parallaxProps: any;
}
interface ParallaxProps {
  parallaxProps?: AdditionalParallaxProps;
}

const { width: screenWidth } = Dimensions.get("window");

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

  _renderItem = (
    { item, index }: RenderItem,
    { parallaxProps }: ParallaxProps
  ): any => {
    console.log(item.original_title);
    return (
      <View
        style={{
          borderRadius: 5,
          height: 0,
          padding: 50,
        }}
      >
        <ParallaxImage
          source={{ uri: item.poster_path }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <ImageView url={item.poster_path} />
      </View>
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
        <View style={{ marginTop: 0, height: 200 }}>
          <Carousel
            layout={"default"}
            ref={(ref) => (this._carousel = ref)}
            data={this.state.popularMovies}
            sliderWidth={300}
            sliderHeight={300}
            itemHeight={screenWidth - 60}
            itemWidth={120}
            renderItem={this._renderItem}
            hasParallaxImages={true}
          />
        </View>
        <Text style={styles.text}>Top Rated</Text>
        <View style={{ marginTop: 0, height: 200 }}>
          <Carousel
            layout={"default"}
            ref={(ref) => (this._carousel = ref)}
            data={this.state.topRatedMovies}
            sliderWidth={300}
            sliderHeight={300}
            itemHeight={screenWidth - 60}
            itemWidth={120}
            renderItem={this._renderItem}
            hasParallaxImages={true}
          />
        </View>
        <Text style={styles.text}>Upcoming</Text>
        <View style={{ marginTop: 0, height: 200 }}>
          <Carousel
            layout={"default"}
            ref={(ref) => (this._carousel = ref)}
            data={this.state.upcomingMovies}
            sliderWidth={300}
            sliderHeight={300}
            itemHeight={screenWidth - 60}
            itemWidth={120}
            renderItem={this._renderItem}
            hasParallaxImages={true}
          />
        </View>
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
    fontSize: 18,
    paddingLeft: 10,
  },
});
