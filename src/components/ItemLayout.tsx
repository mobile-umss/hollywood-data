import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { color } from "react-native-reanimated";

interface ItemLayoutProps {
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
  overview: string;
}

const { width, height } = Dimensions.get("window");

export class ItemLayout extends Component<ItemLayoutProps, {}> {
  render() {
    const title = this.props.title;
    const imgUrl = this.props.poster_path;
    const release_date = this.props.release_date;
    const popularity = this.props.popularity;
    const overview = this.props.overview;
    return (  
      //<ImageBackground source={{ uri: imgUrl }} style={styles.image}>
        <ScrollView style={styles.bottomContainer}>
                <Image style = {styles.image} source = {{ uri: imgUrl}} ></Image>                
               
                <View style={styles.flexRow}>
                    <Text style={[styles.textBlack, styles.textBackGYellow]}>FIRST AIR DATE:</Text>
                    <Text style={[styles.textBlack]}>  {release_date}</Text>
                </View>
                <View>
                    <Text style={[styles.textWhite, styles.title, styles.textCenter,
                       styles.textBackGBlack]}>{title}</Text>
                    <View style={[styles.flexRow, styles.flexEnd]}>
                    <Text style={[styles.textBlack, styles.popularity, styles.textBackGRed]}>
                       POPULARITY: {popularity}
                    </Text>
                    </View>
                    <Text style={[styles.textBlack, styles.desc, styles.textJustif]} numberOfLines={36}>
                    {overview}
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
  textJustif:{textAlign:'justify'},
  textCenter:{textAlign:'center'},
  textBackGRed:{backgroundColor: 'red'},
  textBackGBlack:{backgroundColor: 'black'},
  textBackGYellow:{backgroundColor: 'yellow'},
  textBackGLBlue:{backgroundColor: 'lightblue'},
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