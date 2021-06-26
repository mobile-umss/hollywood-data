import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AboutNavigator from "./AboutNavigator";
import HomeTabNavigator from "./HomeTabNavigator";

const Drawer = createDrawerNavigator();
//TODO replace the components 
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen name="Favourite" component={HomeTabNavigator} />
      <Drawer.Screen name="About" component={AboutNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;