import { Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 max-w-[1440px] mx-auto w-full">
      <div className="px-14 py-4 w-full bg-white max-sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex justify-center gap-2.5 cursor-pointer">
            <Image src={"/images/logo.svg"} alt="logo" width={46} height={44} />
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">

            <p>&copy; 2025 Converso. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
