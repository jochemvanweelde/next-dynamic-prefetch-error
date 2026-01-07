"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { useEffect } from "react";

// Define the pages in order
const PAGES = [
  "", // home page (empty string means the base [dealId] route)
  "APage",
  "BPage",
  "CPage",
];

export default function DealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Prefetch all pages on mount
  useEffect(() => {
    PAGES.forEach((page) => {
      const path = page ? `/${params.dealId}/${page}` : `/${params.dealId}`;
      router.prefetch(path);
    });
  }, [params.dealId, router]);

  // Determine current page index
  const getCurrentPageIndex = () => {
    const segments = pathname.split("/").filter(Boolean);
    const dealIdIndex = segments.findIndex((seg) => seg === params.dealId);

    if (dealIdIndex === -1) return 0;

    const pageSegment = segments[dealIdIndex + 1];
    if (!pageSegment) return 0; // home page

    const index = PAGES.findIndex((page) => page === pageSegment);
    return index !== -1 ? index : 0;
  };

  const currentIndex = getCurrentPageIndex();
  const nextIndex = (currentIndex + 1) % PAGES.length;
  const nextPage = PAGES[nextIndex];
  const nextPath = nextPage
    ? `/${params.dealId}/${nextPage}`
    : `/${params.dealId}`;

  const handleNext = () => {
    router.push(nextPath);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4 border-b bg-gray-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Page {currentIndex + 1} of {PAGES.length}
          </div>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Next →
          </button>
        </div>
      </nav>
      <main className="flex-1">{children}</main>
    </div>
  );
}
