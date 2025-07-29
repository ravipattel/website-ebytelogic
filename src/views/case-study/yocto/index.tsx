import React from "react";
import CaseStudySidebar from "../../../components/CaseStudySidebar";
import YoctoHero from "./YoctoHero";
import YoctoExecutive from "./YoctoExecutive";
import YoctoChallenge from "./YoctoChallenge";
import YoctoSolution from "./YoctoSolution";
import YoctoResult from "./YoctoResult";
import YoctoConclusion from "./YoctoConclusion";

const Yocto = () => {
  return (
    <div className="flex">
      <div className="w-72 h-fit lg:sticky lg:top-[98px]">
        <CaseStudySidebar />
      </div>
      <div className="overflow-y-auto">
        <YoctoHero />
        <YoctoExecutive />
        <YoctoChallenge />
        <YoctoSolution />
        <YoctoResult />
        <YoctoConclusion />
      </div>
    </div>
  );
};

export default Yocto;
