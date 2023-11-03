import { StyleSheet, Text, View } from "react-native";

export function InnerMessage({ navigation: { goBack } }) {
  return (
    <View style={styles.container}>
      <Text>HELLo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 16,
    paddingTop: 80,
  },
});
