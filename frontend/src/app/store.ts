import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { loginAPI } from '../features/login/loginAPI';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
