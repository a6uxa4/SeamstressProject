import { StyleSheet, View } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import SideBarContent from "./sidebar-content";

interface ISideBarProps {
  selected: number;
  setSelected: (id: number) => void;
}

export default function SideBar({
  selected,
  setSelected,
}: ISideBarProps): JSX.Element {
  const SIDEBAR_CONTENTS = [
    {
      components: (
        <Octicons
          name="organization"
          size={30}
          color={selected !== 0 ? "#808080" : "orange"}
        />
      ),
      title: "Работа",
      id: 0,
    },
    {
      components: (
        <FontAwesome5Icon
          name="user"
          size={30}
          color={selected !== 1 ? "#808080" : "orange"}
        />
      ),
      title: "Профиль",
      id: 1,
    },
    {
      components: (
        <Feather
          name="users"
          size={30}
          color={selected !== 2 ? "#808080" : "orange"}
        />
      ),
      title: "Сотрудники",
      id: 2,
    },
  ];

  return (
    <View style={styles.container_sidebar}>
      {SIDEBAR_CONTENTS.map((sideContent) => (
        <SideBarContent
          setSelected={setSelected}
          key={sideContent.id}
          selectedSideBar={selected}
          id={sideContent.id}
          components={sideContent.components}
          title={sideContent.title}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container_sidebar: {
    width: "100%",
    padding: 10,
    paddingBottom: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#e4e4ee",
  },
});
