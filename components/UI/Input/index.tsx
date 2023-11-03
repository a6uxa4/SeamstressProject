import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export function InputUI(props): JSX.Element {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    !props.paswrord
  );

  const updateSecureTextEntry = () => {
    setSecureTextEntry((prevState: boolean) => !prevState);
  };

  return (
    <View style={styles.containerInput}>
      {props.label && <Text style={styles.textLabel}>{props.label}</Text>}
      <TextInput
        secureTextEntry={props.password && secureTextEntry}
        style={styles.inputStyle}
        {...props}
      />
      {props.password && (
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={updateSecureTextEntry}
        >
          {secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      )}
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
  },
  passwordIcon: {
    position: "relative",
    top: -33,
    left: "92%",
  },
  textLabel: {
    color: "grey",
    fontSize: 13,
  },
});
