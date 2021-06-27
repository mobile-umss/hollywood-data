import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class AboutNavigator extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={[
                    styles.textJustif,
                    styles.textBackGBlack,
                    styles.textWhite,
                    styles.fontAbout,
                    ]}> 
                  This application is aimed at users who 
                  want to know important information about
                  movies and series, indicating their genre,
                  overview, release dates and popularity.
                  In addition to including the categories:
                  Popular, Top Rated, Upcoming and Airing Today. 
                  This application was developed by:
                    {'\n'}          -Pablo Pardo.
                    {'\n'}          -Vicente Rico.
                    {'\n'}          -Alvaro Yapu. 

                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,

  },
  textWhite: { color: "#D6D6D6" },
  textCenter: { textAlign: "center" },
  textJustif: { textAlign: "justify" },
  textBackGBlack: { backgroundColor: "black" },
  fontAbout: {fontSize: 24},
});

export default AboutNavigator
