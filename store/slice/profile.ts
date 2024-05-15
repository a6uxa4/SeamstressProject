import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenID: "",
  UserData: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  },
};

const ProfileSlice = createSlice({
  name: "ProfileSlice",
  initialState,
  reducers: {
    saveTokenID: (state, { payload }) => {
      state.tokenID = payload;
    },
    saveUserData: (state, { payload }) => {
      state.UserData = {
        ...state.UserData,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
      };
    },
  },
  extraReducers: (builder) => {},
});

export default ProfileSlice;

export const { saveTokenID, saveUserData } = ProfileSlice.actions;
