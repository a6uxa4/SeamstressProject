import React, { useEffect, useState } from "react";
import AuthStack from "./Stack/authStack";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../config/firebase";
import Loading from "../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WorkerStack from "./Stack/workerStack";
import OrganizationStack from "./Stack/organizationStack";
import VerifcationPage from "../screens/sign-up/verification";
import { useDispatch } from "react-redux";
import { saveTokenID, saveUserData } from "../store/slice/profile";
import { doc, getDoc } from "firebase/firestore";

export default function RootNavigation() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

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
      const storedUserToken = await AsyncStorage.getItem("tokenID");
      const userDocRef = doc(FIRESTORE_DB, "Users", storedUserToken);
      getDoc(userDocRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.data();
          dispatch(saveUserData(userData));
        }
      });
      if (storedUserToken) {
        dispatch(saveTokenID(storedUserToken));
      }
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

  const role = "WORKER" || "ORGANIZATION";

  if (loading) {
    return <Loading />;
  } else {
    if (user) {
      if (!FIREBASE_AUTH.currentUser?.emailVerified) {
        return <VerifcationPage />;
      } else {
        switch (role) {
          case "WORKER":
            return <WorkerStack />;
          case "ORGANIZATION":
            return <OrganizationStack />;
          default:
            return <AuthStack />;
        }
      }
    } else {
      return <WorkerStack />;
    }
  }
}
