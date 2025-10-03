// Database schema types (matching backend)
export interface TSAuth {
    auth_id: number;
    user_id: number;
    username: string | null;
    password_hash: string;
    role: string;
    verification_token: string | null;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
}

// Updated User interface to match database schema
export interface User {
    id: number;
    fullname: string;
    email: string;
    phoneNumber: string;
    role: 'user' | 'admin' | 'superadmin' | 'disabled';
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    lastLoginAt: string | null;
}

// Auth state interface
export interface UserState {
    token: string | null;
    user: User | null;
    isAuthenticated: boolean;
}

// Login/Register form data
export interface LoginFormData {
    email: string;
    password: string;
}

export interface RegisterFormData {
    fullname: string;
    email: string;
    phoneNumber: string;
    password: string;
}

// API Response types
export interface TLoginResponse {
    token: string;
    user: User;
}

export interface TRegisterResponse {
    token: string;
    user: User;
}

// API Error types
export interface ApiError {
    message: string;
    status: number;
    data?: any;
}

export interface ValidationError {
    field: string;
    message: string;
}

// Redux state types
export interface RootState {
    auth: UserState;
    loginAPI: any; // RTK Query state
}

// Component props types
export interface AuthGuardProps {
    children: React.ReactNode;
    requiredRole?: 'user' | 'admin' | 'superadmin';
}

// Form validation types
export interface FormErrors {
    [key: string]: string | undefined;
}

// Utility types
export type UserRole = 'user' | 'admin' | 'superadmin' | 'disabled';
export type AuthStatus = 'idle' | 'loading' | 'succeeded' | 'failed';