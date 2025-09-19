import React from "react";
import CTA from "../components/CTA";
import HeroSection from "@/components/HomePage/HeroSection";
import { Features } from "@/components/HomePage/Features";
import { HowItWorks } from "@/components/HomePage/HowItWorks";

const Page = async () => {

  return (
    <main>
      <HeroSection />
      <Features />
      <HowItWorks />
      <CTA />
    </main>
  );
};

export default Page;
