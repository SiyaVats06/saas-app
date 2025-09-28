import CompanionCardWrapper from "@/components/CompanionCardWrapper";
import NoCompanion from "@/components/NoCompanion";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions, getAllUserCompanions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {

  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic, userId });
  const allCompanions = await getAllUserCompanions(userId);

 
  return (
    <main>
      <section className="flex justify-between items-center gap-4 max-sm:flex-col">
        <h2>Companion Library</h2>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

     <CompanionCardWrapper companions={companions} allCompanions={allCompanions} />
    </main>
  );
};

export default CompanionsLibrary;
