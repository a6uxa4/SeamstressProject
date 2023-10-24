import { signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FIREBASE_AUTH } from "../../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Profile() {
  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      AsyncStorage.removeItem("user");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.facebook}
          onPress={() => handleLogout()}
        >
          <Text style={styles.textSignFacebook}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
  },
  button: {
    height: 50,
    alignItems: "center",
    padding: 20,
  },
  facebook: {
    width: "90%",
    height: 30,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 200,
  },
  textSignFacebook: {
    color: "#757575",
    fontWeight: "500",
    fontSize: 14,
  },
});
