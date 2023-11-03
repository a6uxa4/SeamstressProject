import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SearchInputUI } from "../../../components/UI/SearchInput";
import * as Animatable from "react-native-animatable";

export function Message({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <SearchInputUI />
      <Animatable.View style={styles.menu} animation="fadeInUpBig">
        <TouchableOpacity
          style={styles.userCard}
          onPress={() => navigate("InnerMessage")}
        >
          <View style={styles.userAvatar}>
            <Text style={styles.textUserAvatar}>E</Text>
          </View>
          <Text style={styles.textUserName}>Esen Niazov</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userCard}
          onPress={() => navigate("InnerMessage")}
        >
          <View style={styles.userAvatar}>
            <Text style={styles.textUserAvatar}>I</Text>
          </View>
          <Text style={styles.textUserName}>Irina Kairatova</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userCard}
          onPress={() => navigate("InnerMessage")}
        >
          <View style={styles.userAvatar}>
            <Text style={styles.textUserAvatar}>B</Text>
          </View>
          <Text style={styles.textUserName}>Bilimbek Adisov</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 15,
    paddingTop: 60,
  },
  menu: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: 10,
  },
  userCard: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  userAvatar: {
    width: 54,
    height: 54,
    borderRadius: 100,
    backgroundColor: "#efeeee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textUserAvatar: {
    fontSize: 30,
    fontWeight: "500",
    color: "#7b7b7b",
  },
  textUserName: {
    fontSize: 18,
    fontWeight: "500",
  },
});
