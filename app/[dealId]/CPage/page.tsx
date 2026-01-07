"use client";

import { useParams } from "next/navigation";

export default function CPage() {
  const params = useParams();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">Page C</h1>
      <p className="text-lg text-gray-600 mb-2">
        Deal ID: <span className="font-semibold">{params.dealId}</span>
      </p>
      <p className="text-gray-500">This is Page C</p>
    </div>
  );
}
