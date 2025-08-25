'use client'
import React from 'react'

const DebounceIntro = ({ data }) => {

    const introData = data?.introData

    return (
        <section id={introData?.id} className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-3xl font-semibold mb-8">
                {introData?.title}
            </h2>
            <div>
                <p className="text-gray-600 mb-6">
                    {introData?.paragraph1}
                </p>
                <div className="mermaid-container">
                    <div className="mermaid-controls">
                        {introData?.controls?.map((control) => (
                            <button
                                key={control.id}
                                className="mermaid-control-btn"
                                title={control.title}
                            >
                                {control.icon}
                            </button>
                        ))}
                    </div>
                    <div className="mermaid">
                        {introData?.diagram?.graph}
                    </div>
                </div>
                <p className="mt-6 text-gray-600">{introData?.paragraph2}</p>
            </div>
        </section>
    )
}

export default DebounceIntro
