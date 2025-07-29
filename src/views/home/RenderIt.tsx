import React from 'react'
import { FiMail } from 'react-icons/fi'
import { MdPhoneAndroid } from 'react-icons/md'

const contactData = [
    {
        icon: <MdPhoneAndroid className='text-lg sm:text-2xl' />,
        info: "Talk to Us: +91-76545-XXXX"
    },
    {
        icon: <FiMail className='text-lg sm:text-2xl' />,
        info: "Write to Us: connect@ebyteLogic.com"
    }
]

const RenderIt = () => {
    return (
        <section className='bg-[url("/images/renderIt.jpg")] bg-cover bg-center relative'>
            <div className='bg-[#062241d9] h-full w-full absolute z-10'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6'>
                <div className="relative z-10 py-26 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-5">
                    <h2 className="lg:col-span-2 text-2xl sm:text-3xl md:text-4xl lg:max-w-3xl ms-auto leading-normal text-white capitalize font-semibold">
                        From Silicon to Stream – Embedded Solutions That Scale.
                    </h2>
                    <div className="lg:col-span-1 space-y-5">
                        {
                            contactData.map((contact, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-2'>
                                        <div className='bg-primary h-8 w-8 sm:w-[50px] sm:h-[50px] rounded grid place-items-center text-white'>{contact.icon}</div>
                                        <p className='text-white text-base md:text-lg sm:text-xl'>{contact.info}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default RenderIt
