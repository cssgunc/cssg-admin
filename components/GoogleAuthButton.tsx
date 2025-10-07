import GoogleIcon from "./icons/GoogleIcon";
import { createClient } from "../utils/supabase/client";
import { useState } from "react";
import { AuthError, Provider } from "@supabase/supabase-js";

interface GoogleAuthButtonProps {
    onSuccess?: (response: { provider: Provider; url: string }) => void;
    onError?: (error: AuthError | null) => void;
    onLoading?: (loading: boolean) => void;
    disabled?: boolean;
    className?: string;
}

export default function GoogleAuthButton({
    onSuccess,
    onError,
    onLoading,
    disabled = false,
    className = "",
}: GoogleAuthButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        onLoading?.(true);
        const supabase = createClient();

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/`,
            },
        });

        if (error) {
            setIsLoading(false);
            onLoading?.(false);
            onError?.(error);
            return;
        }

        // OAuth redirect will handle the rest
        onSuccess?.(data);
    };

    return (
        <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={disabled}
            className={`
        w-full flex items-center justify-center px-4 py-3 
        bg-white/10 backdrop-blur-sm border border-white/20 
        rounded-lg text-white font-medium text-sm
        hover:bg-white/20 hover:border-white/30
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-transparent
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        ${className}
      `}
        >
            {isLoading ? (
                <div className="flex items-center">
                    <svg
                        className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
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
                </div>
            ) : (
                <>
                    <GoogleIcon size={20} className="mr-2" />
                    <span className="hidden sm:inline">Google</span>
                </>
            )}
        </button>
    );
}
