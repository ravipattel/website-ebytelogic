"use client";

import Image, { StaticImageData } from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import React, { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    RadialLinearScale,
} from "chart.js";
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2";
import { CgLoadbarSound, CgPullClear } from "react-icons/cg";
import {
    BiArrowToRight,
    BiBell,
    BiCalendarCheck,
    BiChip,
    BiCloud,
    BiCodeAlt,
    BiDollarCircle,
    BiError,
    BiLeaf,
    BiLink,
    BiLock,
    BiLockAlt,
    BiMerge,
    BiNetworkChart,
    BiPlug,
    BiSearchAlt,
    BiServer,
    BiShield,
    BiSolidLayerMinus,
    BiSolidThermometer,
    BiTestTube,
    BiTime,
    BiTimer,
    BiVideo,
    BiVideoOff,
} from "react-icons/bi";
import { BsOpticalAudio, BsShieldCheck } from "react-icons/bs";
import {
    FaArrowRight,
    FaBolt,
    FaCheckCircle,
    FaCloud,
    FaCode,
    FaFilm,
    FaMicrochip,
    FaServer,
    FaVideo,
} from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaN } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

import Button from "@/src/components/Button";
import BlogSuggestions from "@/src/components/Suggestion";

import AfterLipSyncPng from "@/src/assets/images/blogs/blogDetails/afterav.png";
import BeforeLipSyncPng from "@/src/assets/images/blogs/blogDetails/beforeav.png";
import YoctoFlowchartPng from "@/src/assets/images/blogs/blogDetails/yoctoFlowChart.png";
import BuildrootFlowchartPng from "@/src/assets/images/blogs/blogDetails/buildrootFlowChart.png";
import DecisionChartPng from "@/src/assets/images/blogs/blogDetails/decisionChart.png";
import NdiPng from "@/src/assets/images/blogs/blogDetails/ndi.png";
import YoctoPng from "@/src/assets/images/blogs/blogDetails/buildroot.png";
import SrtRtmpPng from "@/src/assets/images/blogs/blogDetails/srt.png";
import AvPng from "@/src/assets/images/blogs/blogDetails/av-lip-sync.png";
import EmbeddedPng from "@/src/assets/images/blogs/blogDetails/embedded.png";
import LinuxBspPng from "@/src/assets/images/blogs/blogDetails/linux-bsp.png";
import CeaPng from "@/src/assets/images/blogs/blogDetails/cea.png";
import PtpPng from "@/src/assets/images/blogs/blogDetails/ptp.png";
import FixingFramePng from "@/src/assets/images/blogs/blogDetails/fixing-frame.png";
import ffmpegPng from "@/src/assets/images/blogs/blogDetails/ffmpeg.png";
import GlassPng from "@/src/assets/images/blogs/blogDetails/glass-to-glass.png";
import EncodersPng from "@/src/assets/images/blogs/blogDetails/encoders.png";
import QaPng from "@/src/assets/images/blogs/blogDetails/qa.png";
import SecurePng from "@/src/assets/images/blogs/blogDetails/secure.png";
import HardwarePng from "@/src/assets/images/blogs/blogDetails/hardware-jetson.png";
import OttPng from "@/src/assets/images/blogs/blogDetails/ott.png";
import DeploymentPng from "@/src/assets/images/blogs/blogDetails/deployment.png";
import BroadcastPipelinePng from "@/src/assets/images/blogs/blogDetails/broadcast-pipeline.png";
import EnterprisePng from "@/src/assets/images/blogs/blogDetails/enterprise.png";
import LiveSportsPng from "@/src/assets/images/blogs/blogDetails/live-sports.png";
import OttMusicPng from "@/src/assets/images/blogs/blogDetails/ott-music.png";
import OttMultiPng from "@/src/assets/images/blogs/blogDetails/ott-multi.png";
import DronePng from "@/src/assets/images/blogs/blogDetails/drone.png";
import RemotePng from "@/src/assets/images/blogs/blogDetails/remote.png";
import LedAfterPng from "@/src/assets/images/blogs/blogDetails/ledafter.png";
import LedBeforePng from "@/src/assets/images/blogs/blogDetails/ledbefore.png";

ChartJS.register(
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale
);

const blogsData = [
    // 1st Blog
    {
        id: "av-lip-sync-in-2025",
        breadCrumb: "AV Lip Sync in 2025",
        introData: {
            title: "Why Lip-Sync Still Breaks in 2025",
            highlight: "2025",
            subtitle: "AV SYNC ERROR · 45ms TOLERANCE · REAL-TIME STREAMING",
            paragraphs: [
                "For viewers, nothing ruins credibility faster than mismatched lips and speech. While codecs, encoders, and IP networks have improved, AV sync errors still creep in—often from small, compounding delays across capture, encode, network, decode, and render. Human perception research shows viewers detect audio-video mismatch surprisingly early; broadcast engineering targets are stricter still.",
                "For live contribution and remote production, your goal should be <span class='font-semibold'> ±10 ms at the point of playout,</span> with enough margin to withstand network jitter and retransmissions. ITU-R BT.1359 reports detectability around <span class='font-semibold'> +45 ms audio lead to −125 ms audio lag </span>, while EBU guidance for HDTV operations suggests <span class='font-semibold'> ~10 ms audio early to ~20 ms audio late </span> is effectively “invisible” in normal viewing—hence the tighter engineering target used by many teams. <a href='https://tech.ebu.ch/docs/techreview/trev_2009-Q1_HD-Audio-Delays.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>ITU Tech EBU</a>",
            ],
            button: {
                label: "Explore Sync Solutions",
                link: "/case-study/broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency",
            },
            image: {
                src: AvPng,
                alt: "Lip Sync Visual",
            },
        },
        qaTitle: "Lip-Sync Sync Deep Dive",
        qa: [
            {
                id: 1,
                title: "What “±10 ms” actually means",
                content: [
                    "<a href='https://www.ebytelogic.com/services/av-protocol' target='_blank' class='text-blue-600 underline'>Lip-sync</a> error is the <span class='font-semibold'>relative</span> timing between audio and video at the output. If the video path is 70 ms and audio path is 80 ms, you’re at <span class='font-semibold'> audio late by 10 ms.</span>",
                    "The ±10 ms target is not a law; it’s a <span class='font-semibold'> design guardrail</span> that sits well within human perception thresholds and typical broadcaster QoS tolerances.",
                    "In complex chains (e.g., SRT contribution → cloud transcode → HLS distribution), you want to hold ±10 ms at each hand-off to avoid drift accumulation.",
                    "ITU and EBU documents formalize acceptable ranges; product teams adopt a tighter band to avoid edge-case complaints. <a href='https://tech.ebu.ch/docs/techreview/trev_2009-Q1_HD-Audio-Delays.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>ITU Tech EBU</a>",
                ],
            },
            {
                id: 2,
                title: "Where sync goes wrong: the five links",
                content: [
                    "1. <span class='font-semibold'>Capture – </span> unsynchronized cameras/mics, different driver latencies.",
                    "2. <span class='font-semibold'>Encode – </span> look-ahead, buffering; audio and video encoders not slaved to a common clock.",
                    "3. <span class='font-semibold'>Network – </span> <a href='https://www.ebytelogic.com/services/multimedia-framework' target='_blank' class='text-blue-600 underline'>jitter</a>, packet re-ordering, retransmissions; SRT/UDP buffers.",
                    "4. <span class='font-semibold'>Decode – </span> codec pipeline buffering and reordering (B-frames).",
                    "5. <span class='font-semibold'>Render – </span> audio device buffer vs video display vs compositor queue.",
                    "The fix is <span class='font-semibold'>consistent timing </span> end-to-end: assign a trustworthy clock, carry timestamps cleanly, and size buffers for the worst realistic jitter without bloating latency.",
                ],
                chartTitle: "Typical Latency Breakdown",
                chartType: "horizontal",
                chart: [
                    { name: "Capture", latency: "20–40 ms" },
                    { name: "Encode", latency: "30–50 ms" },
                    { name: "Network", latency: "50–100 ms" },
                    { name: "Decode", latency: "30–50 ms" },
                    { name: "Render", latency: "20–40 ms" },
                ],
            },
            {
                id: 3,
                title: "GStreamer sync fundamentals (what really matters)",
                content: [
                    "GStreamer aligns streams using <span class='font-semibold'> a pipeline clock, buffer timestamps (PTS/DTS), and segment events. </span>",
                    "Sinks render against the clock; if data arrives late beyond a threshold, sinks may drop to preserve sync.",
                    "Mastering this behavior is step one. <a href='https://gstreamer.freedesktop.org/documentation/application-development/advanced/clocks.html?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>GStreamer+1.</a>",
                    "<span class='font-semibold'> Key concepts you’ll use: </span>",
                    "<span class='font-semibold'> • Clock selection: </span> ensure <span class='font-semibold'> one master clock </span> (often the audio sink).",
                    "<span class='font-semibold'> • Timestamps: </span> preserve PTS from source → depay/decoder → filters → sink.",
                    "<span class='font-semibold'> • Latency & sync: </span> many elements add buffering; sinks have <span class='font-semibold'> sync </span> and <span class='font-semibold'> max-lateness </span> controls.<a href='https://gstreamer.freedesktop.org/documentation/base/gstbasesink.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer</a>",
                    "<span class='font-semibold'> Practical defaults that help:</span> ",
                    "<span class='font-semibold'> • </span> Keep <span class='font-semibold'> sync=true </span> on sinks unless you’re in a diagnostic mode.",
                    "<span class='font-semibold'> • </span> Use <span class='font-semibold'> clocksync </span> if you need to re-align timestamps to the current clock before a sink. <a href='https://gstreamer.freedesktop.org/documentation/coreelements/clocksync.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer</a>",
                    "<span class='font-semibold'> • </span> Watch and cap internal buffers (queues) so back-pressure doesn’t balloon end-to-end delay. <a href='https://gstreamer.freedesktop.org/documentation/coreelements/queue.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer+1.</a>",
                ],
                chartType: "vertical",
                chartTitle: "GStreamer Pipeline Stages",
                chart: [
                    {
                        name: "Source",
                        type: "source",
                        description: "Input stream source (e.g., v4l2src, alsasrc)",
                        flow: "source → depay/decoder",
                    },
                    {
                        name: "Depay/Decoder",
                        type: "decoder",
                        description: "Payload/codec decoder (e.g., h264dec, avdec_aac)",
                        flow: "depay/decoder → filters",
                    },
                    {
                        name: "Filters",
                        type: "filter",
                        description: "Filter elements (e.g., videoconvert, audioresample)",
                        flow: "filters → jitterbuffer",
                    },
                    {
                        name: "Jitterbuffer",
                        type: "buffer",
                        description:
                            "Buffer to handle network jitter (e.g., rtpjitterbuffer)",
                        flow: "jitterbuffer → sink",
                    },
                    {
                        name: "Sink",
                        type: "sink",
                        description:
                            "Final output sink (e.g., autovideosink, autoaudiosink)",
                        flow: "sink → clock",
                    },
                    {
                        name: "Clock",
                        type: "clock",
                        description:
                            "Master clock for synchronization (often the audio sink)",
                        flow: "clock → sync",
                    },
                ],
                chartData: {
                    chartTitle: "Queue Level Over Time",
                    chartType: "line",
                    data: {
                        labels: ["0s", "1s", "2s", "3s", "4s", "5s"],
                        datasets: [
                            {
                                label: "Healthy Queue",
                                data: [5, 6, 8, 7, 6, 5],
                                borderColor: "#28a745",
                                backgroundColor: "rgba(40, 167, 69, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                            {
                                label: "Runaway Back-Pressure",
                                data: [1, 2, 4, 7, 10, 12],
                                borderColor: "#dc3545",
                                backgroundColor: "rgba(220, 53, 69, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                        ],
                    },
                },
            },
            {
                id: 4,
                title: "Network realities: SRT latency & jitter",
                content: [
                    "SRT achieves reliability over UDP using ARQ (retransmissions), sequence recovery, and congestion handling.",
                    "To work, both sender and receiver maintain <span class='font-semibold'> latency buffers </span> sized for packet round trips and jitter.",
                    "The <span class='font-semibold'> latency parameter </span> is a fixed window (e.g., 120–8000 ms) that dictates how long the receiver waits for late packets before handing frames to the decoder.",
                    "Under-sizing it causes skips; over-sizing bloats your glass-to-glass delay. <a href='https://video.matrox.com/en/media/guides-articles/srt-protocol?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>video.matrox.comdoc.haivision.com</a>",
                    "Well-regarded guidance for SRT latency is to set it as a multiple of measured <span class='font-semibold'> RTT. </span>",
                    "Modern ops playbooks recommend <span class='font-semibold'> ≥3× peak RTT </span> (AWS MediaConnect), with many practitioners targeting <span class='font-semibold'> ~4× RTT </span> as a safe starting point.",
                    "Always remember: SRT uses the <span class='font-semibold'> higher </span> of sender/receiver latency settings. <a href='https://doc.haivision.com/SRT/1.5.4/Haivision/latency?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>Amazon Web Services, Inc.MuxHaivisiondoc.haivision.com</a>",
                    "<span class='font-semibold'> Tip :</span> Latency refers to <span class='font-semibold'> SRT transport only </span>, not the total device/codec/display pipeline.",
                    "Measure <span class='font-semibold'>glass-to-glass </span>, then optimize each segment separately. <a href='https://video.matrox.com/en/media/guides-articles/srt-protocol?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>doc.haivision.com</a>",
                ],
            },
            {
                id: 5,
                title: "The tuning playbook (step-by-step)",
                content: [
                    "<span class='font-semibold'>A) Establish a latency budget</span>",
                    "<span class='font-semibold'>•</span> Decide your end-to-end target (e.g., <span class='font-semibold'>≤300–500 ms </span> for live contribution), then reserve <span class='font-semibold'>~100 ms </span> margin for network jitter/retransmits.",
                    "<span class='font-semibold'>•</span> Many production teams land SRT contribution around a few hundred milliseconds when networks are clean; transoceanic or lossy links will trend higher.<a href='https://ossrs.net/lts/en-us/docs/v5/doc/srt?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>Ossrs</a>",
                    "<span class='font-semibold'>B) Pick a master clock and stick to it</span>",
                    "<span class='font-semibold'>•</span> In GStreamer, the <span class='font-semibold'>audio sink</span> commonly drives the pipeline clock; ensure both A/V branches converge to sinks honoring this clock.<a href='https://gstreamer.freedesktop.org/documentation/application-development/advanced/clocks.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer</a>",
                    "<span class='font-semibold'>C) Right-size queues</span>",
                    "<span class='font-semibold'>•</span> Default <span class='font-semibold'>queue</span> limits (200 buffers, 10 MB, or 1 s) can secretly add seconds under stress.",
                    "<span class='font-semibold'>•</span> Set <span class='font-semibold'>max-size-time</span> and/or <span class='font-semibold'>max-size-buffers</span> explicitly for each queue and monitor via <span class='font-semibold'>queue-levels tracer.</span> <a href='https://gstreamer.freedesktop.org/documentation/coreelements/queue.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer + 1</a>",
                    "<span class='font-semibold'>D) Tame network jitter with rtpjitterbuffer (if using RTP)</span>",
                    "<span class='font-semibold'>•</span> Set <span class='font-semibold'>latency</span> to the expected network jitter budget; consider <span class='font-semibold'>do-lost=true</span> so downstream can conceal.",
                    "<span class='font-semibold'>•</span> Balance drops vs waiting. <a href='https://gstreamer.freedesktop.org/documentation/rtpmanager/rtpjitterbuffer.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer + 1</a>",
                    "<span class='font-semibold'>E) Control late frames at the sinks</span>",
                    "<span class='font-semibold'>•</span> Use <span class='font-semibold'>max-lateness</span> on sinks to drop excessively late buffers rather than dragging sync. Start with 20–40 ms and tune. <a href='https://gstreamer.freedesktop.org/documentation/base/gstbasesink.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer</a>",
                    "<span class='font-semibold'>F) SRT parameter hygiene</span>",
                    "<span class='font-semibold'>•</span> Measure <span class='font-semibold'>RTT</span> between endpoints; set <span class='font-semibold'>SRT latency = 3–4× peak RTT</span>.",
                    "<span class='font-semibold'>•</span> If you see incremental <span class='font-semibold'>skipped packets</span> on the decoder, bump latency; if skips jump in bursts, lower bitrate or raise bandwidth overhead.<a href='https://aws.amazon.com/blogs/media/troubleshooting-srt-and-zixi-with-aws-elemental-mediaconnect/?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>Amazon Web Services, Inc.doc.haivision.com</a>",
                    "<span class='font-semibold'>•</span> Ensure clocks are disciplined (NTP/PTP) on both nodes to avoid timestamp drift; critical when bridging to ST 2110 domains.<a href='https://leaderphabrix.com/understanding-the-fundamentals-of-ptp-and-smpte-st-2110/?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>leaderphabrix.com</a>",
                ],
            },
            {
                id: 6,
                title: "Measuring & validating lip-sync",
                content: [
                    "<span class='font-semibold'>Human factors & thresholds.</span> For broadcast QC and sensitive checks, aim for <span class='font-semibold'>audio within ±10 ms</span> of video.",
                    "ITU-R BT.1359 details detectability/acceptability limits; EBU field experience shows <span class='font-semibold'> ≈10 ms early to 20 ms late </span> is typically unnoticeable, but that’s not a license to be sloppy.",
                    "Use the tight target. <a href='https://tech.ebu.ch/docs/techreview/trev_2009-Q1_HD-Audio-Delays.pdf?utm_source=chatgpt.com' class='text-blue-600 underline' target='_blank'>ITUTech EBU</a>",
                    "<span class='font-semibold'>Practical methods:</span>",
                    "<span class='font-semibold'>• Visual clapper / flash + microphone </span> → compute Δt between flash frame and audio transient.",
                    "<span class='font-semibold'>• Synthetic test clips </span> with embedded markers.",
                    "<span class='font-semibold'>• On-air reference loops </span> (e.g., BBC-style sync promo loops) for continuous alignment checks. <a href='https://tech.ebu.ch/docs/techreview/trev_2009-Q1_HD-Audio-Delays.pdf?utm_source=chatgpt.com' class='text-blue-600 underline' target='_blank'>Tech EBU</a>",
                    "<span class='font-semibold'>Pipeline observability:</span>",
                    "<span class='font-semibold'>•</span> Enable <span class='font-semibold'>GStreamer tracers</span> (queue-levels) to watch back-pressure growth.",
                    "<span class='font-semibold'>•</span> Log <span class='font-semibold'>sink render times</span>, late/dropped frames, and jitterbuffer stats. <a href='https://gstreamer.freedesktop.org/documentation/rstracers/queue-levels.html?utm_source=chatgpt.com' class='text-blue-600 underline' target='_blank'>GStreamer</a>",
                ],
                beforeAfter: {
                    title: "Oscilloscope Δt Comparison: Before vs After Sync Tuning",
                    description:
                        "A visual comparison of lip-sync error measured using a clap/flash test. Δt reduced from 45 ms to 8 ms after tuning.",
                    beforeImage: BeforeLipSyncPng,
                    afterImage: AfterLipSyncPng,
                    deltaBefore: "Before (Δt: 45 ms)",
                    deltaAfter: "After (Δt: 8 ms)",
                },
            },
            {
                id: 7,
                title: "Example reference pipelines (for illustration)",
                content: [
                    "These are illustrative patterns; adapt elements/params to your codecs and hardware.",
                    "<span class='font-semibold'>Sender (encode + SRT out):</span>",

                    `<div style="background-color: #000000d1; color:white; padding: 10px 30px; border-radius: 10px; overflow:auto">
                   <pre>gst-launch-1.0gst-launch-1.0 \\</pre>
                   <pre>v4l2src io-mode=dmabuf is-live=true ! videoconvert ! video/x-raw,framerate=30/1 ! \\</pre>
                   <pre>x264enc tune=zerolatency key-int-max=30 bitrate=4000 ! h264parse ! mpegtsmux name=mux \\</pre>
                   <pre>alsasrc is-live=true ! audioresample ! audioconvert ! avenc_aac bitrate=128000 ! \\</pre>
                   <pre>queue ! mux. \\</pre>
                    <pre>mux. ! srtsink uri="srt://RECEIVER_IP:PORT?mode=caller" latency=300</pre>
                    </div>`,
                    "<span class='font-semibold'>Receiver (SRT in + play out):</span>",
                    `<div style="background-color: #000000d1; color:white; padding: 10px 30px; border-radius: 10px; overflow:auto">
                    <pre>gst-launch-1.0 \\</pre>
                    <pre>srtsrc uri="srt://0.0.0.0:PORT?mode=listener" latency=300 ! tsdemux name=demux \\</pre>
                    <pre>demux. ! h264parse ! avdec_h264 ! queue max-size-time=20000000 ! \\</pre>
                    <pre>videoconvert ! clocksync ! autovideosink sync=true max-lateness=20000000 \\</pre>
                    <pre>demux. ! aacparse ! avdec_aac ! audioresample ! queue max-size-time=20000000 ! \\</pre>
                    <pre>autoaudiosink sync=true</pre>
                    </div>`,
                    "<span class='font-semibold'>Notes:</span>",
                    "<span class='font-semibold'>•</span> Start with <span class='font-semibold'>SRT latency ~3–4× peak RTT</span> (e.g., 300–600 ms for typical WAN).<a href='https://www.mux.com/docs/guides/use-srt-to-live-stream?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>Amazon Web Services, Inc.Mux</a>",
                    "<span class='font-semibold'>•</span> Keep <span class='font-semibold'>queue max-size-* small</span> to prevent runaway latency.<a href='https://gstreamer.freedesktop.org/documentation/coreelements/queue.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer</a>",
                    "<span class='font-semibold'>•</span> Use <span class='font-semibold'>clocksync</span> to align before sinks; set <span class='font-semibold'>max-lateness</span> to drop tardy frames rather than let A/V drift. <a href='https://gstreamer.freedesktop.org/documentation/coreelements/clocksync.html?gi-language=c' target='_blank' class='text-blue-600 underline'>GStreamer + 1</a>",
                ],
            },
            {
                id: 8,
                title: "Special cases: RTP/RTSP & ST 2110 environments",
                content: [
                    "• For RTP/RTSP chains, <span class='font-semibold'>rtpjitterbuffer</span> is your main lever against jitter and reordering—size it to your jitter profile; monitor late/lost events. <a href='https://gstreamer.freedesktop.org/documentation/rtpmanager/rtpjitterbuffer.html?gi-language=c' class='text-blue-600 underline' target='_blank'>GStreamer</a>",
                    "• In managed IP facilities (ST 2110), getting <span class='font-semibold'>PTP</span> right is non-negotiable. Align audio and video RTP timestamps across devices; lip-sync falls out naturally when PTP is stable and configured correctly. <a href='https://leaderphabrix.com/understanding-the-fundamentals-of-ptp-and-smpte-st-2110/?utm_source=chatgpt.com' class='text-blue-600 underline' target='_blank'>leaderphabrix.com</a>",
                ],
            },
            {
                id: 9,
                title: "Acceptance criteria & go-live checklist",
                content: [
                    "<span class='font-semibold'>• Lip-sync error ≤ ±10 ms</span> over a 15-minute soak with typical content.",
                    "<span class='font-semibold'>• No sustained queue growth;</span> steady-state latency within budget.",
                    "<span class='font-semibold'>• SRT skips</span> are rare and non-accumulative; no decoder underruns. <a href='https://doc.haivision.com/SRT/1.5.3/Haivision/frequently-asked-questions?utm_source=chatgpt.com' class='text-blue-600 underline' target='_blank'>doc.haivision.com</a>",
                    "<span class='font-semibold'>• Clocks disciplined</span> (NTP/PTP) on all endpoints. <a href='https://leaderphabrix.com/understanding-the-fundamentals-of-ptp-and-smpte-st-2110/?utm_source=chatgpt.com' class='text-blue-600 underline' target='_blank'>leaderphabrix.com</a>",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Key takeaways and references to help you fine-tune lip-sync in IP video workflows.",
            content: [
                "Lip-sync is not a single knob—it’s a <span class='font-semibold'>system property</span>. By anchoring on a reliable clock, sizing buffers with intention, and setting SRT latency based on <span class='font-semibold'>measured RTT</span> (not guesses), you can achieve broadcast-grade <span class='font-semibold'>±10 ms</span> in modern IP workflows.",
                "The discipline you apply here pays off everywhere: <span class='font-semibold'>fewer complaints</span>, better QA metrics, happier customers.",
            ],
            referencesTitle: "References",
            references: [
                "ITU-R BT.1359",
                "EBU Lip-Sync Guidance",
                "GStreamer Docs",
                "SRT RTT Guidance",
                "AWS MediaConnect",
                "Mux Tuning Notes",
                "PTP / ST 2110",
            ],
        },
    },
    // 2nd Blog
    {
        id: "SRT-vs-RIST-vs-RTMP",
        breadCrumb: "SRT vs RIST vs RTMP",
        introData: {
            title: "Protocol Wars in Live Contribution",
            highlight: "Live Contribution",
            subtitle:
                "RTMP vs SRT vs RIST · SUB-SECOND LATENCY · BROADCAST RELIABILITY",
            paragraphs: [
                "If you’re building a contribution workflow in 2025—feeding cameras, encoders, or remote production into your main broadcast—you’ll encounter <span class='font-semibold'>three protocols repeatedly: RTMP, SRT, and RIST.</span>",
                "Each has strengths and weaknesses. RTMP is legacy but still omnipresent; <a href='https://www.vmix.com/download/srt_alliance_deployment_guide.pdf' target='_blank' class='text-blue-600 underline'>SRT</a> has gained enormous traction for low-latency, firewall-friendly delivery; and RIST, born from broadcast vendors, emphasizes <span class='font-semibold'>standards compliance and interoperability.</span>",
                "But if your requirement is <span class='font-semibold'>sub-second latency with broadcast reliability,</span> which protocol should you choose? Let’s compare them across the metrics that matter.",
            ],
            button: {
                label: "Explore Protocol Choices",
                link: "/case-study/hdmi-multiview-player",
            },
            image: {
                src: SrtRtmpPng,
                alt: "Protocol Comparison Visual",
            },
        },
        qaTitle: "Protocol Wars Deep Dive",
        qa: [
            {
                id: 1,
                title: "The Contenders: Quick Recap",
                content: [
                    "<span class='font-semibold'>RTMP (Real-Time Messaging Protocol)</span>",
                    "<span class='font-bold'>•</span> Developed by Macromedia/Adobe for Flash.",
                    "<span class='font-bold'>•</span> Typically runs over TCP.",
                    "<span class='font-bold'>•</span> Ubiquitous in CDNs and streaming stacks.",
                    "<span class='font-bold'>•</span> Latency: ~2–5 seconds typical, lower with tuning.",
                    "<span class='font-bold'>•</span> Status: Deprecated but still supported widely.",
                    "<span class='font-semibold'>SRT (Secure Reliable Transport)</span>",
                    "<span class='font-bold'>•</span> Open-sourced by Haivision in 2017.",
                    "<span class='font-bold'>•</span> UDP-based, uses ARQ (Automatic Repeat reQuest) for packet recovery.",
                    "<span class='font-bold'>•</span> Encrypted with AES.",
                    "<span class='font-bold'>•</span> Tunable latency (≥120 ms).",
                    "<span class='font-bold'>•</span> Status: Strong adoption in contribution workflows.",
                    "<span class='font-semibold'>RIST (Reliable Internet Stream Transport)</span>",
                    "<span class='font-bold'>•</span> Standardized by Video Services Forum (VSF).",
                    "<span class='font-bold'>•</span> Also UDP-based, inspired by broadcast needs.",
                    "<span class='font-bold'>•</span> Profiles: Simple (FEC, ARQ), Main (multi-stream bonding, tunneling).",
                    "<span class='font-bold'>•</span> Emphasis on interoperability across vendors.",
                    "<span class='font-bold'>•</span> Status: <span class='font-semibold'>Growing but less mainstream than SRT.</span>",
                ],
            },
            {
                id: 2,
                title: "Latency: How Low Can You Go?",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> TCP handshake + retransmissions add latency.",
                    "<span class='font-bold'>•</span> Even with “<a href='https://www.eecg.utoronto.ca/~ashvin/publications/low-latency-tomccap08.pdf' target='_blank' class='text-blue-600 underline'>low-latency</a> RTMP,” sub-second delivery is rare.",
                    "<span class='font-bold'>•</span> Best-case tuned setups: ~1–2 seconds.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> Sub-second contribution achievable.",
                    "<span class='font-bold'>•</span> Latency set as a buffer (3–4× RTT recommended).",
                    "<span class='font-bold'>•</span> Typical glass-to-glass: <span class='font-semibold'>150–500 ms</span> depending on network stability.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Also UDP + ARQ.",
                    "<span class='font-bold'>•</span> Matches <a href='https://www.ebytelogic.com/case-study/hdmi-multiview-player' target='_blank' class='text-blue-600 underline'>SRT</a> in latency under similar conditions.",
                    "<span class='font-bold'>•</span> Some implementations show <span class='font-semibold'>150–400 ms</span> in controlled tests.",
                    "<span class='font-semibold'>Verdict: RTMP is out</span> if you need <1 s. Both SRT and <a href='https://static.vsf.tv/activity_groups/RIST_poster_for_VidTrans2018Feb25.pdf ' target='_blank' class='text-blue-600 underline'>RIST</a> can hit sub-second reliably.",
                ],
                chartData: {
                    chartTitle: "Latency vs Buffer Size",
                    chartType: "bar",
                    rttData: [100, 150, 200, 250, 300], // (y-axis)
                    bufferData: [10, 20, 30, 40, 50], // (x-axis)
                    data: {
                        labels: ["10 KB", "20 KB", "30 KB", "40 KB", "50 KB"],
                        datasets: [
                            {
                                chartType: "bar",
                                bufferData: ["100 KB", "200 KB", "300 KB", "400 KB", "500 KB"],
                                rttData: [200, 300, 250, 400, 350],
                                rttLabel: "RTT (ms)",
                                barColor: "#4c6ef5b3",
                                borderColor: "#4c6ef5b3",
                                borderWidth: 1,
                                hoverBarColor: "#2b6ff5",
                                xAxisLabel: "Buffer Size (KB)",
                                yAxisLabel: "RTT (ms)",
                                barRadius: 4,
                                barThickness: 50,
                                maxBarThickness: 50,
                                layoutPadding: 20,
                            },
                        ],
                    },
                },
            },
            {
                id: 3,
                title: "Reliability: How Each Deals with Packet Loss",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> TCP retransmits every lost packet.",
                    "<span class='font-bold'>•</span> Good for reliability, but spikes latency under lossy networks.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> ARQ retransmissions inside a fixed buffer window.",
                    "<span class='font-bold'>•</span> Adaptive to loss; skips if too late, preserving sync.",
                    "<span class='font-bold'>•</span> Good balance between reliability and latency.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Implements ARQ, optional FEC, and advanced features (bonding, hitless switching).",
                    "<span class='font-bold'>•</span> Strong for broadcast redundancy.",
                    "<span class='font-bold'>•</span> Designed with professional contribution in mind.",
                    "<span class='font-semibold'>Verdict: RIST edges out SRT </span> in redundancy features, but both handle packet loss gracefully. <a href='https://www.ossrs.net/lts/en-us/assets/files/rtmp_specification_1.0-25a467618b92a3115bc97d4b0038b0ff.pdf' target='_blank' class='text-blue-600 underline'>RTMP</a> suffers most.",
                ],
                chartData: {
                    chartTitle: "Network Latency Comparison",
                    chartType: "line",
                    data: {
                        labels: ["0s", "1s", "2s", "3s", "4s"],
                        datasets: [
                            {
                                label: "SRT Latency",
                                data: [100, 120, 150, 130, 140],
                                borderColor: "rgba(75, 192, 192, 1)",
                                fill: false,
                            },
                            {
                                label: "RIST Latency",
                                data: [80, 90, 110, 100, 115],
                                borderColor: "rgba(153, 102, 255, 1)",
                                fill: false,
                            },
                        ],
                    },
                },
            },
            {
                id: 4,
                title: "Firewall Traversal & Ease of Deployment",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> Runs on TCP port 1935 or over HTTP/TLS.",
                    "<span class='font-bold'>•</span> Firewalls usually allow, but enterprise blocks possible.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> Designed with NAT traversal in mind.",
                    "<span class='font-bold'>•</span> Caller/listener modes make firewall punching easier.",
                    "<span class='font-bold'>•</span> Well-suited for remote contribution.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> NAT traversal support exists, but configuration is less straightforward.",
                    "<span class='font-bold'>•</span> Some vendors add tunneling to simplify.",
                    "<span class='font-semibold'>Verdict: SRT wins for ease of firewall/NAT traversal.</span>",
                ],
                image: DecisionChartPng,
            },
            {
                id: 5,
                title: "Ecosystem & Tooling",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> Supported everywhere: <a href='https://www.ebytelogic.com/case-study/multi-os-bsp-porting-and-boot-time-optimization' target='_blank' class='text-blue-600 underline'>OBS</a>, CDNs, ingest points.",
                    "<span class='font-bold'>•</span> But few innovations since Flash’s death.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> Widely adopted: OBS, GStreamer, VLC, FFmpeg, cloud providers.",
                    "<span class='font-bold'>•</span> Growing ecosystem with SRT Alliance backing.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Supported mainly by broadcast equipment vendors.",
                    "<span class='font-bold'>•</span> Fewer open-source tools compared to SRT.",
                    "<span class='font-bold'>•</span> Growing, but slower adoption in smaller companies.",
                    "<span class='font-semibold'>Verdict: SRT wins on ecosystem breadth.</span>",
                ],
                chartData: {
                    chartType: "doughnut",
                    doughnut: [
                        {
                            title: "RTMP: Legacy Giant",
                            color: "#92A8D1",
                            legend: ["Legacy CDNs", "Social Media", "Old Encoders"],
                            values: [40, 30, 30],
                        },
                        {
                            title: "SRT: Modern & Open",
                            color: "#FF6F61",
                            legend: [
                                "Open Source Tools",
                                "Cloud Providers",
                                "Modern Encoders/Decoders",
                            ],
                            values: [45, 35, 20],
                        },
                        {
                            title: "RIST: Broadcast Focused",
                            color: "#6B5B95",
                            legend: ["Broadcast Vendors", "Pro A/V Gear", "Niche Software"],
                            values: [60, 25, 15],
                        },
                    ],
                },
            },
            {
                id: 6,
                title: "Security & Encryption",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> Originally insecure; RTMPS (TLS) adds security.",
                    "<span class='font-bold'>•</span> Still weaker compared to modern approaches.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> AES encryption built in.",
                    "<span class='font-bold'>•</span> Widely considered secure enough for contribution.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Encryption optional; profiles support DTLS/SRTP.",
                    "<span class='font-bold'>•</span> Security depends on implementation/vendor.",
                    "<span class='font-semibold'>Verdict: SRT has stronger defaults; RIST can be equally secure if configured properly.</span>",
                ],
            },
            {
                id: 7,
                title: "Standards & Interoperability",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> Proprietary origin, not an open standard.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> Open-source spec, but not a formal standards body product.",
                    "<span class='font-bold'>•</span> Interop depends on SRT Alliance implementations.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Standards-driven, backed by VSF.",
                    "<span class='font-bold'>•</span> Designed to ensure multi-vendor interoperability.",
                    "<span class='font-semibold'>Verdict: RIST leads for standards compliance and interop.</span>",
                ],
            },
            {
                id: 8,
                title: "Cost & Vendor Lock-In",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> Free, everywhere.",
                    "<span class='font-bold'>•</span> But fading relevance.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> Free, open-source, large alliance.",
                    "<span class='font-bold'>•</span> No license costs.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Free spec, but ecosystem dominated by vendor equipment.",
                    "<span class='font-bold'>•</span> Risk of vendor lock-in if not careful.",
                    "<span class='font-semibold'>Verdict: SRT more open, RIST more vendor-centric.</span>",
                ],
            },
            {
                id: 9,
                title: "Maturity & Community Support",
                table: {
                    header: ["Feature", "RTMP", "SRT", "RIST"],
                    rows: [
                        {
                            feature: "Latency",
                            RTMP: "2–5 s",
                            SRT: "150–500 ms",
                            RIST: "150–400 ms",
                        },
                        {
                            feature: "Reliability",
                            RTMP: "TCP retransmits",
                            SRT: "ARQ, adaptive loss recovery",
                            RIST: "ARQ, FEC, bonding, hitless",
                        },
                        {
                            feature: "Firewall/NAT",
                            RTMP: "Moderate",
                            SRT: "Strong (caller/listener)",
                            RIST: "Medium",
                        },
                        {
                            feature: "Ecosystem",
                            RTMP: "Huge but legacy",
                            SRT: "Broad, modern tools",
                            RIST: "Vendor-focused, growing",
                        },
                        {
                            feature: "Security",
                            RTMP: "RTMPS only",
                            SRT: "AES encryption built-in",
                            RIST: "Optional DTLS/SRTP",
                        },
                        {
                            feature: "Standards",
                            RTMP: "Proprietary",
                            SRT: "Open source, not formal",
                            RIST: "VSF standard, interop focus",
                        },
                        {
                            feature: "Best Fit",
                            RTMP: "Legacy ingest",
                            SRT: "General contribution",
                            RIST: "Broadcast-grade redundancy",
                        },
                    ],
                },
            },
            {
                id: 10,
                title: "Recommendations by Use Case",
                content: [
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Small teams/startups</span>: Use <span class='font-semibold'>SRT</span>. Easy to integrate, wide support, good defaults.",
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Broadcast facilities with multi-vendor gear</span>: Consider <span class='font-semibold'>RIST</span>. Standards + redundancy help.",
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Legacy CDN workflows</span>: <span class='font-semibold'>RTMP</span> still works, but phase it out if you need low latency.",
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Hybrid approach</span>: Many broadcasters run <span class='font-semibold'>SRT at the edge</span>, then bridge into <span class='font-semibold'>RIST</span> for contribution into MCR.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Which Protocol Wins?",
            description:
                "Guidance on choosing the right contribution transport for your 2025 workflows.",
            content: [
                "If your goal is <span class='font-semibold'>sub-second contribution with minimal headaches</span>, <span class='font-semibold'>SRT is the pragmatic winner in 2025</span>—thanks to ecosystem support, firewall friendliness, and built-in encryption.",
                "<span class='font-semibold'>RIST</span>, however, is the <span class='font-semibold'>standards-first choice</span> for broadcasters running multi-vendor facilities, particularly when redundancy and long-term interoperability are priorities.",
                "<span class='font-semibold'>RTMP</span>, while still around, belongs only in legacy pipelines.",
                "👉 For product teams building contribution appliances or apps, <span class='font-semibold'>start with SRT</span>, <span class='font-semibold'>design for RIST interop</span>, and keep <span class='font-semibold'>RTMP only for compatibility</span>.",
            ],
        },
    },
    // 3rd Blog
    {
        id: "the-future-of-embedded-systems",
        breadCrumb: "The Future of Embedded Systems",
        introData: {
            title: " Why Embedded Systems Are Driving Innovation Across Industries",
            highlight: "Innovation Across Industries",
            subtitle: "Embedded Systems",
            paragraphs: [
                "<a href='https://www.ebytelogic.com/services' target='_blank' class='text-blue-600 underline'>Embedded systems</a> are no longer just the “hidden” computers inside devices. From live broadcast pipelines to autonomous drones, from smart medical devices to industrial IoT, they are now the <span class='font-semibold'>brains that make products intelligent, connected, and reliable.</span>",
                "As we step into 2025, the <span class='font-semibold'> embedded systems market is accelerating faster than ever.</span> Fueled by demands for <span class='font-semibold'> real-time processing, low-latency streaming, secure IoT connectivity, and <a href='https://ijarsct.co.in/Paper28133.pdf' target='_blank' class='text-blue-600 underline'>AI-driven intelligence</a>,</span> this decade is set to redefine what embedded platforms can achieve.",
                "In this article, we’ll explore <span class='font-semibold'>key trends, market forecasts, challenges, and real-world applications</span> that every product company, R&D team, and engineering leader should be watching.",
            ],
            button: {
                label: "Explore Protocol Choices",
                link: "/case-study/low-cost-android-ott-tv-box-development",
            },
            image: {
                src: EmbeddedPng,
                alt: "Protocol Comparison Visual",
            },
        },
        qaTitle: "Market Growth and Industry Outlook",
        qa: [
            {
                id: 1,
                title: "Market Growth and Industry Outlook",
                content: [
                    "<span class='font-bold'>•</span> The <span class='font-semibold'>global embedded systems market</span> is projected to grow from <span class='font-semibold'>$116 billion in 2024</span> to <span class='font-semibold'>over $160 billion by 2030</span>, driven by industries such as <span class='font-semibold'>automotive, aerospace, industrial IoT, healthcare, and MediaTech</span>.",
                    "<span class='font-bold'>•</span> Increasing adoption of <span class='font-semibold'>edge AI chips, 5G-enabled <a href='https://www.ebytelogic.com/services/iot-integration' target='_blank' class='text-blue-600 underline'>IoT devices</a>, and streaming frameworks</span> is fueling R&D investments.",
                    "<span class='font-bold'>•</span> In sectors like <span class='font-semibold'>media broadcasting</span>, embedded systems are not just enablers—they are the <span class='font-semibold'>core platforms</span> that make ultra-low latency video delivery possible.",
                ],
                chartData: {
                    chartTitle: "Queue Level Over Time",
                    chartType: "line",
                    data: {
                        labels: [2024, 2025, 2026, 2027, 2028, 2029, 2030],
                        datasets: [
                            {
                                label: "Market Size ($B)",
                                data: [115, 122, 129, 136, 145, 153, 160],
                                borderColor: "#0094FF",
                                backgroundColor: "#CCEAFF",
                            },
                        ],
                    },
                },
            },
        ],
        trendsTitle: "7 Key Trends Shaping the Future of Embedded Systems",
        trends: [
            {
                id: 1,
                title: "AI-powered Embedded Intelligence",
                icon: <CgPullClear className="size-4 text-indigo-600" />,
                content: [
                    "AI is moving from the <span class='font-semibold'>cloud to the edge</span>.",
                    "With powerful yet <span class='font-semibold'>energy-efficient SoCs</span>, devices can now run <span class='font-semibold'>machine learning models locally</span>, enabling faster response times in <span class='font-semibold'>drones, wearables, industrial robotics</span>, and <span class='font-semibold'> <a href='https://dl.acm.org/doi/10.1145/315253.314440' target='_blank' class='text-blue-600 underline'>live media analytics</a></span>.",
                ],
            },
            {
                id: 2,
                title: "Edge Computing & Real-Time Data Processing",
                icon: <BiServer className="size-4 text-blue-600" />,
                content: [
                    "Latency-sensitive industries like <span class='font-semibold'>broadcasting, aerospace, and automotive</span> are adopting <span class='font-semibold'>edge-first architectures</span>.",
                    "This reduces dependency on <span class='font-semibold'>cloud roundtrips</span> and ensures <span class='font-semibold'>microsecond-level decision making</span>.",
                ],
            },
            {
                id: 3,
                title: "Cybersecurity by Design in Embedded Platforms",
                icon: <BsShieldCheck className="size-4 text-green-600" />,
                content: [
                    "As <span class='font-semibold'>IoT devices</span> multiply, so do cyber risks.",
                    "Future-ready embedded systems must include <span class='font-semibold'>secure boot, trusted firmware updates</span>, and <span class='font-semibold'>protocol-level encryption</span> as <span class='font-semibold'>default design principles</span>, not afterthoughts.",
                ],
            },
            {
                id: 4,
                title: "Low-Latency Multimedia & AV Synchronization",
                icon: <BiVideo className="size-4 text-pink-600" />,
                content: [
                    "For <span class='font-semibold'>live broadcasts, sports streaming, and remote collaboration</span>, milliseconds matter.",
                    "Advances in <span class='font-semibold'>protocol handling (NDI, RTP, SRT, RIST)</span> and <span class='font-semibold'><a href='https://stackoverflow.com/questions/38804377/playback-audio-video-synchronization-algorithm' target='_blank' class='text-blue-600 underline'>AV sync optimization</a></span> are becoming <span class='font-semibold'>mission-critical</span> for product differentiation.",
                ],
            },
            {
                id: 5,
                title: "Energy-Efficient and Green Embedded Systems",
                icon: <BiLeaf className="size-4 text-emerald-600" />,
                content: [
                    "With growing <span class='font-semibold'>sustainability demands</span>, the industry is pushing for <span class='font-semibold'>ultra-low-power designs</span>, <span class='font-semibold'>optimized sleep modes</span>, and <span class='font-semibold'>eco-friendly chipsets</span> that balance performance with <span class='font-semibold'><a href='https://www.totalphase.com/blog/2025/04/role-of-embedded-systems-building-sustainable-future/' target='_blank' class='text-blue-600 underline'>environmental responsibility</a></span>.",
                ],
            },
            {
                id: 6,
                title: "Cross-Platform Frameworks & Open-Source Acceleration",
                icon: <BiSolidLayerMinus className="size-4 text-orange-600" />,
                content: [
                    "Frameworks like <span class='font-semibold'>Yocto, Buildroot, GStreamer, and FFMPEG</span> are now the <span class='font-semibold'>standard building blocks</span>.",
                    "The trend is towards <span class='font-semibold'>faster customization</span>, <span class='font-semibold'>community-driven innovation</span>, and <span class='font-semibold'>interoperability</span> across hardware vendors.",
                ],
            },
            {
                id: 7,
                title: "Cloud-Connected IoT & 5G Integration",
                icon: <CgLoadbarSound className="size-4 text-cyan-600" />,
                content: [
                    "By <span class='font-semibold'>2030</span>, over <span class='font-semibold'>75 billion IoT devices</span> will be connected.",
                    "The future of embedded systems is seamlessly tied to <span class='font-semibold'>5G</span> and <span class='font-semibold'>cloud-native infrastructure</span>, enabling <span class='font-semibold'>predictive maintenance, smart automation</span>, and <span class='font-semibold'><a href='https://www.puresoftware.com/blog/top-embedded-software-trends-to-watch-in-2025' target='_blank' class='text-blue-600 underline'>new digital services</a></span>.",
                ],
            },
        ],
        highlightedFlowchart: {
            title: "Edge vs. Cloud Processing",
            subtitle:
                "Edge computing processes data locally for near-instant results, while cloud computing sends data to a central server, introducing latency.",
            sides: [
                {
                    label: "Edge Computing",
                    color: "#007BFF",
                    borderColor: "#A6D9FF",
                    flow: [
                        {
                            title: "Device",
                            description: "(e.g., Drone, Camera)",
                            color: "#B3E5FC",
                        },
                        {
                            title: "Local AI Processing",
                            description: "(Immediate Action)",
                            color: "#0094FF",
                        },
                    ],
                    result: {
                        title: "Edge Computing",
                        text: "Result: Low Latency",
                        color: "#007BFF",
                    },
                },
                {
                    label: "Traditional Cloud Computing",
                    color: "#5A5A5A",
                    borderColor: "#CCCCCC",
                    flow: [
                        {
                            title: "Device",
                            description: "(e.g., Drone, Camera)",
                            color: "#E0E0E0",
                        },
                        {
                            title: "Data to Cloud",
                            color: "#B0BEC5",
                        },
                        {
                            title: "Cloud AI Processing",
                            description: "(Delayed Action)",
                            color: "#455A64",
                        },
                    ],
                    result: {
                        title: "Traditional Cloud Computing",
                        text: "Result: High Latency",
                        color: "#5A5A5A",
                    },
                },
            ],
        },
        challengesTitle: "Challenges Ahead for Engineers & Product Companies",
        challenges: [
            {
                id: 1,
                title: "Hardware-software co-optimization complexity",
                content: ["New SoCs require faster adaptation of BSPs and middleware."],
            },
            {
                id: 2,
                title: "Shorter product life cycles vs. long-term support",
                content: [
                    "Products are expected to last years, but frameworks evolve monthly.",
                ],
            },
            {
                id: 3,
                title: "Fragmentation of protocols and standards",
                content: [
                    "From <span class='font-semibold'>AV streaming protocols to IoT frameworks</span>, interoperability remains a major pain point.",
                ],
            },
        ],
        caseStudy: {
            title: "Case Studies & Real-World Examples",
            description: `At <span class='font-semibold'>eByteLogic</span>, we’ve seen these challenges and trends firsthand. These examples highlight how <span class='font-semibold'>cutting-edge embedded engineering</span> is already shaping real-world products in <span class='font-semibold'>2025</span>.`,
            caseStudies: [
                {
                    id: 1,
                    title: "Low-latency streaming",
                    description:
                        "Delivered <span class='font-semibold'>±10ms AV sync pipelines</span> for a broadcast client using <span class='font-semibold'>SRT + RTP</span>.",
                    icon: (
                        <FaVideo className="size-4 group-hover:text-white text-indigo-500" />
                    ),
                },
                {
                    id: 2,
                    title: "BSP bring-up",
                    description:
                        "Customized <span class='font-semibold'>Buildroot from scratch</span> for a semiconductor client’s <span class='font-semibold'>Rockchip-based platform</span>.",
                    icon: (
                        <FaMicrochip className="size-4 group-hover:text-white text-green-500" />
                    ),
                },
                {
                    id: 3,
                    title: "IoT integration",
                    description:
                        "Enabled <span class='font-semibold'>cloud-connected monitoring systems</span> for industrial clients, ensuring <span class='font-semibold'>OTA firmware upgrades</span> and <span class='font-semibold'>factory reset capabilities</span>.",
                    icon: (
                        <FaCloud className="size-4 group-hover:text-white text-cyan-500" />
                    ),
                },
            ],
        },
        impact: [
            {
                id: 6,
                title: "What This Means for Businesses in 2025 and Beyond",
                content: [
                    "For product companies and R&D leaders, this means one thing:",
                    "👉 <span class='font-semibold'>Future-proofing embedded systems is no longer optional—it’s a competitive necessity.</span>",
                    "Companies that embrace <span class='font-semibold'>AI at the edge, secure frameworks, low-latency protocols, and sustainable design</span> will lead their industries. Those that delay risk being left behind.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion & Call-to-Action",
            subtitle: "Wrap-up",
            description:
                "The future of embedded systems is <span class='font-semibold'>AI-driven, secure, low-latency, and deeply connected</span>. At <span class='font-semibold'>eByteLogic</span>, we help businesses <span class='font-semibold'>design, optimize, and deploy embedded solutions</span> that are ready for the next decade of innovation.",
            content: [
                "📩 <em>If you’re building the next breakthrough product—whether in <span class='font-semibold'>MediaTech, semiconductors, IoT, or aerospace</span>—let’s explore how we can accelerate your roadmap.</em>",
            ],
        },
    },
    // 4th Blog
    {
        id: "ndi-in-hybrid-ip-sdi-workflows",
        breadCrumb: "NDI in Hybrid IP SDI Workflows",

        introData: {
            title: "NDI in Hybrid IP/SDI Workflows: What Product Teams Must Know",
            highlight: "Teams Must Know",
            paragraphs: [
                "The <a href='https://www.ebytelogic.com/services/multimedia-framework' target='_blank' class='text-blue-600 underline'>broadcast</a> industry is undergoing a rapid transformation. For decades, <span class='font-semibold'>Serial Digital Interface (SDI)</span> cables were the gold standard of professional video production—delivering reliability, consistency, and predictable performance. But as audiences demand more content across more platforms, and as remote/cloud production gains traction, <span class='font-semibold'>Internet Protocol (IP)-based workflows</span> have emerged as a flexible and scalable alternative.",
                "Caught between these two worlds, many organizations are deploying <span class='font-semibold'>hybrid IP/SDI workflows</span>, where legacy SDI infrastructure coexists with newer IP systems. At the center of this hybrid era is <a href='https://ndi.video/wp-content/uploads/2023/09/NDI-5.6-White-Paper-2023.pdf' target='_blank' class='text-blue-600 underline'>NDI (Network Device Interface)</a>, a protocol developed by NewTek that has quickly become a key enabler for product teams building modern broadcast solutions.",
                "This article explores <span class='font-semibold'>what NDI means for hybrid workflows</span>, the opportunities it offers, the challenges product teams must anticipate, and best practices for smooth adoption.",
            ],
            button: {
                label: "Explore NDI for Hybrid Workflows",
                link: "/case-study/ndi-protocol-integration-inremote-recorder-player",
            },
            image: {
                src: NdiPng,
                alt: "NDI in Hybrid IP/SDI Workflows",
            },
        },
        qaTitle: "Understanding the Hybrid Broadcast Landscape",
        qa: [
            {
                id: 1,
                title: "The Traditional SDI Backbone – Reliability and Limitations",
                content: [
                    "<a href='https://www.ebytelogic.com/case-study/broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency' target='_blank' class='text-blue-600 underline'>SDI</a> has been the workhorse of live video production since the late 1980s. Its strengths include:",
                    "• Deterministic performance with minimal latency.",
                    "• Wide availability of compatible hardware.",
                    "• Broadcast-proven reliability.",
                    "But SDI also brings limitations: <span class='font-semibold'>rigid point-to-point cabling, high infrastructure costs, and limited scalability for distributed production teams.</span>",
                ],
            },
            {
                id: 2,
                title: "The Rise of IP Workflows – Flexibility and Scalability",
                content: [
                    "IP workflows replace dedicated SDI cabling with <a href='https://www.etsi.org/deliver/etsi_ts/102800_102899/102814/01.02.01_60/ts_102814v010201p.pdf' target='_blank' class='text-blue-600 underline'>standard Ethernet networks</a>.",
                    "Advantages include:",
                    "• Easy scaling to multi-location and cloud environments.",
                    "• More efficient bandwidth usage.",
                    "• Compatibility with modern IT infrastructure.",
                    "However, going “all-in” on <span class='font-semibold'>IP</span> requires large investments in networking, staff retraining, and ensuring broadcast-grade reliability.",
                ],
            },
            {
                id: 3,
                title: "Why Hybrid (SDI + IP) Workflows Dominate Current Deployments",
                content: [
                    "Few broadcasters can rip out legacy SDI overnight. Instead,<span class='font-semibold'> hybrid models</span> allow:",
                    "• Preserving sunk costs in SDI gear.",
                    "• Adding IP workflows incrementally.",
                    "• Testing and validating IP technologies before full migration.",
                ],
                workflowComparison: [
                    {
                        title: "Traditional SDI",
                        icon: "⚡",
                        color: "#ef4444",
                        pros: ["Reliable, Low Latency", "Broadcast Proven"],
                        cons: ["Rigid Point-to-Point", "High Infrastructure Cost"],
                    },
                    {
                        title: "Modern IP",
                        icon: "🖥️",
                        color: "#3b82f6",
                        pros: ["Highly Scalable", "Efficient & Flexible"],
                        cons: ["Requires Network Expertise", "High Initial Investment"],
                    },
                    {
                        title: "Hybrid (SDI + IP)",
                        icon: "🔄",
                        color: "#a855f7",
                        pros: ["Preserves Legacy Gear", "Incremental Adoption"],
                        warnings: ["Can Create Complexity", "Requires Bridging Tech"],
                    },
                ],
            },
        ],
        twiceQa: {
            qaTitle: "What is NDI and Why It Matters",
            qa: [
                {
                    id: 1,
                    title: "Origin and Core Principles of NDI",
                    content: [
                        "NDI was developed by NewTek in 2015 to allow video, audio, and metadata to travel over standard IP networks with low latency. It has since evolved into a widely adopted ecosystem supported by hundreds of vendors.",
                        "Key features:",
                        "• <span class='font-semibold'>Low-latency, high-quality video transport</span> over standard Ethernet.",
                        "• <span class='font-semibold'>Automatic device discovery</span> for seamless integration.",
                        "• <span class='font-semibold'>Software-defined workflows</span> – enabling more flexible, cost-effective deployments.",
                    ],
                },
                {
                    id: 2,
                    title: "How NDI Compares with SRT, RTP, and RIST",
                    content: [
                        "• <span class='font-semibold'>NDI vs. SRT</span> – SRT is optimized for unreliable internet contribution, while NDI shines in controlled LAN environments.",
                        "• <span class='font-semibold'>NDI vs. RTP/RTSP</span> – RTP is widely used but requires more manual configuration compared to NDI’s plug-and-play approach.",
                        "• <span class='font-semibold'>NDI vs. RIST</span> – RIST focuses on interoperability and resilience, whereas NDI prioritizes ease of adoption and ecosystem integration.",
                    ],
                },
                {
                    id: 3,
                    title: "Where NDI Fits into Hybrid Production Workflows",
                    content: [
                        "NDI excels in <span class='font-semibold'> in-studio and hybrid LAN workflows</span>, where low latency and easy device interoperability are critical. It serves as a bridge between SDI and full-IP ecosystems.",
                    ],
                    imageFlowchart: [
                        {
                            icon: "📷",
                            title: "SDI Sources",
                            textColor: "#665191",
                            subtitle: "Cameras & Legacy Gear",
                        },
                        {
                            icon: "🔄",
                            title: "NDI Gateway",
                            textColor: "#d45087",
                            subtitle: "Encodes SDI to NDI over LAN",
                        },
                        {
                            icon: "💻",
                            title: "IP Production",
                            textColor: "#ff7c43",
                            subtitle: "Switchers, Graphics, Cloud",
                        },
                    ],
                },
            ],
        } as QASection,
        trendsTitle: "Key Benefits of NDI in Hybrid Workflows",
        trends: [
            {
                id: 1,
                title: "Seamless Integration Between IP and SDI Devices",
                icon: <BiMerge className="size-4 text-indigo-600" />,
                content: [
                    "Many <span class='font-semibold'>converters and gateways</span> now allow <span class='font-semibold'>SDI signals</span> to flow into <span class='font-semibold'>NDI environments</span> and <span class='font-semibold'>vice versa</span>.",
                ],
            },
            {
                id: 2,
                title: "Lower Infrastructure Costs",
                icon: <BiDollarCircle className="size-4 text-green-600" />,
                content: [
                    "By using <span class='font-semibold'>existing Ethernet networks</span>, NDI reduces the need for <span class='font-semibold'>expensive SDI cabling</span> and costly <span class='font-semibold'>hardware upgrades</span>.",
                ],
            },
            {
                id: 3,
                title: "Flexibility for Remote and Cloud Production",
                icon: <BiCloud className="size-4 text-blue-600" />,
                content: [
                    "With <span class='font-semibold'>NDI 5</span> and <a href='https://netchange.nl/wp-content/uploads/2021/09/newtek-ndi-technical-brief2190.pdf' target='_blank' class='text-blue-600 underline'>NDI Bridge</a>, teams can transmit <span class='font-semibold'>live video</span> across <span class='font-semibold'>WANs</span> or to the <span class='font-semibold'>cloud</span>, enabling <span class='font-semibold'>distributed production models</span>.",
                ],
            },
        ],
        barChart: {
            chartTitle: "NDI Bandwidth Requirements",
            rttData: [100, 150, 200, 250, 300],
            bufferData: [10, 20, 30, 40, 50],
            data: {
                labels: ["1080p30", "1080p60", "4K30", "4K60"],
                datasets: [
                    {
                        chartType: "bar",
                        bufferData: ["100 KB", "200 KB", "300 KB", "400 KB", "500 KB"],
                        rttData: [200, 300, 250, 400, 350],
                        rttLabel: "Mbps",
                        barColor: "#0092b8",
                        borderColor: "#4c6ef5b3",
                        borderWidth: 1,
                        hoverBarColor: "#2b6ff5",
                        xAxisLabel:
                            "Bandwidth is approximate and varies by content complexity.",
                        yAxisLabel: "Mbps",
                        barRadius: 4,
                        barThickness: 80,
                        maxBarThickness: 80,
                        layoutPadding: 20,
                    },
                ],
            },
        },
        challengesTitle: "Common Challenges Product Teams Face with NDI",
        challenges: [
            {
                id: 1,
                title: "Latency and Synchronization with SDI Sources",
                content: [
                    "Even minor delays can cause AV sync issues when NDI and SDI feeds are combined.",
                ],
            },
            {
                id: 2,
                title: "Network Bandwidth and QoS Requirements",
                content: [
                    "High-quality NDI streams can consume 100–200 Mbps each. Proper network planning is essential.",
                ],
            },
            {
                id: 3,
                title: "Device Interoperability and Vendor Lock-in",
                content: [
                    "While NDI’s ecosystem is strong, reliance on proprietary tech can create long-term risks.",
                ],
            },
            {
                id: 4,
                title: "Security Considerations",
                content: [
                    "Unlike SDI, IP-based workflows are vulnerable to cyber threats. Encryption, segmentation, and firewalls must be part of the design.",
                ],
            },
        ],
        caseStudy: {
            title: "Case Studies & Real-World Examples",
            description: `At <span class='font-semibold'>eByteLogic</span>, we’ve seen these challenges and trends firsthand. These examples highlight how <span class='font-semibold'>cutting-edge embedded engineering</span> is already shaping real-world products in <span class='font-semibold'>2025</span>.`,
            caseStudies: [
                {
                    id: 1,
                    title: "Low-latency streaming",
                    description:
                        "Delivered <span class='font-semibold'>±10ms AV sync pipelines</span> for a broadcast client using <span class='font-semibold'>SRT + RTP</span>.",
                    icon: (
                        <FaVideo className="size-4 group-hover:text-white text-indigo-500" />
                    ),
                },
                {
                    id: 2,
                    title: "BSP bring-up",
                    description:
                        "Customized <span class='font-semibold'>Buildroot from scratch</span> for a semiconductor client’s <a href='https://dl.vamrs.com/products/rock960/docs/sw/Rockchip%C2%A0Linux%20Camera%C2%A0Developer%20Guide%20V1.1.pdf' target='_blank' class='text-blue-600 underline'>Rockchip-based platform</a>.",
                    icon: (
                        <FaMicrochip className="size-4 group-hover:text-white text-green-500" />
                    ),
                },
                {
                    id: 3,
                    title: "IoT integration",
                    description:
                        "Enabled <span class='font-semibold'>cloud-connected monitoring systems</span> for industrial clients, ensuring <span class='font-semibold'>OTA firmware upgrades</span> and <span class='font-semibold'>factory reset capabilities</span>.",
                    icon: (
                        <FaCloud className="size-4 group-hover:text-white text-cyan-500" />
                    ),
                },
            ],
        },
        scenariosTitle: "NDI Integration Scenarios & Best Practices",
        scenariosDescription:
            "Practical scenarios, best practices, and future trends for product teams adopting NDI.",
        scenarios: [
            {
                id: 1,
                category: "Practical Integration Scenarios",
                items: [
                    "<span class='font-semibold'> Live Event Production:</span> Hybrid workflows with SDI cameras feeding into NDI-based graphics and switching.",
                    "<span class='font-semibold'> Remote Contribution:</span> Remote guests sending feeds via SRT, then converted into NDI for studio integration.",
                    "<span class='font-semibold'> Corporate & Educational Streaming:</span> Using NDI for flexible multi-room or multi-campus setups.",
                ],
            },
            {
                id: 2,
                category: "Best Practices for Product Teams Adopting NDI",
                items: [
                    "<span class='font-semibold'> Network Design:</span> Use dedicated production networks or VLANs. Plan for 1 Gbps per 5–6 NDI streams at 1080p.",
                    "<span class='font-semibold'> Choosing Hardware/Software:</span> Prioritize vendors with strong NDI integration.",
                    "<span class='font-semibold'> Testing and Monitoring:</span> Continuous QoS monitoring and redundancy planning.",
                ],
            },
            {
                id: 3,
                category: "The Future of Hybrid Workflows with NDI",
                items: [
                    "<span class='font-semibold'> Shift Toward IP-First:</span> Broadcasters will gradually move from hybrid to IP-native setups.",
                    "<span class='font-semibold'> Cloud & Virtualization:</span> Virtual switchers, graphics, and editing in the cloud will rely on NDI for transport.",
                    "<span class='font-semibold'> NDI Ecosystem Growth:</span> Ongoing updates from Vizrt Group and third-party vendors suggest deeper integration and interoperability.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion & Call-to-Action",
            subtitle: "Wrap-up",
            description:
                "<span class='font-semibold'>For product teams, NDI is not a replacement for SDI or IP standards—but a bridge that enables hybrid workflows.</span> Its strengths in simplicity, flexibility, and cost-effectiveness make it indispensable for modern broadcast setups.",
            content: [
                "The key to success lies in careful planning: understanding bandwidth needs, managing latency, and integrating with both SDI and other IP protocols. Done right, NDI can accelerate your team’s path to scalable, future-ready production.",
                "<span class='font-semibold'>Call-to-Action:</span> If your team is planning hybrid workflow adoption, consult with embedded multimedia experts early to avoid costly pitfalls.",
            ],
        },
    },
    // 5th Blog
    {
        id: "buildroot-vs-yocto-for-video-devices",
        breadCrumb: "Buildroot vs yocto for video-devices",
        introData: {
            title: "Buildroot vs Yocto for Video Devices: A Pragmatic Product Guide",
            highlight: "Pragmatic Product Guide",
            paragraphs: [
                "For companies building <span class='font-semibold'>video encoders, broadcast equipment, or multimedia devices</span>, one of the first technical roadblocks is selecting the right <span class='font-semibold'>embedded Linux build system</span>. Two names dominate the space: <a href='https://www.ebytelogic.com/case-study/yocto-buildroot-migration' target='_blank' class='text-blue-600 underline'>Buildroot and Yocto</a>.",
                "Both are open-source, battle-tested, and widely adopted. Yet for product teams, the decision is rarely straightforward. Choose Buildroot, and you’ll enjoy speed and simplicity — but may face limits in complex pipelines. Choose Yocto, and you’ll unlock flexibility and long-term maintainability — but risk higher setup costs and a steep learning curve.",
                "This guide takes a pragmatic, product-focused look at <a href='https://events19.linuxfoundation.org/wp-content/uploads/2017/12/Buildroot-vs-Yocto-Differences-for-Your-Daily-Job-Luca-Ceresoli-AIM-Sportline.pdf' target='_blank' class='text-blue-600 underline'>Buildroot vs Yocto for video devices</a>.",
            ],
            button: {
                label: "Explore Buildroot vs Yocto",
                link: "/case-study/yocto-buildroot-migration",
            },
            image: {
                src: YoctoPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle: "The Embedded Video Device Challenge & Buildroot at a Glance",
        qa: [
            {
                id: 1,
                title: "The Embedded Video Device Challenge",
                content: [
                    "Modern video devices face pressures far beyond “just working.” Whether you’re building a <span class='font-semibold'>streaming encoder, a broadcast transceiver, or a custom multimedia device</span>, you must deliver:",
                    "<span class='font-semibold'>• Ultra-low latency</span> (±10ms AV sync).",
                    "<span class='font-semibold'>• Protocol diversity </span>(NDI, RTP, SRT, RTMP, RIST).",
                    "<span class='font-semibold'>• Codec flexibility</span> (H.264, H.265/HEVC, VP9).",
                    "<span class='font-semibold'>• Reliability</span> under 24/7 live workloads.",
                    "This is why the <a href='https://docs.yoctoproject.org/1.6.1/bsp-guide/bsp-guide.pdf' target='_blank' class='text-blue-600 underline'>Board Support Package (BSP)</a> and its build system matter. The BSP defines how fast your device boots, how stable it stays, and how easily it can be updated. Selecting <span class='font-semibold'>Buildroot</span> or <span class='font-semibold'>Yocto</span> sets the tone for your entire product lifecycle.",
                ],
            },
            {
                id: 2,
                title: "Buildroot at a Glance – Key Philosophy & Approach",
                content: [
                    "Buildroot is designed for <span class='font-semibold'>simplicity and speed</span>. It generates a root filesystem, kernel, and bootloader with minimal fuss. Its configuration is menu-driven (<span class='font-semibold'>make menuconfig</span>), making it easy to get started.",
                ],
            },
            {
                id: 3,
                title: "Buildroot at a Glance – Strengths in Video Devices",
                content: [
                    "<span class='font-semibold'>• Small footprint –</span> Ideal for devices with constrained storage or memory.",
                    "<span class='font-semibold'>• Fast boot times –</span> Can be tuned to achieve sub-2-second boots.",
                    "<span class='font-semibold'>• Straightforward customization –</span> Quick to add/remove packages.",
                    "<span class='font-semibold'>• Perfect for prototypes –</span> Product teams can validate hardware quickly.",
                ],
            },
            {
                id: 4,
                title: "Buildroot at a Glance – Limitations",
                content: [
                    "<span class='font-semibold'>• Limited scalability –</span> Managing complex pipelines or large systems becomes difficult.",
                    "<span class='font-semibold'>• Package dependencies –</span>Less modular than <a href='https://www.yoctoproject.org/' target='_blank' class='text-blue-600 underline'>Yocto</a>; harder to integrate advanced stacks.",
                    "<span class='font-semibold'>• Community ecosystem –</span> Active, but not as extensive as Yocto’s.",
                ],
            },
        ],
        twiceQa: {
            qaTitle: "Yocto at a Glance",
            qa: [
                {
                    id: 1,
                    title: "Key Philosophy & Approach",
                    content: [
                        "The <span class='font-semibold'>Yocto Project</span> is built for <span class='font-semibold'> flexibility, scalability, and ecosystem  support.</span> Its metalayer approach allows developers to create highly modular, reusable components across projects.",
                    ],
                },
                {
                    id: 2,
                    title: "Strengths in Video Devices",
                    content: [
                        "• <span class='font-semibold'>Rich ecosystem</span> – Wide support for codecs, multimedia frameworks, and device drivers.",
                        "• <span class='font-semibold'>Scalable</span> – Handles everything from small encoders to enterprise broadcast gear.",
                        "• <span class='font-semibold'>Update strategies</span> – Easier to implement OTA updates and long-term maintainability.",
                        "• <span class='font-semibold'>Strong community & vendor support</span> – Backed by semiconductor vendors (NXP, TI, Intel).",
                    ],
                },
                {
                    id: 3,
                    title: "Limitations",
                    content: [
                        "• <span class='font-semibold'>Learning curve</span> – Requires knowledge of recipes, layers, and bitbake.",
                        "• <span class='font-semibold'>Build time</span> – Slower initial builds compared to <a href='https://buildroot.org/' target='_blank' class='text-blue-600 underline'>Buildroot</a>.",
                        "• <span class='font-semibold'>Overhead</span> – Can be excessive for lightweight or single-purpose devices.",
                    ],
                },
                {
                    id: 4,
                    title: "Head-to-Head Comparison for Video Devices",
                    table: {
                        header: ["Factor", "Buildroot", "Yocto"],
                        rows: [
                            {
                                feature: "Boot Time & Footprint",
                                Buildroot: "Minimal, boots in seconds",
                                Yocto: "Larger, optimized but slower",
                            },
                            {
                                feature: "Codec & Protocol Support",
                                Buildroot: "Good but requires manual effort",
                                Yocto: "Wide support out-of-the-box",
                            },
                            {
                                feature: "BSP Customization",
                                Buildroot: "Very fast",
                                Yocto: "Slower, but more robust",
                            },
                            {
                                feature: "Speed",
                                Buildroot: "Very fast",
                                Yocto: "Slower, but more robust",
                            },
                            {
                                feature: "Long-Term Maintenance",
                                Buildroot: "Harder to manage upgrades",
                                Yocto: "Strong OTA & lifecycle support",
                            },
                            {
                                feature: "Learning Curve",
                                Buildroot: "Easy to start",
                                Yocto: "Steep for beginners",
                            },
                        ],
                    },
                },
            ],
        } as QASection,
        radarData: {
            labels: [
                "Speed & Simplicity",
                "Community",
                "Ecosystem",
                "Customization",
                "OTA Readiness",
                "Maintenance & LTS",
            ],
            datasets: [
                {
                    label: "Buildroot",
                    data: [9, 6, 7, 5, 3, 9],
                    backgroundColor: "rgba(255, 0, 0, 0.2)", // Transparent red
                    borderColor: "rgba(255, 99, 132, 1)", // Red border
                    borderWidth: 2,
                    fill: true, // Ensures the area under the line is filled
                },
                {
                    label: "Yocto",
                    data: [7, 8, 6, 7, 9, 5],
                    backgroundColor: "rgba(54, 162, 235, 0.2)", // Transparent blue
                    borderColor: "rgba(54, 162, 235, 1)", // Blue border
                    borderWidth: 2,
                    fill: true, // Ensures the area under the line is filled
                },
            ],
        },
        doughnutData: [
            { chartType: "doughnut" },
            { title: "Real-World Scenarios" },
            {
                doughnut: [
                    {
                        title: "Case A: OTT Streaming Box (Buildroot Wins)",
                        description:
                            "The goal was a low-cost prototype with a boot time under 5 seconds. Buildroots speed and small footprint were critical for a rapid launch.",
                        color: "#EF5675",
                        legend: ["Time to Prototype", "Remaining Dev Cycle"],
                        values: [25, 75],
                    },
                    {
                        title: "Case B: Broadcast Encoder (Yocto Wins)",
                        description:
                            "This professional appliance required guaranteed updates for over 5 years and carrier-grade compliance, making Yoctos robust ecosystem the clear choice.",
                        color: "#374C80",
                        legend: ["Long Term Support", "Initial Development"],
                        values: [80, 20],
                    },
                ],
            },
        ],
        scenariosTitle: "Pragmatic Scenarios: Which to Choose?",
        scenariosDescription: "Choosing the Right Tool for Your Product",
        scenarios: [
            {
                id: 1,
                category: "Choose Buildroot if:",
                items: [
                    "<span class='font-semibold'>Prototyping or lightweight devices:</span> Ideal for simple or resource-constrained projects.",
                    "<span class='font-semibold'>Fast boot time & small footprint:</span> Prioritize minimal builds that boot in seconds.",
                    "<span class='font-semibold'>Limited protocol needs:</span> Works when you don’t need complex multi-protocol support.",
                ],
                type: "flip",
                img: YoctoFlowchartPng,
            },
            {
                id: 2,
                category: "Choose Yocto if:",
                items: [
                    "<span class='font-semibold'>Full-featured broadcast/multimedia gear:</span> Best for complex, high-end video devices.",
                    "<span class='font-semibold'>Long-term maintenance & compliance:</span> Supports OTA updates, regulatory standards, and lifecycle management.",
                    "<span class='font-semibold'>Vendor-backed ecosystem:</span> Strong support from semiconductor vendors and community.",
                ],
                type: "flip",
                img: BuildrootFlowchartPng,
            },
        ],
        caseStudy: {
            title: "Case Study Snapshot: eByteLogic Experience",
            description:
                "Recently, <span class='font-semibold'>eByteLogic</span> helped a client running hardware based on a <a href='https://docs.u-boot.org/en/latest/board/rockchip/rockchip.html' target='_blank' class='text-blue-600 underline'>Rockchip SoC platform</a> by customizing <span class='font-semibold'>Buildroot from scratch</span> and deploying it on custom hardware. The client had its own proprietary OS and required:",
            caseStudies: [
                {
                    id: 1,
                    title: "Custom BSP adaptation",
                    description:
                        "Delivered <span class='font-semibold'>tailored</span> <a href='https://www.ebytelogic.com/services/linux-bsp-android' target='_blank' class='text-blue-600 underline'>BSP bring-up</a> for the client’s proprietary OS and hardware platform.",
                    icon: (
                        <FaMicrochip className="size-4 group-hover:text-white text-green-500" />
                    ),
                },
                {
                    id: 2,
                    title: "Low-latency streaming",
                    description:
                        "Optimized the streaming stack for <span class='font-semibold'>high reliability</span> and <a href='https://www.5gamericas.org/wp-content/uploads/2019/07/5G_Americas_URLLLC_White_Paper_Final__updateJW.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>low-latency</a> video pipelines.",
                    icon: (
                        <FaVideo className="size-4 group-hover:text-white text-indigo-500" />
                    ),
                },
                {
                    id: 3,
                    title: "Boot-time optimization",
                    description:
                        "Achieved a <span class='font-semibold'>dramatic reduction in boot time</span> through deep Buildroot customization.",
                    icon: (
                        <FaBolt className="size-4 group-hover:text-white text-yellow-500" />
                    ),
                },
            ],
        },
        recommendations: [
            {
                id: 1,
                text: "Start with a checklist: Define your latency requirements, codec stack, update policy, and device lifespan.",
            },
            {
                id: 2,
                text: "Don’t choose on ideology: Both Buildroot and Yocto are powerful; your use case decides.",
            },
            {
                id: 3,
                text: "Think lifecycle, not MVP: If your device will need 5–10 years of updates, Yocto often wins.",
            },
            {
                id: 4,
                text: "Plan migration paths: Teams often start with Buildroot prototypes and move to Yocto for production scaling.",
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the Buildroot vs Yocto debate and how to choose the right approach for video products.",
            content: [
                "There’s no one-size-fits-all in the <span class='font-semibold'>Buildroot vs Yocto</span> debate. For video devices, the right choice depends on whether you need <span class='font-semibold'>lightweight speed (Buildroot)</span> or <span class='font-semibold'>scalable longevity (Yocto)</span>.",
                "At <span class='font-semibold'>eByteLogic</span>, we’ve seen success with both approaches — and in many cases, guiding teams from one to the other.",
                "If you’re evaluating <span class='font-semibold'>Buildroot vs Yocto</span> for your video product, let’s talk. We’ll help you choose the fastest, most reliable path to market.",
            ],
        },
    },
    // 6th blog
    {
        id: "linux-bsp-techniques-that-work",
        breadCrumb: "Linux BSP Techniques That Work",
        introData: {
            title: "Boot to First Frame in 3 Seconds: Linux BSP Techniques That Work",
            highlight: "Techniques That Work",
            paragraphs: [
                "In consumer electronics, automotive infotainment, OTT streaming boxes, and industrial devices, <span class='font-semibold'> boot time can make or break user experience.</span> Nobody wants to wait 20–30 seconds for a splash screen or media playback to appear. That’s why companies developing video-enabled devices obsess over the metric called <span class='font-semibold'> “boot to first frame.”</span>",
                "The goal is clear: from power-on to video playback in <span class='font-semibold'> under 3 seconds.</span> But achieving it requires deep optimization at every stage of the boot process — from bootloader to Linux kernel to user-space pipelines.",
                "In this article, we’ll break down the <span class='font-semibold'> Linux BSP (Board Support Package) techniques </span> that make this possible, backed by real-world best practices from multimedia and embedded projects.",
            ],
            button: {
                label: "Explore Linux BSP Techniques",
                link: "/case-study/multi-os-bsp-porting-and-boot-time-optimization",
            },
            image: {
                src: LinuxBspPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle:
            "Optimizing Boot Time for Enhanced User Experience and Performance",
        qa: [
            {
                id: 1,
                title: "Why “Boot to First Frame” Matters",
                content: [
                    "<span class='font-semibold'>• User Experience – </span> Fast startup equals seamless interaction.",
                    "<span class='font-semibold'>• Competitive Differentiation – </span> Faster devices stand out in crowded markets (set-top boxes, OTT players, in-vehicle displays).",
                    "<span class='font-semibold'>• Power-Critical Applications – </span> Devices like drones or surveillance cameras may need instant readiness after power cycles.",
                    "<span class='font-semibold'>• Reliability in Production – </span> Consistent, predictable startup ensures smooth operation in mission-critical deployments.",
                    "👉 <a href='https://www.nngroup.com/articles/response-times-3-important-limits/' target='_blank' class='text-blue-600 underline'> Study on consumer patience with device boot times </a> shows that delays beyond 5–7 seconds cause frustration.",
                ],
            },
            {
                id: 2,
                title: "Boot Process Breakdown (Where Time Is Lost)",
                content: [
                    "To optimize, first understand the <span class='font-semibold'> timeline of a Linux-based boot:</span>",
                    "1. <span class='font-semibold'> ROM/SoC Initialization –</span> Built-in microcode starts execution.",
                    "2. <span class='font-semibold'> Bootloader (U-Boot, Barebox, etc.) –</span> Hardware bring-up, kernel loading.",
                    "3. <span class='font-semibold'> Kernel Initialization –</span> Device drivers, hardware probes, mounting rootfs.",
                    "4. <span class='font-semibold'> User Space Init (systemd/init scripts) –</span> Services and daemons startup.",
                    "5. <span class='font-semibold'> Multimedia Pipeline Initialization –</span> GStreamer/FFmpeg setup, decoder bring-up.",
                    "6. <span class='font-semibold'> Application UI/Playback –</span> Display first frame to the screen.",
                    "👉 Optimizations must happen at every stage to cut milliseconds that add up to seconds.",
                    "👉 Reference: <a href='https://elinux.org/Boot_Time' target='_blank' class='text-blue-600 underline'> Linux Foundation: Boot Process Overview.</a>",
                ],
            },
        ],
        twiceQa: {
            qaTitle: "Linux BSP Techniques for <3s Boot",
            qa: [
                {
                    id: 1,
                    title: "1. Bootloader Optimization",
                    content: [
                        "<span class='font-semibold'>• Skip unnecessary drivers –</span> Disable unused peripheral bring-up in <a href='https://www.ebytelogic.com/case-study/u-boot-logo-for-IMX8MQ' target='_blank' class='text-blue-600 underline'>U-Boot</a>.",
                        "<span class='font-semibold'>• Use splash at U-Boot level –</span> Load a static splash screen directly in U-Boot to give “instant feedback.”",
                        "<span class='font-semibold'>• Fast Boot commands –</span> Preconfigure boot arguments and skip autoboot delays.",
                        "👉 Example: Setting bootdelay=0 in <a href='https://docs.u-boot.org/en/latest/' target='_blank' class='text-blue-600 underline'> U-Boot </a> can save ~2 seconds.",
                    ],
                },
                {
                    id: 2,
                    title: "2. Kernel-Level Tweaks",
                    content: [
                        "<span class='font-semibold'>• Trim the kernel –</span> Remove unused drivers and debug options.",
                        "<span class='font-semibold'>• Device tree pruning –</span> Avoid probing unnecessary peripherals.",
                        "<span class='font-semibold'>• Parallelize initcalls –</span> Enable multi-threaded initialization where supported.",
                        "<span class='font-semibold'>• Optimize root filesystem mounting –</span> Use initramfs for speed.",
                        "👉 Kernel documentation: initcall debugging for parallelization insights.",
                    ],
                },
                {
                    id: 3,
                    title: "3. User-Space Init Optimization",
                    content: [
                        "<span class='font-semibold'>• Systemd service profiling –</span> Disable non-essential services (e.g., SSH in production devices).",
                        "<span class='font-semibold'>• Parallelize startup –</span> Launch services concurrently.",
                        "<span class='font-semibold'>• Lazy-load applications –</span> Start multimedia pipeline first, load secondary apps later.",
                        "👉 Pro Tip: Use <a href='https://www.freedesktop.org/software/systemd/man/latest/systemd-analyze.html' target='_blank' class='text-blue-600 underline'> systemd-analyz </a> to identify bottlenecks.",
                    ],
                },
                {
                    id: 4,
                    title: "4. Multimedia Pipeline Acceleration",
                    content: [
                        "<span class='font-semibold'>• Pre-initialize decoders – </span> Avoid costly codec bring-up during playback.",
                        "<span class='font-semibold'>• Hardware-accelerated decoding – </span> Leverage SoC codecs (e.g., V4L2, NVDEC).",
                        "<span class='font-semibold'>• Optimized GStreamer pipelines – </span> Reduce latency with zero-copy buffers.",
                        "👉 <a href='https://gstreamer.freedesktop.org/documentation/tutorials/index.html?gi-language=c' target='_blank' class='text-blue-600 underline'> GStreamer optimization guide. </a>",
                    ],
                },
                {
                    id: 5,
                    title: "5. File System & Storage Choices",
                    content: [
                        "<span class='font-semibold'>• Use fast storage (eMMC/UFS over SD) – Reduces I/O bottlenecks.",
                        "<span class='font-semibold'>• SquashFS/UBI images – Compressed read-only filesystems boot faster.",
                        "<span class='font-semibold'>• Journal-free FS – For non-critical data, using ext2 instead of ext4 cuts fsck delays.",
                        "👉 <a href='https://github.com/plougher/squashfs-tools' target='_blank' class='text-blue-600 underline'> SquashFS overview. </a>",
                    ],
                },
                {
                    id: 6,
                    title: "6. Application-Level Tricks",
                    content: [
                        "<span class='font-semibold'>• Splash-first approach –</span> Show logo/video while background services load.",
                        "<span class='font-semibold'>• App snapshotting –</span> Pre-store UI state to reload quickly.",
                        "<span class='font-semibold'>• Minimal init scripts –</span> Boot straight into the media player instead of loading a full desktop.",
                    ],
                },
            ],
        } as QASection,
        caseStudy: {
            title: "Real-World Case Study: OTT Streaming Box",
            description:
                "At eByteLogic, our team worked on a <span class='font-semibold'> low-cost Android TV/IP box </span> project where we optimized boot time from 18 seconds down to <span class='font-semibold'>under 3 seconds.</span>",
            caseStudies: [
                {
                    id: 1,
                    title: "U-Boot Splash Screen Integration",
                    description:
                        "Integrated <span class='font-semibold'>U-Boot splash screen</span> to display instantly at boot.",
                    icon: (
                        <FaMicrochip className="size-4 group-hover:text-white text-green-500" />
                    ),
                },
                {
                    id: 2,
                    title: "Kernel Trimming",
                    description:
                        "Removed <span class='font-semibold'>~40% unused drivers</span> to optimize kernel size and boot performance.",
                    icon: (
                        <FaCode className="size-4 group-hover:text-white text-indigo-500" />
                    ),
                },
                {
                    id: 3,
                    title: "Systemd Profiling",
                    description:
                        "Disabled <span class='font-semibold'>networking daemons</span> not required at boot for faster startup.",
                    icon: (
                        <FaServer className="size-4 group-hover:text-white text-blue-500" />
                    ),
                },
                {
                    id: 4,
                    title: "Pre-initialized GStreamer Pipelines",
                    description:
                        "Pre-initialized <span class='font-semibold'>GStreamer pipelines</span> for faster media streaming.",
                    icon: (
                        <FaFilm className="size-4 group-hover:text-white text-red-500" />
                    ),
                },
            ],
            outcome: {
                title: "Optimized Boot and Streaming Performance",
                description:
                    "As a result, the device displayed the splash screen instantly and streamed the first video frame in <span class='font-semibold'>2.8 seconds</span>.",
            },
        },
        barChart: {
            chartTitle: "Boot Time Reduction by Stage",
            rttData: [0, 0, 8, 0],
            bufferData: [0, 0, 0, 0],
            data: {
                labels: [
                    "Bootloader",
                    "Kernel Init",
                    "User Space & Services",
                    "Multimedia & App",
                ],
                datasets: [
                    {
                        chartType: "bar",
                        bufferData: [0, 0, 0, 0],
                        rttData: [3, 2, 8, 3],
                        rttLabel: "Time in Seconds (Before Optimization)",
                        barColor: "#f08a24",
                        borderColor: "#f08a24b3",
                        borderWidth: 1,
                        hoverBarColor: "#f08a24",
                        xAxisLabel: "Stages of Boot Time",
                        yAxisLabel: "Time in Seconds",
                        barRadius: 4,
                        barThickness: 80,
                        maxBarThickness: 50,
                        layoutPadding: 60,
                    },
                    {
                        chartType: "bar",
                        bufferData: [0, 0, 0, 0],
                        rttData: [1, 1, 7, 1],
                        rttLabel: "Time in Seconds (After Optimization)",
                        barColor: "#0092b8",
                        borderColor: "#4c6ef5b3",
                        borderWidth: 1,
                        hoverBarColor: "#2b6ff5",
                        xAxisLabel: "Stages of Boot Time",
                        yAxisLabel: "Time in Seconds",
                        barRadius: 4,
                        barThickness: 80,
                        maxBarThickness: 50,
                        layoutPadding: 60,
                    },
                ],
            },
        },
        trendsTitle: "Future Directions & Industry Trends",
        trends: [
            {
                id: 1,
                title: "Suspend-to-RAM for Instant-On Boot",
                icon: <CgPullClear className="size-4 text-indigo-600" />,
                content: [
                    "Achieves <span class='font-semibold'>'instant-on'</span> by resuming from memory, as highlighted in an  <a href='https://lwn.net/Articles/384146/' target='_blank' class='text-blue-600 underline'>LWN article</a>.",
                ],
            },
            {
                id: 2,
                title: "Containerized Services for Fast Boot",
                icon: <BiServer className="size-4 text-blue-600" />,
                content: [
                    "Boot essential apps first, then bring up <span class='font-semibold'>containers</span> to improve startup time and efficiency.",
                ],
            },
            {
                id: 3,
                title: "OTA-Friendly Optimizations",
                icon: <BsShieldCheck className="size-4 text-green-600" />,
                content: [
                    "Balancing <span class='font-semibold'>fast boot</span> with <span class='font-semibold'>update/rollback reliability</span> for over-the-air updates.",
                ],
            },
            {
                id: 4,
                title: "AI-assisted Boot Profiling",
                icon: <BiVideo className="size-4 text-pink-600" />,
                content: [
                    "Using <span class='font-semibold'>machine learning (ML)</span> to predict which services can be safely deferred during boot for faster startup.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Optimizing Boot Times for the Future",
            description:
                "Recap of the Linux BSP techniques and strategies for achieving sub-3 second boot times in video-enabled devices.",
            content: [
                "Achieving a <span class='font-semibold'>sub-3 second boot</span> is essential for modern video devices, whether it's a set-top box, OTT streaming device, or in-vehicle infotainment system.",
                "The <a href='https://www.ebytelogic.com/services/linux-bsp-android' target='_blank' class='text-blue-600 underline'>Linux BSP</a> techniques we've discussed — from <span class='font-semibold'>bootloader optimization</span> to <span class='font-semibold'>multimedia pipeline acceleration</span> — can drastically reduce boot times and improve user experience.",
                "At <span class='font-semibold'>eByteLogic</span>, we've successfully implemented these techniques in real-world projects, resulting in significant performance gains and an optimized user experience.",
                "With future trends like <span class='font-semibold'>suspend-to-RAM</span> and <span class='font-semibold'>AI-assisted boot profiling</span>, boot times will only get faster and more efficient.",
                "If you're working on a video device and want to optimize boot time, we're here to help. <span class='font-semibold'>Let's discuss how our Linux BSP expertise</span> can accelerate your product development and enhance the user experience.",
            ],
            referencesTitle: "References",
            references: [
                "Buildroot Official Site",
                "Yocto Project Documentation",
                "FriendlyElec NanoPi 5C",
                "Mender OTA for Yocto",
                "RAUC OTA Framework",
                "Bootlin – Buildroot/Yocto Training",
                "GStreamer Official Site",
            ],
        },
    },
    // 7th blog
    {
        id: "cea-608-708-and-line21-dtvcc-conversion",
        breadCrumb: "CEA-608/708 and Line21⇄DTVCC Conversion",
        introData: {
            title:
                "Closed Captions Demystified: CEA-608/708 and Line21 ⇄ DTVCC Conversion",
            highlight: "DTVCC Conversion",
            paragraphs: [
                "Closed captions aren’t just about compliance—they are critical for accessibility, multilingual <a href='https://www.ebytelogic.com/services/multimedia-framework' target='_blank' class='text-blue-600 underline'>broadcasting</a>, and meeting regulatory requirements across industries. From <span class='font-semibold'> linear broadcast TV to OTT platforms</span>, captions ensure inclusivity and expand audience reach.",
                "But standards have evolved. What began as <span class='font-semibold'> Line21 analog captions</span> <a href='https://download.tek.com/document/2PW-24267-0.pdf' target='_blank' class='text-blue-600 underline'>(CEA-608)</a> has now transitioned into <span class='font-semibold'> digital television closed captions (CEA-708, DTVCC)</span>. This creates challenges for broadcasters, device makers, and streaming services who must <span class='font-semibold'> bridge legacy formats with modern workflows.</span>",
                "In this article, we’ll demystify the <a href='https://www.3playmedia.com/blog/difference-cea-608-cea-708-captions/' target='_blank' class='text-blue-600 underline'>CEA-608/708 standards</a>, explain how <span class='font-semibold'> Line21 ⇄ DTVCC conversion works</span>, and share practical engineering insights for integrating captions into video pipelines.",
            ],
            button: {
                label: "Explore DTVCC Conversion",
                link: "/case-study/broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency",
            },
            image: {
                src: CeaPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle:
            "Deep Dive: Closed Captions, Standards, and Conversion in Broadcast & OTT",
        qa: [
            {
                id: 1,
                title: "Why Closed Captions Matter",
                content: [
                    "<span class='font-semibold'>• Accessibility – </span> Enables hearing-impaired viewers to enjoy content.",
                    "<span class='font-semibold'>• Regulatory Compliance – </span> FCC mandates closed captions in U.S. broadcasting (FCC rules).",
                    "<span class='font-semibold'>• Localization – </span> Expands reach by supporting multilingual captions.",
                    "<span class='font-semibold'>• Search & Indexing – </span> Captions improve discoverability in OTT platforms (metadata, SEO).",
                    "👉 Fact: Over <span class='font-semibold'> 48 million Americans </span> are deaf or hard of hearing (National Institute on Deafness).",
                ],
            },
            {
                id: 2,
                title: "Understanding Caption Standards",
                content: [
                    "<span class='font-semibold'>1. CEA-608 (Line21) </span>",
                    "• Introduced for <span class='font-semibold'>analog NTSC TV signals.</span>",
                    "• Carried data on <span class='font-semibold'>line 21 of the VBI (Vertical Blanking Interval).</span>",
                    "• Limited character set (ASCII-based), no rich styling.",
                    "• Supports <span class='font-semibold'>2 caption channels + 2 text channels.</span>",
                    "👉 Reference: EIA/CEA-608-B Standard Summary.",
                ],
            },
            {
                id: 3,
                title: "Understanding Caption Standards",
                content: [
                    "<span class='font-semibold'>2. CEA-708 (DTVCC)</span>",
                    "• Introduced with <span class='font-semibold'>digital television (ATSC, DTV).</span>",
                    "• Provides richer features:",
                    "  <span class='ms-8'>o  Multiple languages</span>",
                    "  <span class='ms-8'>o  Custom fonts, colors, and positioning</span>",
                    "  <span class='ms-8'>o  Up to <span class='font-semibold'>63 caption services.</span></span>",
                    "• Transmitted as <span class='font-semibold'>user data packets in MPEG-2 transport stream.</span>",
                    "👉 Reference: CEA-708 Standard Overview.",
                ],
                chartData: {
                    chartTitle: "Caption Service Capacity",
                    chartType: "bar",
                    captionServiceData: [4, 63],
                    serviceTypeData: ["CEA-608", "CEA-708"],
                    data: {
                        labels: ["CEA-608", "CEA-708"],
                        datasets: [
                            {
                                rttLabel: "Service Capacity",
                                rttData: [4, 63],
                                barColor: ["#6DD4DB", "#004E9A"],
                                borderColor: ["#6DD4DB", "#004E9A"],
                                hoverBarColor: ["#2a80d4", "#6DD4DB"],
                                borderWidth: 1,
                                xAxisLabel: "Caption Standards",
                                yAxisLabel: "Service Capacity",
                                barRadius: 4,
                                barThickness: 80,
                                maxBarThickness: 80,
                                layoutPadding: 20,
                            },
                        ],
                    },
                },
            },
            {
                id: 4,
                title: "Understanding Caption Standards",
                content: [
                    "<span class='font-semibold'>3. Line21 ⇄ DTVCC Conversion</span>",
                    "Why it’s needed:",
                    "• <span class='font-semibold'>Backward compatibility</span> – Many legacy receivers only understand 608/Line21.",
                    "• <span class='font-semibold'>Modern broadcasts/OTT</span> – Require 708/<a href='https://dcmp.org/learn/static-assets/nadh219.pdf' target='_blank' class='text-blue-600 underline'>DTVCC</a> for compliance.",
                    "• <span class='font-semibold'>Content repurposing</span> – Old media libraries still use 608 captions.",
                    "How it works:",
                    "• <span class='font-semibold'>608 to 708 Mapping</span> – 608 captions are encapsulated as '608 compatibility bytes' inside 708 streams.",
                    "• <span class='font-semibold'>708 to 608 Down-Conversion</span> – Extracts basic text from 708, but loses rich formatting.",
                    "👉 Technical Guide: SMPTE 334M: Transport of 608/708 Captions.",
                ],
                conversionFlowchart: {
                    subtitle:
                        "To ensure backward compatibility and support modern broadcasts, caption data is constantly converted between legacy and digital formats.",
                    rows: [
                        {
                            type: "row",
                            items: [
                                {
                                    id: "cea608_input",
                                    title: "CEA-608 (Line 21)",
                                    subtitle: "Analog Source",
                                    color: "#00449E",
                                },
                                { id: "arrow1", type: "arrow", direction: "right" },
                                {
                                    id: "encapsulation",
                                    title: "Encapsulation",
                                    subtitle:
                                        '608 data is wrapped inside the 708 stream as "compatibility bytes." Features are preserved.',
                                    color: "#005BC6",
                                },
                                { id: "arrow2", type: "arrow", direction: "right" },
                                {
                                    id: "cea708_stream",
                                    title: "CEA-708 (DTVCC)",
                                    subtitle: "Digital Stream",
                                    color: "#00449E",
                                },
                            ],
                        },
                        {
                            type: "down-arrow",
                            id: "arrow-down",
                        },
                        {
                            type: "row",
                            items: [
                                {
                                    id: "cea608_output",
                                    title: "CEA-608 (Line 21)",
                                    subtitle: "Legacy Output",
                                    color: "#00449E",
                                },
                                { id: "arrow3", type: "arrow", direction: "left" },
                                {
                                    id: "down_conversion",
                                    title: "Down-Conversion",
                                    subtitle:
                                        "Rich styling, colors, and fonts are stripped. This process is lossy.",
                                    color: "text-red-600",
                                    highlight: "lossy",
                                },
                                { id: "arrow4", type: "arrow", direction: "left" },
                                {
                                    id: "cea708_source",
                                    title: "CEA-708 (DTVCC)",
                                    subtitle: "Digital Source",
                                    color: "#00449E",
                                },
                            ],
                        },
                    ],
                },
                // image : WorkflowEncapPng
            },
            {
                id: 5,
                title: "Technical Workflow in Video Pipelines",
                content: [
                    "<span class='font-semibold'>1. In Broadcast & Cable TV </span>",
                    "• Encoders insert 608/708 during <a href='https://tech.ebu.ch/docs/tech/tech3291.pdf' target='_blank' class='text-blue-600 underline'>MPEG-2 TS muxing</a>.",
                    "• Line21 captions carried over analog feeds for legacy receivers.",
                    "• Modern ATSC tuners extract 708 directly.",
                    "<br>",
                    "<span class='font-semibold'>2. In OTT & Streaming Platforms</span>",
                    "• Captions often delivered as <a href='https://www.w3.org/TR/webvtt1/' target='_blank' class='text-blue-600 underline'>sidecar files (SRT, WebVTT)</a>.",
                    "• Conversion ensures compatibility across devices (TVs, browsers, mobile apps).",
                    "• Services like AWS MediaConvert handle automatic 608⇄708 conversion.",
                    "<br>",
                    "<span class='font-semibold'>3. In Embedded Devices & STBs</span>",
                    "• Set-top boxes must parse MPEG-TS packets, <a href='https://www.ebytelogic.com/case-study/broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency' target='_blank' class='text-blue-600 underline'>decode</a> captions, and render on-screen.",
                    "• Real-time conversion pipelines often rely on <span class='font-semibold'>FFmpeg or GStreamer plugins.</span>",
                    "👉 Reference: FFmpeg Subtitle/CC Support. ",
                ],
                chartData: {
                    chartType: "doughnut",
                    doughnut: [
                        {
                            title: "Workflow: Broadcast TV",
                            color: "#0056B3",
                            legend: [
                                "MPEG-2 TS Muxing",
                                "Encoder Insertion",
                                "ATSC Tuner Decode",
                            ],
                            values: [40, 35, 25],
                        },
                        {
                            title: "Workflow: OTT & Streaming",
                            color: "#0B5ED7",
                            legend: [
                                "Transcoding & Conversion",
                                "Sidecar Files (WebVTT/SRT)",
                                "Player Rendering",
                            ],
                            values: [40, 35, 25],
                        },
                        {
                            title: "Workflow: Embedded & STBs",
                            color: "#003366",
                            legend: [
                                "FFmpeg/GStreamer Plugins",
                                "Real-time Packet Parsing",
                                "On-Screen Rendering",
                            ],
                            values: [45, 35, 20],
                        },
                    ],
                },
            },
            {
                id: 6,
                title: "Engineering Challenges & Solutions",
                content: [
                    "<span class='font-semibold'>1. Character Encoding Issues </span>",
                    "<span class='text-red-600'>🚫</span> 608 uses a limited ASCII set, while 708 supports Unicode.",
                    "<span class='text-green-600'>✅</span> Proper mapping tables for multi-language captions.",
                    "<br>",
                    "<span class='font-semibold'>2. Timing & Sync </span>",
                    "<span class='text-red-600'>🚫</span> Lip-sync drift if captions are delayed.",
                    "<span class='text-green-600'>✅</span> Pipeline tuning, buffer management, and timestamp corrections.",
                    "<br>",
                    "<span class='font-semibold'>3. Loss of Features in Down-Conversion </span>",
                    "<span class='text-red-600'>🚫</span> 708→608 loses formatting (colors, positions).",
                    "<span class='text-green-600'>✅</span> Accept limitations or offer dual captions (basic + styled).",
                    "<br>",
                    "<span class='font-semibold'>4. OTT vs Broadcast Standards </span>",
                    "<span class='text-red-600'>🚫</span> OTT often prefers WebVTT/TTML, while broadcast sticks to 608/708.",
                    "<span class='text-green-600'>✅</span> Use multi-format caption workflows at transcoding stage.",
                    "👉 Deep Dive: Netflix Captioning Best Practices",
                ],
            },
        ],
        trendsTitle: "Future Trends in Closed Captioning",
        trends: [
            {
                id: 1,
                title: "AI-Generated Captions",
                icon: <CgPullClear className="size-4 text-indigo-600" />,
                content: [
                    "Services like <span class='font-semibold'>Google Cloud Speech-to-Text</span> enhancing <span class='font-semibold'>accuracy</span> in generating captions.",
                ],
            },
            {
                id: 2,
                title: "Live Multilingual Subtitling",
                icon: <BiServer className="size-4 text-blue-600" />,
                content: [
                    "<span class='font-semibold'>Real-time translation</span> layered on captions to support multilingual audiences.",
                ],
            },
            {
                id: 3,
                title: "Accessibility Regulations Expanding",
                icon: <BsShieldCheck className="size-4 text-green-600" />,
                content: [
                    "<span class='font-semibold'>Streaming platforms</span> increasingly required to follow <span class='font-semibold'>broadcast-level standards</span> for accessibility.",
                ],
            },
            {
                id: 4,
                title: "Automatic DTVCC Mapping Tools",
                icon: <BiVideo className="size-4 text-pink-600" />,
                content: [
                    "Emerging <span class='font-semibold'>open-source converters</span> for <span class='font-semibold'>FFmpeg</span>/<span class='font-semibold'>GStreamer</span> to automate <span class='font-semibold'>DTVCC mapping</span>.",
                ],
            },
        ],
        caseStudy: {
            title: "Real-World Case Study: Broadcast Caption Conversion",
            description: `At eByteLogic, we developed a <span class='font-semibold'>caption conversion pipeline</span> for a media broadcasting client who needed <span class='font-semibold'>real-time 608 ⇄708 interoperability.</span>`,
            caseStudies: [
                {
                    id: 1,
                    title: "GStreamer Plugin Integration",
                    description:
                        "Integrated <span class='font-semibold'>GStreamer plugins</span> for <span class='font-semibold'>CEA-608/708 parsing</span>.",
                    icon: (
                        <FaMicrochip className="size-4 group-hover:text-white text-green-500" />
                    ),
                },
                {
                    id: 2,
                    title: "LINE21 → DTVCC Encapsulation",
                    description:
                        "Implemented <span class='font-semibold'>LINE21 → DTVCC encapsulation</span> during <span class='font-semibold'>MPEG-TS muxing</span>.",
                    icon: (
                        <FaVideo className="size-4 group-hover:text-white text-indigo-500" />
                    ),
                },
                {
                    id: 3,
                    title: "Fallback Rendering for Legacy Devices",
                    description:
                        "Added <span class='font-semibold'>fallback rendering</span> for legacy devices.",
                    icon: (
                        <FaBolt className="size-4 group-hover:text-white text-yellow-500" />
                    ),
                },
            ],
        },
        conclusion: {
            title: "Conclusion",
            subtitle: "Closed Captions and Future of DTVCC Conversion",
            description:
                "Recap of the importance of closed captions and the role of CEA-608/708 and Line21 ⇄ DTVCC conversion in modern video pipelines.",
            content: [
                "Closed captions are a critical element of accessibility, regulatory compliance, and audience reach across broadcast and OTT platforms. The shift from <span class='font-semibold'>Line21 analog captions (CEA-608)</span> to <span class='font-semibold'>digital captions (CEA-708/DTVCC)</span> has introduced complexities that need careful attention.",
                "The ability to seamlessly convert between legacy formats (CEA-608) and modern standards (CEA-708, DTVCC) is vital for maintaining compatibility with both old and new devices. Our deep dive into <span class='font-semibold'>DTVCC conversion</span> techniques shows how crucial it is to bridge these gaps in real-time video workflows.",
                "At <span class='font-semibold'>eByteLogic</span>, we have implemented robust conversion pipelines to address these challenges, enabling smooth interoperability across platforms and devices. By leveraging technologies like <span class='font-semibold'>GStreamer</span> and <span class='font-semibold'>FFmpeg</span>, we have helped clients achieve consistent, high-quality captioning for both broadcast and OTT services.",
                "Looking ahead, <span class='font-semibold'>AI-generated captions</span>, <span class='font-semibold'>live multilingual subtitling</span>, and <span class='font-semibold'>automatic DTVCC mapping tools</span> will further streamline caption workflows and enhance accessibility for diverse global audiences.",
                "If you're working on a project that requires seamless captioning across formats or need help integrating these technologies into your pipeline, <span class='font-semibold'>let's connect</span> and explore how we can assist you in meeting your needs.",
            ],

        },
    },
    // 8th blog
    {
        id: "ptp-and-smpte-st-2110-for-non-broadcasters",
        breadCrumb: "PTP & SMPTE ST 2110 for Non-Broadcasters",
        introData: {
            title: "PTP & SMPTE ST 2110 for Non-Broadcasters: Timing Without Tears",
            highlight: "Without Tears",
            paragraphs: [
                "For years, broadcast technology seemed like an isolated world, full of acronyms and specialized equipment. If you weren’t in a TV studio or a live sports truck, terms like <a href='https://pilotefilms.com/documents/SMPTE_ST2110-30.pdf' target='_blank' class='text-blue-600 underline'>SMPTE ST 2110</a> and Precision Time Protocol (PTP) probably felt irrelevant. But things are changing fast.",
                `The rise of IP-based workflows, esports, live streaming, corporate AV, and even medical imaging has created new demand for technologies once reserved for broadcasters. Suddenly, concepts like precise synchronization and timing aren’t just nice-to-have—they’re mission-critical.`,
                "This guide breaks down what PTP and SMPTE ST 2110 actually mean, why they’re no longer confined to broadcast, and how non-broadcasters can adopt them without headaches. By the end, you’ll understand how to unlock <span class='font-semibold'> broadcast-grade timing without tears.</span>",
            ],
            button: {
                label: "Explore PTP & SMPTE",
                link: "/case-study",
            },
            image: {
                src: PtpPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle: "Let's have a Deep Dive :",
        qa: [
            {
                id: 1,
                title: "What is Precision Time Protocol (PTP)?",
                content: [
                    `At its core, PTP is about getting clocks to agree. Defined under IEEE 1588, Precision Time Protocol enables devices on a network to synchronize their internal clocks with sub-microsecond accuracy.`,
                    `Why does this matter? Imagine you have a multi-camera production setup, and one camera’s feed is slightly ahead of another. Or audio trails behind video by just 100 milliseconds. To a human viewer, this mismatch is noticeable and distracting. PTP eliminates this by ensuring that every device—from cameras to encoders to playout systems—operates off the same reference clock.`,
                    `A useful analogy: PTP is like a conductor in an orchestra. Without the conductor, each musician might be slightly out of time. With the conductor, everyone stays in sync, and the music works as a whole.`,
                    `PTP achieves this by designating a <span class='font-semibold'> grandmaster clock </span> on the network, which all other devices reference. It uses timestamped messages, compensation for delays, and correction factors to maintain synchronization.`,
                ],
            },
            {
                id: 2,
                title: "What is SMPTE ST 2110?",
                content: [
                    `SMPTE ST 2110 is a suite of standards developed by the Society of Motion Picture and Television Engineers (SMPTE) to define how media—video, audio, and metadata—can be transported over IP networks in real time.`,
                    `Here’s what makes it groundbreaking: unlike legacy approaches such as SDI (Serial Digital Interface) or MPEG Transport Streams, ST 2110 separates different types of media streams. Video, audio, and ancillary data travel independently but stay perfectly in sync thanks to PTP.`,
                    `This separation allows much greater flexibility. For example:`,
                    `<span class='font-semibold md:ms-8'>• </span> You can replace an audio track without re-encoding video.`,
                    `<span class='font-semibold md:ms-8'>• </span> You can mix graphics metadata with a video stream more efficiently.`,
                    `<span class='font-semibold md:ms-8'>• </span> You can scale systems easily, adding new sources or destinations without restructuring the entire workflow.`,
                    "In broadcast, ST 2110 is revolutionizing production trucks, live sports, and cloud-based editing pipelines. But outside broadcast, it offers equally exciting possibilities.",
                ],
            },
            {
                id: 3,
                title: "Why Non-Broadcasters Should Care",
                content: [
                    `Historically, timing precision was a broadcaster’s headache. But now, industries outside traditional TV are hitting similar challenges:`,
                    `<span class='font-semibold'>• Corporate AV and conferencing: </span> Multi-camera setups in boardrooms or corporate studios demand seamless video and audio. A small drift in lip sync creates an unprofessional impression during executive town halls or product launches.`,
                    `<span class='font-semibold'>• Esports and gaming arenas: </span> Competitive gaming demands ultra-low latency. A 100 ms lag could mean the difference between winning and losing. Broadcast-grade timing ensures fairness and professional-quality live streams.`,
                    `<span class='font-semibold'>• Medical imaging: </span> Hospitals increasingly use networked video for minimally invasive surgery or diagnostics. Precise synchronization ensures doctors see the right image at the right moment.`,
                    `<span class='font-semibold'>• Event production and houses of worship: </span> Churches, concerts, and live events increasingly mix camera feeds, graphics, and audio. Mistimed feeds break immersion for in-person audiences and online viewers alike.`,
                    `In all these cases, PTP and ST 2110 solve real, practical problems—problems that, left unsolved, can hurt reputation, viewer trust, or even patient safety.`,
                ],
                chartData: {
                    chartTitle: "Max Acceptable Latency by Industry",
                    chartType: "bar",
                    rttData: [150, 100, 120, 160], // (y-axis)
                    bufferData: [0, 0, 0, 0], // (x-axis)
                    data: {
                        labels: [
                            "Esports & Gaming Arenas",
                            "Live Medical Imaging",
                            "Corporate AV & Conferencing",
                            "Live Event Production",
                        ],
                        datasets: [
                            {
                                chartType: "bar",
                                bufferData: [0, 0, 0, 0],
                                rttData: [80, 100, 130, 160],
                                rttLabel: "Max Acceptable Latency (ms)",
                                barColor: ["#003f87", "#48b9d7", "#63d0eb", "#a5c9e0"],
                                borderColor: ["#003f87", "#48b9d7", "#63d0eb", "#a5c9e0"],
                                borderWidth: 1,
                                hoverBarColor: ["#003f87", "#48b9d7", "#63d0eb", "#a5c9e0"],
                                xAxisLabel: "Industries",
                                yAxisLabel: "Latency (ms)",
                                barRadius: 4,
                                barThickness: 80,
                                maxBarThickness: 90,
                                layoutPadding: 60,
                            },
                        ],
                    },
                },
            },
            {
                id: 4,
                title: "What Happens Without PTP and ST 2110?",
                content: [
                    `Without synchronization, media systems drift. Video frames may not align, audio and video lose sync, and jitter causes dropped frames or artifacts.`,
                    `In small setups with just one or two devices, you might never notice. But once you scale—adding multiple cameras, encoders, or displays—the problems compound quickly. Viewers notice lip-sync issues almost instantly. Esports spectators spot latency discrepancies. Medical staff can’t tolerate misaligned images during a procedure.`,
                    `Simply put, without proper timing, scaling IP-based media workflows becomes nearly impossible.`,
                ],
            },
            {
                id: 5,
                title: "How to Put PTP and ST 2110 into Practice",
                content: [
                    `Adopting PTP and ST 2110 doesn’t have to be overwhelming. At a high level, you need three core building blocks:`,
                    `<span class='font-semibold'> 1. PTP Grandmaster Clock </span>`,
                    `<span class="ms-4">The grandmaster is your ultimate reference. All other devices align with it. Depending on your setup, this can be a dedicated hardware device or an integrated function in certain switches. For critical setups, GPS-synchronized grandmasters add robustness.</span>`,
                    `<span class='font-semibold'> 2. PTP-Aware Switches </span>`,
                    `<span class="ms-4">Not all network switches are equal. PTP-aware switches handle timestamping accurately, preventing drift. They also support multicast efficiently,  ST 2110 relies on. Cheap or unmanaged switches often introduce errors that make synchronization impossible.</span>`,
                    `<span class='font-semibold'> 3. ST 2110-Capable Endpoints </span>`,
                    `<span class="ms-4">Cameras, encoders, playout systems, and monitoring devices must support ST 2110 streams. The standard defines how these streams are packaged, transmitted, and synchronized.</span>`,
                    "<br>",
                    `Once you have the right building blocks, focus on best practices:`,
                    `<span class="ms-4">• Start small. Test synchronization between two devices before scaling to dozens.</span>`,
                    `<span class="ms-4">• Use QoS (Quality of Service) to prioritize PTP and media packets over other network traffic.</span>`,
                    `<span class="ms-4">• Deploy redundancy. Standards like <a href='https://www.dektec.com/products/PCIe/DTA-2162/downloads/DT-AN-IP-3%20SMPTE%202022-7.pdf' target='_blank' class='text-blue-600 underline'>SMPTE ST 2022-7</a> allow seamless protection switching.</span>`,
                    `<span class="ms-4">• Monitor constantly. Tools like Wireshark, EBU LIST, or vendor dashboards help catch timing issues before they escalate.</span>`,
                ],
            },
            {
                id: 6,
                title: "Common Pitfalls and How to Avoid Them",
                content: [
                    `<span class='font-semibold'>• Assuming IT-grade switches are good enough: </span> Many corporate IT teams assume their existing infrastructure will suffice. But unless switches are PTP-aware, synchronization will drift. The solution: </span> select switches validated for PTP and multicast traffic.`,
                    `<span class='font-semibold'>• Mixing legacy and IP carelessly: </span> Legacy HDMI or SDI devices don’t “speak” PTP. Plugging them directly into an IP setup can break synchronization. Instead, use gateways or converters that preserve timing.`,
                    `<span class='font-semibold'>• Scaling too fast: </span> Rolling out a large ST 2110 deployment without proper monitoring is a recipe for disaster. Start with small deployments, validate timing, and scale step by step.`,
                ],
            },
            {
                id: 7,
                title: "Real-World Example: Esports Arena",
                content: [
                    `An esports venue deploys 20 cameras, multiple encoding stations, and a large in-venue display system. Without PTP and ST 2110, each device drifts slightly, causing audio to lag behind video by 200 ms on the arena screen. Players complain, fans notice, and streams appear amateurish.`,
                    `By introducing a GPS-synced PTP grandmaster, PTP-aware switches, and ST 2110-enabled encoders, the entire system aligns. Video frames from all cameras remain synchronized, audio matches perfectly, and latency falls below 50 ms. The result: professional production quality, smoother viewer experiences, and a competitive edge.`,
                ],
            },
            {
                id: 8,
                title: "The Future of Timing in AV-over-IP",
                content: [
                    `As more industries adopt IP-based media, PTP and ST 2110 will continue to spread beyond broadcast. Vendors are simplifying deployments with:`,
                    `<span class='font-semibold'>• Plug-and-play PTP support in switches. </span>`,
                    `<span class='font-semibold'>• Software-defined workflows that reduce manual configuration. </span>`,
                    `<span class='font-semibold'>• Cloud integration where PTP spans hybrid on-premises and remote systems. </span>`,
                    `Emerging technologies like 5G production and edge computing will push the demand for precise timing even further. From telemedicine to immersive AR/VR live , synchronization will be critical for reliability.`,
                ],
                chartData: {
                    chartTitle: "Adoption of PTP and ST 2110 in Non-Broadcast Sectors",
                    chartType: "line",
                    data: {
                        labels: ["2023", "2024", "2025", "2026", "2027", "2028"],
                        datasets: [
                            {
                                label: "Adoption Index (Projected)",
                                data: [10, 20, 40, 60, 80, 100],
                                borderColor: "rgba(75, 192, 192, 1)",
                                fill: true,
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                lineTension: 0.2,
                            },
                        ],
                    },
                },
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the relevance of PTP and SMPTE ST 2110 across various industries and how they offer precise timing and synchronization for modern media workflows.",
            content: [
                "PTP and SMPTE ST 2110 may have started in the broadcast world, but their relevance is growing far beyond. From corporate AV to esports, from live events to medical imaging, these standards provide the precise timing and synchronization modern media workflows demand.",
                "The best part? With the right approach—choosing proper equipment, starting small, and planning for redundancy—you don’t need to be a broadcast engineer to succeed.",
                "The result is clear: <span class='font-semibold'> broadcast-grade synchronization, without the broadcast-level headaches.</span> That’s timing without tears.",
            ],
            referencesTitle: "References",
            references: [
                "SMPTE ST 2110 Overview – SMPTE",
                "<a href='https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/104x/config-guides/cisco-nexus-9000-series-nx-os-system-management-configuration-guide-release-104x/m-configuring-ptp-10x.pdf' target='_blank' class='text-blue-600 underline'>IEEE 1588</a> Precision Time Protocol",
            ],
        },
    },
    // 9th blog
    {
        id: "fixing-frame-drops-during-protocol-switching",
        breadCrumb: "Fixing Frame Drops During Protocol Switching",
        introData: {
            title:
                "Fixing Frame Drops During Protocol Switching (Real-World Postmortem)",
            highlight: "(Real-World Postmortem)",
            paragraphs: [
                "Few things frustrate viewers more than a live stream that stutters or freezes just as the action peaks. Behind the scenes, one of the most common culprits is <span class='font-semibold'>frame drops during protocol switching</span> when a streaming system transitions between different transport protocols like RTMP, <a href='https://www.haivision.com/products/srt-secure-reliable-transport/' target='_blank' class='text-blue-600 underline'>SRT</a> , HLS, or <a href='https://datatracker.ietf.org/doc/html/rfc3550)' target='_blank' class='text-blue-600 underline'>RTP</a> .",
                "In theory, protocols are interchangeable “pipes” for video data. In reality, switching between them under live conditions is fraught with challenges: buffer mismatches, clock drift, encoding delays, and misconfigured network paths.",
                "This postmortem shares lessons learned from a real-world project where protocol switching caused persistent frame drops during live production. We’ll break down what went wrong, how we diagnosed it, and which solutions restored smooth streaming. The goal is to help you understand not just the “what,” but the “why” of protocol-level issues so you can avoid them in your own workflows.",
            ],
            button: {
                label: "Explore Protocol Switching",
                link: "/case-study/unified-yocto-build-environment-for-multi-SoM-product-lines",
            },
            image: {
                src: FixingFramePng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle:
            "Deep Dive: Scenario, Understanding, Analysis, Solutions, Lessons Learned & Considerations",
        qa: [
            {
                id: 1,
                title: "The Scenario: Live Streaming with Multiple Protocols",
                content: [
                    `Our client was producing a hybrid live stream that needed to feed:`,
                    `<span class='font-semibold'>• RTMP </span> for social media platforms (YouTube, Facebook Live).`,
                    `<span class='font-semibold'>• SRT </span> for contribution from remote commentators.`,
                    `<span class='font-semibold'>• HLS/DASH </span> for distribution to OTT viewers.`,
                    `<span class='font-semibold'>• RTP </span> for internal monitoring and <a href='https://www.ebytelogic.com/services/multimedia-framework' target='_blank' class='text-blue-600 underline'>low-latency</a> studio playout.`,
                    `To support this, they deployed a modular GStreamer-based pipeline. The system dynamically switched between protocols based on destination requirements. On paper, the architecture was robust. In practice, it wasn’t.`,
                    `During live tests, we noticed:`,
                    `• Dropped frames whenever the system switched protocols mid-stream.`,
                    `• Latency spikes, sometimes exceeding 5–10 seconds.`,
                    `• Audio and video going out of sync after a few switches.`,
                    `• Viewers reporting buffering even on high-bandwidth networks.`,
                    `Clearly, something deeper than bandwidth limitations was at play.`,
                ],
            },
            {
                id: 2,
                title: "Understanding Frame Drops During Protocol Switching",
                content: [
                    `Frame drops happen when the system cannot deliver frames at the expected pace, causing viewers to see skips or stutters. In protocol switching scenarios, drops often occur due to:`,
                    '<span class="font-semibold">1. Buffer Reset Issues </span>',
                    "Each protocol manages buffering differently. When switching, buffers may be flushed or reinitialized, discarding frames.",
                    '<span class="font-semibold">2. Timestamp Drift </span>',
                    "Protocols rely on clock references to align packets. If clocks drift or timestamps reset during switching, the pipeline rejects or delays frames.",
                    '<span class="font-semibold">3. Codec Context Misalignment </span>',
                    "Switching doesn’t just mean changing transport—it often triggers reinitialization of codec parameters. A mismatch in sequence headers (e.g., SPS/PPS in H.264) can cause the decoder to drop frames until a new keyframe arrives.",
                    '<span class="font-semibold">4. Network Jitter During Transition </span>',
                    "If network conditions change during protocol handoff, jitter buffers may underflow or overflow, resulting in visible frame skips.",
                ],
                chartData: {
                    chartType: "doughnut",
                    doughnut: [
                        {
                            title: "Issues during Network Transmission",
                            color: "#FF6F61",
                            legend: [
                                "Buffer Reset Issues",
                                "Timestamp Drift",
                                "Network Jitter During",
                                "Codec Context Misalignment",
                            ],
                            values: [25, 25, 30, 20],
                        },
                    ],
                },
            },
            {
                id: 3,
                title: "Postmortem Analysis: What Went Wrong",
                content: [
                    `We approached the problem methodically, breaking down the pipeline at each stage.`,
                    `<span class='font-semibold'>• Step 1: Capturing Logs</span>`,
                    `Using FFmpeg stats, we identified that drops consistently occurred at the moment of protocol reinitialization.`,
                    `<span class='font-semibold'>• Step 2: Analyzing Packet Traces</span>`,
                    `Wireshark analysis revealed timestamp gaps during protocol switching, particularly when moving from <a href='https://www.ebytelogic.com/case-study/hdmi-multiview-player' target='_blank' class='text-blue-600 underline'>SRT</a>
(which handles packet loss gracefully) to RTMP (which doesn’t).`,
                    `<span class='font-semibold'>• Step 3: Codec Behavior</span>`,
                    `Frame analysis showed that B-frames were especially prone to being discarded when switching mid-GOP (Group of Pictures). Without an immediate I-frame, decoders stalled.`,
                    `<span class='font-semibold'>• Step 4: Network Monitoring</span>`,
                    `The network was stable, with no signs of congestion or packet loss spikes. This ruled out bandwidth as the main factor.`,
                    `Our conclusion: <span class='font-semibold'> protocol handoffs were resetting buffers and timestamps in ways that disrupted decoder continuity. </span>`,
                ],
            },
            {
                id: 4,
                title: "Solutions That Worked",
                content: [
                    `Fixing frame drops required a multi-pronged approach. Here’s what we implemented:`,
                    `<span class='font-semibold'>• 1. Force Keyframe Insertion Before Switch </span>`,
                    `By triggering a keyframe (I-frame) before switching protocols, we ensured the decoder could re-synchronize without waiting for the next natural GOP boundary.`,
                    `<span class='font-semibold'>• 2. Timestamp Alignment Strategy </span>`,
                    `We implemented a timestamp normalization module that kept continuity across protocols. Instead of resetting to zero, timestamps were adjusted relative to the last seen frame.`,
                    `<span class='font-semibold'>• 3. Buffer Pre-Fill During Handoff </span>`,
                    `To prevent underflow, we pre-filled receiving buffers before exposing output frames. This created a seamless transition even when network jitter varied between protocols.`,
                    `<span class='font-semibold'>• 4. Protocol-Aware Switching Logic </span>`,
                    `Instead of a blind handoff, the pipeline now used protocol-specific adapters. For example, SRT-to-RTMP transitions accounted for RTMP’s stricter timing requirements.`,
                    `<span class='font-semibold'>• 5. Redundant Path Failover </span>`,
                    `ST 2022-7-inspired redundancy allowed parallel streams to be maintained during switches. If one path dropped frames, the other filled gaps.`,
                    `After these changes, frame drops reduced by <span class='font-semibold'> 95%, </span> latency stabilized within a consistent 1–2 second range, and audio/video sync was preserved across multiple switches.`,
                ],
                chartTitle: "Seamless Streaming Failover",
                chartType: "horizontal",
                chart: [
                    { latency: "Force Keyframe Insertion" },
                    { latency: "Timestamp Alignment Strategy" },
                    { latency: "Buffer Pre-Fill During Handoff" },
                    { latency: "Protocol-Aware Switching Logic" },
                    { latency: "Redundant Path Failover" },
                ],
            },
            {
                id: 5,
                title: "Future Considerations",
                content: [
                    `Protocol switching is becoming more common as hybrid workflows expand. Broadcasters, OTT providers, and enterprises are mixing live contribution, CDN delivery, and cloud playout in ways that demand flexibility.`,
                    `Looking ahead:`,
                    `<span class='font-semibold'>• Smart switching algorithms </span> will anticipate conditions and pre-align buffers.`,
                    `<span class='font-semibold'>• AI-driven monitoring </span> could predict and correct timestamp drift before it causes visible drops.`,
                    `<span class='font-semibold'>• Cloud-native media platforms </span> will integrate protocol switching as a managed service, abstracting away the complexity.`,
                    `As these evolve, the gap between contribution, distribution, and playback protocols will narrow. But for now, careful engineering is the only way to ensure seamless switching.`,
                ],
                chartData: {
                    chartTitle: "Frame Continuity Over Time",
                    chartType: "line",
                    data: {
                        labels: [
                            "0s",
                            "5s",
                            "Switch 1",
                            "15s",
                            "20s",
                            "Switch 2",
                            "30s",
                            "35s",
                            "Switch 3",
                            "45s",
                        ],
                        datasets: [
                            {
                                label: "Before Fix",
                                data: [29, 28, 15, 27, 29, 12, 28, 29, 18, 28],
                                borderColor: "#e74c3c",
                                backgroundColor: "rgba(231, 76, 60, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                            {
                                label: "After Fix",
                                data: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
                                borderColor: "#6f42c1",
                                backgroundColor: "rgba(111, 66, 193, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                        ],
                    },
                },
                chartData1: {
                    chartTitle: "Latency Spikes During Switches",
                    chartType: "bar",
                    rttData: [8.5, 10.2, 7.8],
                    bufferData: [1.2, 1.4, 1.1],
                    data: {
                        labels: ["Switch 1", "Switch 2", "Switch 3"],
                        datasets: [
                            {
                                chartType: "bar",
                                bufferData: ["Switch 1", "Switch 2", "Switch 3"],
                                rttData: [8.5, 10.2, 7.8],
                                rttLabel: "Before Fix (Peak)",
                                barColor: "#ff7849",
                                borderColor: "#ff7849",
                                borderWidth: 1,
                                hoverBarColor: "#ff5722",
                                xAxisLabel: "Switches",
                                yAxisLabel: "Latency (seconds)",
                                barRadius: 4,
                                barThickness: 40,
                                maxBarThickness: 40,
                                layoutPadding: 20,
                            },
                            {
                                chartType: "bar",
                                bufferData: ["Switch 1", "Switch 2", "Switch 3"],
                                rttData: [1.2, 1.4, 1.1],
                                rttLabel: "After Fix (Stable)",
                                barColor: "#0b3d91",
                                borderColor: "#0b3d91",
                                borderWidth: 1,
                                hoverBarColor: "#1c4ec2",
                                xAxisLabel: "Switches",
                                yAxisLabel: "Latency (seconds)",
                                barRadius: 4,
                                barThickness: 40,
                                maxBarThickness: 40,
                                layoutPadding: 20,
                            },
                        ],
                    },
                },
            },
        ],
        trendsTitle: "Lessons Learned",
        trends: [
            {
                id: 1,
                title: "Switching is Never Neutral",
                icon: <BiArrowToRight className="size-4 text-indigo-600" />,
                content: [
                    "Protocols have different assumptions about <span class='font-semibold'>buffering, timing, and reliability</span>.",
                    "Treating them as ‘just pipes’ can lead to serious synchronization issues.",
                ],
            },
            {
                id: 2,
                title: "Keyframes Are Lifelines",
                icon: <BiTime className="size-4 text-orange-600" />,
                content: [
                    "Without <span class='font-semibold'>keyframes</span>, decoders may get lost during switches.",
                    "Forcing a keyframe before transitions is <span class='font-semibold'>essential</span> to avoid decoding issues.",
                ],
            },
            {
                id: 3,
                title: "Timestamps Must Be Continuous",
                icon: <BiCalendarCheck className="size-4 text-green-600" />,
                content: [
                    "Clock discontinuity is a <span class='font-semibold'>silent killer</span> in media workflows.",
                    "Even small mismatches in timestamps can cause visible stutter, which affects user experience.",
                ],
            },
            {
                id: 4,
                title: "Testing in Lab ≠ Testing in Production",
                icon: <BiServer className="size-4 text-blue-600" />,
                content: [
                    "Lab tests often use ideal conditions, but real-world networks introduce <span class='font-semibold'>jitter</span> and <span class='font-semibold'>packet reordering</span>.",
                    "These factors can break fragile setups that work in controlled environments.",
                ],
            },
            {
                id: 5,
                title: "Monitoring Tools Save the Day",
                icon: <BiSearchAlt className="size-4 text-purple-600" />,
                content: [
                    "Tools like <span class='font-semibold'>Wireshark, FFmpeg logs, and RTP analyzers</span> provide vital insights.",
                    "They help trace problems back to their root cause, allowing for faster troubleshooting and fixes.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the impact of frame drops during protocol switching and how careful design and testing can lead to reliable, professional live streams.",
            content: [
                "Frame drops during protocol switching are more than an inconvenience—they’re a serious threat to viewer experience and production credibility.",
                "Our postmortem revealed how <span class='font-semibold'>buffer resets, timestamp drift, and codec misalignment</span> combined to create visible stutter.",
                "The fix wasn’t a single silver bullet but a combination of strategies: <span class='font-semibold'>forcing keyframes, aligning timestamps, pre-filling buffers, and designing protocol-aware switching logic.</span>",
                "With these changes, the system transformed from fragile to reliable.",
                "The takeaway? <span class='font-semibold'>Protocol switching demands respect.</span> With careful design and testing, you can deliver smooth, professional live streams—even across multiple protocols.",
            ],
        },
    },
    // 10th blog
    {
        id: "ffmpeg-filters-frame-pacing-lip-sync",
        breadCrumb:
            "FFmpeg Filters for Broadcast-Grade Sync, Frame Pacing, and Lip-Sync",
        introData: {
            title:
                "FFmpeg Filters for Broadcast-Grade Sync, Frame Pacing, and Lip-Sync",
            highlight: "Frame Pacing, and Lip-Sync",
            paragraphs: [
                "In live and broadcast video workflows, smooth playback is everything. Yet even the most sophisticated pipelines are vulnerable to problems that viewers immediately notice: <span class='font-semibold'> dropped frames, inconsistent pacing, and lip-sync errors. </span>",
                "A half-second drift between audio and video can make dialogue unwatchable. A jitter in <a href='https://its.ntia.gov/publications/download/11-475.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>frame pacing</a> can turn sports replays into stuttered messes. In broadcast-grade environments—where millions of viewers may be tuned in—there’s no room for compromise.",
                "This is where <span class='font-semibold'> FFmpeg filters </span> shine. Beyond basic transcoding, FFmpeg provides a vast library of filters designed to correct timing, resample frames, and realign audio-video sync. When tuned properly, these filters can transform unstable, jitter-prone feeds into <span class='font-semibold'> seamlessly timed streams ready for broadcast delivery.</span>",
                "In this post, we’ll explore how FFmpeg filters address broadcast-level challenges with <span class='font-semibold'> sync, frame pacing, and </span> <a href='https://tech.ebu.ch/publications/presentations/display-seminar/lip-sync?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>lip-sync</a> —and share a real-world case study where they saved a production pipeline.",
            ],
            button: {
                label: "Explore FFmpeg Filters",
                link: "/case-study",
            },
            image: {
                src: ffmpegPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle: "Deep Dive: Challenge, Role, Real-World Postmortem, Analysis, Fix",
        qa: [
            {
                id: 1,
                title: "The Broadcast Challenge: Sync and Timing",
                content: [
                    `Broadcast environments introduce unique stressors that make timing issues unavoidable:`,
                    `<span class='font-semibold'>• Multi-protocol distribution: </span> RTMP to social media, SRT for contribution, HLS/DASH for <a href='https://www.ebytelogic.com/case-study' target='_blank' class='text-blue-600 underline'>OTT</a>
 playback. Each introduces latency and buffer behavior.`,
                    `<span class='font-semibold'>• Frame rate mismatches: </span> Source cameras may capture at 29.97fps, while downstream encoders expect 30fps or 25fps.`,
                    `<span class='font-semibold'>• Clock drift: </span> Different devices rely on different timing references, causing gradual desync.`,
                    `<span class='font-semibold'>• Packet jitter: </span> Especially in IP-based workflows, packet arrival isn’t always smooth.`,
                    `Without intervention, these lead to:`,
                    `<span class='font-semibold'>• Lip-sync drift </span> (audio leading or lagging video).`,
                    `<span class='font-semibold'>• Frame pacing jitter </span> (uneven motion, especially visible in sports).`,
                    `<span class='font-semibold'>• Dropped/duplicated frames </span> during frame rate conversion.`,
                ],
            },
            {
                id: 2,
                title: "FFmpeg’s Role: Filters as Timing Fixes",
                content: [
                    `While many think of <a href='https://ffmpeg.org/ffmpeg-filters.html' target='_blank' class='text-blue-600 underline'>GStreamer</a> debug logs and <a href='' target='_blank' class='text-blue-600 underline'>FFmpeg</a> as a “conversion tool,” its <span class='font-semibold'> filter graph </span> is one of the most powerful timing correction engines available. Key filters for broadcast-grade timing include:`,
                    `<span class='font-semibold'> 1. aresample (Audio Resampling & Sync) </span>`,
                    `<span class='ms-4'>a. Adjusts audio clock drift. </span>`,
                    `<span class='ms-4'>b. Can dynamically stretch or shrink audio to maintain sync with video. </span>`,
                    `<span class='ms-4'>c. Example: ffmpeg -i input.mp4 -af "aresample=async=1:first_pts=0" output.mp4 </span>`,
                    `<span class='ms-4'>d. Effect: Keeps audio aligned even if source clocks drift. </span>`,
                    `<span class='font-semibold'> 2. fps and minterpolate (Frame Rate & Pacing) </span>`,
                    `<span class='ms-4'>a. fps: Forces output to a fixed frame rate. </span>`,
                    `<span class='ms-4'>b. minterpolate: Generates intermediate frames to achieve smooth motion. </span>`,
                    `<span class='ms-4'>c. Example: ffmpeg -i input.mp4 -vf "minterpolate='fps=60:mi_mode=mci:mc_mode=aobmc:me_mode=bidir'" output.mp4 </span>`,
                    `<span class='ms-4'>d. Effect: Eliminates pacing jitter, ensures consistent motion. </span>`,
                    `<span class='font-semibold'> 3. setpts (Video Timestamp Control) </span>`,
                    `<span class='ms-4'>a. Adjusts Presentation Time Stamps (PTS). </span>`,
                    `<span class='ms-4'>b. Useful for resyncing video with corrected audio. </span>`,
                    `<span class='ms-4'>c. Example: ffmpeg -i input.mp4 -vf "setpts=PTS-STARTPTS" -af "asetpts=PTS-STARTPTS" output.mp4 </span>`,
                    `<span class='font-semibold'> 4. aresync (Newer Builds) </span>`,
                    `<span class='ms-4'>a. Automatically fixes <a href='https://www.ebytelogic.com/case-study' target='_blank' class='text-blue-600 underline'>lip-sync</a>
 drift by tracking both clocks. </span>`,
                    `<span class='font-semibold'> 5. filter_complex Graphs </span>`,
                    `<span class='ms-4'>a. Combine filters to achieve precise control: </span>`,
                    `<span class='ms-9'>i. Video pacing correction</span>`,
                    `<span class='ms-9'>ii. Audio stretching</span>`,
                    `<span class='ms-9'>iii. Lip-sync alignment</span>`,
                ],
            },
            {
                id: 3,
                title: "Real-World Postmortem: Fixing a Lip-Sync Disaster",
                content: [
                    `We worked with a regional sports broadcaster who faced persistent lip-sync drift during live commentary. The symptoms:`,
                    `• At the start of broadcasts, sync was fine.`,
                    `• After 15–20 minutes, audio began leading video by ~300ms.`,
                    `• By the end of a 90-minute game, the drift exceeded one second.`,
                ],
            },
            {
                id: 4,
                title: "Root Cause Analysis",
                content: [
                    `• The audio path went through an AES67 contribution feed.`,
                    `• The video path used an RTP/SDI chain.`,
                    `• Slightly different clock domains introduced drift.`,
                ],
            },
            {
                id: 5,
                title: "The Fix Using FFmpeg Filters",
                content: [
                    `We designed a pipeline with:`,
                    `<span class='font-semibold'>1.</span> aresample=async=1:`,
                    `a. Allowed FFmpeg to stretch audio dynamically and follow the video clock.`,
                    `<span class='font-semibold'>2.</span> setpts:`,
                    `a. Recalibrated video timestamps to ensure no drift at splice points.`,
                    `<span class='font-semibold'>3.</span> fps=fps=59.94:`,
                    `a. Enforced a consistent frame pacing that matched the downstream encoder.`,
                    "<br>",
                    `<span class='font-semibold'>Result</span>`,
                    `Drift eliminated.`,
                    `Broadcaster reported <span class='font-semibold'> 0 complaints about sync </span> during the entire season.`,
                    `CPU overhead remained manageable (<10%).`,
                ],
            },
            {
                id: 6,
                title: "Frame Pacing Case Study: OTT Playback Stutter",
                content: [
                    `Another client, an OTT platform, noticed <span class='font-semibold'> micro-stutters </span> on 50% of playback devices.`,
                    `On inspection:`,
                    `• Source feed: 29.97fps.`,
                    `• Encoder output: 30fps HLS segments.`,
                    `• The mismatch caused duplicate frame insertion.`,
                    `<span class='font-semibold'> The Fix Using FFmpeg </span>`,
                    `We introduced minterpolate:`,
                    `ffmpeg -i input.ts -vf "minterpolate=fps=30" output.ts`,
                    `Now, instead of duplicating frames, FFmpeg interpolated motion-compensated frames. The result was <span class='font-semibold'> buttery-smooth playback across devices.</span>`,
                ],
                chartData: {
                    chartTitle: "Audio Drift Over Time",
                    chartType: "line",
                    data: {
                        labels: ["0 min", "10 min", "20 min", "30 min", "40 min", "50 min", "60 min", "70 min", "80 min", "90 min"],
                        datasets: [
                            {
                                label: "Audio Drift (Before)",
                                data: [0, 150, 300, 450, 600, 750, 900, 1050, 1200],
                                borderColor: "#e74c3c",
                                backgroundColor: "rgba(231, 76, 60, 0.2)",
                                fill: true,
                                tension: 0.4
                            },
                            {
                                label: "Synced Audio (After aresample)",
                                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                borderColor: "#1f77b4",
                                backgroundColor: "rgba(31, 119, 180, 0.2)",
                                fill: true,
                                tension: 0.4
                            },
                            {
                                label: "Video PTS",
                                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                borderColor: "#2e6db6",
                                backgroundColor: "rgba(46, 109, 182, 0.2)",
                                fill: false,
                                tension: 0
                            }
                        ]
                    }
                },
                chartData1: {
                    chartTitle: "Frame Delivery Interval Consistency",
                    chartType: "bar",
                    data: {
                        labels: ["16ms", "33ms (Duplicate)", "50ms"],
                        datasets: [
                            {
                                chartType: "bar",
                                bufferData: ["16ms", "33ms (Duplicate)", "50ms"],
                                rttData: [160, 60, 20],
                                rttLabel: "Before minterpolate",
                                barColor: "#e74c3c",
                                borderColor: "#e74c3c",
                                borderWidth: 1,
                                hoverBarColor: "#c0392b",
                                xAxisLabel: "Time Between Frames",
                                yAxisLabel: "Frame Count",
                                barRadius: 4,
                                barThickness: 40,
                                maxBarThickness: 40,
                                layoutPadding: 20
                            },
                            {
                                chartType: "bar",
                                bufferData: ["16ms", "33ms (Duplicate)", "50ms"],
                                rttData: [160, 50, 10],
                                rttLabel: "After minterpolate",
                                barColor: "#1f77b4",
                                borderColor: "#1f77b4",
                                borderWidth: 1,
                                hoverBarColor: "#3498db",
                                xAxisLabel: "Time Between Frames",
                                yAxisLabel: "Frame Count",
                                barRadius: 4,
                                barThickness: 40,
                                maxBarThickness: 40,
                                layoutPadding: 20
                            }
                        ]
                    }
                }
            },
            {
                id: 7,
                title: "Future Outlook: Filters + AI",
                content: [
                    `FFmpeg’s filter graph continues to evolve, but the future may lean on <span class='font-semibold'> AI-enhanced correction: </span>`,
                    `• AI-driven interpolation could replace minterpolate with smarter scene-aware pacing.`,
                    `• Neural lip-sync alignment could match spoken words to lip movement automatically.`,
                    `• Automated monitoring could adjust sync filters mid-stream without manual tuning.`,
                    `As pipelines grow hybrid (on-prem + cloud), filters will remain the backbone of stability.`,
                    ``,
                ],
            },
        ],
        trendsTitle: "Lessons Learned",
        trends: [
            {
                id: 1,
                title: "Audio Sync Requires Active Management",
                icon: <BiArrowToRight className="size-4 text-indigo-600" />,
                content: [
                    "Audio clocks drift. Tools like <span class='font-semibold'>aresample</span> and <span class='font-semibold'>aresync</span> aren’t optional—they’re <span class='font-semibold'>mandatory</span> in broadcast pipelines.",
                ],
            },
            {
                id: 2,
                title: "Frame Rate ≠ Frame Pacing",
                icon: <BiTime className="size-4 text-orange-600" />,
                content: [
                    "Even if two feeds share <span class='font-semibold'>30fps</span>, their actual pacing can differ.",
                    "Interpolation filters smooth out <a href='https://download.tek.com/document/1602_AM_TEK_VIDEO_IP_MIGRATION_WP_2cw-60360-0.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>micro-jitter</a>.",
                ],
            },
            {
                id: 3,
                title: "Lip-Sync Errors Grow with Time",
                icon: <BiCalendarCheck className="size-4 text-green-600" />,
                content: [
                    "Rarely obvious at first, sync drift compounds.",
                    "Preventive correction is better than <span class='font-semibold'>post-fix</span>.",
                ],
            },
            {
                id: 4,
                title: "Filters are Cheap Insurance",
                icon: <BiServer className="size-4 text-blue-600" />,
                content: [
                    "Compared to expensive hardware resync devices, <span class='font-semibold'>FFmpeg filters</span> achieve the same result in software.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the impact of frame pacing, broadcast sync, and lip-sync drift, and how FFmpeg filters ensure professional results.",
            content: [
                "Frame pacing, broadcast sync, and lip-sync drift are not minor issues—they make or break viewer trust.",
                "With <span class='font-semibold'>FFmpeg’s extensive library of filters</span>, engineers have powerful tools to:",
                "<ul><li><span class='font-semibold'>Resample audio</span> for perfect sync.</li><li><span class='font-semibold'>Normalize timestamps</span> for stable playback.</li><li><span class='font-semibold'>Interpolate frames</span> for smooth motion.</li></ul>",
                "In our real-world work, these filters turned fragile pipelines into <span class='font-semibold'>broadcast-grade outputs</span>.",
                "Whether you’re building <span class='font-semibold'>OTT platforms, live sports feeds, or hybrid distribution systems</span>, investing in FFmpeg-based sync correction is the surest way to guarantee professional results.",
                "Key Takeaway: Broadcast-grade polish is built on invisible details. Sync, pacing, and lip alignment matter as much as resolution or bitrate.",
                "FFmpeg filters give you the control to get them right.",
            ],
        },
    },
    // 11th blog
    {
        id: "measuring-glass-to-glass-latency",
        breadCrumb: "Measuring Glass-to-Glass Latency",
        introData: {
            title: "Measuring Glass-to-Glass Latency: Methods, Tools, and Pitfalls",
            highlight: "Methods, Tools, and Pitfalls",
            paragraphs: [
                "When you click “go live,” how long does it take for a video frame captured by a camera lens to appear on a viewer’s display ? This interval is called <a href='https://www.ebytelogic.com/case-study/reducing-wearable-display-latency' target='_blank' class='text-blue-600 underline'>glass-to-glass latency</a> — from the glass of the camera lens to the glass of the screen.",
                "For casual streaming, a few seconds of delay might not matter. But in professional environments—<span class='font-semibold'> sports broadcasting, remote surgery, live auctions, or mission-critical surveillance—</span> latency determines success or failure.",
                "Yet measuring this latency is tricky. Unlike bitrate or resolution, latency isn’t a fixed property—it depends on the <span class='font-semibold'> entire pipeline: </span> camera capture, encoding, transport, decoding, rendering, and display. Even small missteps in measurement can produce misleading results.",
                "This post explains how to measure <a href='https://docs.amd.com/r/en-US/pg252-vcu/Glass-to-Glass-Latency' target='_blank' class='text-blue-600 underline'>glass-to-glass latency</a> correctly, explores available tools and methods, highlights pitfalls to avoid, and provides guidance for engineers building <span class='font-semibold'> low-latency pipelines that truly perform.</span>",
            ],
            button: {
                label: "Explore Glass-to-Glass Latency",
                link: "/case-study/reducing-wearable-display-latency",
            },
            image: {
                src: GlassPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle:
            "Deep Dive: Why it Matters, Break Down, Measure, Tools, Pitfalls & Case-Study",
        qa: [
            {
                id: 1,
                title: "Why Glass-to-Glass Latency Matters",
                content: [
                    `In real-world workflows, even a fraction of a second can change the outcome:`,
                    `<span class='font-semibold'>• Sports & live events: </span> A five-second delay kills the excitement of “real-time” play, especially when social media spoils the action.`,
                    `<span class='font-semibold'>• Remote surgery & telemedicine: </span> Latency must be under 200ms for safe, responsive control.`,
                    `<span class='font-semibold'>• Esports & gaming: </span> Players and viewers demand fairness; latency differences lead to frustration.`,
                    `<span class='font-semibold'>• Security & surveillance: </span> Operators need live, not buffered, feeds to respond effectively.`,
                    `<span class='font-semibold'>• Video conferencing: </span> More than 400ms round-trip delay disrupts natural conversation flow.`,
                    `Accurately measuring latency helps engineers <span class='font-semibold'> identify bottlenecks, validate vendor claims, and optimize system performance.</span>`,
                ],
                beforeAfter: {
                    title: "LED flash input vs. delayed screen output",
                    description:
                        "A visual comparison of LED flash input vs. delayed screen output",
                    beforeImage: LedBeforePng,
                    afterImage: LedAfterPng,
                    deltaBefore: "Before (Δt: 45 ms)",
                    deltaAfter: "After (Δt: 8 ms)",
                },
            },
            {
                id: 2,
                title: "Breaking Down Glass-to-Glass Latency",
                content: [
                    `Latency isn’t caused by a single factor; it’s the sum of multiple stages:`,
                    `<span class='font-semibold'> 1. Capture latency: </span> <a href='https://www.ebytelogic.com/case-study/sub-100ms-latency-in-uav-video-streaming' target='_blank' class='text-blue-600 underline'>Camera</a> sensor readout + processing time.`,
                    `<span class='font-semibold'> 2. Encoding latency: </span> Compression algorithms trade speed for efficiency.`,
                    `<span class='font-semibold'> 3. Network latency: </span> Transport layer delay (RTMP, SRT, WebRTC, etc.).`,
                    `<span class='font-semibold'> 4. Decoding latency: </span> Time to reconstruct compressed video.`,
                    `<span class='font-semibold'> 5. Rendering latency: </span> Frame buffering + display refresh intervals.`,
                    `Each stage may add <span class='font-semibold'> tens to hundreds of milliseconds </span>, and the sum determines the user experience.`,
                ],
                chartTitle: "Typical Latency Breakdown",
                chartType: "horizontal",
                chart: [
                    { name: "1. Capture", latency: "Camera Sensor" },
                    { name: "2. Encode", latency: "Compression" },
                    { name: "3. Network", latency: "Transport" },
                    { name: "4. Decode", latency: "Reconstruction" },
                    { name: "5. Render", latency: "Display" },
                ],
            },
            {
                id: 3,
                title: "Methods to Measure Glass-to-Glass Latency",
                content: [
                    `<span class='font-semibold'> 1. Visual Test with LED & Stopwatch </span>`,
                    `• Place a flashing LED or stopwatch in front of the camera.`,
                    `• Compare the input event to its displayed output.`,
                    `<span class='font-semibold'>✅ Pros: </span> Simple, inexpensive, effective.`,
                    `<span class='font-semibold'>❌ Cons: </span> Human reaction time introduces error (~100ms). Limited precision.`,
                    `<span class='font-semibold'> 2. High-Speed Camera Method </span>`,
                    `• Use a high-speed reference camera to record both the input stimulus (e.g., LED flash) and the output display simultaneously.`,
                    `• Count frame differences to calculate latency.`,
                    `<span class='font-semibold'>✅ Pros: </span> Accurate, visual proof.`,
                    `<span class='font-semibold'>❌ Cons: </span> Requires specialized equipment, processing effort.`,
                    `<span class='font-semibold'> 3. Sensor-to-Display Timestamping </span>`,
                    `• Insert timestamps at capture and measure arrival time at display.`,
                    `• Can use embedded metadata or software instrumentation.`,
                    `<span class='font-semibold'>✅ Pros: </span> Precise, automated.`,
                    `<span class='font-semibold'>❌ Cons: </span> Requires cooperation from both capture and playback devices.`,
                    `<span class='font-semibold'> 4. Automated Measurement Devices (Probes) </span>`,
                    `• Tools like Sync-One2, VIDEOLAT, or custom hardware probes measure latency directly.`,
                    `• Some use photodiodes on both input and output screens.`,
                    `<span class='font-semibold'>✅ Pros: </span> Repeatable, accurate to ms level.`,
                    `<span class='font-semibold'>❌ Cons: </span> Costs more, not always accessible for small teams.`,
                    `<span class='font-semibold'> 5. Software-Based Network Tools </span>`,
                    `• Measure transport-only latency with packet inspection (e.g., Wireshark, <a href='https://tech.ebu.ch/docs/tech-i/tech-i-059.pdf' target='_blank' class='text-blue-600 underline'>EBU</a> LIST, ffprobe).`,
                    `• Useful for network contribution feeds.`,
                    `<span class='font-semibold'>✅ Pros: </span> Good for debugging protocols.`,
                    `<span class='font-semibold'>❌ Cons: </span> Doesn’t include end-to-end capture and display.`,
                ],
            },
            {
                id: 4,
                title: "Tools Commonly Used in the Industry",
                content: [
                    `<span class='font-semibold'>• Sync-One2: </span> A handheld device that detects flashing light and audio, measuring sync and delay precisely.`,
                    `<span class='font-semibold'>• VIDEOLAT by Rohde & Schwarz: </span> A broadcast-grade tool for automated latency measurement.`,
                    `<span class='font-semibold'>• OBS + Stopwatch Overlay: </span> A DIY method where engineers overlay a timer and compare input vs. output.`,
                    `<span class='font-semibold'>• High-speed iPhone/DSLR cameras: </span> Accessible way to record latency visually.`,
                    `<span class='font-semibold'>• Custom FPGA/Arduino probes: </span> Engineers often build cheap test rigs with LEDs and photodiodes.`,
                ],
            },
            {
                id: 5,
                title: "Case Study: Measuring Latency in a Live OTT Platform",
                content: [
                    `We partnered with an OTT sports broadcaster targeting sub-1-second glass-to-glass latency.`,
                    `<span class='font-semibold'> Setup: </span>`,
                    `• Camera → Hardware encoder → SRT contribution → Cloud transcoder → HLS playback → Mobile devices.`,
                    `<span class='font-semibold'> Initial Results: </span>`,
                    `• Vendor claimed 800ms latency.`,
                    `• Our measurement: 1.8–2.2s glass-to-glass.`,
                    `<span class='font-semibold'> Root Cause: </span>`,
                    `• HLS segment size = 2s.`,
                    `• Player added 2 segments of buffer by default.`,
                    `<span class='font-semibold'> Fix: </span>`,
                    `• Switched to CMAF with 500ms chunks.`,
                    `• Tuned player buffer to 1 segment.`,
                    `• Enabled LL-HLS on iOS.`,
                    `<span class='font-semibold'> Final Result: </span>`,
                    `• Achieved 900–1,100ms glass-to-glass latency.`,
                    `• Verified with <a href='https://sync-one2.harkwood.co.uk/' target='_blank' class='text-blue-600 underline'>Sync-One2</a> and high-speed camera.`,
                ],
                chartData: {
                    chartType: "doughnut",
                    doughnut: [
                        {
                            title: "Latency Before Optimization",
                            color: "#EF4444",
                            legend: [
                                "HLS Segment",
                                "Player Buffer",
                                "Other (Network/Encode)",
                            ],
                            values: [2000, 4000, 200],
                        },
                        {
                            title: "Latency After Optimization",
                            color: "#10B981",
                            legend: ["CMAF Chunk", "Player Buffer", "Other (Network/Encode)"],
                            values: [500, 500, 100],
                        },
                        {
                            title: "Latency Reduction (%)",
                            color: "#3B82F6",
                            legend: ["Reduction Achieved", "Remaining Latency"],
                            values: [1000, 1000],
                        },
                    ],
                },
            },
        ],
        trendsTitle: "Pitfalls and Misconceptions",
        trends: [
            {
                id: 1,
                title: "Measuring Only Part of the Chain",
                icon: <BiArrowToRight className="size-4 text-indigo-600" />,
                content: [
                    "Many engineers measure “encoder to decoder” latency but forget capture or rendering. That’s not true glass-to-glass latency.",
                ],
            },
            {
                id: 2,
                title: "Ignoring Display Refresh Rates",
                icon: <BiTime className="size-4 text-orange-600" />,
                content: [
                    "A 60Hz display adds up to 16.6ms delay; a 120Hz display halves that.",
                    "Measurements must account for refresh intervals.",
                ],
            },
            {
                id: 3,
                title: "One-Time Measurement ≠ Real-World Performance",
                icon: <BiCalendarCheck className="size-4 text-green-600" />,
                content: [
                    "Latency fluctuates due to network jitter, adaptive bitrate changes, and buffer resizing.",
                    "Multiple samples are required.",
                ],
            },
            {
                id: 4,
                title: "Assuming Vendor Specs are Absolute",
                icon: <BiServer className="size-4 text-blue-600" />,
                content: [
                    "If a codec claims “<50ms latency,” that’s under ideal lab conditions.",
                    "Real deployments add overhead.",
                ],
            },
            {
                id: 5,
                title: "Overlooking Audio Latency",
                icon: <BiArrowToRight className="size-4 text-indigo-600" />,
                content: [
                    "Video isn’t the only stream.",
                    "Glass-to-glass latency should measure audio-video sync as well, since lip-sync issues are common.",
                ],
            },
        ],
        recommendations: [
            {
                id: 1,
                text: "Always use two methods (e.g., high-speed camera + Sync-One2) for cross-verification.",
            },
            {
                id: 2,
                text: "Perform measurements at multiple times of day to capture network variability.",
            },
            {
                id: 3,
                text: "Include different playback devices (mobile, set-top box, smart TV) since rendering varies widely.",
            },
            {
                id: 4,
                text: "Automate testing where possible for consistency.",
            },
            {
                id: 5,
                text: "Document methodology so results are trusted and reproducible.",
            },
        ],
        scenariosTitle: "Future Outlook: Smarter Latency Measurement",
        scenariosDescription:
            "Latency measurement is evolving as workflows move to IP and cloud.",
        scenarios: [
            {
                id: 1,
                category: "AI-based visual recognition:",
                items: ["AI can detect on-screen vs. real-world events automatically."],
            },
            {
                id: 2,
                category: "Network analytics integration:",
                items: [
                    "Tools like <span class='font-semibold'>EBU LIST</span> now combine PTP analysis with end-to-end latency reports.",
                ],
            },
            {
                id: 3,
                category: "Cloud monitoring probes:",
                items: [
                    "Deployed alongside CDN edges to continuously measure actual end-user delay.",
                ],
            },
            {
                id: 4,
                category: "Standardization efforts:",
                items: [
                    "Organizations like <span class='font-semibold'>EBU</span> and <span class='font-semibold'>SMPTE</span> are pushing for consistent definitions of latency measurement.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the impact of glass-to-glass latency, accurate measurement, and how to optimize your pipeline.",
            content: [
                "Glass-to-glass latency is one of the most critical performance indicators in video systems—yet one of the most misunderstood.",
                "Measuring it correctly means looking at the entire pipeline, not just network hops or codec specs.",
                "Whether you’re building a <span class='font-semibold'>sports OTT app</span>, deploying <span class='font-semibold'>medical imaging</span>, or scaling <span class='font-semibold'>esports arenas</span>, accurate latency measurement separates marketing claims from engineering truth.",
                "With the right combination of <span class='font-semibold'>LED/visual tests</span>, <span class='font-semibold'>high-speed cameras</span>, <span class='font-semibold'>hardware probes</span>, and <span class='font-semibold'>timestamping</span>, you can measure glass-to-glass latency to within a few milliseconds—and optimize your pipeline with confidence.",
                "Key Takeaway: You can’t reduce what you can’t measure. Get measurement right, and latency improvements will follow.",
            ],
        },
    },
    // 12th blog
    {
        id: "edge-encoders-for-rugged-environments",
        breadCrumb: "Edge Encoders for Rugged Environments",
        introData: {
            title:
                "Edge Encoders for Rugged Environments: Thermal, Power & Network Design",
            highlight: "Thermal, Power & Network Design",
            paragraphs: [
                "Edge video encoders are critical for live streaming, surveillance, and industrial video applications. In controlled environments like studios or server rooms, encoders perform reliably. But once deployed in deserts, offshore rigs, mobile vehicles, or disaster zones, they face extreme conditions: <span class='font-semibold'> high temperatures, unstable power, and unreliable networks. </span>",
                "These conditions challenge even high-end broadcast-grade encoders. Streams freeze,frames drop, audio drifts out of sync, and mission-critical video can fail entirely.Designing rugged edge encoders is not just about durability—it’s about <span class='font-semibold'> ensuring continuous, high-quality video under hostile conditions. </span>",
                "In this blog, we explore how engineers solve these challenges with thermal, <a href='https://www.ebytelogic.com/case-study/hdmi-multiview-player' target='_blank' class='text-blue-600 underline'>power</a> , and network strategies, using real-world examples and technologies like <span class='font-semibold'> NVIDIA Jetson, Xilinx Zynq, LiveU cellular bonding, Peplink routers, and Haivision rugged encoders. </span>",
            ],
            button: {
                label: "Explore Edge Encoders",
                link: "/case-study/broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency",
            },
            image: {
                src: EncodersPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle: "Deep Dive:",
        qa: [
            {
                id: 1,
                title: "Why Edge Encoders Need Rugged Design",
                content: [
                    `Off-the-shelf encoders are designed for stable power, controlled temperatures, and reliable networks. In rugged environments, these assumptions fail:`,
                    `<span class='font-semibold'>• Extreme temperatures </span> can exceed 50°C in deserts or drop below -20°C in high-altitude locations. Consumer encoders throttle or shut down under such extremes.`,
                    `<span class='font-semibold'>• Power fluctuations </span> from generators, vehicles, or solar installations corrupt video or force reboots.`,
                    `<span class='font-semibold'>• Unstable networks— </span>cellular, satellite, or mesh—introduce jitter, packet loss, and <a href='https://www.ebytelogic.com/case-study/broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency' target='_blank' class='text-blue-600 underline'>latency</a> spikes.`,
                    `For industries like defense, oil & gas, live sports, and disaster recovery, these failures aren’t minor—they can <span class='font-semibold'> jeopardize safety, operations, or broadcast continuity</span>. Ruggedized edge encoders are designed to function reliably in these conditions, delivering mission-critical video without interruption.`,
                ],
            },
            {
                id: 2,
                title: "Thermal Management: Keeping Encoders Cool",
                content: [
                    `Heat is the number-one killer of electronics. In rugged environments, active cooling (fans) often fails due to dust, vibration, or mechanical wear. Successful designs rely on <span class='font-semibold'> passive and semi-passive thermal solutions: </span>`,
                    `<span class='font-semibold'> 1. Fanless Aluminum Enclosures </span>`,
                    `<span class='ms-6'> a. Extruded aluminum acts as both housing and heatsink.</span>`,
                    `<span class='ms-6'> b. For example, <a href='https://milexia.com/products/wp-content/uploads/sites/7/2022/12/haivision-makito-x4-series-datasheets.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>Haivision Makito X4 Rugged</a> encoders use fully sealed aluminum cases to dissipate heat.</span>`,
                    `<span class='ms-6'> c. Passive cooling eliminates moving parts that fail under dust, sand, or saltwater exposure.</span>`,
                    `<span class='font-semibold'> 2. Heat Pipes & Vapor Chambers </span>`,
                    `<span class='ms-6'> a. High-power SoCs like <a href='https://openzeka.com/en/wp-content/uploads/2023/05/jetson-orin-datasheet-jetson-agx-orin-industrial-web-nv-us-2757128-r2-1.pdf?srsltid=AfmBOopcnbec8s9jZGpH5q47--_LAFgVm5dFDCNHwK5cmCy9kdL6iwRF&utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>NVIDIA Jetson AGX Orin</a> or <span class="font-semibold"> Xilinx Zynq UltraScale+ </span> generate heat that needs efficient transfer.</span>`,
                    `<span class='ms-6'> b. Heat pipes transfer heat from the processor to the enclosure walls, maintaining consistent operating temperatures.</span>`,
                    `<span class='font-semibold'> 3. Conformal Coatings </span>`,
                    `<span class='ms-6'> a. Protect PCBs from moisture, dust, and corrosive salts.</span>`,
                    `<span class='ms-6'> b. Standard IP65–IP67 enclosures combined with conformal coating prevent short circuits and corrosion.</span>`,
                    `<span class='font-semibold'> 4. Thermal Validation </span>`,
                    `<span class='ms-6'> a. HALT/HASS testing ensures encoders survive rapid temperature swings. </span>`,
                    `<span class='ms-6'> b. Real-world deployments often involve prolonged exposure to 55°C+ ambient temperatures or sudden drops to -10°C, which lab tests alone may not capture.</span>`,
                    `<span class='font-semibold'> 5. Sustained Workload Design </span>`,
                    `<span class='ms-6'> a. Avoid relying on SoC thermal throttling for protection—frame rates drop instantly under throttling.</span>`,
                    `<span class='ms-6'> b. Rugged designs maintain high-performance encoding under continuous load, critical for surveillance and live broadcast.</span>`,
                ],
                chartData: {
                    chartTitle: "Cooling System Failure Rates Under Stress",
                    chartType: "bar",
                    rttData: [65, 5],
                    bufferData: [1, 2],
                    data: {
                        labels: ["Fan-based Cooling", "Passive/Fanless Design"],
                        datasets: [
                            {
                                chartType: "bar",
                                bufferData: ["Fan-based Cooling", "Passive/Fanless Design"],
                                rttData: [65, 5],
                                rttLabel: "Failure Rate (%) in Harsh Conditions",
                                barColor: ["#ff6b6bb3", "green"],
                                borderColor: ["#ff6b6bb3", "green"],
                                borderWidth: 1,
                                hoverBarColor: "#ff4d4d",
                                xAxisLabel: "Cooling System Type",
                                yAxisLabel: "Failure Rate (%)",
                                barRadius: 4,
                                barThickness: 80,
                                maxBarThickness: 80,
                                layoutPadding: 20,
                            },
                        ],
                    },
                },
            },
            {
                id: 3,
                title: "Real-World Insight:",
                content: [
                    `In a desert rally deployment, off-the-shelf encoders failed after two hours due to 48°C ambient heat. Switching to <span class='font-semibold'> fanless Makito X4 units with heat pipes </span> solved the issue, allowing uninterrupted 12-hour daily operation.`,
                ],
            },
            {
                id: 4,
                title: "Power Resilience: Surviving Unstable Sources",
                content: [
                    `Power in the field is rarely clean or constant. Encoders must tolerate: voltage dips, spikes, generator transitions, and mobile battery fluctuations. Solutions include:`,
                    `<span class='font-semibold'> 1. Wide Input Voltage Support </span>`,
                    `<span class='ms-6'> a. Devices that accept 9–36V DC or 12–48V industrial input handle vehicles, generators, or solar power.</span>`,
                    `<span class='ms-6'> b. Example: <span class='font-semibold'> NVIDIA Jetson industrial modules </span> paired with DC/DC converters survive brownouts without rebooting.</span>`,
                    `<span class='font-semibold'> 2. Transient Protection </span>`,
                    `<span class='ms-6'> a. Automotive-grade DC/DC converters filter voltage spikes.</span>`,
                    `<span class='ms-6'> b. Reduces the risk of damage from generator or alternator instability.</span>`,
                    `<span class='font-semibold'> 3. Supercapacitors & Hold-Up Circuits </span>`,
                    `<span class='ms-6'> a. Small ride-through buffers (10–30s) prevent stream corruption during short power losses.</span>`,
                    `<span class='ms-6'> b. Allows encoders to complete frames or reconnect gracefully.</span>`,
                    `<span class='font-semibold'> 4. Redundant Power Inputs </span>`,
                    `<span class='ms-6'> a. Dual power inlets or PoE+ backup ensure uninterrupted operation in critical scenarios.</span>`,
                    `<span class='font-semibold'> 5. Adaptive Power Management </span>`,
                    `<span class='ms-6'> a. Encoders can reduce resolution/bitrate under constrained power conditions.</span>`,
                    `<span class='ms-6'> b. Example: Scaling from 4K60 to 1080p30 reduces power draw while maintaining continuous streaming.</span>`,
                ],
            },
            {
                id: 5,
                title: "Case Study:",
                content: [
                    `An offshore oil rig deployed <a href='https://www.liveu.tv/wp-content/uploads/2021/07/LU800-datasheet.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>LiveU LU800</a> encoders. Generators caused frequent voltage fluctuations. By integrating supercapacitors and redundant DC input, the encoders continued streaming uninterrupted during generator phase transitions.`,
                ],
            },
            {
                id: 6,
                title: "Network Reliability: Video Over Unreliable Links",
                content: [
                    `Networks in rugged deployments are rarely LAN-speed. Cellular, satellite, or bonded wireless links introduce jitter, packet loss, and latency. Key strategies:`,
                    `<span class='font-semibold'> 1. Protocol Flexibility </span>`,
                    `<span class='ms-6'> a. Support for SRT, RIST, RTMP, HLS, and MPEG-TS ensures video reaches its destination even if one protocol fails.</span>`,
                    `<span class='ms-6'> b. Adaptive switching between protocols maintains continuous streams.</span>`,
                    `<span class='font-semibold'> 2. Cellular Bonding </span>`,
                    `<span class='ms-6'> a. Combine multiple LTE/5G connections using LiveU, Peplink, or Viprinet bonding.</span>`,
                    `<span class='ms-6'> b. Real-time algorithms redistribute packets dynamically across links to minimize packet loss.</span>`,
                    `<span class='font-semibold'> 3. Error Correction & Resilience </span>`,
                    `<span class='ms-6'> a. Forward Error Correction (FEC) + Automatic Repeat Request (ARQ) protects streams without adding excessive latency.</span>`,
                    `<span class='ms-6'> b. Encoders like Haivision Makito X4 Rugged allow fine-tuning of FEC ratios based on network conditions.</span>`,
                    `<span class='font-semibold'> 4. Jitter Buffers & Sync Maintenance </span>`,
                    `<span class='ms-6'> a. Hardware-assisted buffers smooth out network jitter while maintaining AV sync.</span>`,
                    `<span class='ms-6'> b. Critical for live events where lip-sync errors degrade the viewer experience.</span>`,
                    `<span class='font-semibold'> 5. Adaptive Bitrate Encoding </span>`,
                    `<span class='ms-6'> a. Automatically adjusts video quality to match fluctuating bandwidth.</span>`,
                    `<span class='ms-6'> b. Example: During a drone broadcast over rural LTE, bitrate scaled dynamically from 12Mbps to 4Mbps without dropping frames.</span>`,
                ],
                chartTitle: "The Resilient Streaming Flowchart",
                chartType: "horizontal",
                chart: [
                    {
                        icon: "📡",
                        name: "Multiple Cellular/SAT Links",
                        latency: "LTE / 5G / Satellite",
                    },
                    {
                        icon: "🔄",
                        name: "Cellular Bonding",
                        latency: "Aggregates Bandwidth",
                    },
                    {
                        icon: "🧩",
                        name: "FEC/ARQ Correction",
                        latency: "Recovers Lost Packets",
                    },
                    {
                        icon: "📺",
                        name: "Stable Video Stream",
                        latency: "High-Quality & Reliable",
                    },
                ],
            },
            {
                id: 7,
                title: "Case Insight:",
                content: [
                    `A military deployment using <span class='font-semibold'> bonded LTE and RIST protocols </span> saw packet loss exceed 40% during interference events. Smart FEC and protocol switching reduced visible frame loss by 70%, maintaining usable video for mission-critical operations.`,
                ],
                chartData: {
                    chartType: "doughnut",
                    doughnut: [
                        {
                            title: "Without FEC & ARQ",
                            color: "#f87171",
                            legend: ["Packet Loss", "Stream Data"],
                            values: [40, 60],
                            isHalf: true,
                            description:
                                "High packet loss leads to frozen frames, artifacting, and unusable video stream.",
                        },
                        {
                            title: "With FEC & ARQ Enabled",
                            color: "#22c55e",
                            legend: ["Packet Loss", "Stream Data"],
                            values: [10, 90],
                            isHalf: true,
                            description:
                                "Visible frame loss reduced by over 70%, maintaining mission-critical video usability.",
                        },
                    ],
                },
            },
        ],
        trendsTitle: "Pitfalls and Misconceptions",
        trends: [
            {
                id: 1,
                title: "Over-reliance on fans",
                icon: <FaN className="size-4 text-red-600" />,
                content: [
                    "Fanless designs are more reliable in dusty, sandy, or saltwater conditions.",
                ],
            },
            {
                id: 2,
                title: "Assuming constant power",
                icon: <BiPlug className="size-4 text-green-600" />,
                content: [
                    "Voltage dips and surges are inevitable; systems must include hold-up and redundancy.",
                ],
            },
            {
                id: 3,
                title: "Ignoring protocol agility",
                icon: <BiNetworkChart className="size-4 text-blue-600" />,
                content: [
                    "Bandwidth alone does not prevent jitter; smart error recovery is essential.",
                ],
            },
            {
                id: 4,
                title: "Using consumer connectors",
                icon: <BiLink className="size-4 text-purple-600" />,
                content: [
                    "<a href='https://landandmaritimeapps.dla.mil/Downloads/MilSpec/Docs/MIL-STD-348/std348.pdf' target='_blank' class='text-blue-600 underline'>MIL</a>-spec or M12 connectors prevent loosening under vibration.",
                ],
            },
            {
                id: 5,
                title: "Lab-only testing",
                icon: <BiTestTube className="size-4 text-orange-600" />,
                content: [
                    "Field conditions reveal issues labs can’t predict, from thermal shock to network variability.",
                ],
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the importance of designing rugged edge encoders and how to ensure reliable, high-performance deployments.",
            content: [
                "Designing rugged edge encoders is more than enclosing consumer hardware—it’s a full-system engineering challenge.",
                "Thermal endurance, power stability, and network intelligence are interdependent pillars.",
                "Successful deployments use fanless designs, adaptive power, protocol agility, and bonded connections to ensure continuous, high-quality video streaming.",
                "From defense drones to offshore monitoring, industrial surveillance, and live sports coverage, ruggedized encoders are mission-critical systems, not optional equipment.",
                "Real-world testing, field validation, and modern technologies like <span class='font-semibold'>NVIDIA Jetson</span>, <span class='font-semibold'>Xilinx Zynq</span>, <span class='font-semibold'>Haivision Makito X4</span>, and <span class='font-semibold'>LiveU LU800</span> separate reliable deployments from failures.",
            ],
        },
    },
    // 13th blog
    {
        id: "automated-qa-for-live-video",
        breadCrumb: "Automated QA for Live Video",
        introData: {
            title:
                "Automated QA for Live Video: gst-validate, tracers, and soak tests",
            highlight: "gst-validate, tracers, and soak tests",
            paragraphs: [
                "Live video workflows are complex systems, involving cameras, encoders, decoders, network protocols, and playback endpoints. A small misalignment—dropped frames, out-of-sync audio, or jitter—can cascade into noticeable failures in production. Traditionally, <a href='https://www.ebytelogic.com/services/qa-validation' target='_blank' class='text-blue-600 underline'>QA</a> for live streams relied on manual inspection, post-event analysis, or simple test patterns.",
                "As live media pipelines grow in scale and complexity, manual QA becomes insufficient. Automated QA systems are now essential for ensuring reliability, detecting regressions early, and validating end-to-end performance. Using tools like gst-validate, tracing frameworks, and soak tests, teams can systematically monitor video, catch issues before they reach viewers, and maintain consistent broadcast-grade quality.",
            ],
            button: {
                label: "Explore Automated Qa",
                link: "/case-study",
            },
            image: {
                src: QaPng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle: "Deep Dive:",
        qa: [
            {
                id: 1,
                title: "Why Automated QA Matters",
                content: [
                    `Live video is highly time-sensitive: a frame dropped here, a packet delayed there, and the viewer experience deteriorates. Manual QA faces several limitations:`,
                    `<span class='font-semibold'>• Scalability issues: </span> Watching and logging multiple streams manually is resource-intensive.`,
                    `<span class='font-semibold'>• Human error: </span> Minor sync drift or frame skips can go unnoticed.`,
                    `<span class='font-semibold'>• Delayed feedback: </span> Post-event analysis identifies problems too late to correct them in the same session.`,
                    `Automated QA addresses these problems by <span class='font-semibold'> providing continuous, repeatable, and measurable verification </span> of <a href='https://www.ebytelogic.com/services/multimedia-framework' target='_blank' class='text-blue-600 underline'>video pipelines</a>. This is especially critical in:`,
                    `OTT platforms streaming to thousands of concurrent users.`,
                    `Sports broadcasts where every frame counts for replay accuracy.`,
                    `Media contribution workflows using protocols like <span class='font-semibold'> NDI, SRT, RTP, and RIST.</span>`,
                ],
            },
            {
                id: 2,
                title: "Why Traditional Approaches Fail",
                content: [
                    `Relying solely on human eyeballs or simple synthetic test patterns is insufficient:`,
                    `<span class='font-semibold'>• Subjectivity: </span> Different QA operators interpret issues differently.`,
                    `<span class='font-semibold'>• Limited scope: </span> It’s impossible to observe every frame in high-resolution, multi-stream pipelines.`,
                    `<span class='font-semibold'>• No regression tracking: </span> Changes in pipeline software or codecs can introduce subtle issues that remain undetected until live.`,
                    `<span class='font-semibold'>• Resource-heavy: </span> Manual testing requires extensive personnel and time, increasing operational costs.`,
                    `Automated QA solves these limitations by integrating testing into the development and deployment pipeline.`,
                ],
            },
            {
                id: 3,
                title: "Practical Methods for Automated QA",
                content: [
                    `<span class='font-semibold'> 1. gst-validate Pipelines </span>`,
                    `<span class='ms-5'> a. Part of the <span class='font-semibold'> <a href='https://gstreamer.freedesktop.org/documentation/gst-devtools/gst-validate.html?gi-language=c' target='_blank' class='text-blue-600 underline font-normal'>GStreamer</a> framework </span>, gst-validate automates stream validation by checking: </span>`,
                    `<span class='ms-10'> i. Frame count consistency </span>`,
                    `<span class='ms-10'> ii. Codec compliance </span>`,
                    `<span class='ms-10'> iii. Stream timing and synchronization </span>`,
                    `<span class='ms-5'> b. It can run on multiple pipeline configurations, providing structured logs and JSON reports for regression testing. </span>`,
                    `<span class='ms-5'> c. Example: Running gst-validate across <span class='font-semibold'> NDI → SRT → decoder </span> pipelines can detect dropped frames, packet loss, or timestamp anomalies before production deployment. </span>`,
                    `<span class='font-semibold'> 2. Tracing and Profiling </span>`,
                    `<span class='ms-5'> a. Tools like <span class='font-semibold'> <a href='https://lttng.org/docs/v2.13/?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline font-normal'>LTTng</a> (Linux Trace Toolkit Next Generation) </span> or <span class='font-semibold'> GStreamer’s internal tracers </span> provide deep insights into pipeline behavior. </span>`,
                    `<span class='ms-5'> b. Track buffer flow, element latency, and event propagation. </span>`,
                    `<span class='ms-5'> c. Identify bottlenecks, dropped buffers, or backpressure issues in real time. </span>`,
                    `<span class='ms-5'> d. Tracing is essential for complex multi-protocol pipelines, especially when integrating <span class='font-semibold'> FFmpeg, OpenCV </span>, or custom plugins. </span>`,
                    `<span class='font-semibold'> 3. Soak Tests </span>`,
                    `<span class='ms-5'> a. Soak testing involves running the full pipeline continuously for extended periods (hours or days) to detect: </span>`,
                    `<span class='ms-10'> i. Memory leaks </span>`,
                    `<span class='ms-10'> ii. Resource starvation </span>`,
                    `<span class='ms-10'> iii. Performance degradation </span>`,
                    `<span class='ms-5'> b. Combine soak tests with <span class='font-semibold'> automated alerting </span>, so anomalies trigger warnings without requiring constant human monitoring. </span>`,
                    `<span class='ms-5'> c. Example: Streaming 24/7 using <span class='font-semibold'> GStreamer + gst-validate + SRT/RIST </span> with logging enabled uncovers long-term drift in AV sync, which would otherwise remain invisible in short tests. </span>`,
                    `<span class='font-semibold'> 4. Regression Testing </span>`,
                    `<span class='ms-5'> a. Integrate automated QA into <a href='https://www.accelq.com/blog/ci-cd-pipeline/' target='_blank' class='text-blue-600 underline'>CI/CD pipelines</a> for continuous integration. </span>`,
                    `<span class='ms-5'> b. Run gst-validate scripts whenever a pipeline, codec, or plugin is updated. </span>`,
                    `<span class='ms-5'> c. Detect regressions before they reach production. </span>`,
                ],
            },
            {
                id: 4,
                title: "Tools and Technologies",
                content: [
                    `<span class='font-semibold'>• gst-validate:</span> Core validation framework for GStreamer pipelines.`,
                    `<span class='font-semibold'>• FFmpeg:</span> For decoding, transcoding, and verifying output streams.`,
                    `<span class='font-semibold'>• LTTng:</span> Low-overhead tracing for Linux, capturing pipeline events.`,
                    `<span class='font-semibold'>• GStreamer Tracers:</span> Event logs, buffer timestamps, and latency tracking.`,
                    `<span class='font-semibold'>• Python/Qt scripts:</span> Automate test orchestration and reporting.`,
                    `<span class='font-semibold'>• CI/CD integration:</span> Jenkins, GitLab, or GitHub Actions for regression pipelines.`,
                ],
                chartTitle: "Automated QA in a CI/CD Pipeline",
                chartType: "horizontal",
                chart: [
                    {
                        icon: "💻",
                        name: "Code Push",
                        latency: "Developer commits a change",
                    },
                    {
                        icon: "⚙️",
                        name: "CI/CD Trigger",
                        latency: "Jenkins/GitLab job starts",
                    },
                    {
                        icon: "🔬",
                        name: "gst-validate Tests",
                        latency: "Runs across all pipelines",
                    },
                    {
                        icon: "✔️",
                        name: "Pass / Deploy",
                        latency: "No regressions found",
                    },
                ],
            },
            {
                id: 5,
                title: "Case Insight:",
                content: [
                    `A live OTT platform integrated gst-validate with Jenkins pipelines. Every code push triggered automated tests across SRT, HLS, and RTP pipelines. Issues such as small
timestamp drift, previously caught only after live events, were automatically flagged and corrected.`,
                ],
                chartData: {
                    chartTitle: "Catching Milliseconds of Drift",
                    chartType: "line",
                    data: {
                        labels: [
                            "0 hr",
                            "2 hr",
                            "4 hr",
                            "6 hr",
                            "8 hr",
                            "10 hr",
                            "12 hr",
                            "14 hr",
                            "16 hr",
                            "18 hr",
                            "20 hr",
                            "22 hr",
                            "24 hr",
                        ],
                        datasets: [
                            {
                                label: "A/V Sync Drift (No QA)",
                                data: [0, 10, 15, 20, 25, 35, 45, 55, 65, 85, 100, 110, 120],
                                borderColor: "#e74c3c",
                                backgroundColor: "rgba(231, 76, 60, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                            {
                                label: "A/V Sync Stable (With QA)",
                                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                                borderColor: "#2ecc71",
                                backgroundColor: "rgba(46, 204, 113, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                            {
                                label: "Acceptable Drift Threshold",
                                data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                                borderColor: "#f39c12",
                                backgroundColor: "rgba(241, 196, 15, 0.2)",
                                fill: false,
                                borderDash: [5, 5],
                            },
                        ],
                    },
                },
            },
        ],
        trendsTitle: "Common Pitfalls to Avoid",
        trends: [
            {
                id: 1,
                title: "Relying on synthetic streams alone",
                icon: <BiError className="size-4 text-red-600" />,
                content: [
                    "Test with real camera feeds and live network conditions to catch real-world issues.",
                ],
            },
            {
                id: 2,
                title: "Ignoring protocol edge cases",
                icon: <BiCodeAlt className="size-4 text-orange-600" />,
                content: [
                    "Automated QA must include low-bitrate, high-latency, and packet-loss scenarios.",
                ],
            },
            {
                id: 3,
                title: "Not monitoring resource usage",
                icon: <BiChip className="size-4 text-green-600" />,
                content: [
                    "CPU, GPU, and memory leaks often cause long-term failures in continuous pipelines.",
                ],
            },
            {
                id: 4,
                title: "Skipping AV sync checks",
                icon: <BsOpticalAudio className="size-4 text-blue-600" />,
                content: [
                    "Even minor audio drift can break broadcast compliance. Tools must measure lip-sync over time.",
                ],
            },
            {
                id: 5,
                title: "Neglecting alerting and reporting",
                icon: <BiBell className="size-4 text-purple-600" />,
                content: [
                    "Automated QA only works if anomalies are logged, visualized, and actionable.",
                ],
            },
        ],
        scenariosTitle: "Real-World Postmortem",
        scenarios: [
            {
                id: 1,
                category: "Sports Broadcast Pipeline",
                items: [
                    "<span class='font-semibold'>A European broadcaster experienced frame drops</span> during multi-camera football broadcasts.",
                    "<span class='font-semibold'>By deploying gst-validate with tracers across NDI and SRT pipelines</span>, they identified buffer backpressure in a custom plugin.",
                    "<span class='font-semibold'>Soak testing over multiple 4-hour matches ensured the fix held across all conditions.</span>",
                ],
                type: "flip",
                img: BroadcastPipelinePng,
            },
            {
                id: 2,
                category: "OTT Platform",
                items: [
                    "<span class='font-semibold'>A streaming platform for live concerts saw intermittent AV sync drift</span> after scaling to multiple ingest nodes.",
                    "<span class='font-semibold'>Regression tests using gst-validate + LTTng detected the drift early</span>, allowing engineers to correct timestamp propagation in FFmpeg-based transcoders.",
                ],
                type: "flip",
                img: OttPng,
            },
            {
                id: 3,
                category: "Surveillance Deployment",
                items: [
                    "<span class='font-semibold'>Long-term soak testing on 24/7 camera feeds revealed memory leaks</span> in a GStreamer plugin used for object detection.",
                    "<span class='font-semibold'>Fixing it prevented repeated crashes</span> in remote edge encoders.",
                ],
                type: "flip",
                img: DeploymentPng,
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the importance of automated QA in live video workflows and how it ensures reliability and performance.",
            content: [
                "Automated QA is no longer optional for live video workflows.",
                "Tools like <span class='font-semibold'>gst-validate</span>, tracing frameworks, and soak tests provide scalable, repeatable, and objective verification of complex video pipelines.",
                "By integrating these methods into <span class='font-semibold'>CI/CD pipelines</span>, broadcasters, OTT platforms, and surveillance operators can catch errors before they affect viewers, maintain AV sync, and ensure robust performance over time.",
                "For modern live media, automated QA is the backbone of reliability, reducing human error, minimizing downtime, and enabling high-quality streams at scale.",
            ],
        },
    },
    // 14th blog
    {
        id: "secure-streaming",
        breadCrumb: "Secure Streaming",
        introData: {
            title: "Secure Streaming: Hardening SRT, SRTP, TLS & Key Management",
            highlight: "SRT, SRTP, TLS & Key Management",
            paragraphs: [
                "As live streaming becomes ubiquitous across broadcasting, OTT, and enterprise deployments, security has become as critical as latency and quality. From sports events to remote surveillance and enterprise webinars, unauthorized access, tampering, or interception of streams can compromise both content and operations.",
                "Traditional media pipelines often leave vulnerabilities: unencrypted streams, weak authentication, or poorly managed keys. These gaps can result in IP theft, privacy breaches, or regulatory non-compliance.",
                "Securing live streams involves a <span class='font-semibold'> layered approach: </span> encrypting media at the transport layer, authenticating endpoints, and implementing robust key management. Protocols like <span class='font-semibold'> SRT, SRTP, TLS, </span> combined with centralized or automated key management, provide the tools necessary to deliver secure, low-latency video. This blog explores best practices for hardening streaming pipelines and shares lessons from real deployments.",
            ],
            button: {
                label: "Explore Secure Streaming",
                link: "/case-study/multi-platform-driver-development-uBoot-customization",
            },
            image: {
                src: SecurePng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle: "Deep Dive:",
        qa: [
            {
                id: 1,
                title: "Why Secure Streaming Matters",
                content: [
                    `Live video is increasingly a <span class='font-semibold'> high-value asset.</span> Consider these risks:`,
                    `<span class='font-semibold'>• Content theft: </span> Premium sports, live concerts, and proprietary training content can be intercepted and redistributed.`,
                    `<span class='font-semibold'>• Operational compromise: </span> Surveillance or industrial streams, if intercepted, can expose sensitive locations or processes.`,
                    `<span class='font-semibold'>• Regulatory compliance: </span> GDPR, HIPAA, and other regulations require certain streams to be encrypted and access-controlled.`,
                    `In addition to protecting content, secure streaming safeguards <span class='font-semibold'> viewer trust and service integrity,</span> ensuring that streams cannot be hijacked or modified mid-transmission.`,
                ],
            },
            {
                id: 2,
                title: "Why Traditional Approaches Fail",
                content: [
                    `Many legacy pipelines rely on unencrypted RTP or RTMP streams with simple password authentication. This approach fails due to:`,
                    `<span class='font-semibold'>• Cleartext transmission: Anyone on the network can sniff or record streams.</span>`,
                    `<span class='font-semibold'>• Weak or static keys: Hardcoded keys or passwords are vulnerable to theft.</span>`,
                    `<span class='font-semibold'>• Inadequate endpoint authentication: Stream servers often accept connections without verification, opening doors to man-in-the-middle attacks.</span>`,
                    `<span class='font-semibold'>• Latency vs security trade-offs: Some teams disable encryption to reduce latency, compromising security.</span>`,
                    `To achieve <span class='font-semibold'> secure, low-latency streaming,</span> these limitations must be addressed holistically.`,
                ],
            },
            {
                id: 3,
                title: "Practical Methods for Hardening Streaming",
                content: [
                    `<span class='font-semibold'> 1. <a href='https://www.haivision.com/blog/all/srt-everything-you-need-to-know-about-the-secure-reliable-transport-protocol/?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>SRT</a> Encryption and Authentication </span>`,
                    `<span class='ms-5'>a. <span class='font-semibold'> Secure Reliable Transport (SRT) </span> supports AES encryption (128-bit or 256-bit) and optional authentication. </span>`,
                    `<span class='ms-5'> b.<span class='font-semibold'> Best practices:</span> </span>`,
                    `<span class='ms-10'> i. Use dynamic key rotation instead of static pre-shared keys. </span>`,
                    `<span class='ms-10'> ii. Enable packet authentication to prevent tampering. </span>`,
                    `<span class='ms-10'> iii. Combine with firewall rules and VPNs for additional network security. </span>`,
                    `<span class='ms-5'> c. Example: <span class='font-semibold'> Haivision Makito X4 </span> supports AES-256 encryption with rolling key updates for live sports broadcasts. </span>`,
                    `<span class='font-semibold'> 2. SRTP for Media Payload </span>`,
                    `<span class='ms-5'> a. <span class='font-semibold'> Secure RTP (SRTP) </span> encrypts RTP streams at the media payload level.`,
                    `<span class='ms-5'> b. Typically combined with <span class='font-semibold'> SDES or DTLS </span> for key negotiation. </span>`,
                    `<span class='ms-5'> c. c. Protects against packet sniffing and ensures content confidentiality in multi-party streaming. </span>`,
                    `<span class='ms-5'> d. Used in <span class='font-semibold'> WebRTC, SIP-based video conferencing, and broadcast contribution workflows </span></span>`,
                    `<span class='font-semibold'> 3. TLS for Control Channels </span>`,
                    `<span class='ms-5'> a. <a href='https://www.digicert.com/content/dam/digicert/pdfs/guide/tls-best-practices-guide-en.pdf?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>TLS</a> secures control and signaling channels (e.g., HTTP, WebSocket, RTMP over TLS). </span>`,
                    `<span class='ms-5'> b. Ensures that authentication credentials and session information cannot be intercepted. </span>`,
                    `<span class='ms-5'> c. Recommended for endpoints managing stream start/stop commands or playlist delivery. </span>`,
                    `<span class='font-semibold'> 4. Key Management Best Practices </span>`,
                    `<span class='ms-5'> a. <span class='font-semibold'> Centralized key distribution: </span> Tools like <span class='font-semibold'> HashiCorp Vault, <a href='https://docs.aws.amazon.com/kms/latest/developerguide/overview.html?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline font-normal'>AWS KMS</a>, or custom HSM solutions </span> can rotate and distribute keys securely. </span>`,
                    `<span class='ms-5'> b. <span class='font-semibold'> Ephemeral keys: </span> Reduce exposure by using short-lived session keys. </span>`,
                    `<span class='ms-5'> c. <span class='font-semibold'> Access control: </span> Limit key access to authorized servers or encoders only. </span>`,
                    `<span class='ms-5'> d. Example: A live concert platform using <span class='font-semibold'> AWS KMS + SRT AES-256 </span> rotated keys every 15 minutes to prevent unauthorized access. </span>`,
                    `<span class='font-semibold'> 5. Endpoint Hardening </span>`,
                    `<span class='ms-5'> a. Disable unused services on encoders and decoders. </span>`,
                    `<span class='ms-5'> b. Apply OS-level security patches and firmware updates. </span>`,
                    `<span class='ms-5'> c. Use certificate-based mutual authentication to validate endpoints. </span>`,
                ],
                chartTitle: "A Layered Approach to Stream Security",
                chartType: "horizontal",
                chart: [
                    {
                        icon: "🛡️",
                        name: "1. Endpoint Hardening",
                        latency: "Mutual certs, OS patches, disabled unused services.",
                    },
                    {
                        icon: "🔒",
                        name: "2. Transport Encryption",
                        latency: "SRT (AES-256) or SRTP for media payload.",
                    },
                    {
                        icon: "🔑",
                        name: "3. Control Channel Security",
                        latency: "TLS 1.3 to protect signaling and session commands.",
                    },
                    {
                        icon: "🔄",
                        name: "4. Key Management",
                        latency: "Centralized KMS/Vault for dynamic key rotation.",
                    },
                ],
            },
            {
                id: 4,
                title: "Tools and Technologies",
                content: [
                    `<span class='font-semibold'>• SRT Library / Haivision SRT Encoders:</span> AES encryption, authentication, and dynamic key rotation.`,
                    `<span class='font-semibold'>• SRTP / WebRTC stacks:</span> Open-source SRTP libraries for low-latency encrypted streaming.`,
                    `<span class='font-semibold'>• TLS / OpenSSL:</span> Secure signaling channels and certificate-based authentication.`,
                    `<span class='font-semibold'>• Key Management Services:</span> AWS KMS, HashiCorp Vault, <a href='https://en.wikipedia.org/wiki/Hardware_security_module?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>HSM</a> appliances.`,
                    `<span class='font-semibold'>• Monitoring Tools:</span> Wireshark with decryption keys for QA, intrusion detection systems for network monitoring.`,
                ],
                chartData: {
                    chartType: "doughnut",
                    doughnut: [
                        {
                            title: "Key Issue & Activation",
                            color: "#60a5fa",
                            legend: ["Key Issued", "Key Active"],
                            values: [10, 20],
                        },
                        {
                            title: "Rotation Process",
                            color: "#fbbf24",
                            legend: ["Rotate (Grace Start)", "Rotation Complete"],
                            values: [15, 15],
                        },
                        {
                            title: "Revocation & Expiry",
                            color: "#f87171",
                            legend: ["Revoke Old Key", "Expire Session"],
                            values: [20, 20],
                        },
                    ],
                },
            },
            {
                id: 5,
                title: "Case Insight:",
                content: [
                    `A remote medical consultation platform deployed <span class='font-semibold'> SRT AES-256 encryption with Vault-managed key rotation.</span> During initial testing, attempts to intercept streams using network sniffers failed because the keys rotated every 10 minutes and packets were authenticated.`,
                ],
                chartData: {
                    chartTitle: "Static vs. Dynamic Key Vulnerability",
                    chartType: "bar",
                    data: {
                        labels: ["Static Pre-Shared Key", "Dynamic Keys (15-min Rotation)"],
                        datasets: [
                            {
                                chartType: "bar",
                                rttData: [100, 10],
                                bufferData: [1, 1],
                                rttLabel: "Exposure Window (Hours) - Log Scale",
                                barColor: "#e74c3c",
                                borderColor: "#e74c3c",
                                borderWidth: 1,
                                hoverBarColor: "#c0392b",
                                xAxisLabel: "Key Type",
                                yAxisLabel: "Exposure Window (Hours) - Log Scale",
                                barRadius: 4,
                                barThickness: 50,
                                maxBarThickness: 50,
                                layoutPadding: 20,
                            },
                        ],
                    },
                },
            },
        ],
        trendsTitle: "Common Pitfalls to Avoid",
        trends: [
            {
                id: 1,
                title: "Static or hardcoded keys",
                icon: <BiLock className="size-4 text-red-600" />,
                content: ["Rotate keys frequently."],
            },
            {
                id: 2,
                title: "Ignoring control channels",
                icon: <BiLockAlt className="size-4 text-orange-600" />,
                content: ["TLS or <a href='https://www.ebytelogic.com/services/iot-integration' target='_blank' class='text-blue-600 underline'>HTTPS</a> is needed to secure commands and metadata."],
            },
            {
                id: 3,
                title: "Sacrificing latency for encryption",
                icon: <BiTimer className="size-4 text-green-600" />,
                content: ["Optimize hardware-accelerated AES or <a href='https://www.ebytelogic.com/case-study' target='_blank' class='text-blue-600 underline'>SRTP pipelines</a>."],
            },
            {
                id: 4,
                title: "Incomplete endpoint authentication",
                icon: <BiShield className="size-4 text-blue-600" />,
                content: ["Use mutual certificates, not just passwords."],
            },
            {
                id: 5,
                title: "Failing to test decryption at scale",
                icon: <BiTestTube className="size-4 text-purple-600" />,
                content: [
                    "Always validate encryption under full load and network jitter.",
                ],
            },
        ],
        scenariosTitle: "Real-World Postmortem",
        scenarios: [
            {
                id: 1,
                category: "Live Sports Broadcast",
                items: [
                    "Initial deployment of an SRT-based workflow used static AES keys. A penetration test revealed that a rogue endpoint could intercept streams.",
                    "Switching to <span class='font-semibold'> dynamic key rotation via HashiCorp Vault </span> mitigated the risk while maintaining sub-200ms latency.",
                ],
                type: "flip",
                img: LiveSportsPng,
            },
            {
                id: 2,
                category: "Enterprise Surveillance",
                items: [
                    "<a href='https://en.wikipedia.org/wiki/Secure_Real-time_Transport_Protocol?utm_source=chatgpt.com' target='_blank' class='text-blue-600 underline'>SRTP</a> streams in a multi-office setup initially had SDES key negotiation with long-lived keys.",
                    "By implementing <span class='font-semibold'> DTLS-SRTP with ephemeral keys, </span> the operator ensured that intercepted keys would expire within minutes, securing sensitive video feeds.",
                ],
                type: "flip",
                img: EnterprisePng,
            },
            {
                id: 3,
                category: "OTT Music Concerts",
                items: [
                    "TLS was disabled on control channels to reduce latency. A targeted man-in-the-middle simulation exposed session hijacking vulnerability.",
                    "Adding <span class='font-semibold'> TLS 1.3 with mutual authentication </span> secured stream start/stop commands without measurable latency impact.",
                ],
                type: "flip",
                img: OttMusicPng,
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the importance of secure streaming for protecting content, compliance, and operational integrity without sacrificing latency or quality.",
            content: [
                "Secure streaming is no longer optional—it’s essential for protecting content, compliance, and operational integrity.",
                "By implementing <span class='font-semibold'>SRT or SRTP encryption</span>, <span class='font-semibold'>TLS for control</span>, robust key management, and endpoint hardening, organizations can deliver low-latency, secure video streams across any network.",
                "The key takeaways:",
                "<span class='font-semibold'>Encrypt the media payload (SRTP or SRT AES).</span>",
                "<span class='font-semibold'>Protect signaling and control (TLS).</span>",
                "<span class='font-semibold'>Rotate keys regularly with a trusted KMS or HSM.</span>",
                "<span class='font-semibold'>Validate endpoints with certificate-based authentication.</span>",
                "<span class='font-semibold'>Test security under realistic load and network conditions.</span>",
                "With these measures, broadcasters, OTT providers, and enterprises can confidently deploy streams knowing they are secure without compromising latency or quality.",
            ],
        },
    },
    // 15th blog
    {
        id: "hardware-accelerated-transcoding-on-jetson-i.MX",
        breadCrumb: "Hardware-Accelerated Transcoding on Jetson & i.MX",
        introData: {
            title:
                "Hardware-Accelerated Transcoding on Jetson & i.MX: What Actually Matters",
            highlight: "What Actually Matters",
            paragraphs: [
                "Transcoding—converting video from one format, resolution, or bitrate to another—is a cornerstone of modern live streaming, OTT delivery, and industrial video pipelines. Traditionally, transcoding was done entirely in software on CPUs, consuming significant processing power and introducing latency.",
                "With edge and <a href='https://www.ebytelogic.com/services/embedded-software' target='_blank' class='text-blue-600 underline'>embedded devices</a>, <span class='font-semibold'>hardware-accelerated transcoding</span> using GPUs, NPUs, or dedicated media engines has become critical for achieving <span class='font-semibold'>high-quality, low-latency video</span> without excessive power draw. Platforms like <span class='font-semibold'>NVIDIA Jetson</span> (Nano, Xavier, Orin) and <span class='font-semibold'>NXP i.MX 9/8 series</span> offer integrated accelerators (NVENC/NVDEC, VPU/ISP) optimized for H.264, H.265, and AV1.",
                "In this blog, we examine what actually matters when designing hardware-accelerated transcoding pipelines: choosing the right codec, optimizing hardware resources, managing latency, and validating performance. Real-world examples and deployments are included to guide engineers in <span class='font-semibold'>maximizing throughput without compromising quality or reliability.</span>",
            ],
            button: {
                label: "Explore Jetson & i.MX",
                link: "/case-study/hdmi-multiview-player",
            },
            image: {
                src: HardwarePng,
                alt: "Buildroot vs Yocto for Video Devices",
            },
        },
        qaTitle: "Deep Dive:",
        qa: [
            {
                id: 1,
                title: "Why Hardware-Accelerated Transcoding Matters",
                content: [
                    `Software-only transcoding is CPU-bound, power-hungry, and often infeasible for real-time multi-stream pipelines on edge devices. <a href='https://www.ebytelogic.com/case-study' target='_blank' class='text-blue-600 underline'>Hardware</a> acceleration offers:`,
                    `<span class='font-semibold'>• Low-latency encoding/decoding : </span> Critical for live sports, drone feeds, and
industrial monitoring.`,
                    `<span class='font-semibold'>• Power efficiency: </span> GPU/ASIC offload reduces CPU utilization, extending battery
life on mobile or remote devices.`,
                    `<span class='font-semibold'>• Multi-stream capability : </span> Enables simultaneous transcoding of multiple feeds on
a single device.`,
                    `<span class='font-semibold'>• Deterministic performance: </span> Predictable throughput is essential for
synchronized multi-camera deployments.`,
                ],
            },
            {
                id: 2,
                title: "Industries benefiting from hardware-accelerated transcoding include:",
                content: [
                    `<span class='font-semibold'>• Media & Broadcasting: </span> Live events, OTT platforms, multi-camera sports feeds.`,
                    `<span class='font-semibold'>• Industrial IoT : </span> Real-time monitoring from factory floors, autonomous vehicles, or
drones.`,
                    `<span class='font-semibold'>• Defense & Public Safety : </span> Live feeds from mobile command units or UAVs.`,
                ],
            },
            {
                id: 3,
                title: "Why Traditional Approaches Fail",
                content: [
                    `Many engineers attempt low-latency video pipelines on CPUs alone, often
encountering:`,
                    `<span class='font-semibold'>• High power consumption: </span> Multi-core CPUs can easily exceed thermal limits on
embedded devices.`,
                    `<span class='font-semibold'>• Limited throughput:  </span> CPU-based transcoding struggles with high-resolution
(4K/8K) streams or multiple simultaneous streams.`,
                    `<span class='font-semibold'>• Excessive latency : </span> Frames are delayed by software decoding, filtering, and
encoding pipelines.`,
                    `<span class='font-semibold'>• Suboptimal codec usage: </span> Failing to leverage hardware-supported codecs
results in lower efficiency.`,
                    `Embedded platforms without hardware acceleration often cannot meet <span class='font-semibold'> real-time
constraints,</span> leading to dropped frames or unwatchable streams.`
                ],
            },
            {
                id: 4,
                title: "Practical Methods for Hardware-Accelerated Transcoding",
                content: [
                    `<span class='font-semibold'> 1. Choosing the Right Codec </span>`,
                    `<span class='ms-5'> a. Leverage hardware-supported codecs for low latency: </span>`,
                    `<span class='ms-10'> i. <a href='https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/index.html' target='_blank' class='text-blue-600 underline'>NVIDIA Jetson</a> : <span class="font-semibold">H.264, H.265 (HEVC), VP8/VP9, AV1 (on Orin)</span> </span>`,
                    `<span class='ms-10'> ii. <a href='https://www.nxp.com/docs/en/reference-manual/RM00294.pdf' target='_blank' class='text-blue-600 underline'>NXP i.MX</a>: <span class="font-semibold">H.264, H.265, VP8, VP9</span> </span>`,
                    `<span class='ms-5'> b. Avoid software fallback when possible; CPU-based encoding should be a
last resort. </span>`,
                    `<span class='ms-5'> c. Select codec profiles and GOP structures optimized for streaming vs
storage.</span>`,
                    `<span class='font-semibold'> 2. Optimizing Pipeline for NVENC/NVDEC (Jetson) </span>`,
                    `<span class='ms-5'> a. NVENC: GPU-based encoder, supports multiple concurrent sessions.</span>`,
                    `<span class='ms-5'> b. NVDEC: Hardware decoder offload for high-resolution streams. </span>`,
                    `<span class='ms-5'> c. Use <span class="font-semibold">GStreamer plugins (nvenc, nvdec) or <a href='https://ffmpeg.org/ffmpeg-codecs.html' target='_blank' class='text-blue-600 underline'>FFmpeg</a> with hardware
acceleration flags</span>.</span>`,
                    `<span class='ms-5'> d. Manage buffer sizes to reduce latency while avoiding underflow/overflow.</span>`,
                    `<span class='font-semibold'> 3. Optimizing VPU/ISP Pipelines</span> (i.MX) </span>`,
                    `<span class='ms-5'> a. i.MX platforms include <span class="font-semibold">Vivante VPUs or ISP pipelines</span> for efficient video processing. </span>`,
                    `<span class='ms-5'> b. Hardware filters: color space conversion, scaling, rotation, and cropping. </span>`,
                    `<span class='ms-5'> c. Combine VPU pipelines with DMA memory transfer to minimize CPU intervention. </span>`,
                    `<span class='font-semibold'> 4. Parallel Stream Management </span>`,
                    `<span class='ms-5'> a. Deploy multiple encoding sessions on a single SoC using separate hardware encoders/decoders. </span>`,
                    `<span class='ms-5'> b. Monitor GPU load to prevent oversubscription; use tools like <span class="font-semibold">tegrastats (Jetson) or i.MX performance counters</span>.</span>`,
                    `<span class='font-semibold'> 5. Latency Reduction Techniques </span>`,
                    `<span class='ms-5'> a. Minimize frame buffering in software pipelines. </span>`,
                    `<span class='ms-5'> b. Use zero-copy buffer transfers when moving data between decoder,filters, and encoder. </span>`,
                    `<span class='ms-5'> c. Align hardware encoding batch sizes with network packetization (e.g.,SRT/RIST chunks). </span>`,
                    `<span class='font-semibold'> 6. Monitoring and Validation </span>`,
                    `<span class='ms-5'> a. Measure <span class="font-semibold">end-to-end latency, AV sync, frame drops</span>. </span>`,
                    `<span class='ms-5'> b. Compare hardware vs software encoding outputs for visual artifacts. </span>`,
                    `<span class='ms-5'> c. Stress-test pipelines with multi-resolution and variable bitrate streams. </span>`,
                ],
            },
            {
                id: 4,
                title: "Tools and Technologies",
                content: [
                    `<span class='font-semibold'>• NVIDIA Jetson Platforms (Nano, Xavier, Orin):</span> NVENC/NVDEC hardware
encoders/decoders, integrated GPU.`,
                    `<span class='font-semibold'>• NXP i.MX 9/8 Series:</span> VPUs and ISPs for efficient transcoding and
preprocessing.`,
                    `<span class='font-semibold'>• GStreamer Plugins:</span> nvenc, nvdec, v4l2, imxvpudec/enc.`,
                    `<span class='font-semibold'>• FFmpeg Hardware Flags:</span> -hwaccel nvdec, -c:v h264_nvenc, -c:v
h265_v4l2m2m.`,
                    `<span class='font-semibold'>• Monitoring Tools:</span> tegrastats for Jetson, perf counters for i.MX, gst-debug logs.`,
                ],
            },
            {
                id: 5,
                title: "Case Insight:",
                content: [
                    `A drone surveillance platform deployed Jetson Orin for 4K30 streams to an SRT
gateway. Using <a href='https://developer.nvidia.com/nvidia-video-codec-sdk' target='_blank' class='text-blue-600 underline'>NVENC</a> for H.265 and zero-copy GStreamer buffers, the system
achieved sub-200ms latency with 4 simultaneous streams while keeping power under
35W.`,
                ],
            },
        ],
        trendsTitle: "Common Pitfalls to Avoid",
        trends: [
            {
                id: 1,
                title: "Ignoring SoC resource limits",
                icon: <BiError className="size-4 text-red-600" />,
                content: [
                    "Oversubscription of NVENC/NVDEC or VPU leads to dropped frames.",
                ],
            },
            {
                id: 2,
                title: "Failing to enable zero-copy or DMA buffers",
                icon: <BiChip className="size-4 text-orange-600" />,
                content: ["Causes unnecessary CPU overhead."],
            },
            {
                id: 3,
                title: "Using unsupported codec profiles",
                icon: <BiVideoOff className="size-4 text-yellow-600" />,
                content: ["Hardware fallback to software reduces throughput."],
            },
            {
                id: 4,
                title: "Neglecting temperature and thermal throttling",
                icon: <BiSolidThermometer className="size-4 text-blue-600" />,
                content: [
                    "Jetson GPUs and i.MX VPUs throttle under high load if not properly cooled.",
                ],
            },
            {
                id: 5,
                title: "Skipping real-world validation",
                icon: <BiTestTube className="size-4 text-purple-600" />,
                content: [
                    "Lab testing often misses field conditions such as high ambient temperatures, variable network, or multiple simultaneous streams.",
                ],
            },
        ],
        scenariosTitle: "Real-World Postmortem",
        scenarios: [
            {
                id: 1,
                category: "OTT Multi-Camera Studio",
                items: [
                    "Jetson Xavier NX units handled 1080p60 multi-camera feeds. Software encoding failed to maintain real-time frame rates.",
                    "Switching to <span class='font-semibold'>NVENC H.265 with zero-copy GStreamer pipeline</span> reduced CPU usage by 70% and dropped frames by less than 0.5%",
                ],
                type: "flip",
                img: OttMultiPng,
            },
            {
                id: 2,
                category: "Industrial Drone Monitoring",
                items: [
                    "i.MX 9-based drones were initially encoding H.264 in software, causing battery drain and overheating.",
                    "Migrating to <span class='font-semibold'>i.MX VPU hardware acceleration</span> halved CPU utilization and extended flight time by 30%.",
                ],
                type: "flip",
                img: DronePng,
            },
            {
                id: 3,
                category: "Remote Sports Broadcast",
                items: [
                    "A multi-stream SRT pipeline using Jetson Orin for 4K streams saw suboptimal AV sync.",
                    "After tuning <span class='font-semibold'>buffer sizes and pipeline alignment</span>, end-to-end latency dropped from 500ms to 180ms with stable lip-sync.",
                ],
                type: "flip",
                img: RemotePng,
            },
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Wrap-up",
            description:
                "Summarizing the importance of hardware-accelerated transcoding for achieving low-latency, high-quality, and efficient video processing on embedded platforms like Jetson and i.MX.",
            content: [
                "Hardware-accelerated transcoding on Jetson and i.MX platforms is a game-changer for edge and embedded video pipelines.",
                "Success depends not just on offloading encoding to hardware but optimizing pipelines, buffer management, codec selection, and thermal/performance considerations.",
                "Key takeaways:",
                "<span class='font-semibold'>Always leverage hardware-supported codecs to minimize CPU load.</span>",
                "<span class='font-semibold'>Optimize buffer management and zero-copy transfers.</span>",
                "<span class='font-semibold'>Monitor GPU/VPU utilization to prevent oversubscription and thermal throttling.</span>",
                "<span class='font-semibold'>Validate end-to-end latency and AV sync in real-world scenarios.</span>",
                "<span class='font-semibold'>Combine multiple streams efficiently without compromising power or performance.</span>",
                "With these practices, engineers can achieve low-latency, multi-stream, high-quality video processing on compact embedded devices—unlocking the full potential of edge deployments.",
            ],
        },
    },
];

type QAItem = {
    id: number;
    title: string;
    content?: string[];
    chartTitle?: string;
    chartType?: string;
    chart?: any;
    chartData?: any;
    chartData1?: any;
    beforeAfter?: any;
    flowchart?: any;
    conversionFlowchart?: any;
    image?: StaticImageData;
    imageFlowchart?: string;
    workflowComparison?: any;
    codeTerminal?: any;
    table?: {
        header: string[];
        rows: Record<string, string>[];
    };
};
type QASection = {
    qaTitle: string;
    qa: QAItem[];
};

// used for doughnut
export const DoughnutChart = ({ data, className }: any) => {
    console.log(data);
    return (
        <section id="doughnut" className="my-8 md:my-16">
            <div className={`${className}`}>
                {data?.map((item, index) => {
                    const colors = generateShades(item?.color, item?.legend?.length);
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
                        >
                            <h3
                                className="text-lg sm:text-xl font-bold text-center mb-4"
                                style={{ color: item.color }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-sm md:text-base trext-gray-600">
                                {item?.description}
                            </p>
                            <div className="relative size-[100px] md:size-[200px] mb-4">
                                <Doughnut
                                    data={{
                                        labels: item.legend,
                                        datasets: [
                                            {
                                                data: item.values, // <-- array of numbers (one per legend label)
                                                backgroundColor: colors,
                                                borderWidth: 2,
                                                borderColor: "#fff",
                                            },
                                        ],
                                    }}
                                    options={{
                                        cutout: "70%",
                                        rotation: item?.isHalf ? -90 : 0,
                                        circumference: item?.isHalf ? 180 : 360,
                                        plugins: {
                                            legend: { display: false },
                                        },
                                    }}
                                />
                            </div>

                            <ul className="space-y-1 mt-2 text-sm text-gray-600">
                                {item?.legend?.map((label, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span
                                            className="w-4 h-4 inline-block rounded"
                                            style={{ backgroundColor: colors[i] }}
                                        />
                                        {label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
function generateShades(baseColor: string, count: number): string[] {
    const shades: string[] = [];
    for (let i = 0; i < count; i++) {
        const alpha = 1 - i * 0.2;
        shades.push(hexToRGBA(baseColor, alpha));
    }
    return shades;
}
function hexToRGBA(hex, alpha = 1) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
//used for radar
export const radarOptions = {
    responsive: true,
    scale: {
        angleLines: {
            display: true,
        },
        suggestedMin: 0,
        suggestedMax: 10,
    },
    plugins: {
        legend: {
            position: "top" as const,
        },
    },
};
const BlogsInfo = () => {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    //for bar chart responisve
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on load

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = blogsData?.find((item, idx) => {
        if (item?.id === id) {
            return item;
        }
    });
    const fadeInUp = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    };

    return (
        <div className="max-w-[1400px] mx-auto sm:px-6 py-16">
            {/* breadCrumbs */}
            <p className="text-sm flex flex-wrap items-center gap-2 justify-center pb-4 md:pb-15">
                <Link href="/" className="text-primary">
                    Home
                </Link>
                <RiArrowRightSLine className="text-primary text-xl" />
                <Link href="/blogs" className="text-primary">
                    Blogs
                </Link>
                <RiArrowRightSLine className="text-primary text-xl" />
                <span className="text-slate-500">{data?.breadCrumb}</span>
            </p>
            {/* intro */}
            {data?.introData && (
                <section
                    id="introduction"
                    className="py-8 md:py-16 px-5 md:px-10 bg-white"
                >
                    <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
                                {data?.introData?.title.split(data?.introData?.highlight)[0]}
                                <span className="text-[#3078fb]">
                                    {data?.introData?.highlight}
                                </span>
                            </h2>
                            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-6">
                                {data?.introData?.subtitle}
                            </p>
                            {data?.introData?.paragraphs.map((para, idx) => (
                                <p
                                    key={idx}
                                    className="text-gray-700 leading-relaxed mb-5 text-sm"
                                    dangerouslySetInnerHTML={{ __html: para }}
                                />
                            ))}
                            <Button
                                onClick={() =>
                                    router.push(data?.introData?.button?.link || "/")
                                }
                                className="sm:h-12 w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white"
                            >
                                {data?.introData?.button?.label}
                            </Button>
                        </div>
                        <div>
                            {data?.introData?.image?.src && (
                                <Image
                                    src={data.introData.image.src}
                                    alt={data.introData.image.alt || "Image"}
                                    width={300}
                                    height={300}
                                    className="w-full max-w-lg xl:ms-auto rounded-lg shadow-md"
                                />
                            )}
                        </div>
                    </div>
                </section>
            )}
            {/* qa */}
            <section id="qa" className="py-16 md:px-10">
                {data?.qa && data?.qa?.length > 0 && (
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-12 text-center tracking-wide">
                            {data?.qaTitle}
                        </h1>
                        <div className="space-y-14">
                            {data?.qa?.map(
                                ({
                                    id,
                                    title,
                                    content,
                                    chart,
                                    chartTitle,
                                    chartType,
                                    chartData,
                                    chartData1,
                                    beforeAfter,
                                    conversionFlowchart,
                                    table,
                                    image,
                                    workflowComparison,
                                    codeTerminal,
                                }: QAItem) => (
                                    <motion.article
                                        key={id}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={fadeInUp}
                                        className="relative sticky top-20 bg-white rounded-2xl p-8 shadow-blue-100 hover:shadow-blue-200 border border-slate-200 transition-shadow duration-400 overflow-hidden"
                                    >
                                        <div
                                            className="absolute top-6 left-0 h-[calc(100%-3rem)] w-1 border-l-2 border-dotted border-primary rounded-r-lg"
                                            aria-hidden="true"
                                        />
                                        <div
                                            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-[#2b6ff5]/20 to-transparent rounded-full pointer-events-none"
                                            aria-hidden="true"
                                        />
                                        <h2 className="text-lg md:text-xl font-serif font-semibold text-primary mb-4 relative">
                                            {title}
                                            <span className="block w-10 h-1 bg-blue-300 rounded-full mt-1"></span>
                                        </h2>
                                        <div className="space-y-3 text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                                            {content?.map((para, i) => (
                                                <p
                                                    key={i}
                                                    dangerouslySetInnerHTML={{ __html: para }}
                                                />
                                            ))}
                                        </div>
                                        {chart && (
                                            <div className="mt-12">
                                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
                                                    {chartTitle}
                                                </h3>

                                                <div
                                                    className={`flex ${chartType === "vertical"
                                                        ? "flex-col"
                                                        : "flex-wrap justify-center"
                                                        } items-center`}
                                                >
                                                    <div
                                                        className={`flex ${chartType === "vertical"
                                                            ? "flex-col"
                                                            : "flex-row w-fit overflow-x-auto hide-scrollbar"
                                                            } gap-4 items-center`}
                                                    >
                                                        {chart.map((stage, index) => (
                                                            <div
                                                                key={index}
                                                                className={`flex gap-4 ${chartType === "vertical"
                                                                    ? "flex-col"
                                                                    : "flex-row h-full"
                                                                    } items-center`}
                                                            >
                                                                <div className="bg-white min-w-80 xl:min-w-auto h-full p-4 rounded-lg shadow-lg border border-gray-300 text-center">
                                                                    <p className="mx-auto md:text-lg lg:text-xl">
                                                                        {stage?.icon}
                                                                    </p>
                                                                    <p className="font-semibold text-sm xl:text-lg text-primary">
                                                                        {stage?.name}
                                                                    </p>
                                                                    <p className="text-sm text-gray-600">
                                                                        {stage?.latency}
                                                                    </p>
                                                                    <p className="text-sm text-gray-600">
                                                                        {stage?.description}
                                                                    </p>
                                                                </div>
                                                                {index < chart.length - 1 && (
                                                                    <IoArrowForward
                                                                        className={`text-primary ${chartType === "vertical"
                                                                            ? "rotate-90"
                                                                            : ""
                                                                            }`}
                                                                        size={24}
                                                                    />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {chartData && (
                                            <div className="mt-8">
                                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                                                    {chartData?.chartTitle}
                                                </h3>
                                                {chartData?.chartType === "bar" ? (
                                                    <Bar height={isSmallScreen ? 350 : 150}
                                                        data={{
                                                            labels: chartData?.data?.labels,
                                                            datasets: chartData?.data?.datasets.map((dataset) => ({
                                                                label: dataset?.rttLabel,
                                                                data: dataset?.rttData,
                                                                backgroundColor: dataset?.barColor,
                                                                borderColor: dataset?.borderColor,
                                                                borderWidth: dataset?.borderWidth,
                                                                hoverBackgroundColor: dataset?.hoverBarColor,
                                                            })),
                                                        }}
                                                        options={{
                                                            responsive: true,
                                                            scales: {
                                                                x: {
                                                                    title: {
                                                                        display: true,
                                                                        text: chartData?.data?.datasets[0]?.xAxisLabel,
                                                                    },
                                                                    ticks: {
                                                                        autoSkip: true,
                                                                        maxTicksLimit: isSmallScreen ? 5 : 10, // Adjust for small screens
                                                                    },
                                                                },
                                                                y: {
                                                                    title: {
                                                                        display: true,
                                                                        text: chartData?.data?.datasets[0]?.yAxisLabel,
                                                                    },
                                                                    beginAtZero: true,
                                                                },
                                                            },
                                                            plugins: {
                                                                tooltip: {
                                                                    callbacks: {
                                                                        label: (context) =>
                                                                            `${context.dataset.label}: ${context.raw} ms`,
                                                                    },
                                                                },
                                                            },
                                                            elements: {
                                                                bar: {
                                                                    borderRadius: chartData?.data?.datasets[0]?.barRadius,
                                                                },
                                                            },
                                                            layout: {
                                                                padding: isSmallScreen
                                                                    ? 5 // Less padding on small screens
                                                                    : chartData?.data?.datasets[0]?.layoutPadding,
                                                            },
                                                            datasets: {
                                                                bar: {
                                                                    barThickness: isSmallScreen
                                                                        ? 12 // Smaller bars for small screens
                                                                        : chartData?.data?.datasets[0]?.barThickness,
                                                                    maxBarThickness: isSmallScreen
                                                                        ? 15 // Limit max thickness on small screens
                                                                        : chartData?.data?.datasets[0]?.maxBarThickness,
                                                                },
                                                            },
                                                        }}
                                                    />
                                                ) : chartData?.chartType === "line" ||
                                                    chartData1?.chartType === "bar" ? (
                                                    <div>
                                                        {chartData?.chartType === "line" ||
                                                            chartData1?.chartType === "bar" ? (
                                                            <div
                                                                className={`${chartData?.chartType === "line" &&
                                                                    chartData1?.chartType === "bar"
                                                                    ? "flex flex-wrap flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-3 size-full"
                                                                    : ""
                                                                    }`}
                                                            >
                                                                {chartData?.chartType === "line" && (
                                                                    <div
                                                                        className={`${chartData?.chartType === "line" &&
                                                                            chartData1?.chartType === "bar"
                                                                            ? "lg:flex-1 max-w-full w-full lg:max-w-[48%]"
                                                                            : ""
                                                                            }`}
                                                                    >
                                                                        <Line data={chartData?.data} />
                                                                    </div>
                                                                )}

                                                                {chartData1?.chartType === "bar" && (
                                                                    <div
                                                                        className={`${chartData?.chartType === "line" &&
                                                                            chartData1?.chartType === "bar"
                                                                            ? "lg:flex-1 max-w-full w-full lg:max-w-[48%]"
                                                                            : ""
                                                                            }`}
                                                                    >
                                                                        <Bar height={180}
                                                                            data={{
                                                                                labels: chartData1?.data?.labels,
                                                                                datasets:
                                                                                    chartData1?.data?.datasets.map(
                                                                                        (dataset) => ({
                                                                                            label: dataset?.rttLabel,
                                                                                            data: dataset?.rttData,
                                                                                            backgroundColor:
                                                                                                dataset?.barColor,
                                                                                            borderColor: dataset?.borderColor,
                                                                                            borderWidth: dataset?.borderWidth,
                                                                                            hoverBackgroundColor:
                                                                                                dataset?.hoverBarColor,
                                                                                        })
                                                                                    ),
                                                                            }}
                                                                            options={{
                                                                                responsive: true,
                                                                                scales: {
                                                                                    x: {
                                                                                        title: {
                                                                                            display: true,
                                                                                            text: chartData1?.data
                                                                                                ?.datasets[0]?.xAxisLabel,
                                                                                        },
                                                                                        ticks: {
                                                                                            autoSkip: true,
                                                                                            maxTicksLimit: 10,
                                                                                        },
                                                                                    },
                                                                                    y: {
                                                                                        title: {
                                                                                            display: true,
                                                                                            text: chartData1?.data
                                                                                                ?.datasets[0]?.yAxisLabel,
                                                                                        },
                                                                                        beginAtZero: true,
                                                                                    },
                                                                                },
                                                                                plugins: {
                                                                                    tooltip: {
                                                                                        callbacks: {
                                                                                            label: (context) =>
                                                                                                `${context.dataset.label}: ${context.raw} ms`,
                                                                                        },
                                                                                    },
                                                                                },
                                                                                elements: {
                                                                                    bar: {
                                                                                        borderRadius:
                                                                                            chartData1?.data?.datasets[0]
                                                                                                ?.barRadius,
                                                                                    },
                                                                                },
                                                                                layout: {
                                                                                    padding:
                                                                                        chartData1?.data?.datasets[0]
                                                                                            ?.layoutPadding,
                                                                                },
                                                                                datasets: {
                                                                                    bar: {
                                                                                        barThickness:
                                                                                            chartData1?.data?.datasets[0]
                                                                                                ?.barThickness,
                                                                                        maxBarThickness:
                                                                                            chartData1?.data?.datasets[0]
                                                                                                ?.maxBarThickness,
                                                                                    },
                                                                                },
                                                                            }}
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                ) : chartData?.chartType === "doughnut" ? (
                                                    <DoughnutChart
                                                        data={chartData?.doughnut}
                                                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                                                    />
                                                ) : null}
                                            </div>
                                        )}
                                        {beforeAfter && (
                                            <div className="mt-8">
                                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                                    {beforeAfter?.title}
                                                </h3>
                                                <p className="text-gray-600 mb-4">
                                                    {beforeAfter?.description}
                                                </p>
                                                <div className="flex flex-wrap gap-6">
                                                    <div>
                                                        <p className="text-sm text-gray-500 mb-2">
                                                            {beforeAfter?.deltaBefore}
                                                        </p>
                                                        <Image
                                                            src={beforeAfter?.beforeImage}
                                                            alt={beforeAfter?.title}
                                                            height={400}
                                                            width={400}
                                                            className="rounded-xl"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500 mb-2">
                                                            {beforeAfter?.deltaAfter}
                                                        </p>
                                                        <Image
                                                            src={beforeAfter?.afterImage}
                                                            alt={beforeAfter?.title}
                                                            height={400}
                                                            width={400}
                                                            className="rounded-xl"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {conversionFlowchart && (
                                            <section className="md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-lg p-6 md:p-8">
                                                <h2 className="text-2xl font-bold text-[#00449E] text-center mb-2">
                                                    {conversionFlowchart.title}
                                                </h2>
                                                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                                                    {conversionFlowchart.subtitle}
                                                </p>
                                                {conversionFlowchart.rows.map((row, rowIndex) => {
                                                    if (row.type === "row") {
                                                        return (
                                                            <div
                                                                key={rowIndex}
                                                                className="flex flex-col xl:flex-row justify-between items-center gap-4 text-center"
                                                            >
                                                                {row.items.map((item, itemIndex) => {
                                                                    if (item.type === "arrow") {
                                                                        const isLeft = item.direction === "left";
                                                                        return (
                                                                            <div
                                                                                key={item.id}
                                                                                className="flex items-center justify-center"
                                                                            >
                                                                                {/* Long Arrow Line with Triangle Head */}
                                                                                <div className="flex items-center w-full justify-center relative">
                                                                                    {/* Arrow Line */}
                                                                                    <div className="transform rotate-90 xl:rotate-0 h-[2px] w-8 2xl:w-44 bg-blue-500"></div>
                                                                                    {/* Arrowhead */}
                                                                                    <div
                                                                                        className={`hidden xl:flex absolute ${isLeft ? "left-0" : "right-0"
                                                                                            } w-0 h-0 
                                                                  ${isLeft
                                                                                                ? "border-r-[10px]"
                                                                                                : "border-l-[10px]"
                                                                                            } 
                                                                  border-t-[6px] border-b-[6px] 
                                                                  border-t-transparent border-b-transparent 
                                                                  ${isLeft
                                                                                                ? "border-r-blue-500"
                                                                                                : "border-l-blue-500"
                                                                                            }`}
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <div
                                                                                key={item.id}
                                                                                className="bg-[#eef2f9] p-4 rounded-lg shadow-inner max-w-[250px]"
                                                                            >
                                                                                <h3
                                                                                    className={`text-sm sm:text-base font-semibold ${item.color || "text-[#00449E]"
                                                                                        }`}
                                                                                >
                                                                                    {item.title}
                                                                                </h3>
                                                                                <p className="text-sm text-gray-600">
                                                                                    {item.subtitle}{" "}
                                                                                    {item.highlight && (
                                                                                        <span className="font-bold">
                                                                                            {item.highlight}
                                                                                        </span>
                                                                                    )}
                                                                                </p>
                                                                            </div>
                                                                        );
                                                                    }
                                                                })}
                                                            </div>
                                                        );
                                                    } else if (row.type === "down-arrow") {
                                                        return (
                                                            <div
                                                                key={row.id}
                                                                className="flex justify-center my-4"
                                                            >
                                                                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-t-blue-700 border-l-transparent border-r-transparent"></div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </section>
                                        )}
                                        {table && (
                                            <div className="overflow-x-auto p-6 rounded-lg shadow-md">
                                                <table className="min-w-full border-collapse text-sm text-left bg-white rounded-lg shadow-md">
                                                    {/* Table Header */}
                                                    <thead className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white">
                                                        <tr>
                                                            {table?.header?.map((head, index) => (
                                                                <th
                                                                    key={index}
                                                                    className="px-6 py-3 font-semibold text-lg text-center border-b-2 border-gray-200"
                                                                >
                                                                    {head}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>

                                                    {/* Table Body */}
                                                    <tbody>
                                                        {table?.rows?.map(
                                                            ({ feature, RTMP, SRT, RIST }, index) => (
                                                                <tr
                                                                    key={index}
                                                                    className={`transition-all duration-300 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                                        } hover:bg-blue-50`}
                                                                >
                                                                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800 text-center">
                                                                        {feature}
                                                                    </td>
                                                                    <td className="px-6 py-4 border-b border-gray-200 text-center text-gray-700">
                                                                        {RTMP}
                                                                    </td>
                                                                    <td className="px-6 py-4 border-b border-gray-200 text-center text-gray-700">
                                                                        {SRT}
                                                                    </td>
                                                                    <td className="px-6 py-4 border-b border-gray-200 text-center text-gray-700">
                                                                        {RIST}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                        {image && (
                                            <div className="mt-8">
                                                <Image
                                                    src={image?.src}
                                                    width={400}
                                                    height={400}
                                                    alt={"Image"}
                                                    className="rounded-lg shadow-md"
                                                />
                                            </div>
                                        )}
                                        {workflowComparison && (
                                            <section className="xl:px-16 rounded-xl">
                                                <h2 className="text-center text-xl md:text-2xl font-semibold mb-10 mt-6">
                                                    Broadcast Workflow Comparison
                                                </h2>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    {workflowComparison.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="bg-[#1e293b] rounded-xl p-6 text-white shadow-lg flex flex-col items-start"
                                                        >
                                                            <div
                                                                className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl mb-4"
                                                                style={{ backgroundColor: item.color }}
                                                            >
                                                                {item.icon}
                                                            </div>
                                                            <h3 className="text-lg font-semibold mb-4">
                                                                {item.title}
                                                            </h3>

                                                            {item.pros && (
                                                                <ul className="mb-2 space-y-1 text-sm">
                                                                    {item.pros.map((point, i) => (
                                                                        <li
                                                                            key={i}
                                                                            className="flex flex-nowrap items-start gap-2"
                                                                        >
                                                                            ✅ <span>{point}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                            {item.cons && (
                                                                <ul className="space-y-1 text-sm">
                                                                    {item.cons.map((point, i) => (
                                                                        <li
                                                                            key={i}
                                                                            className="flex items-start gap-2 text-red-400"
                                                                        >
                                                                            ❌ <span>{point}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                            {item.warnings && (
                                                                <ul className="space-y-1 text-sm">
                                                                    {item.warnings.map((point, i) => (
                                                                        <li
                                                                            key={i}
                                                                            className="flex items-start gap-2 text-yellow-400"
                                                                        >
                                                                            ⚠️ <span>{point}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )}
                                    </motion.article>
                                )
                            )}
                        </div>
                    </div>
                )}
                {data?.twiceQa && data?.twiceQa?.qa?.length > 0 && (
                    <div className="pt-12">
                        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-12 text-center tracking-wide">
                            {data.twiceQa.qaTitle}
                        </h1>
                        <div className="space-y-14">
                            {data.twiceQa.qa.map((qaItem: QAItem) => (
                                <motion.article
                                    key={`ndi-${qaItem.id}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={fadeInUp}
                                    className="relative sticky top-20 bg-white rounded-2xl p-8 shadow-blue-100 hover:shadow-blue-200 border border-slate-200 transition-shadow duration-400 overflow-hidden"
                                >
                                    <div
                                        className="absolute top-6 left-0 h-[calc(100%-3rem)] w-1 border-l-2 border-dotted border-primary rounded-r-lg"
                                        aria-hidden="true"
                                    />
                                    <div
                                        className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-[#2b6ff5]/20 to-transparent rounded-full pointer-events-none"
                                        aria-hidden="true"
                                    />
                                    <h2 className="text-lg md:text-xl font-serif font-semibold text-primary mb-4">
                                        {qaItem.title}
                                    </h2>
                                    <div className="space-y-3 text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                                        {qaItem.content?.map((para, i) => (
                                            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                                        ))}
                                    </div>
                                    {qaItem?.table && (
                                        <div className="overflow-x-auto p-6 rounded-lg shadow-md">
                                            <table className="min-w-full border-collapse text-sm text-left bg-white rounded-lg shadow-md">
                                                {/* Table Header */}
                                                <thead className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white">
                                                    <tr>
                                                        {qaItem.table.header.map((head, index) => (
                                                            <th
                                                                key={index}
                                                                className="px-6 py-3 font-semibold text-lg text-center border-b-2 border-gray-200"
                                                            >
                                                                {head}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>

                                                {/* Table Body */}
                                                <tbody>
                                                    {qaItem.table.rows.map((row, index) => (
                                                        <tr
                                                            key={index}
                                                            className={`transition-all duration-300 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                                } hover:bg-blue-50`}
                                                        >
                                                            <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800 text-center">
                                                                {row.feature}
                                                            </td>
                                                            <td className="px-6 py-4 border-b border-gray-200 text-center text-gray-700">
                                                                {row.Buildroot || row.RTMP}
                                                            </td>
                                                            <td className="px-6 py-4 border-b border-gray-200 text-center text-gray-700">
                                                                {row.Yocto || row.SRT}
                                                            </td>
                                                            {row.RIST && (
                                                                <td className="px-6 py-4 border-b border-gray-200 text-center text-gray-700">
                                                                    {row.RIST}
                                                                </td>
                                                            )}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                    {qaItem.imageFlowchart &&
                                        Array.isArray(qaItem.imageFlowchart) && (
                                            <div className="p-6 md:p-8">
                                                <div className="flex flex-col lg:flex-row items-center justify-center text-center">
                                                    {qaItem.imageFlowchart?.map((item, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex flex-col lg:flex-row items-center"
                                                        >
                                                            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                                                                <div className="text-4xl">{item.icon}</div>
                                                                <h4
                                                                    className="font-semibold mt-2"
                                                                    style={{ color: item?.textColor }}
                                                                >
                                                                    {item.title}
                                                                </h4>
                                                                <p className="text-sm text-gray-600">
                                                                    {item.subtitle}
                                                                </p>
                                                            </div>
                                                            {Array.isArray(qaItem?.imageFlowchart) &&
                                                                idx < qaItem.imageFlowchart.length - 1 && (
                                                                    <FaArrowRight className="lg:mx-6 my-6 transform rotate-90 lg:rotate-0" />
                                                                )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                </motion.article>
                            ))}
                        </div>
                    </div>
                )}
            </section>
            {/* trends */}
            {data?.trends && (
                <section id="trends" className="py-8 md:py-16 px-5 md:px-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold mb-12 text-center tracking-wide">
                        {data?.trendsTitle}
                    </h2>
                    <div className="relative border-l-2 border-blue-300 ml-4">
                        {data?.trends?.map((trend) => (
                            <div key={trend.id} className="mb-10 ml-6">
                                <span className="absolute -left-4.5 flex items-center justify-center size-8 bg-white border-2 border-blue-400 rounded-full">
                                    {trend.icon}
                                </span>
                                <h3 className="sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                    {trend.id}. {trend.title}
                                </h3>
                                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    {trend.content.map((point, index) => (
                                        <li
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: point }}
                                        />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            {/* highlighted flowchart */}
            {data?.highlightedFlowchart && (
                <div className="bg-white rounded-3xl py-8 md:py-16 px-5 md:px-10 shadow-md space-y-4">
                    <h2 className="text-2xl font-bold font-serif text-center">
                        {data?.highlightedFlowchart?.title}
                    </h2>
                    <p className="text-sm sm:text-base text-center text-gray-600">
                        {data?.highlightedFlowchart?.subtitle}
                    </p>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-6">
                        {/* Left Side - Edge Computing */}
                        <div className="max-w-[500px] w-full flex flex-col items-center">
                            <p
                                className="my-4 font-semibold"
                                style={{
                                    color: data?.highlightedFlowchart?.sides[0].result.color,
                                }}
                            >
                                {data?.highlightedFlowchart?.sides[0].result.title}
                            </p>
                            <div
                                className="border-2 border-dashed rounded-lg p-4 space-y-4 w-full"
                                style={{
                                    borderColor: data?.highlightedFlowchart?.sides[0].borderColor,
                                }}
                            >
                                {data?.highlightedFlowchart?.sides[0].flow.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center py-2 px-4 rounded"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <div className="font-semibold">{step.title}</div>
                                        {step.description && (
                                            <div className="text-sm opacity-80">
                                                {step.description}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p
                                className="mt-4 font-semibold"
                                style={{
                                    color: data?.highlightedFlowchart?.sides[0].result.color,
                                }}
                            >
                                {data?.highlightedFlowchart?.sides[0].result.text}
                            </p>
                        </div>

                        {/* Center - VS */}
                        <div className="col-span-1 flex items-center justify-center">
                            <span className="text-4xl font-bold text-blue-500">VS</span>
                        </div>

                        {/* Right Side - Cloud Computing */}
                        <div className="max-w-[500px] w-full flex flex-col items-center">
                            <p
                                className="my-4 font-semibold"
                                style={{
                                    color: data?.highlightedFlowchart?.sides[1].result.color,
                                }}
                            >
                                {data?.highlightedFlowchart?.sides[1].result.title}
                            </p>
                            <div
                                className="border-2 border-dashed rounded-lg p-4 space-y-4 w-full"
                                style={{
                                    borderColor: data?.highlightedFlowchart?.sides[1].borderColor,
                                }}
                            >
                                {data?.highlightedFlowchart?.sides[1].flow.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center py-2 px-4 rounded"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <div className="font-semibold">{step.title}</div>
                                        {step.description && (
                                            <div className="text-sm opacity-80">
                                                {step.description}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p
                                className="mt-4 font-semibold"
                                style={{
                                    color: data?.highlightedFlowchart?.sides[1].result.color,
                                }}
                            >
                                {data?.highlightedFlowchart?.sides[1].result.text}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {/* bar chart */}
            {data?.barChart && (
                <Bar height={isSmallScreen ? 350 : 150}
                    data={{
                        labels: data?.barChart?.data?.labels,
                        datasets: data?.barChart?.data?.datasets.map((dataset) => ({
                            label: dataset?.rttLabel,
                            data: dataset?.rttData,
                            backgroundColor: dataset?.barColor,
                            borderColor: dataset?.borderColor,
                            borderWidth: dataset?.borderWidth,
                            hoverBackgroundColor: dataset?.hoverBarColor,
                        })),
                    }}
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: data?.barChart?.data?.datasets[0]?.xAxisLabel,
                                },
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: isSmallScreen ? 5 : 10, // Adjust for small screens
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: data?.barChart?.data?.datasets[0]?.yAxisLabel,
                                },
                                beginAtZero: true,
                            },
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: (context) =>
                                        `${context.dataset.label}: ${context.raw} ms`,
                                },
                            },
                        },
                        elements: {
                            bar: {
                                borderRadius: data?.barChart?.data?.datasets[0]?.barRadius,
                            },
                        },
                        layout: {
                            padding: isSmallScreen
                                ? 5 // Less padding on small screens
                                : data?.barChart?.data?.datasets[0]?.layoutPadding,
                        },
                        datasets: {
                            bar: {
                                barThickness: isSmallScreen
                                    ? 12 // Smaller bars for small screens
                                    : data?.barChart?.data?.datasets[0]?.barThickness,
                                maxBarThickness: isSmallScreen
                                    ? 15 // Limit max thickness on small screens
                                    : data?.barChart?.data?.datasets[0]?.maxBarThickness,
                            },
                        },
                    }}
                />
            )}
            {/* radar chart */}
            {data?.radarData && (
                <div className="md:size-[600px] mx-auto">
                    <Radar data={data?.radarData} options={radarOptions} />
                </div>
            )}
            {/* doughnut chart */}
            {data?.doughnutData && (
                <section className="py-8 md:py-16 px-5 md:px-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-12 text-center tracking-wide">
                        {data?.doughnutData[1]?.title}
                    </h2>
                    <DoughnutChart
                        data={data?.doughnutData[2].doughnut}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    />
                </section>
            )}
            {/* Challenges */}
            {data?.challenges && (
                <section id="challenges" className="py-8 md:py-16 px-5 md:px-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold mb-12 text-center tracking-wide">
                        {data?.challengesTitle}
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {data?.challenges?.map((challenge) => (
                            <div
                                key={challenge.id}
                                className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="sm:text-lg font-semibold text-gray-800 mb-2">
                                    {challenge.id}. {challenge.title}
                                </h3>
                                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    {challenge.content.map((point, index) => (
                                        <li
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: point }}
                                        />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            {/* case study */}
            {data?.caseStudy && (
                <section id="case-study" className="py-8 md:py-16 px-5 md:px-10">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-6 text-center tracking-wide">
                            {data?.caseStudy?.title}
                        </h2>
                        <p
                            className="text-sm sm:text-base text-gray-600 mb-12 max-w-3xl mx-auto"
                            dangerouslySetInnerHTML={{ __html: data?.caseStudy?.description }}
                        />

                        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                            {data?.caseStudy?.caseStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="relative group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                                >
                                    <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                                    <div className="p-6 flex flex-col items-start">
                                        <div className="mb-4 p-3 rounded-xl bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition">
                                            {study?.icon}
                                        </div>

                                        <h3 className="sm:text-lg xl:text-xl text-left font-semibold text-gray-800 mb-2">
                                            {study?.title}
                                        </h3>
                                        <p
                                            className="text-gray-600 text-left text-sm xl:text-base leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: study.description }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* impact */}
            {data?.impact && (
                <section id="impact" className="py-8 md:py-16 px-5 md:px-10">
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-12 text-center tracking-wide">
                            Business Impact
                        </h1>
                        <div className="space-y-14">
                            {data?.impact?.map(({ id, title, content }: QAItem) => (
                                <motion.article
                                    key={id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={fadeInUp}
                                    className="relative sticky top-20 bg-white rounded-2xl p-8 shadow-blue-100 hover:shadow-blue-200 border border-slate-200 transition-shadow duration-400 overflow-hidden"
                                >
                                    <div
                                        className="absolute top-6 left-0 h-[calc(100%-3rem)] w-1 border-l-2 border-dotted border-primary rounded-r-lg"
                                        aria-hidden="true"
                                    />
                                    <h2 className="text-lg md:text-xl font-serif font-semibold text-primary mb-4 relative">
                                        {title}
                                        <span className="block w-10 h-1 bg-blue-300 rounded-full mt-1"></span>
                                    </h2>
                                    <div className="space-y-3 text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                                        {content?.map((para, i) => (
                                            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                                        ))}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* scenarios */}
            {data?.scenarios && (
                <div id="scenarios" className="bg-gray-50 py-10 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-8 text-center tracking-wide">
                            {data?.scenariosTitle}
                        </h1>
                        <p className="text-gray-600 mb-10 text-center">
                            {data?.scenariosDescription}
                        </p>
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full">
                            {data?.scenarios?.map((section) => (
                                <div key={section.id}>
                                    {section.type === "flip" ? (
                                        <div className="flip-card h-[500px] sm:h-[400px] xl:h-[450px] w-full">
                                            <div className="flip-card-inner size-full relative">
                                                {/* Front Side of the Flip Card */}
                                                <div className="flip-card-front flex flex-col bg-white rounded-3xl shadow-lg p-8">
                                                    <div className="text-2xl mb-4 text-blue-600 transition-transform duration-300">
                                                        📌
                                                    </div>
                                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                                                        {section.category}
                                                    </h2>
                                                    <ul className="list-disc pl-3 sm:pl-6 space-y-3 text-gray-600 text-sm opacity-80">
                                                        {section.items.map((item, idx) => (
                                                            <li
                                                                key={idx}
                                                                dangerouslySetInnerHTML={{ __html: item }}
                                                            />
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Back Side of the Flip Card */}
                                                <div className="flip-card-back">
                                                    <Image
                                                        src={section?.img}
                                                        alt={section.category}
                                                        className="w-full h-full object-contain rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            key={section.id}
                                            className={`relative h-full bg-white text-gray-800 rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 hover:shadow-2xl hover:scale-105 hover:rotate-2 transition-all duration-300`}
                                        >
                                            <div className="text-xl sm:text-2xl mb-4 text-blue-600 transform hover:scale-110 hover:rotate-6 transition-transform duration-300">
                                                📌
                                            </div>
                                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 transform hover:text-indigo-600 hover:scale-105 transition-transform transition-colors duration-500 ease-out">
                                                {section.category}
                                            </h2>
                                            <ul className="list-disc pl-6 space-y-3 text-gray-600 text-sm opacity-80">
                                                {section.items.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        dangerouslySetInnerHTML={{ __html: item }}
                                                    />
                                                ))}
                                            </ul>
                                            <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-r from-blue-300 to-indigo-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                                            <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-black opacity-0 hover:opacity-5 transition-opacity duration-300"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/* recommendations */}
            {data?.recommendations && (
                <section id="recommendations" className="py-16 px-6 lg:px-16">
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-12 text-center tracking-wide">
                            Expert Recommendations
                        </h2>

                        <div className="relative w-full">
                            <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200"></div>

                            <div className="flex items-start justify-between gap-12 overflow-x-auto px-2 hide-scrollbar">
                                {data?.recommendations?.map((rec, index) => (
                                    <div
                                        key={rec.id}
                                        className="relative flex flex-col items-center text-center flex-shrink-0 w-64"
                                    >
                                        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 shadow-sm">
                                            <FaCheckCircle className="w-6 h-6 text-green-500" />
                                        </div>

                                        {/* Text */}
                                        <p className="mt-6 text-gray-700 text-sm leading-relaxed">
                                            {rec.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Conclusion */}
            {data?.conclusion && (
                <section id="conclusion" className="relative md:px-10">
                    <div className="border border-slate-200 p-6 rounded-3xl">
                        <div className="hidden md:flex justify-center">
                            <div className="w-1 h-full bg-gradient-to-b from-[#3078fb] to-blue-300 rounded-full" />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-semibold uppercase text-gray-600 tracking-widest mb-2">
                                    {data?.conclusion?.subtitle}
                                </p>
                                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#3078fb] leading-tight tracking-tight mb-3">
                                    {data?.conclusion?.title}
                                </h2>
                                <p
                                    className="text-sm md:text-base text-gray-500 mt-2"
                                    dangerouslySetInnerHTML={{
                                        __html: data?.conclusion?.description,
                                    }}
                                />
                            </div>

                            <div className="relative pl-6 border-l-2 border-primary bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 sm:p-8 text-gray-800 text-base sm:text-lg leading-relaxed space-y-5">
                                {data?.conclusion?.content.map((para, idx) => (
                                    <p
                                        key={idx}
                                        className="text-gray-600 text-sm sm:text-base"
                                        dangerouslySetInnerHTML={{ __html: para }}
                                    />
                                ))}
                            </div>
                            {data?.conclusion?.referencesTitle &&
                                data?.conclusion?.references && (
                                    <div className="mt-6">
                                        <h3 className="text-primary font-semibold text-lg mb-3">
                                            {data?.conclusion?.referencesTitle}
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {data?.conclusion?.references.map((ref, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-blue-50 text-primary px-3 py-1 text-sm font-medium rounded-full border border-blue-100" dangerouslySetInnerHTML={{ __html: ref }} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </section>
            )}
            {/* suggestion */}
            <BlogSuggestions currentSlug={id} />
        </div>
    );
};

export default BlogsInfo;

// export const runtime = "edge";