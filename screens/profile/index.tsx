import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Profile() {
  async function removeUserData() {
    try {
      await AsyncStorage.removeItem("user");
      console.log("Данные пользователя успешно удалены из AsyncStorage.");
    } catch (error) {
      console.error(
        "Ошибка при удалении данных пользователя из AsyncStorage:",
        error
      );
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={removeUserData}>
          <Text style={styles.textSign}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90.1%",
    backgroundColor: "orange",
    justifyContent: "center",
  },
  signIn: {
    width: "90%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 35,
    backgroundColor: "red",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    alignItems: "center",
  },
});
