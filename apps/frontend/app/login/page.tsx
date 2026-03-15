"use client";
import Link from "next/link";

export default function LoginPage() {
  const handleLogin = () => console.log("Standard login triggered");
  const handleGithubLogin = () => console.log("Github OAuth triggered");
  const handleGoogleLogin = () => console.log("Google OAuth triggered");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-black p-8">
        <h1 className="mb-8 text-center text-4xl">Login</h1>
        {/* ... Email/Password inputs ... */}
        <button
          onClick={handleLogin}
          className="w-full rounded bg-gray-200 py-3 text-lg hover:bg-gray-300"
        >
          Login
        </button>
        <div className="text-right">
          <Link
            href="/forgot-password"
            title="Forgot Password?"
            className="text-xs hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        {/* ... Divider ... */}
        <div className="space-y-3">
          <button
            onClick={handleGithubLogin}
            className="w-full rounded bg-gray-200 py-3 hover:bg-gray-300"
          >
            Login with Github
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full rounded bg-gray-200 py-3 hover:bg-gray-300"
          >
            Login with Google
          </button>
        </div>
        <p className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
