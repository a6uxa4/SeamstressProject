import { createApi } from "@reduxjs/toolkit/query/react";
import { IAuthResponse, IEmailPassword } from "../common/auth.interface";
import { baseQueryWithReauth } from "../api/baseQueryWithReauth";

const authService = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, IEmailPassword>({
      query: (body) => ({
        url: "auth/authentication",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authService;

export default authService;
