import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function InnerMessage({ navigation: { goBack } }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text>Назад</Text>
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
