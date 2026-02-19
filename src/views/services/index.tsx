import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceIntro from "./ServiceIntro";
import ServiceCards from "./ServiceCards";
import WhyChooseEByteLogic from "./WhyChooseEByteLogic";
import ServiceCta from "./ServiceCta";
import ServiceTab from "./ServiceTab";

const Service = () => {
    return (
        <div>
            <ServiceHero />
            <ServiceIntro />
            <ServiceCards />
            <ServiceTab />
            <WhyChooseEByteLogic />
            <ServiceCta />
        </div>
    );
};

export default Service;
