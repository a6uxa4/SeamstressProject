import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Layout } from "../components/layout";

const Stack = createNativeStackNavigator();

export default function userStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inside" component={Layout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
