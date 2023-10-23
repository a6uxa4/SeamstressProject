import { configureStore } from "@reduxjs/toolkit";
import authService from "../services/auth.service";

export const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
