"use client";

import { useParams } from "next/navigation";

export default function APage() {
  const params = useParams();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Page A</h1>
      <p className="text-lg text-gray-600 mb-2">
        Deal ID: <span className="font-semibold">{params.dealId}</span>
      </p>
      <p className="text-gray-500">This is Page A</p>
    </div>
  );
}
