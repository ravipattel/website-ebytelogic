'use client'
import React from 'react'
import { FaArrowAltCircleUp, FaArrowsAlt, FaExpand, FaMinus, FaPlus } from 'react-icons/fa';

const introductionData = {
    title: "Understanding Switch Bounce",
    paragraph1:
        "When designing embedded systems that interact with mechanical switches or buttons, ensuring reliable input is a fundamental challenge. The phenomenon of 'switch bounce,' where a single press or release generates a rapid series of electrical pulses instead of a clean transition, can lead to erroneous readings and unpredictable behavior.",
    diagram: {
        description: "Button Pressing and its Impact",
        graph: `graph LR A["Button Pressed"] --> B["Contact Bounce"]
              B --> C["Multiple Pulses"]
              C --> D["Erroneous Input"]
              D --> E["System Malfunction"]`
    },
    paragraph2:
        "To mitigate this, engineers employ debouncing techniques, which can be broadly categorized into hardware and software solutions. The choice between these two approaches involves a careful trade-off of factors including cost, power consumption, reliability, and implementation complexity."
};

const DebounceIntro = () => {
    return (
        <section id="introduction" className="px-4 md:px-6 py-16">
            {/* Title */}
            <h2 className="font-serif text-3xl font-semibold mb-8">
                {introductionData.title}
            </h2>

            <div>
                {/* Paragraph 1 */}
                <p className="text-gray-600 mb-6">
                    {introductionData.paragraph1}
                </p>

                {/* Mermaid Diagram */}
                <div className="mermaid-container">
                    <div className="mermaid-controls">
                        <button className="mermaid-control-btn zoom-in" title="放大">
                            <FaPlus />
                        </button>
                        <button className="mermaid-control-btn zoom-out" title="缩小">
                            <FaMinus />
                        </button>
                        <button className="mermaid-control-btn reset-zoom" title="重置">
                           <FaArrowsAlt />
                        </button>
                        <button className="mermaid-control-btn fullscreen" title="全屏查看">
                            <FaExpand/>
                        </button>
                    </div>
                    <div className="mermaid">
                        {/* Render the Mermaid graph dynamically */}
                        {introductionData.diagram.graph}
                    </div>
                </div>

                {/* Paragraph 2 */}
                <p className='mt-6 text-gray-600'>{introductionData.paragraph2}</p>
            </div>
        </section>
    )
}

export default DebounceIntro
