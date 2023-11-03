import { StyleSheet, TextInput, View } from "react-native";
import { Path, Svg } from "react-native-svg";

export function SearchInputUI(props): JSX.Element {
  return (
    <View style={styles.containerInput}>
      <View style={styles.containerIcon}>
        <Svg width={25} height={25} viewBox="0 0 24 24" fill="none">
          <Path
            d="M15.284 15.284C17.8653 12.7026 17.8653 8.51739 15.284 5.93602C12.7026 3.35466 8.51739 3.35466 5.93602 5.93602C3.35466 8.51739 3.35466 12.7026 5.93602 15.284C8.51739 17.8653 12.7026 17.8653 15.284 15.284ZM15.284 15.284L20 20"
            stroke="gray"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </Svg>
      </View>
      <TextInput placeholder="Поиск..." style={styles.inputStyle} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    width: "100%",
    height: 60,
  },
  inputStyle: {
    padding: 12,
    borderRadius: 8,
    borderColor: "gainsboro",
    borderWidth: 1.5,
    paddingLeft: 30,
  },
  containerIcon: {
    position: "absolute",
    top: "16%",
    left: 6,
  },
});
