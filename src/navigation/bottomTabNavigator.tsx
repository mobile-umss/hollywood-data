import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExploreStackNavigator, MainStackNavigator, SeriesStackNavigator } from "./stackNavigator";
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Movies"
      component={MainStackNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="film" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Series"
      component={SeriesStackNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="tv" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Explore"
      component={ExploreStackNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="globe" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default BottomTabNavigator;