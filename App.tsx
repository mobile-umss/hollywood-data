import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "./src/components/Movies";
import Series from "./src/components/Series";
import Explore from "./src/components/Explore";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="film" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Series"
          component={Series}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="tv" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="globe" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
