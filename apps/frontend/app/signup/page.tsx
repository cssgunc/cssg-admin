"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  // --- Onboarding View (Matches Figma) ---
  if (isSignedUp) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <div className="w-full max-w-lg border border-black rounded-lg p-8 relative">
          {/* Back Arrow to return to Register */}
          <button 
            onClick={() => setIsSignedUp(false)} 
            className="absolute top-8 left-8 text-xl"
          >
            ←
          </button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-medium">Welcome to CS+SG</h1>
            <p className="text-sm">Set up your basic profile</p>
          </div>

          <div className="flex gap-8 mb-6">
            {/* Avatar Section */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border border-black flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-t border-black rotate-45 origin-center scale-150"></div>
                  <div className="absolute inset-0 border-t border-black -rotate-45 origin-center scale-150"></div>
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-white border border-black rounded-full p-1 w-8 h-8 flex items-center justify-center">
                ✎
              </button>
            </div>

            {/* Identity Fields */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input type="text" className="w-full border border-black p-2 rounded-sm" />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input type="text" className="w-full border border-black p-2 rounded-sm" />
              </div>
              <div>
                <label className="block text-sm mb-1">Pronouns</label>
                <select className="w-full border border-black p-2 rounded-sm bg-white">
                  <option value=""></option>
                  <option value="he-him">He/Him</option>
                  <option value="she-her">She/Her</option>
                  <option value="they-them">They/Them</option>
                </select>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-2">
            <label className="block text-sm">Links</label>
            <div className="flex gap-2">
              <input type="text" className="flex-1 border border-black p-2 rounded-sm" />
              <button className="border border-black px-4 py-2 hover:bg-gray-100 transition-colors">
                Add
              </button>
            </div>
            <div className="space-y-1">
               <div className="flex items-center gap-2 border-b border-gray-400 py-2">
                 <span className="text-sm cursor-pointer hover:text-red-500">✕</span>
               </div>
               <div className="flex items-center gap-2 border-b border-gray-400 py-2">
                 <span className="text-sm cursor-pointer hover:text-red-500">✕</span>
               </div>
            </div>
          </div>

          <button className="w-full mt-8 text-center font-medium hover:underline">
            Done
          </button>
        </div>
      </div>
    );
  }

  // --- Register View ---
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md border border-black rounded-lg p-8 space-y-6">
        <h1 className="text-4xl text-center mb-8">Register</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border border-black rounded-sm" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full p-2 border border-black rounded-sm" />
          </div>
        </div>

        <button 
          onClick={() => setIsSignedUp(true)}
          className="w-full py-3 bg-gray-200 hover:bg-gray-300 rounded transition-colors text-lg"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Have an account? <Link href="/login" className="hover:underline font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
}