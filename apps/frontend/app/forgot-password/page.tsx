export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 text-black">
      <div className="w-full max-w-md rounded-lg border border-black p-8 text-center">
        <h1 className="mb-4 text-2xl">Forgot Password</h1>
        <p className="mb-6">Enter your email to reset your password.</p>
        <input type="email" className="mb-4 w-full border border-black p-2" placeholder="Email" />
        <button className="w-full rounded bg-gray-200 py-2">Send Reset Link</button>
      </div>
    </div>
  );
}
