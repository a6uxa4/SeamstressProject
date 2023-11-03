import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkerTabStack from "../Tab/tabWorkerStack";

import { MyProfile } from "../../screens/Worker/profile/my-profile";
import { NewPassword } from "../../screens/Worker/profile/new-password";

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
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
