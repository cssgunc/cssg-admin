"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logLoginAttempt = (method: "standard" | "github" | "google") => {
    console.log("Login attempt", {
      method,
      email,
      password,
    });
  };

  const handleLogin = () => logLoginAttempt("standard");
  const handleGithubLogin = () => logLoginAttempt("github");
  const handleGoogleLogin = () => logLoginAttempt("google");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 text-slate-900">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-slate-300 bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-center text-4xl font-semibold text-slate-900">Login</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-800">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full rounded bg-slate-200 py-3 text-lg font-medium text-slate-900 transition hover:bg-slate-300"
        >
          Login
        </button>
        <div className="text-right">
          <Link
            href="/forgot-password"
            title="Forgot Password?"
            className="text-xs text-slate-700 hover:text-slate-900 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        {/* ... Divider ... */}
        <div className="space-y-3">
          <button
            onClick={handleGithubLogin}
            className="w-full rounded bg-slate-200 py-3 font-medium text-slate-900 transition hover:bg-slate-300"
          >
            Login with Github
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full rounded bg-slate-200 py-3 font-medium text-slate-900 transition hover:bg-slate-300"
          >
            Login with Google
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-slate-700">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-slate-900 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
