import Link from "next/link";

export default function SignupForm({ onSignupSuccess }: { onSignupSuccess: () => void }) {
  return (
    <div className="w-full max-w-md space-y-6 rounded-lg border border-slate-300 bg-white p-8 text-slate-900 shadow-lg">
      <h1 className="mb-8 text-center text-4xl font-semibold text-slate-900">Register</h1>
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-800">Email</label>
          <input
            type="email"
            className="w-full rounded-sm border border-slate-300 bg-white p-2 text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-800">Password</label>
          <input
            type="password"
            className="w-full rounded-sm border border-slate-300 bg-white p-2 text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>
      <button
        onClick={onSignupSuccess}
        className="w-full rounded bg-slate-200 py-3 text-lg font-medium text-slate-900 transition-colors hover:bg-slate-300"
      >
        Register
      </button>
      <p className="mt-4 text-center text-sm text-slate-700">
        Have an account?{" "}
        <Link href="/login" className="font-semibold text-slate-900 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
