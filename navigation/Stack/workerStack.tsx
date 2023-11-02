import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkerTabStack from "../Tab/tabWorkerStack";
import { MyProfile } from "../../screens/Worker/profile/my-profile";

const Stack = createNativeStackNavigator();

export default function WorkerStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tab" component={WorkerTabStack} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
