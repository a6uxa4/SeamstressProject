import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SearchInputUI } from "../../../components/UI/SearchInput";
import * as Animatable from "react-native-animatable";
import { Avatar, Badge } from "react-native-elements";

export function Message({ navigation: { navigate } }) {
  const DATA = [
    {
      avatar:
        "https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-1169775.jpg",
      fullName: "Azamat Maksatbekov",
      lastTime: "13:34",
      lastMessage: "Hello do you want work ?",
      message: ["hello", "want"],
    },
    {
      avatar: null,
      fullName: "Abu Melisov",
      lastTime: "15:29",
      lastMessage: "I need work please",
      message: ["hello"],
    },
    {
      avatar:
        "https://avatars.mds.yandex.net/i?id=0dcc0f9ac799de0c040458780fb9256d2cd531b6-10639710-images-thumbs&n=13",
      fullName: "Ali Urmatov",
      lastTime: "17:47",
      lastMessage: "I am is beautiful worker",
      message: [],
    },
    {
      avatar: null,
      fullName: "Beybars Erkulow",
      lastTime: "12:45",
      lastMessage: "I am is frontend developer",
      message: ["hello", "buy", "idid"],
    },
  ];
  return (
    <View style={styles.container}>
      <SearchInputUI />
      <Animatable.View style={styles.menu} animation="fadeInUpBig">
        {DATA.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.containerCard}
              key={index}
              onPress={() => navigate("InnerMessage")}
            >
              <View style={styles.containerInside}>
                <Avatar
                  size="medium"
                  rounded
                  title={`${item.fullName.split(" ")[0][0]}${
                    item.fullName.split(" ")[1][0]
                  }`}
                  source={{
                    uri: item.avatar,
                  }}
                  containerStyle={{ backgroundColor: "#e6e1e1" }}
                  titleStyle={{ color: "#00537a" }}
                />
                <View style={styles.containerLeft}>
                  <Text style={styles.textFullName}>{item.fullName}</Text>
                  <Text style={styles.textTime}>{item.lastMessage}</Text>
                </View>
              </View>
              <View style={styles.containerRight}>
                <Text style={styles.textTime}>{item.lastTime}</Text>
                <Badge
                  status="primary"
                  value={item.message.length}
                  badgeStyle={{
                    backgroundColor: "#00537a",
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    opacity: item.message.length,
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 15,
    paddingTop: 60,
  },
  menu: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: 10,
  },
  containerCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 0.4,
    borderColor: "#00537a",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  containerInside: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  containerRight: {
    display: "flex",
    gap: 5,
  },
  containerLeft: {
    display: "flex",
    gap: 3,
  },
  textTime: {
    color: "gray",
  },
  textFullName: {
    fontSize: 17,
    fontWeight: "500",
  },
});
