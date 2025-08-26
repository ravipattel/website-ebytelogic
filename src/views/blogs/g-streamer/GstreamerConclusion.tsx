import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const GstreamerConclusion = ({ data }) => {
    const conclusion = data?.conclusion;
    return (
        <section id={conclusion?.id} className="py-8 px-6 bg-slate-50">
            {/* Section Title */}
            <div className="mb-8">
                <span className="mr-3" style={{color:conclusion?.color}}>{conclusion?.no}</span>
                <h2 className="font-serif text-4xl font-semibold inline">
                    {conclusion?.sectionTitle}
                </h2>
            </div>

            <div>
                {/* Intro Description */}
                <div className="bg-white p-8 rounded-md shadow-sm mb-12">
                    <p className="text-gray-600 leading-relaxed mb-8">
                        {conclusion?.intro?.description}
                    </p>

                    {/* Key Success Factors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-4">
                                {conclusion?.keyTitle}
                            </h3>
                            <ul className="space-y-3">
                                {conclusion?.keySuccessFactors?.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaArrowRight className="text-primary mt-1" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* eByteLogic's Framework */}
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-4">
                                {conclusion?.framework?.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{conclusion?.framework?.description}</p>

                            <div className="bg-primary/5 p-4 rounded-md">
                                <p className="text-sm text-gray-600">{conclusion?.framework?.goal}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="inline-block px-8 py-4 rounded-md">
                        <div className="text-2xl font-semibold mb-2">{conclusion?.callToAction?.title}</div>
                        <div className="text-sm">{conclusion?.callToAction?.subtitle}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GstreamerConclusion;
