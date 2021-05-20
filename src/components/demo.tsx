import React, { Component } from "react";
import { StyleSheet, Button } from "react-native";
import { ButtonDemo } from "./buttonDemo";

export class Demo extends Component {
  render() {
    //  cada componente es una vista, por lo cual necesita saber que renderizar
    return ( // jsx
      <ButtonDemo title = "hellloooo" />
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
