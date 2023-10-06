import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";

import { SignIn } from "./screens/sign-in";
import { SignUp } from "./screens/sign-up";
import { Layout } from "./components/layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userData) => {
        if (userData) {
          setUser(JSON.parse(userData));
        }
      })
      .catch((error) => {
        console.error("Ошибка при чтении данных из AsyncStorage:", error);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Inside" : "SignIn"}
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <Stack.Screen name="Inside" component={Layout} />
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
