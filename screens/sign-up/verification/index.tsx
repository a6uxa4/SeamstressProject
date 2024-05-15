import { Image, StyleSheet, Text, View } from "react-native";

export default function VerifcationPage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImage}
        source={require("../../../assets/verificationPage.png")}
      />
      <Text style={styles.textPage}>
        Переходите на почту и подвердите аккаунт !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    width: "100%",
    height: 400,
    objectFit: "contain",
  },
  textPage: {
    fontSize: 27,
    fontWeight: "500",
    textAlign: "center",
  },
});
