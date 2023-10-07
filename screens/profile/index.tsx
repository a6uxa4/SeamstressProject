import { StyleSheet, View } from "react-native";

export function Profile() {
  return <View style={styles.container}></View>;
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
