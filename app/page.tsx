import React from "react";
import CompanionCard from "../components/CompanionCard";
import CompanionList from "../components/CompanionList";
import CTA from "../components/CTA";
import { getRecentSessions } from "@/lib/actions/companion.actions";




const Page = async () => {
    const recentSessions = await getRecentSessions();
  return (
    <main>
     <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          bookmarked={false}
          color="#E5D0FF"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          bookmarked={false}
          color="#FFDA6E"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          bookmarked={false}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
          <CompanionList
            title="Recently completed lessons"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
