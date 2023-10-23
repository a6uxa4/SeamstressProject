import React, { useEffect, useState } from "react";
import UserStack from "./userStack";
import AuthStack from "./authStack";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import Loading from "../components/Loading";

export default function RootNavigation() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      setLoading(false);
    });

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
