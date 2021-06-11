import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Borrador extends Component{
    render(){
        return(
            <View>
                <Text style={style.text}> Favorite !</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    text:{
        paddingTop:40
    }
})