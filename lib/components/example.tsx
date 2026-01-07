"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Example() {
  const pathname = usePathname();

  useEffect(() => {
    // This block runs when the pathname changes
    console.log("Pathname changed:", pathname);
  }, [pathname]);

  return <div>Current pathname: {pathname}</div>;
}
