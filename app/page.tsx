import React from "react";
import CompanionCard from "../components/CompanionCard";
import CompanionList from "../components/CompanionList";
import CTA from "../components/CTA";
import { getRecentSessions } from "@/lib/actions/companion.actions";
import HeroSection from "@/components/HomePage/HeroSection";
import { Features } from "@/components/HomePage/Features";
import { HowItWorks } from "@/components/HomePage/HowItWorks";

const Page = async () => {
  const recentSessions = await getRecentSessions();
  return (
    <main>
      <HeroSection />
      <Features />
      <HowItWorks />
        <CompanionList
          title="Recently completed lessons"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
    </main>
  );
};

export default Page;
