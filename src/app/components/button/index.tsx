'use client';
import { useRouter } from 'next/navigation';

export default function ButtonNavigate() {
  const router = useRouter();
  const handleRegister = () => {
    router.push('/register');
  };
  return (
    <button
      className="btn bg-amber-200 px-3 py-2 rounded-md text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
      type="button"
      onClick={handleRegister}
    >
      RegisterBtn
    </button>
  );
}
