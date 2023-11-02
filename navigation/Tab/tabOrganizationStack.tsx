import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Works } from "../../screens/Worker/works";
import { Profile } from "../../screens/Worker/profile";
import { Cooperator } from "../../screens/cooperator";
import { Path, Svg } from "react-native-svg";

const Tab = createBottomTabNavigator();

export default function OrganizationTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Профиль"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Работа"
        component={Works}
        options={{
          tabBarLabel: ({ focused, children }) => (
            <Text style={{ color: !focused ? "#00537a" : "#a8e8f9" }}>
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21 13.255C18.1405 14.4112 15.0844 15.0038 12 15C8.817 15 5.78 14.38 3 13.255M12 12H12.01M16 6V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16ZM5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z"
                    stroke={!focused ? "#00537a" : "#a8e8f9"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.3}
                  />
                </Svg>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={Profile}
        options={{
          tabBarLabel: ({ focused, children }) => (
            <Text style={{ color: !focused ? "#00537a" : "#a8e8f9" }}>
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Svg width={30} height={30} viewBox="0 0 14 18" fill="none">
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.9873 11.7886C3.76428 11.7886 1.0119 12.2759 1.0119 14.2275C1.0119 16.1791 3.74682 16.6838 6.9873 16.6838C10.2103 16.6838 12.9619 16.1957 12.9619 14.2449C12.9619 12.2941 10.2278 11.7886 6.9873 11.7886Z"
                    stroke={!focused ? "#00537a" : "#a8e8f9"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.3}
                  />
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.98729 9.00492C9.10237 9.00492 10.8167 7.28984 10.8167 5.17476C10.8167 3.05968 9.10237 1.3454 6.98729 1.3454C4.87221 1.3454 3.15713 3.05968 3.15713 5.17476C3.14998 7.2827 4.85316 8.99778 6.9603 9.00492H6.98729Z"
                    stroke={!focused ? "#00537a" : "#a8e8f9"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.3}
                  />
                </Svg>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Сотрудники"
        component={Cooperator}
        options={{
          tabBarLabel: ({ focused, children }) => (
            <Text style={{ color: !focused ? "#00537a" : "#a8e8f9" }}>
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M17 20H22V18C22 17.3765 21.8057 16.7686 21.4441 16.2606C21.0826 15.7527 20.5718 15.37 19.9827 15.1658C19.3937 14.9615 18.7556 14.9459 18.1573 15.121C17.5589 15.2962 17.03 15.6534 16.644 16.143M17 20H7M17 20V18C17 17.344 16.874 16.717 16.644 16.143M16.644 16.143C16.2726 15.215 15.6318 14.4195 14.804 13.8591C13.9762 13.2988 12.9996 12.9993 12 12.9993C11.0004 12.9993 10.0238 13.2988 9.196 13.8591C8.36825 14.4195 7.72736 15.215 7.356 16.143M7 20H2V18C2.00005 17.3765 2.19434 16.7686 2.55586 16.2606C2.91739 15.7527 3.42819 15.37 4.01725 15.1658C4.60632 14.9615 5.24438 14.9459 5.84274 15.121C6.4411 15.2962 6.97003 15.6534 7.356 16.143M7 20V18C7 17.344 7.126 16.717 7.356 16.143M15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10C11.2044 10 10.4413 9.68393 9.87868 9.12132C9.31607 8.55871 9 7.79565 9 7C9 6.20435 9.31607 5.44129 9.87868 4.87868C10.4413 4.31607 11.2044 4 12 4C12.7956 4 13.5587 4.31607 14.1213 4.87868C14.6839 5.44129 15 6.20435 15 7ZM21 10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12C18.4696 12 17.9609 11.7893 17.5858 11.4142C17.2107 11.0391 17 10.5304 17 10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10ZM7 10C7 10.5304 6.78929 11.0391 6.41421 11.4142C6.03914 11.7893 5.53043 12 5 12C4.46957 12 3.96086 11.7893 3.58579 11.4142C3.21071 11.0391 3 10.5304 3 10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10Z"
                    stroke={!focused ? "#00537a" : "#a8e8f9"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.3}
                  />
                </Svg>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
