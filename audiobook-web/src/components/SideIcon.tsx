"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function SideIcon({
  icon,
  title,
  href,
}: {
  icon: ReactNode;
  title: string;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.includes(href.split("/")[-1]);

  return (
    <Link
      className={`w-full py-3 px-2 border-t text-base flex gap-3 hover:text-blue-400 duration-150 cursor-pointer ${
        isActive ? "text-blue-400" : ""
      }`}
      href={href}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
