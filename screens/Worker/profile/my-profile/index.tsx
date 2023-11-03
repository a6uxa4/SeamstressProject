import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import { InputUI } from "../../../../components/UI/Input";
import { useState } from "react";
import { FIREBASE_AUTH } from "../../../../config/firebase";
import { updateProfile } from "firebase/auth";

export function MyProfile({ navigation: { goBack } }) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const saveProfile = () => {
    setLoading(true);
    const user = FIREBASE_AUTH.currentUser;
    const updatedDisplayName = `${firstName} ${lastName}`;
    updateProfile(user, { displayName: updatedDisplayName }).then(() => {
      setLastName("");
      setFirstName("");
      setLoading(false);
      goBack();
    });
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
          <TouchableOpacity
            disabled={loading}
            style={styles.signIn}
            onPress={saveProfile}
          >
            <Text style={styles.textSign}>Сохранить</Text>
            {loading && <ActivityIndicator color="white" />}
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
