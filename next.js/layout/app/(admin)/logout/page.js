"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // 1. Remove token (example: localStorage)
    localStorage.removeItem("token");

    // 2. Redirect user
    router.push("/login");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">Logging out...</p>
    </div>
  );
};

export default Page;
