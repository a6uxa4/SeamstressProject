import { StyleSheet, Text, View } from "react-native";

export function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90.1%",
    backgroundColor: "orange",
  },
});
