export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      
      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-indigo-600 text-white p-12 flex-col justify-between">
        <div className="text-2xl font-bold">Support System</div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            Effortlessly manage your support team.
          </h1>
          <p className="text-indigo-200">
            Login to access your dashboard and manage tickets.
          </p>
        </div>

        <p className="text-sm text-indigo-200">
          © 2025 Support System
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        {children}
      </div>

    </div>
  );
}
