import { ReactNode } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ISideBarContentProps {
  components: ReactNode;
  title: string;
  selectedSideBar: number;
  id: number;
  setSelected: (id: number) => void;
}

export default function SideBarContent({
  components,
  title,
  selectedSideBar,
  id,
  setSelected,
}: ISideBarContentProps): JSX.Element {
  const isSelectedText =
    id !== selectedSideBar
      ? styles.content_sidebar_text
      : styles.content_sidebar_text_active;

  return (
    <TouchableOpacity
      style={styles.container_content_sidebar}
      onPress={() => {
        setSelected(id);
      }}
    >
      <View style={styles.container_content_sidebar}>
        <View>{components}</View>
        <Text style={isSelectedText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container_content_sidebar: {
    width: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  content_sidebar_text: {
    fontFamily: "Arial",
    fontWeight: "500",
    color: "#808080",
    fontSize: 14,
  },
  content_sidebar_text_active: {
    fontFamily: "Arial",
    fontWeight: "500",
    color: "orange",
    fontSize: 14,
  },
});
