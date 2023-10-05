import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import SideBar from "../../components/side-bar";
import { Works } from "../../screens/works";
import { Profile } from "../../screens/profile";
import { Cooperator } from "../../screens/cooperator";

export default function Layout() {
  const [selected, setSelected] = useState(0);

  const SCREENS = [<Works />, <Profile />, <Cooperator />];
  return (
    <View style={styles.container}>
      {SCREENS[selected]}
      <SideBar selected={selected} setSelected={setSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
