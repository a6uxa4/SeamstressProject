import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Message({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate("InnerMessage")}
        style={{ backgroundColor: "blue", padding: 30 }}
      >
        <Text>Asan Asanov</Text>
      </TouchableOpacity>
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
