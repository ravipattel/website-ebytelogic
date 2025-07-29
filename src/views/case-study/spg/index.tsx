import React from "react";
import CaseStudySidebar from "../../../components/CaseStudySidebar";
import SpgHero from "./SpgHero";
import SpgExecutive from "./SpgExecutive";
import SpgCoreTask from "./SpgCoreTask";
import SpgNdiSupport from "./SpgNdiSupport";
import SpgGuiInstability from "./SpgGuiInstability";
import SpgPipeline from "./SpgPipeline";
import SpgAudio from "./SpgAudio";
import SpgDeployment from "./SpgDeployment";

const SpgStudio = () => {
  return (
    <div className="flex">
      <div className="w-72 h-fit lg:sticky lg:top-[98px]">
        <CaseStudySidebar />
      </div>
      <div className="overflow-y-auto">
        <SpgHero />
        <SpgExecutive />
        <SpgCoreTask />
        <SpgNdiSupport />
        <SpgGuiInstability />
        <SpgPipeline />
        <SpgAudio />
        <SpgDeployment />
      </div>
    </div>
  );
};

export default SpgStudio;
