import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyProfile } from "../screens/profile/my-profile";
import TabStack from "./tabStack";

const Stack = createNativeStackNavigator();

export default function userStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tab" component={TabStack} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
