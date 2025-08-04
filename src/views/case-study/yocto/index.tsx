import React from "react";
import Sidebar from "../../../components/Sidebar";
import YoctoHero from "./YoctoHero";
import YoctoExecutive from "./YoctoExecutive";
import YoctoChallenge from "./YoctoChallenge";
import YoctoSolution from "./YoctoSolution";
import YoctoResult from "./YoctoResult";
import YoctoConclusion from "./YoctoConclusion";

const Yocto = () => {
  return (
       <div className="lg:flex">
      <div className="w-72 h-fit lg:sticky lg:top-[98px]">
        <Sidebar />
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
