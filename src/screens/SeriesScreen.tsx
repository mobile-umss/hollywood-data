import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, FlatList, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SeriesAPI from "../api/Series";
import ImageView from "../components/ImageView";
import { Serie } from "../models/series";


interface SerieState {
  popularSeries: Serie[];
  topRatedSeries: Serie[];
  tvAiringToday: Serie[];
  loading: boolean;
  activeIndex: number;
}
export default class SeriesScreen extends Component<{}, SerieState> {
  _carousel: any;
  state = {
    popularSeries: new Array<Serie>(),
    topRatedSeries: new Array<Serie>(),
    tvAiringToday: new Array<Serie>(),
    loading: true,
    activeIndex: 0,
  };

  async componentDidMount() {
    let popularSeries: Serie[] = await SeriesAPI.getInstance().getPopular();
    let topRatedSeries: Serie[] = await SeriesAPI.getInstance().getTopRated();
    let tvAiringToday: Serie[] =
      await SeriesAPI.getInstance().getTvAiringToday();
    this.setState({
      popularSeries,
      topRatedSeries,
      tvAiringToday,
      loading: false,
    });
  }

  _prepareItems = (series: Serie[]) => {
    return (
      <FlatList
        horizontal={true}
        data={series}
        extraData={this.state}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item.name)
              this.props.navigation.navigate("SeriesDetails", {item});
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
        {this._prepareItems(this.state.popularSeries)}
        <Text style={styles.text}>Top Rated</Text>
        {this._prepareItems(this.state.topRatedSeries)}
        <Text style={styles.text}>Airing today</Text>
        {this._prepareItems(this.state.tvAiringToday)}
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
