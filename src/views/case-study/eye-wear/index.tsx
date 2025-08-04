import React from "react";
import Sidebar from "../../../components/Sidebar";
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
       <div className="lg:flex">
      <div className="w-72 h-fit lg:sticky lg:top-[98px]">
        <Sidebar />
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
