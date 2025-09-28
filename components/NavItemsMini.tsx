"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Pricing", href: "/subscription" },
];
const NavItemsMini = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);
  return (
    <div className="relative bg-white h-full">
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? <X /> : <Menu />}
        </button>
        <SignedOut>
          <div>
            <SignInButton>
              <button className="btn-signin">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <div
        className={cn(
          "fixed top-[80px] left-0 right-0 w-full  z-[10000]",
          openMenu ? "bg-black/55 h-[100vh]" : "bg-transparent"
        )}
      >
        <div className="w-full h-full bg-transparent z-[10000]">
          <div
            className={cn(
              "duration-500 bg-[white] z-[100] grid transition-[grid-template-rows]",
              openMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-4 justify-center items-start p-8">
                {navItems.map(({ label, href }) => (
                  <Link
                    href={href}
                    key={label}
                    className={cn(
                      pathname === href && "text-primary font-bold"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItemsMini;
