"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { createClient } from "../../utils/supabase/client";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import GitHubAuthButton from "../../components/GitHubAuthButton";
import { AuthError, Provider } from "@supabase/supabase-js";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [githubLoading, setGithubLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
                setIsLoading(false);
                return;
            }

            // Successful login - redirect to dashboard or appropriate page
            // The middleware will handle redirecting authenticated users
            router.push("/");
        } catch {
            setError("An unexpected error occurred. Please try again.");
            setIsLoading(false);
        }
    };

    const handleOAuthSuccess = (response: {
        provider: Provider;
        url: string;
    }) => {
        // OAuth redirect will handle the rest
        console.log("OAuth success:", response);
    };

    const handleOAuthError = (error: AuthError | null) => {
        setError(error?.message || "Authentication failed. Please try again.");
    };

    const handleGoogleLoading = (loading: boolean) => {
        setGoogleLoading(loading);
    };

    const handleGithubLoading = (loading: boolean) => {
        setGithubLoading(loading);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-md space-y-6 sm:space-y-8">
                {/* Logo Section */}
                <div className="text-center">
                    <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 relative mb-4 sm:mb-6">
                        <Image
                            src="/cssgWhiteLogo.webp"
                            alt="CSSG Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Welcome to CSSG
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Sign in to access your account
                    </p>
                </div>

                {/* Login Form */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
                    {error && (
                        <div className="mb-4 p-3 bg-red-500/10 border border-red-300/30 rounded-lg">
                            <p className="text-red-300 text-sm">{error}</p>
                        </div>
                    )}

                    <form
                        className="space-y-4 sm:space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-white mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-white mb-2"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                                    ) : (
                                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="relative">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="sr-only"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(e.target.checked)
                                        }
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="flex items-center cursor-pointer group"
                                    >
                                        <div className="relative">
                                            <div
                                                className={`w-5 h-5 border-2 rounded-md transition-all duration-200 group-hover:border-green-400 ${
                                                    rememberMe
                                                        ? "bg-green-600 border-green-600"
                                                        : "bg-white/10 border-white/20 group-hover:bg-white/20"
                                                }`}
                                            >
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <svg
                                                        className={`w-3 h-3 text-white transition-opacity duration-200 ${
                                                            rememberMe
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ml-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-green-400 hover:text-green-300 transition-colors"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                type="submit"
                                disabled={
                                    isLoading || googleLoading || githubLoading
                                }
                                className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Signing in...
                                    </div>
                                ) : (
                                    "Sign in"
                                )}
                            </button>

                            {/* OAuth Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                <GoogleAuthButton
                                    onSuccess={handleOAuthSuccess}
                                    onError={handleOAuthError}
                                    onLoading={handleGoogleLoading}
                                    disabled={
                                        isLoading ||
                                        googleLoading ||
                                        githubLoading
                                    }
                                    className="px-3 py-3"
                                />
                                <GitHubAuthButton
                                    onSuccess={handleOAuthSuccess}
                                    onError={handleOAuthError}
                                    onLoading={handleGithubLoading}
                                    disabled={
                                        isLoading ||
                                        googleLoading ||
                                        githubLoading
                                    }
                                    className="px-3 py-3"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
