"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function DealPage() {
  const [count, setCount] = useState(0);
  const params = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">
        Deal ID: <span className="text-blue-600">{params.dealId}</span>
      </h1>
      <div className="flex flex-col items-center gap-2">
        <div className="text-lg">Counter: {count}</div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
