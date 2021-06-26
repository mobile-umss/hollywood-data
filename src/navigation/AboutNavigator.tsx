import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class AboutNavigator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Prueba XD </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 21
  }
});

export default AboutNavigator
