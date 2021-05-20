import React, { Component } from "react";
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface ButtonDemoProps {
  title: string;
}

interface ButtontDemoState {
  contador: number;
}

// JS 
/// ecma 2015 , 2016, 9,10,11,

// TS .. .transpilacion   

// export class ButtonDemo extends Component<PROPS, STATE> {
export class ButtonDemo extends Component<ButtonDemoProps, ButtontDemoState> {
  // manera antigua de iniciar en class components un component
  // constructor(props:any){
  //   super(props)
  //    this.state = {
  //      contador : 0
  //   }
  // }

  state = {
    contador: 2,
  };

  //setState , recibe un objeto , y actualiza todos los state q tenga dentro 
  onClickedContador = () => {
    let modificar = {contador: this.state.contador + 1 }
    this.setState(modificar);
    // this.state.contador =  this.state.contador + 1   <--- no usar , no actualiza
  };

  render() {
    //  cada componente es una vista, por lo cual necesita saber que renderizar
    return (
      // 1 elemento jsx
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onClickedContador()}
        >
          <Text >{this.props.title}</Text>
        </TouchableOpacity>

        
        <Button
          onPress={() => {}}
          title={this.state.contador + ""}
          color="#000000"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 100,
    backgroundColor: "#eaeaea",
    marginTop: 25
    
  },
});
