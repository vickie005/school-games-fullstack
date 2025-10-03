import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../../types/types";
import type { LoginFormData } from "../../types/types";
import type { RegisterFormData } from "../../types/types";
import type { TLoginResponse } from "../../types/types";
import type { TRegisterResponse } from "../../types/types";
import { ApiDomain } from "../../utils/ApiDomain";

// Error response interface
export interface ApiError {
    message: string;
    status: number;
    data?: any;
}

export const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({ 
        baseUrl: ApiDomain,
        prepareHeaders: (headers, { getState }) => {
            // Get token from Redux state if available
            const state = getState() as any;
            const token = state.auth?.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['User', 'Auth'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<TLoginResponse, LoginFormData>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User', 'Auth'],
        }),
        registerUser: builder.mutation<TRegisterResponse, RegisterFormData>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: ['User', 'Auth'],
        }),
        logoutUser: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            invalidatesTags: ['User', 'Auth'],
        }),
        getCurrentUser: builder.query<User, void>({
            query: () => '/auth/me',
            providesTags: ['User'],
        }),
        updateUser: builder.mutation<User, Partial<User>>({
            query: (userData) => ({
                url: '/auth/profile',
                method: 'PUT',
                body: userData,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useLogoutUserMutation,
    useGetCurrentUserQuery,
    useUpdateUserMutation,
} = loginAPI;