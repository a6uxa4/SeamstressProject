import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrganizationTabStack from "../Tab/tabOrganizationStack";
import { MyProfile } from "../../screens/Worker/profile/my-profile";

const Stack = createNativeStackNavigator();

export default function OrganizationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tab" component={OrganizationTabStack} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
