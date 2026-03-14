// apps/frontend/app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md border border-black rounded-lg p-8 space-y-6">
        <h1 className="text-4xl text-center mb-8">Login</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border border-black rounded-sm" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full p-2 border border-black rounded-sm" />
            <div className="text-right mt-1">
              <button className="text-xs hover:underline">Forgot Password?</button>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-gray-200 hover:bg-gray-300 rounded transition-colors text-lg">
          Login
        </button>

        <div className="relative border-t border-gray-400 my-8">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2"></span>
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 bg-gray-200 hover:bg-gray-300 rounded transition-colors">
            Login with Github
          </button>
          <button className="w-full py-3 bg-gray-200 hover:bg-gray-300 rounded transition-colors">
            Login with Google
          </button>
        </div>

        <p className="text-center text-sm mt-4">
          Dont have an account? <a href="/signup" className="hover:underline font-semibold">Register</a>
        </p>
      </div>
    </div>
  );
}