'use client'
import Image from 'next/image'
import React from 'react'

const DebounceIntro = ({ data }) => {

    const introData = data?.introData

    return (
        <section id={introData?.id} className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-3xl font-semibold mb-8">
                {introData?.title}
            </h2>
            <div>
                {introData?.paragraph1 && (
                    <p className="text-gray-600 mb-6">
                        {introData?.paragraph1}
                    </p>
                )}
                {introData?.diagram?.graph && (
                    <div>
                        <div>
                            {/* {introData?.controls?.map((control) => (
                                <button
                                    key={control?.id}
                                    title={control?.title}
                                >
                                    {control?.icon}
                                </button>
                            ))} */}
                        </div>
                        <div>
                            <Image src={introData?.diagram?.graph} alt='diagram' />
                        </div>
                    </div>
                )}
                {introData?.paragraph2 && (
                    <p className="mt-6 text-gray-600">{introData?.paragraph2}</p>
                )}
            </div>
        </section>
    )
}

export default DebounceIntro
