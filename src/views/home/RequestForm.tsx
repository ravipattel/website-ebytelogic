import React from "react";

import Button from "@/src/components/Button";

const RequestForm = () => {
    return (
        <section className="bg-secondary text-white py-16 sm:py-28">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl sm:text-[34px] font-medium mb-4">
                        Request a <span className="text-primary">Call back</span>
                    </h2>
                    <p className="text-sm sm:text-[15px] text-[#dddddd]">
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum
                        veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                </div>
                <form className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="h-[54px] py-3 px-4 rounded bg-transparent outline-none outline-0 border border-[#3178fb66] text-white placeholder:text-sm placeholder:text-[#8899aa] focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="h-[54px] py-3 px-4 rounded bg-transparent outline-none outline-0 border border-[#3178fb66] text-white placeholder:text-sm placeholder:text-[#8899aa] focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="h-[54px] py-3 px-4 rounded bg-transparent outline-none outline-0 border border-[#3178fb66] text-white placeholder:text-sm placeholder:text-[#8899aa] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="py-3 px-4 rounded bg-transparent outline-none outline-0 border border-[#3178fb66] text-white placeholder:text-sm placeholder:text-[#8899aa] focus:outline-none"
                        />
                        <Button variant="default" className="font-semibold"
                        >
                            SUBMIT
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default RequestForm;