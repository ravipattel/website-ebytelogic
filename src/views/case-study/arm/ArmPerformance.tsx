import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FaMicrochip } from 'react-icons/fa6';

const ArmPerformance = () => {
  return (
    <section id="performance-analysis" className="px-4 md:px-6 py-16 bg-slate-50">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-4xl font-bold mb-8">
          4. Performance Analysis and Benchmarks
        </h2>

        {/* Decoding Capabilities */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            4.1. Decoding Capabilities Comparison
          </h3>
          <div className="bg-white p-6 rounded-lg border border-slate-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold">Amlogic S905 (Odroid-C2)</th>
                  <th className="text-left py-3 px-4 font-semibold">Rockchip RK356x (NanoPi5)</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">H.264 Decode</td>
                  <td className="py-3 px-4">Up to 4K@30fps / 1080p@60fps</td>
                  <td className="py-3 px-4">Up to 4096x2304@30fps / 1080p@60fps <a href="https://www.scensmart.com/general-description-of-soc/comparative-analysis-of-video-encoding-and-decoding-for-rockchip-soc/" className="text-primary hover:underline" target="_blank">[501]</a></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">H.265 Decode</td>
                  <td className="py-3 px-4">Up to 4K@60fps</td>
                  <td className="py-3 px-4">Up to 4096x2304@60fps (10-bit, HDR)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">VP9 Decode</td>
                  <td className="py-3 px-4">Not typically supported</td>
                  <td className="py-3 px-4">Up to 4096x2304@60fps</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">AV1 Decode</td>
                  <td className="py-3 px-4">Not Supported</td>
                  <td className="py-3 px-4">Up to 4K@30fps (some variants)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">JPEG Decode</td>
                  <td className="py-3 px-4">Up to 1080p@30fps</td>
                  <td className="py-3 px-4">Up to 1920x1080@80fps</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">MPEG-1/2/4 Decode</td>
                  <td className="py-3 px-4">Up to 1080p@60fps</td>
                  <td className="py-3 px-4">Up to 1080p@60fps</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4 flex items-center">
            <FaInfoCircle className='mr-1' /> Maximum specifications may vary based on system
            implementation and testing conditions <a href="https://github.com/as-jackson/Rockchip-Docs" className="text-primary hover:underline" target="_blank">[424]</a>.
          </p>
        </div>

        {/* Latency Analysis */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">4.2. Latency Considerations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Real-World Latency */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-4">Real-World Latency Measurement</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                  <span className="text-slate-700">i.MX 8M (Cortex-A53 + VPU)</span>
                  <span className="font-semibold text-amber-600">250-270ms</span>
                </div>
                <p className="text-sm text-gray-600">
                  Measured using GStreamer pipeline with vpudec and waylandsink for H.264 stream from Ethernet camera
                  <a href="https://community.nxp.com/t5/i-MX-Processors/i-MX-8M-VPU-Low-Latency-H264-Decoding-with-Gstreamer-vpudec/m-p/1156805/highlight/true" className="text-primary hover:underline" target="_blank">[711]</a>.
                </p>
              </div>
            </div>

            {/* Protocol Latency Ranges */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-4">Protocol Latency Ranges</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">UDP</span>
                  <span className="text-sm text-slate-500">&lt;100ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">SRT (Ideal)</span>
                  <span className="text-sm text-slate-500">~120ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">SRT (Real-world)</span>
                  <span className="text-sm text-slate-500">400ms-1s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">LL-HLS</span>
                  <span className="text-sm text-slate-500">2-5s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stream Handling */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">4.3. Stream Handling Capabilities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Odroid-C2 Performance */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-4">Odroid-C2 Performance</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">2-4 SD/HD streams</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Single 4K stream + 1-2 HD streams</span>
                </div>
                <div className="text-sm text-gray-600 mt-3 flex items-center">
                  <FaMicrochip className='mr-3' /> Cortex-A53 CPU with Mali-450 GPU
                </div>
              </div>
            </div>

            {/* NanoPi5 Performance */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-4">NanoPi5 Performance</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">4-8 HD streams</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Multiple 4K streams</span>
                </div>
                <div className="text-sm text-gray-600 mt-3 flex items-center">
                  <FaMicrochip className='mr-3' /> Cortex-A55/A76 CPU with Mali-G52 GPU
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Optimization */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">4.4. Resource Optimization</h3>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CPU Load Reduction */}
              <div>
                <h4 className="font-semibold mb-4">CPU Load Reduction</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-700">VPU-accelerated decoding</span>
                      <span className="font-semibold text-green-600">63.7% CPU</span>
                    </div>
                    <p className="text-xs text-gray-600">Single 1080p25 H.264 RTSP stream <a href="https://www.cnblogs.com/Tronlong818/p/17457032.html" className="text-primary hover:underline" target="_blank">[613]</a></p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-700">Software decoding</span>
                      <span className="font-semibold text-red-600">120% CPU</span>
                    </div>
                    <p className="text-xs text-gray-600">MJPEG + OpenCV processing</p>
                  </div>
                </div>
              </div>

              {/* Optimization Techniques */}
              <div>
                <h4 className="font-semibold mb-4">Optimization Techniques</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Zero-copy buffer management</li>
                  <li>• Optimized GStreamer pipeline design</li>
                  <li>• Efficient thread synchronization</li>
                  <li>• Minimal buffer sizes</li>
                  <li>• Power-efficient ARM architecture</li>
                  <li>• Fanless operation capability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmPerformance;
