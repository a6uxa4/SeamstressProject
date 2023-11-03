import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkerTabStack from "../Tab/tabWorkerStack";

import { MyProfile } from "../../screens/Worker/profile/my-profile";
import { NewPassword } from "../../screens/Worker/profile/new-password";
import { InnerMessage } from "../../screens/Worker/message/inner_message";

const Stack = createNativeStackNavigator();

export default function WorkerStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tab" component={WorkerTabStack} />
        {/* Profile */}
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        {/* Message */}
        <Stack.Screen name="InnerMessage" component={InnerMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
