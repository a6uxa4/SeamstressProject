import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserFromStorage = async () => {
  const user = await AsyncStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://projectworkshops-605f5-default-rtdb.firebaseio.com/",
  prepareHeaders(headers) {
    const token = getUserFromStorage().then(
      ({ stsTokenManager }) => stsTokenManager.accessToken
    );
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (
  args: FetchArgs | string,
  api: BaseQueryApi,
  extraOptions: any
) => {
  const result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403 || result?.response?.status === 403) {
    const handleLogout = async () => {
      try {
        await signOut(FIREBASE_AUTH);
        await AsyncStorage.removeItem("user");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
    return handleLogout();
  } else if (result?.error?.status === 401 || result?.response?.status) {
  }
  return result;
};
