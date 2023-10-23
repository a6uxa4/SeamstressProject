import { signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { FIREBASE_AUTH } from "../../config/firebase";

export function Profile() {
  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.facebook}
          onPress={() => handleLogout()}
        >
          <Svg width={25} height={23} viewBox="0 0 25 23" fill="none">
            <G clipPath="url(#clip0_4096_122333)">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1763 3.84889H10.094C8.38841 3.84889 8.01011 4.60548 8.01011 5.74037V8.39334H11.9887L11.418 12.3687H8.01011V22.7833H3.84396V12.3687H0.436035V8.39334H3.84396V5.36371C3.84396 1.95578 5.92785 0.0610352 9.14663 0.0610352C10.6631 0.0610352 11.9871 0.250183 12.1763 0.250183V3.84889Z"
                fill="#3B5998"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_4096_122333">
                <Rect width="24.3514" height="22.8295" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Text style={styles.textSignFacebook}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90.1%",
    backgroundColor: "orange",
    justifyContent: "center",
  },
  signIn: {
    width: "90%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 35,
    backgroundColor: "red",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    alignItems: "center",
  },
  facebook: {
    width: "90%",
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
  },
  textSignFacebook: {
    color: "#757575",
    fontWeight: "500",
    fontSize: 14,
  },
});
