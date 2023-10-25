import { StyleSheet, Text, View } from "react-native";

export function MyProfile() {
  return (
    <View style={styles.container}>
      <Text>MyProfile</Text>
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
