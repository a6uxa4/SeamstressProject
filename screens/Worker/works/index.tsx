import { StyleSheet, Text, View } from "react-native";

export function Works() {
  return (
    <View style={styles.container}>
      <Text>Works</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
  },
});
