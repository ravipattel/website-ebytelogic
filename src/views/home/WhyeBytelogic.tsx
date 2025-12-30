const whyEbyteLogicData = {
  heading: "Why Engineering Leaders Choose eByteLogic",
  subheading:
    "As your embedded software consultants, we provide the precision and reliability required for production-grade hardware.",
  features: [
    {
      title: "Broadcast-Grade Precision",
      description:
        "We achieve ±10ms AV Sync for real-time streaming, ensuring broadcast-quality performance across complex pipelines.",
      icon: "🎯",
    },
    {
      title: "Framework Mastery",
      description:
        "Expert Framework Customization using GStreamer, FFMPEG, and Live555 to handle your most demanding media tasks.",
      icon: "🧠",
    },
    {
      title: "Silicon-Aware Porting",
      description:
        "Deep expertise in BSP & Driver Porting for industry-leading platforms including NXP, Rockchip, TI, and more.",
      icon: "🔧",
    },
    {
      title: "End-to-End Lifecycle",
      description:
        "From initial Board Bring-Up and QA Automation to long-term maintenance, we stay with you through the entire product life.",
      icon: "🔄",
    },
    {
      title: "Secure Foundations",
      description:
        "Implementation of Secure Boot, Yocto/Buildroot, and reliable OTA updates as part of our core Linux BSP services.",
      icon: "🔐",
    },
    {
      title: "Full-Stack Capabilities",
      description:
        "Versatile embedded systems software development in C/C++, Qt, and Python, across Linux, Android, and iOS environments.",
      icon: "⚙️",
    },
    {
      title: "Global Reach & Reliability",
      description:
        "Seamless Global Agile Delivery trusted by innovators across the USA, EU, and APAC regions.",
      icon: "🌍",
    },
  ],
};

export default function WhyeByteLogic() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText text-center leading-tight mb-4">
            {whyEbyteLogicData.heading}
          </h2>
          <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-4xl mx-auto mb-8 text-center'>
            {whyEbyteLogicData.subheading}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-4">
          {whyEbyteLogicData.features.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#3078fb]/10 text-[#3078fb] text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-[21px] leading-normal mb-3">
                {item.title}
              </h3>
              <p className="text-[#5d6471] text-sm sm:text-[15px]">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-0 bg-[#3078fb] transition-all duration-300 group-hover:w-12 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
