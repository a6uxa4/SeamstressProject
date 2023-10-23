import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import { Works } from "../screens/works";
import { Profile } from "../screens/profile";
import { Cooperator } from "../screens/cooperator";

const Tab = createBottomTabNavigator();

export default function userStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Профиль"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Работа"
          component={Works}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Octicons
                    name="organization"
                    size={25}
                    color={!focused ? "#808080" : "orange"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Профиль"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <FontAwesome5Icon
                    name="user"
                    size={25}
                    color={!focused ? "#808080" : "orange"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Сотрудники"
          component={Cooperator}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Feather
                    name="users"
                    size={25}
                    color={!focused ? "#808080" : "orange"}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
