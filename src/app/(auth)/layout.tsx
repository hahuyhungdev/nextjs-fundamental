function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>
        <span className="text-4xl font-bold text-gray-800">Auth</span>
      </h1>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
