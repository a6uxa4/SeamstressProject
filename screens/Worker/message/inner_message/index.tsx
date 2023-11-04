import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import { Path, Svg } from "react-native-svg";

export function InnerMessage({ navigation: { goBack } }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Svg width={24} height={22} viewBox="0 0 16 14" fill="none">
            <Path
              d="M0.895842 7.25142L14.6458 7.25142"
              stroke="#181D27"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M6.4415 12.7738L0.895664 7.2518L6.4415 1.72888"
              stroke="#181D27"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <View style={styles.containerInside}>
          <Avatar
            size="small"
            rounded
            title="BA"
            source={{
              uri: null,
            }}
            containerStyle={{ backgroundColor: "#e6e1e1" }}
            titleStyle={{ color: "#00537a" }}
          />
          <Text style={styles.header_text}>Beybars Erkulow</Text>
        </View>
      </View>
      <ScrollView style={styles.containerMessage}>
        <View style={styles.containerChat}>
          <View style={styles.containerMessageInsideRight}>
            <Text>Hello</Text>
          </View>
          <View style={styles.containerMessageInsideLeft}>
            <Text>Hello how are you</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 50,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: 70,
    gap: 60,
    justifyContent: "flex-start",
    paddingLeft: 16,
    paddingTop: 5,
    borderBottomWidth: 0.4,
    borderColor: "#00537a",
  },
  header_text: {
    fontSize: 20,
    fontWeight: "600",
  },
  containerInside: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  containerChat: {
    display: "flex",
    gap: 10,
  },
  containerMessage: {
    padding: 10,
  },
  containerMessageInsideRight: {
    marginLeft: "75%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#CFD7F2",
  },
  containerMessageInsideLeft: {
    marginRight: "60%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#EBEBEB",
  },
});
