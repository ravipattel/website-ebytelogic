import React from 'react'

const SomSocIntro = () => {
    return (
        <section id="introduction" className="px-4 md:px-6 py-16 bg-white">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                Introduction to SoC and SoM
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                {`The landscape of modern electronics is characterized by an ever-increasing demand for higher integration, enhanced performance, and reduced power consumption. In this context, System on Chip (SoC) and System on Module (SoM) have emerged as two pivotal design paradigms, each offering distinct advantages and trade-offs for developing complex electronic systems.`}
            </p>
            <div className="text-sm md:text-base bg-sky-50 italic text-gray-600 border-l-4 border-primary pl-4 py-6">
               {` "The choice between SoC and SoM fundamentally represents a strategic decision between maximum integration and modular flexibility, with profound implications for development cost, time-to-market, and long-term product evolution."`}
            </div>
        </section>
    )
}

export default SomSocIntro
