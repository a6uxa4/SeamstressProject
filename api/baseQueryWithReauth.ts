import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";

export const baseQuery = fetchBaseQuery({
  baseUrl: "dhtldasda",
  prepareHeaders(headers, { getState }: any) {
    const token = getState().auth.user?.token;
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
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
    return handleLogout();
  } else if (result?.error?.status === 401 || result?.response?.status) {
  }
  return result;
};
