import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Serie } from "../models/series";


export default function SeriesDetailsScreen ({route}) {
    const { item } = route.params;
    const imgUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    return(
        <View>
            <Image style = {style.poster} source = {{ uri: imgUrl}} ></Image>
            <Text style={style.text}> TITLE:{item.name} </Text>
            <Text style={style.text}> FIRST AIR DATE: {item.first_air_date}  </Text>
            <Text style={style.text}> POPULARITY: {item.popularity} </Text>
            <Text style={style.text}> OVERVIEW: {item.overview} </Text>
        </View>
    );
}




const style = StyleSheet.create({
    poster:{
        width: 200,
        height: 350,
        resizeMode: "cover",
    },
    text:{

    }
})


