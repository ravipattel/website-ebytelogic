import React from "react";
import CaseStudySidebar from "../../../components/CaseStudySidebar";
import EsightHero from "./EsightHero";
import EsightExecutive from "./EsightExecutive";
import EsightChallenge from "./EsightChallenge";
import EsightSolution from "./EsightSolution";
import EsightTechnical from "./EsightTechnical";
import EsightResult from "./EsightResult";
import EsightTestimonial from "./EsightTestimonial";
import EsightConclusion from "./EsightConclusion";

const Esight = () => {
  return (
    <div className="flex">
      <div className="w-72 h-fit lg:sticky lg:top-[98px]">
        <CaseStudySidebar />
      </div>
      <div className="overflow-y-auto">
        <EsightHero />
        <EsightExecutive />
        <EsightChallenge />
        <EsightSolution />
        <EsightTechnical />
        <EsightResult />
        <EsightTestimonial />
        <EsightConclusion />
      </div>
    </div>
  );
};

export default Esight;
