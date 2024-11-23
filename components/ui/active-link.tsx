"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type props = {
  children: React.ReactNode;
  href: string;
};
function ActiveLink({ children, href }: props) {
  const pathname = usePathname();
  const isActive = pathname === href ? "bg-blue-600" : "";
  return (
    <Link href={href} className={`${isActive}`}>
      <div className={cn("px-2 py-2 rounded-md hover:bg-blue-800", isActive)}>
        {children}
      </div>
    </Link>
  );
}

export default ActiveLink;
