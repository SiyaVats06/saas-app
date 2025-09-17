import { Brain } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
           <div className="flex justify-center gap-2.5 cursor-pointer">
                  <Image src={"/images/logo.svg"} alt="logo" width={46} height={44} />
                </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
          
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
              <p>&copy; 2025 Converso. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};