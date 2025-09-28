"use client"

import React, { useState } from "react";
import CompanionCard from "./CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import DeleteDialog from "./DeleteDialog";
import NoCompanion from "./NoCompanion";

const CompanionCardWrapper = ({ companions, allCompanions }: Companion) => {
  const [showDialog, setShowDialog] = useState(false);
  const [id, setId] = useState("");


  if (allCompanions.length === 0) {
    return <NoCompanion title=" No Companion Created Yet" />;
  }
  if (companions.length === 0) {
    return <NoCompanion title="Oops! No Companion Found" />;
  }


  return (
    <div>
      <section className="companions-grid">
        {companions.map((companion: Companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            setShowDialog={setShowDialog}
            setId={setId}
          />
        ))}
      </section>
      <DeleteDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        id={id}
      />
    </div>
  );
};

export default CompanionCardWrapper;
