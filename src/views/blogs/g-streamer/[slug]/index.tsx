import Sidebar from "@/src/components/Sidebar";
import React from "react";
import GstreamerHero from "../GstreamerHero";
import GstreamerChallenge from "../GstreamerChallenge";
import GstreamerApproach from "../GstreamerApproach";
import GstreamerOptimization from "../GstreamerOptimization";
import GstreamerPlatform from "../GstreamerPlatform";
import GstreamerRobust from "../GstreamerRobust";
import GstreamerConclusion from "../GstreamerConclusion";
import { globalCards } from "../../Global";

const Gstreamer = ({ slug }) => {
    const filter = globalCards.find((item, idx) => {
        if (slug === item.slug) {
            return item;
        }
    });
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className="overflow-y-auto px-4 md:px-6">
                <GstreamerHero data={filter} />
                <GstreamerChallenge data={filter} />
                <GstreamerApproach data={filter} />
                <GstreamerOptimization data={filter} />
                <GstreamerPlatform data={filter} />
                <GstreamerRobust data={filter} />
                <GstreamerConclusion data={filter} />
            </div>
        </div>
    );
};

export default Gstreamer;
