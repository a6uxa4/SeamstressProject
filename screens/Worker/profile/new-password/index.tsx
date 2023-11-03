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
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

export function NewPassword({ navigation: { goBack } }) {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangePassword = () => {
    if (newPassword !== repeatPassword) {
      setError("Новые пароли не совпадают");
      return;
    }
    setError(null);
    setLoading(true);
    const user = FIREBASE_AUTH.currentUser;
    const credential = EmailAuthProvider.credential(user.email, oldPassword);
    reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword(user, newPassword)
          .then(() => {
            setOldPassword("");
            setNewPassword("");
            setRepeatPassword("");
            goBack();
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch((error) => {
        setError(
          "Аутентификация не удалась. Пожалуйста, проверьте старый пароль."
        );
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
        <Text style={styles.header_text}>Изменить пароль</Text>
      </View>
      <View style={styles.menu}>
        <InputUI
          password={true}
          placeholder="Старый пароль"
          label="Старый пароль"
          value={oldPassword}
          onChangeText={(val) => setOldPassword(val)}
        />
        <InputUI
          password={true}
          placeholder="Новый пароль"
          label="Новый пароль"
          value={newPassword}
          onChangeText={(val) => setNewPassword(val)}
        />
        <InputUI
          password={true}
          placeholder="Повторите новый пароль"
          label="Повторите новый пароль"
          value={repeatPassword}
          onChangeText={(val) => setRepeatPassword(val)}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={handleChangePassword}
            disabled={loading}
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
  errorText: {
    color: "red",
    fontSize: 16,
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    gap: 80,
  },
  header_text: {
    fontSize: 20,
    fontWeight: "600",
  },
  menu: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
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
