"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot-Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {navLinks?.map((links) => {
          const isActive =
            pathname === links?.href ||
            (pathname.startsWith(links.href) && links.href !== "/");
          return (
            <Link
              href={links?.href}
              key={links?.name}
              style={{ color: isActive ? "blue" : "green" }}
            >
              {links?.name}
            </Link>
          );
        })}
        {children}
      </body>
    </html>
  );
}
