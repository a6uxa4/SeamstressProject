import { StyleSheet, Text, View } from "react-native";

export function Message() {
  return (
    <View style={styles.container}>
      <Text>Message</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
  },
});
