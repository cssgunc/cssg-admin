"use client";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import Onboarding from "../components/Onboarding";

export default function SignupPage() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 text-slate-900">
      {isSignedUp ? (
        <Onboarding onBack={() => setIsSignedUp(false)} />
      ) : (
        <SignUpForm onSignupSuccess={() => setIsSignedUp(true)} />
      )}
    </div>
  );
}
