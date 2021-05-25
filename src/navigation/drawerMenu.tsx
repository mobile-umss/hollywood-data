import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomTabNavigator from "./bottomTabNavigator";

const Drawer = createDrawerNavigator();
//TODO replace the components 
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Favourite" component={BottomTabNavigator} />
      <Drawer.Screen name="About" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;