import React, { useEffect, useState } from "react";
import UserStack from "./userStack";
import AuthStack from "./authStack";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import Loading from "../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootNavigation() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        AsyncStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      } else {
        AsyncStorage.removeItem("user");
        setUser(null);
      }
      setLoading(false);
    });

    const checkAsyncStorage = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    checkAsyncStorage();

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return user ? <UserStack /> : <AuthStack />;
  }
}
