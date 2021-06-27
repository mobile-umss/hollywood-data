import React, { Component } from "react";
import ItemLayout from '../components/ItemLayout';
import { Text, View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function SeriesDetailsScreen ({route}) {
    const { item } = route.params;
    const imgUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    
    return(
        <ItemLayout
        title={item.name}
        id={item.id}
        poster_path={imgUrl}
        release_date={item.first_air_date}
        vote_average={item.vote_average}
        overview={item.overview}
        genres={item.genre_ids}
        serie={true}
      />
       
        /* <ScrollView>
            <Image style = {style.poster} source = {{ uri: imgUrl}} ></Image>
            <Text style={style.text}> TITLE:{item.name} </Text>
            <Text style={style.text}> FIRST AIR DATE: {item.first_air_date}  </Text>
            <Text style={style.text}> POPULARITY: {item.popularity} </Text>
            <Text style={style.text}> OVERVIEW: {item.overview} </Text>
        </ScrollView>*/
    );
}



/*
const style = StyleSheet.create({
    poster:{
        width: 300,
        height: 450,
        resizeMode: "cover",
    },
    text:{

    }
})
*/

