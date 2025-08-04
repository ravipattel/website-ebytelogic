import React from "react";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

const EsightTestimonial = () => {
  return (
    <section id="testimonial" className="py-16 bg-gradient-to-r from-slate-50 to-blue-50 px-6">
      <div className="md:px-6 py-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">
            Client Testimonial: Validation of Expertise and Results
          </h2>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
          {/* Testimonial Header */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <FaQuoteLeft className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">eSightEyewear / Gentex Corp.</h4>
              <p className="text-slate-600 text-sm">Technical Partnership</p>
            </div>
          </div>

          {/* Testimonial Quotes */}
          <blockquote className="font-serif text-xl text-slate-700 leading-relaxed mb-6 italic">
           {` "We were struggling with a critical latency issue in our smart glass product, a problem that had persisted despite collaborations with major OEMs. The ~250ms delay was a significant barrier to user adoption. We engaged this team with a challenging goal: reduce latency to under 100ms in one month, without the camera sensor datasheet."`}
          </blockquote>

          <blockquote className="font-serif text-xl text-slate-700 leading-relaxed mb-6 italic">
           {`"Not only did they achieve the sub-100ms latency target, but they did it in just 20 days. Their deep expertise in Android framework and HAL customization, coupled with their innovative approach to overcoming the lack of documentation, was truly impressive."`}
          </blockquote>

          <blockquote className="font-serif text-xl text-slate-700 leading-relaxed italic">
           {`"This breakthrough has dramatically improved the user experience of our eSightEyewear device, and we are extremely pleased with the results and the rapid turnaround."`}
          </blockquote>

          {/* Footer Section with Links */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-slate-600">Project Successfully Completed</span>
              </div>
              <div className="text-sm text-slate-500">
                <a href="https://www.esighteyewear.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  eSightEyewear.com
                </a>{" "}
                |{" "}
                <a href="https://ir.gentex.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Gentex Corporation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsightTestimonial;
