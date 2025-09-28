import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import NavItemsMini from "./NavItemsMini";
const Navbar = () => {
  return (
    <nav className="navbar max-w-[1440px] mx-auto w-full border-b-1">
      <Link href={"/"}>
        <div className="flex justify-center gap-2.5 cursor-pointer">
          <Image src={"/images/logo.svg"} alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="hidden md:flex justify-center gap-8">
        <NavItems />

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
      <div className="flex md:hidden">
        <NavItemsMini />
      </div>
    </nav>
  );
};

export default Navbar;
