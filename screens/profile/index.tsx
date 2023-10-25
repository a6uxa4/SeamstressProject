import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Path, Svg } from "react-native-svg";
import { FIREBASE_AUTH } from "../../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";

export function Profile({ navigation: { navigate } }) {
  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      AsyncStorage.removeItem("user");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_card_profile}>
        <View style={styles.container_card_inside}>
          <View style={styles.user_logo}>
            <Svg width={50} height={50} viewBox="0 0 14 18" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.9873 11.7886C3.76428 11.7886 1.0119 12.2759 1.0119 14.2275C1.0119 16.1791 3.74682 16.6838 6.9873 16.6838C10.2103 16.6838 12.9619 16.1957 12.9619 14.2449C12.9619 12.2941 10.2278 11.7886 6.9873 11.7886Z"
                stroke={"#00537a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.3}
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.98729 9.00492C9.10237 9.00492 10.8167 7.28984 10.8167 5.17476C10.8167 3.05968 9.10237 1.3454 6.98729 1.3454C4.87221 1.3454 3.15713 3.05968 3.15713 5.17476C3.14998 7.2827 4.85316 8.99778 6.9603 9.00492H6.98729Z"
                stroke={"#00537a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.3}
              />
            </Svg>
          </View>
          <View style={styles.container_text}>
            <Text style={styles.text_fullName}>Asan Asanov</Text>
            <Text style={styles.text_email}>Abu@gmail.com</Text>
          </View>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.container_menu}>
        <TouchableOpacity
          style={styles.container_menu_card}
          onPress={() => navigate("MyProfile")}
        >
          <View style={styles.container_icon}>
            <Svg width={20} height={20} viewBox="0 0 14 18" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.9873 11.7886C3.76428 11.7886 1.0119 12.2759 1.0119 14.2275C1.0119 16.1791 3.74682 16.6838 6.9873 16.6838C10.2103 16.6838 12.9619 16.1957 12.9619 14.2449C12.9619 12.2941 10.2278 11.7886 6.9873 11.7886Z"
                stroke="#00537a"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.98729 9.00492C9.10237 9.00492 10.8167 7.28984 10.8167 5.17476C10.8167 3.05968 9.10237 1.3454 6.98729 1.3454C4.87221 1.3454 3.15713 3.05968 3.15713 5.17476C3.14998 7.2827 4.85316 8.99778 6.9603 9.00492H6.98729Z"
                stroke="#00537a"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={styles.container_text_and_description}>
            <Text style={styles.card_name}>Мой профиль</Text>
            <Text style={styles.card_description}>
              Внесите изменения в свою профиль
            </Text>
          </View>
          <View style={styles.container_icon_navigate}>
            <Svg width={7} height={12} viewBox="0 0 7 12" fill="#ABABAB">
              <Path d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z" />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container_menu_card}>
          <View style={styles.container_icon}>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <Path
                d="M19 11H5M19 11C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11M19 11V9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7M5 11V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7M17 7V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3H9C8.46957 3 7.96086 3.21071 7.58579 3.58579C7.21071 3.96086 7 4.46957 7 5V7M17 7H7"
                stroke="#00537a"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={styles.container_text_and_description}>
            <Text style={styles.card_name}>Ваши специальности</Text>
            <Text style={styles.card_description}>
              Кем вы хотите работать ?
            </Text>
          </View>
          <View style={styles.container_icon_navigate}>
            <Svg width={7} height={12} viewBox="0 0 7 12" fill="#ABABAB">
              <Path d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z" />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={styles.container_menu_card}
        >
          <View style={styles.container_icon}>
            <Svg width={20} height={20} viewBox="0 0 18 18" fill="none">
              <Path
                d="M11.5133 5.15792V4.38042C11.5133 2.68459 10.1383 1.30959 8.4425 1.30959H4.38C2.685 1.30959 1.31 2.68459 1.31 4.38042V13.6554C1.31 15.3513 2.685 16.7263 4.38 16.7263H8.45083C10.1417 16.7263 11.5133 15.3554 11.5133 13.6646V12.8788"
                stroke="#00537a"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M17.1746 9.01782H7.14044"
                stroke="#00537a"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M14.7343 6.58856L17.1743 9.01773L14.7343 11.4477"
                stroke="#00537a"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={styles.container_text_and_description}>
            <Text style={styles.card_name}>Выйти</Text>
            <Text style={styles.card_description}>Выйти из приложения</Text>
          </View>
          <View style={styles.container_icon_navigate}>
            <Svg width={7} height={12} viewBox="0 0 7 12" fill="#ABABAB">
              <Path d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z" />
            </Svg>
          </View>
        </TouchableOpacity>
      </Animatable.View>
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
  container_card_profile: {
    width: "100%",
    height: 90,
    backgroundColor: "#013c58",
    borderRadius: 10,
    padding: 16,
  },
  container_card_inside: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 11,
  },
  user_logo: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container_text: {
    display: "flex",
    gap: 4,
  },
  text_fullName: {
    fontFamily: "Arial",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 19,
    letterSpacing: 2,
    color: "white",
  },
  text_email: {
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 1,
    color: "white",
  },
  container_menu: {
    width: "100%",
    height: 280,
    marginTop: 22,
    gap: 25,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  container_menu_card: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderTopWidth: 0.2,
    borderTopColor: "#e5e2e2",
  },
  container_icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a8e8f9",
  },
  container_text_and_description: {
    width: "70%",
  },
  card_name: {
    fontFamily: "Arial",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 19.5,
    color: "#181D27",
  },
  card_description: {
    fontFamily: "Arial",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
    color: "#ABABAB",
  },
  container_icon_navigate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
