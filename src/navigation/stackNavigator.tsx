import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SeriesScreen from "../screens/SeriesScreen";
import ExploreScreen from "../screens/ExploreScreen";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import MoviesScreen from "../screens/MoviesScreen";
import MoviesDetailsScreen from "../screens/MoviesDetailsScreen";

const Stack = createStackNavigator();

const getMenuButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer());
      }}
    >
      <Ionicons
        style={{ paddingStart: 10 }}
        name="menu-outline"
        color={"#7F7F7F"}
        size={30}
      />
    </TouchableOpacity>
  );
};

const getSearchButton = () => {
  return (
    <TouchableOpacity>
      <Ionicons
        style={{ paddingEnd: 10 }}
        name="search-outline"
        color={"#7F7F7F"}
        size={25}
      />
    </TouchableOpacity>
  );
};

const screenOptionStyle = {
  title: "Hollywood Data",
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerLeft: () => getMenuButton(),
  headerRight: () => getSearchButton(),
};

const MoviesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Movies" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="MoviesDetails" component={MoviesDetailsScreen} />
    </Stack.Navigator>
  );
};

const SeriesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Series" component={SeriesScreen} />
    </Stack.Navigator>
  );
};

const ExploreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

export { MoviesNavigator, SeriesStackNavigator, ExploreStackNavigator };
