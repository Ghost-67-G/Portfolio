"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Shown on individual tool pages, hidden on the /tools index itself.
function BackLink() {
  const pathname = usePathname();
  if (pathname === "/tools") return null;

  return (
    <Link href="/tools" className="mb-8 inline-block text-sm text-ink-2 transition-colors hover:text-ink">
      ← All tools
    </Link>
  );
}

export default BackLink;
