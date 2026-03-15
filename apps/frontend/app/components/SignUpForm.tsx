import Link from "next/link";

export default function SignupForm({ onSignupSuccess }: { onSignupSuccess: () => void }) {
  return (
    <div className="w-full max-w-md space-y-6 rounded-lg border border-black p-8">
      <h1 className="mb-8 text-center text-4xl">Register</h1>
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input type="email" className="w-full rounded-sm border border-black p-2" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Password</label>
          <input type="password" className="w-full rounded-sm border border-black p-2" />
        </div>
      </div>
      <button
        onClick={onSignupSuccess}
        className="w-full rounded bg-gray-200 py-3 text-lg transition-colors hover:bg-gray-300"
      >
        Register
      </button>
      <p className="mt-4 text-center text-sm">
        Have an account?{" "}
        <Link href="/login" className="font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
