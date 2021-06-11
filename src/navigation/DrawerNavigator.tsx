import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Borrador from "../screens/borrador";
import HomeTabNavigator from "./HomeTabNavigator";

const Drawer = createDrawerNavigator();
//TODO replace the components 
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen name="Favourite" component={HomeTabNavigator}/>
      <Drawer.Screen name="About" component={HomeTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;