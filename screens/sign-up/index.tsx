import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Animatable from "react-native-animatable";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/SimpleLineIcons";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

export function SignUp({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const signUpWithEmailAndPasswordHandler = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      navigation.navigate("SignIn");
      alert(response);
    } catch (error) {
      alert(error);
    } finally {
      setData({
        email: "",
        password: "",
        secureTextEntry: true,
      });
      setLoading(false);
    }
  };

  const handleEmailChange = (val: string) => {
    setData({
      ...data,
      email: val,
    });
  };

  const handlePasswordChange = (val: string) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Регистрация !</Text>
        <View style={styles.containerIhaveAuth}>
          <TouchableOpacity
            style={styles.containerIhaveAuthButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.textSignGoogle}>У меня есть аккаунт</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <EvilIcons name="envelope" color="grey" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleEmailChange(val)}
              value={data.email}
            />
          </View>
          <Text style={styles.text_footer}>Пароль</Text>
          <View style={styles.action}>
            <Feather name="lock" color="grey" size={20} />
            <TextInput
              placeholder="Пароль"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
              value={data.password}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              disabled={loading}
              onPress={signUpWithEmailAndPasswordHandler}
            >
              <Text style={styles.textSign}>Регистрация</Text>
              {loading && <ActivityIndicator color="white" />}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.google}>
              <Svg width={25} height={25} viewBox="0 0 16 17" fill="none">
                <G clip-path="url(#clip0_9797_316)">
                  <Path
                    d="M15.7376 8.68372C15.7376 8.1399 15.6934 7.59315 15.599 7.05815H8.02661V10.1388H12.363C12.183 11.1324 11.6048 12.0113 10.7582 12.5698V14.5687H13.3453C14.8645 13.1754 15.7376 11.1177 15.7376 8.68372Z"
                    fill="#4285F4"
                  />
                  <Path
                    d="M8.02669 16.5C10.1919 16.5 12.0179 15.7916 13.3483 14.5687L10.7612 12.5698C10.0415 13.0578 9.11225 13.3341 8.02964 13.3341C5.93521 13.3341 4.15937 11.9261 3.5222 10.033H0.852539V12.0936C2.21539 14.7951 4.99125 16.5 8.02669 16.5Z"
                    fill="#34A853"
                  />
                  <Path
                    d="M3.51924 10.033C3.18295 9.03941 3.18295 7.96353 3.51924 6.96996V4.90933H0.852531C-0.28613 7.16985 -0.28613 9.83309 0.852531 12.0936L3.51924 10.033Z"
                    fill="#FBBC04"
                  />
                  <Path
                    d="M8.02669 3.6659C9.17125 3.64827 10.2775 4.07744 11.1064 4.86524L13.3985 2.58121C11.9471 1.22313 10.0208 0.476485 8.02669 0.500001C4.99125 0.500001 2.21539 2.20494 0.852539 4.90933L3.51925 6.96996C4.15347 5.07395 5.93226 3.6659 8.02669 3.6659Z"
                    fill="#EA4335"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_9797_316">
                    <Rect
                      width="15.7377"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={styles.textSignGoogle}>
                Зарегистрироваться через Google
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.facebook}>
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
              <Text style={styles.textSignFacebook}>
                Зарегистрироваться через Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 20,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "grey",
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
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
    backgroundColor: "orange",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  google: {
    width: "90%",
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    gap: 20,
    marginTop: 20,
  },
  textSignGoogle: {
    color: "#757575",
    fontWeight: "500",
    fontSize: 14,
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
  containerIhaveAuth: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  containerIhaveAuthButton: {
    width: 180,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
