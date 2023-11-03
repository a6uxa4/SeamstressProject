import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import { InputUI } from "../../../../components/UI/Input";
import { useState } from "react";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../../../../config/firebase";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export function MyProfile({ navigation: { goBack } }) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const saveProfile = async () => {
    try {
      if (FIREBASE_AUTH.currentUser) {
        const user = FIREBASE_AUTH.currentUser;
        await updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
        });
        const userUid = user.uid;
        const userRef = doc(FIRESTORE_DB, "users", userUid);
        await setDoc(userRef, {
          firstName,
          lastName,
        });
        Alert.alert("Профиль обновлен успешно!");
      }
    } catch (error) {
      Alert.alert("Произошла ошибка при сохранении профиля");
    }
  };

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
        <Text style={styles.header_text}>Персональные данные</Text>
      </View>
      <View>
        <InputUI
          placeholder="Имя"
          label="Имя"
          value={firstName}
          onChangeText={(val) => setFirstName(val)}
        />
        <InputUI
          placeholder="Фамилия"
          label="Фамилия"
          value={lastName}
          onChangeText={(val) => setLastName(val)}
        />
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={saveProfile}>
            <Text style={styles.textSign}>Сохранить</Text>
            {false && <ActivityIndicator color="white" />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    gap: 50,
  },
  header_text: {
    fontSize: 20,
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  signIn: {
    width: "100%",
    height: 50,
    backgroundColor: "#013c58",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 15,
  },
});
