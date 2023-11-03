import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import { InputUI } from "../../../../components/UI/Input";

export function NewPassword({ navigation: { goBack } }) {
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
        />
        <InputUI
          password={true}
          placeholder="Новый пароль"
          label="Новый пароль"
        />
        <InputUI
          password={true}
          placeholder="Повторите новый пароль"
          label="Повторите новый пароль"
        />
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={goBack}>
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
