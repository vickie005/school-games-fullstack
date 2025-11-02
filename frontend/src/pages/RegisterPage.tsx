import { Link } from "react-router-dom";
import registerAnimation from "../../src/assets/login-animation.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { RegisterFormData } from "../types/types";

// Validation schema
const registerSchema = yup.object({
  fullname: yup
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+?[\d\s-]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords must match")
    .required("Please confirm your password")
});

const RegisterPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [generalError, setGeneralError] = useState<string>("");

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch
  } = useForm<RegisterFormData & { confirmPassword: string }>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    },
  });

  // Watch password for real-time validation feedback
  const passwordValue = watch("password");

  // Form submission handler
  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setGeneralError("");
    clearErrors();

    try {
      // TODO: Replace with actual registration logic
      console.log("Registration attempt with:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Handle successful registration here
      alert("Registration successful! Please check your email for verification.");
      
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage = "Registration failed. Please try again.";
      setGeneralError(errorMessage);
      setError("root", {
        type: "manual",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength indicator
  const getPasswordStrength = (password: string): { strength: number; label: string; color: string } => {
    if (!password) return { strength: 0, label: "", color: "" };
    
    let strengthLevel = 0;
    if (password.length >= 6) strengthLevel += 1;
    if (/[a-z]/.test(password)) strengthLevel += 1;
    if (/[A-Z]/.test(password)) strengthLevel += 1;
    if (/\d/.test(password)) strengthLevel += 1;
    
    const strengths = [
      { label: "Very Weak", color: "bg-red-500" },
      { label: "Weak", color: "bg-orange-500" },
      { label: "Fair", color: "bg-yellow-500" },
      { label: "Good", color: "bg-teal-500" },
      { label: "Strong", color: "bg-green-500" }
    ];
    
    const strengthInfo = strengths[strengthLevel] || strengths[0];
    return { strength: strengthLevel, ...strengthInfo };
  };

  const passwordStrength = getPasswordStrength(passwordValue);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-teal-600">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Left Animation - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:block w-1/2 max-w-lg">
          <div className="relative">
            <Lottie 
              animationData={registerAnimation} 
              loop={true} 
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full max-w-sm lg:max-w-md">
          <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border border-gray-100">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Create Account
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Join <span className="text-teal-600 font-semibold">School Games</span> today
              </p>
            </div>

            {/* General Error Message */}
            {(generalError || errors.root) && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-700 text-xs sm:text-sm">
                    {generalError || errors.root?.message}
                  </span>
                </div>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6" noValidate>
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="fullname"
                    {...register("fullname")}
                    placeholder="Enter your full name"
                    className={`w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none text-sm sm:text-base ${
                      errors.fullname 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20'
                    }`}
                  />
                </div>
                {errors.fullname && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className={`w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none text-sm sm:text-base ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                    placeholder="Enter your phone number"
                    className={`w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none text-sm sm:text-base ${
                      errors.phoneNumber 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password")}
                    placeholder="Create a password"
                    className={`w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none text-sm sm:text-base ${
                      errors.password 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {passwordValue && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-600">Password strength:</span>
                      <span className="text-xs font-medium text-gray-700">{passwordStrength.label}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                        style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {errors.password && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword")}
                    placeholder="Confirm your password"
                    className={`w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none text-sm sm:text-base ${
                      errors.confirmPassword 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-xs sm:text-sm text-red-600 flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-teal-600 font-semibold hover:text-emerald-600 transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
