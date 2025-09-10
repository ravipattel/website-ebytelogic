"use client";

import Image, { StaticImageData } from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import React from "react";
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
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { CgLoadbarSound, CgPullClear } from "react-icons/cg";
import {
    BiCloud,
    BiDollarCircle,
    BiLeaf,
    BiMerge,
    BiServer,
    BiSolidLayerMinus,
    BiVideo,
} from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FaBolt, FaCheckCircle, FaCloud, FaMicrochip, FaVideo } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

import Button from "@/src/components/Button";

import AfterLipSyncPng from "@/src/assets/images/blogs/blogDetails/afterLipSync.png";
import IotJpeg from "@/src/assets/images/home/industry/iot.jpeg";
import BeforeLipSyncPng from "@/src/assets/images/blogs/blogDetails/beforeLipSync.png";
import SrtPng from "@/src/assets/images/blogs/blogDetails/srt.png";
import SrtLatencyFlowchartPng from "@/src/assets/images/blogs/blogDetails/srcLatencyFlowchart.png";
import DecisionChartPng from "@/src/assets/images/blogs/blogDetails/decisionChart.png";

ChartJS.register(
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);

const blogsData = [
    // 1st Blog
    {
        id: "av-lip-sync-in-2025",
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
                link: "/case-study",
            },
            image: {
                src: IotJpeg,
                alt: "Lip Sync Visual",
            },
        },
        qaTitle: "Lip-Sync Sync Deep Dive",
        qa: [
            {
                id: 1,
                title: "What “±10 ms” actually means",
                content: [
                    "Lip-sync error is the <span class='font-semibold'>relative</span> timing between audio and video at the output. If the video path is 70 ms and audio path is 80 ms, you’re at <span class='font-semibold'> audio late by 10 ms.</span>",
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
                    "3. <span class='font-semibold'>Network – </span> jitter, packet re-ordering, retransmissions; SRT/UDP buffers.",
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
                flowchart: {
                    title: "SRT Latency Selection Flow",
                    image: SrtLatencyFlowchartPng,
                },
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
                    "gst-launch-1.0 \\",
                    "v4l2src io-mode=dmabuf is-live=true ! videoconvert ! video/x-raw,framerate=30/1 ! \\",
                    "x264enc tune=zerolatency key-int-max=30 bitrate=4000 ! h264parse ! mpegtsmux name=mux \\",
                    "alsasrc is-live=true ! audioresample ! audioconvert ! avenc_aac bitrate=128000 ! \\",
                    "queue ! mux. \\",
                    'mux. ! srtsink uri="srt://RECEIVER_IP:PORT?mode=caller" latency=300',
                    "",
                    "<span class='font-semibold'>Receiver (SRT in + play out):</span>",
                    "gst-launch-1.0 \\",
                    'srtsrc uri="srt://0.0.0.0:PORT?mode=listener" latency=300 ! tsdemux name=demux \\',
                    "demux. ! h264parse ! avdec_h264 ! queue max-size-time=20000000 ! \\",
                    "videoconvert ! clocksync ! autovideosink sync=true max-lateness=20000000 \\",
                    "demux. ! aacparse ! avdec_aac ! audioresample ! queue max-size-time=20000000 ! \\",
                    "autoaudiosink sync=true",
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
        id: 'SRT-vs-RIST-vs-RTMP',
        introData: {
            title: "Protocol Wars in Live Contribution",
            highlight: "Live Contribution",
            subtitle: "RTMP vs SRT vs RIST · SUB-SECOND LATENCY · BROADCAST RELIABILITY",
            paragraphs: [
                "If you’re building a contribution workflow in 2025—feeding cameras, encoders, or remote production into your main broadcast—you’ll encounter <span class='font-semibold'>three protocols repeatedly: RTMP, SRT, and RIST.</span>",
                "Each has strengths and weaknesses. RTMP is legacy but still omnipresent; SRT has gained enormous traction for low-latency, firewall-friendly delivery; and RIST, born from broadcast vendors, emphasizes <span class='font-semibold'>standards compliance and interoperability.</span>",
                "But if your requirement is <span class='font-semibold'>sub-second latency with broadcast reliability,</span> which protocol should you choose? Let’s compare them across the metrics that matter."
            ],
            button: {
                label: "Explore Protocol Choices",
                link: "/protocol-comparison"
            },
            image: {
                src: SrtPng,
                alt: "Protocol Comparison Visual"
            }
        },
        qaTitle: 'Protocol Wars Deep Dive',
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
                    "<span class='font-bold'>•</span> Status: <span class='font-semibold'>Growing but less mainstream than SRT.</span>"
                ]
            },
            {
                id: 2,
                title: "Latency: How Low Can You Go?",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> TCP handshake + retransmissions add latency.",
                    "<span class='font-bold'>•</span> Even with “low-latency RTMP,” sub-second delivery is rare.",
                    "<span class='font-bold'>•</span> Best-case tuned setups: ~1–2 seconds.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> Sub-second contribution achievable.",
                    "<span class='font-bold'>•</span> Latency set as a buffer (3–4× RTT recommended).",
                    "<span class='font-bold'>•</span> Typical glass-to-glass: <span class='font-semibold'>150–500 ms</span> depending on network stability.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Also UDP + ARQ.",
                    "<span class='font-bold'>•</span> Matches SRT in latency under similar conditions.",
                    "<span class='font-bold'>•</span> Some implementations show <span class='font-semibold'>150–400 ms</span> in controlled tests.",
                    "<span class='font-semibold'>Verdict: RTMP is out</span> if you need <1 s. Both SRT and RIST can hit sub-second reliably."
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
                                "chartType": "bar",
                                "bufferData": ["100 KB", "200 KB", "300 KB", "400 KB", "500 KB"],
                                "rttData": [200, 300, 250, 400, 350],
                                "rttLabel": "RTT (ms)",
                                "barColor": "#4c6ef5b3",
                                "borderColor": "#4c6ef5b3",
                                "borderWidth": 1,
                                "hoverBarColor": "#2b6ff5",
                                "xAxisLabel": "Buffer Size (KB)",
                                "yAxisLabel": "RTT (ms)",
                                "barRadius": 4,
                                "barThickness": 50,
                                "maxBarThickness": 50,
                                "layoutPadding": 20
                            }
                        ],
                    },
                }
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
                    "<span class='font-semibold'>Verdict: RIST edges out SRT </span> in redundancy features, but both handle packet loss gracefully. RTMP suffers most."
                ],
                chartData: {
                    chartTitle: "Network Latency Comparison",
                    chartType: "line",
                    data: {
                        labels: ['0s', '1s', '2s', '3s', '4s'],
                        datasets: [
                            {
                                label: 'SRT Latency',
                                data: [100, 120, 150, 130, 140],
                                borderColor: 'rgba(75, 192, 192, 1)',
                                fill: false,
                            },
                            {
                                label: 'RIST Latency',
                                data: [80, 90, 110, 100, 115],
                                borderColor: 'rgba(153, 102, 255, 1)',
                                fill: false,
                            },
                        ],
                    }
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
                    "<span class='font-semibold'>Verdict: SRT wins for ease of firewall/NAT traversal.</span>"
                ],
                image: DecisionChartPng,
            },
            {
                id: 5,
                title: "Ecosystem & Tooling",
                content: [
                    "<span class='font-semibold'>RTMP</span>",
                    "<span class='font-bold'>•</span> Supported everywhere: OBS, CDNs, ingest points.",
                    "<span class='font-bold'>•</span> But few innovations since Flash’s death.",
                    "<span class='font-semibold'>SRT</span>",
                    "<span class='font-bold'>•</span> Widely adopted: OBS, GStreamer, VLC, FFmpeg, cloud providers.",
                    "<span class='font-bold'>•</span> Growing ecosystem with SRT Alliance backing.",
                    "<span class='font-semibold'>RIST</span>",
                    "<span class='font-bold'>•</span> Supported mainly by broadcast equipment vendors.",
                    "<span class='font-bold'>•</span> Fewer open-source tools compared to SRT.",
                    "<span class='font-bold'>•</span> Growing, but slower adoption in smaller companies.",
                    "<span class='font-semibold'>Verdict: SRT wins on ecosystem breadth.</span>"
                ]
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
                    "<span class='font-semibold'>Verdict: SRT has stronger defaults; RIST can be equally secure if configured properly.</span>"
                ]
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
                    "<span class='font-semibold'>Verdict: RIST leads for standards compliance and interop.</span>"
                ]
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
                    "<span class='font-semibold'>Verdict: SRT more open, RIST more vendor-centric.</span>"
                ]
            },
            {
                id: 9,
                title: "Maturity & Community Support",
                table: {
                    header: [
                        "Feature",
                        "RTMP",
                        "SRT",
                        "RIST"
                    ],
                    rows: [
                        {
                            feature: "Latency",
                            RTMP: "2–5 s",
                            SRT: "150–500 ms",
                            RIST: "150–400 ms"
                        },
                        {
                            feature: "Reliability",
                            RTMP: "TCP retransmits",
                            SRT: "ARQ, adaptive loss recovery",
                            RIST: "ARQ, FEC, bonding, hitless"
                        },
                        {
                            feature: "Firewall/NAT",
                            RTMP: "Moderate",
                            SRT: "Strong (caller/listener)",
                            RIST: "Medium"
                        },
                        {
                            feature: "Ecosystem",
                            RTMP: "Huge but legacy",
                            SRT: "Broad, modern tools",
                            RIST: "Vendor-focused, growing"
                        },
                        {
                            feature: "Security",
                            RTMP: "RTMPS only",
                            SRT: "AES encryption built-in",
                            RIST: "Optional DTLS/SRTP"
                        },
                        {
                            feature: "Standards",
                            RTMP: "Proprietary",
                            SRT: "Open source, not formal",
                            RIST: "VSF standard, interop focus"
                        },
                        {
                            feature: "Best Fit",
                            RTMP: "Legacy ingest",
                            SRT: "General contribution",
                            RIST: "Broadcast-grade redundancy"
                        }
                    ]
                }
            },
            {
                id: 10,
                title: "Recommendations by Use Case",
                content: [
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Small teams/startups</span>: Use <span class='font-semibold'>SRT</span>. Easy to integrate, wide support, good defaults.",
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Broadcast facilities with multi-vendor gear</span>: Consider <span class='font-semibold'>RIST</span>. Standards + redundancy help.",
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Legacy CDN workflows</span>: <span class='font-semibold'>RTMP</span> still works, but phase it out if you need low latency.",
                    "<span class='font-bold'>•</span> <span class='font-semibold'>Hybrid approach</span>: Many broadcasters run <span class='font-semibold'>SRT at the edge</span>, then bridge into <span class='font-semibold'>RIST</span> for contribution into MCR."
                ]

            }
        ],
        conclusion: {
            title: "Conclusion",
            subtitle: "Which Protocol Wins?",
            description: "Guidance on choosing the right contribution transport for your 2025 workflows.",
            content: [
                "If your goal is <span class='font-semibold'>sub-second contribution with minimal headaches</span>, <span class='font-semibold'>SRT is the pragmatic winner in 2025</span>—thanks to ecosystem support, firewall friendliness, and built-in encryption.",
                "<span class='font-semibold'>RIST</span>, however, is the <span class='font-semibold'>standards-first choice</span> for broadcasters running multi-vendor facilities, particularly when redundancy and long-term interoperability are priorities.",
                "<span class='font-semibold'>RTMP</span>, while still around, belongs only in legacy pipelines.",
                "👉 For product teams building contribution appliances or apps, <span class='font-semibold'>start with SRT</span>, <span class='font-semibold'>design for RIST interop</span>, and keep <span class='font-semibold'>RTMP only for compatibility</span>."
            ],
        }
    },
    // 3rd Blog
    {
        id: "the-future-of-embedded-systems",
        introData: {
            title: " Why Embedded Systems Are Driving Innovation Across Industries",
            highlight: "Innovation Across Industries",
            subtitle:
                "Embedded Systems",
            paragraphs: [
                "Embedded systems are no longer just the “hidden” computers inside devices. From live broadcast pipelines to autonomous drones, from smart medical devices to industrial IoT, they are now the <span class='font-semibold'>brains that make products intelligent, connected, and reliable.</span>",
                "As we step into 2025, the <span class='font-semibold'> embedded systems market is accelerating faster than ever.</span> Fueled by demands for <span class='font-semibold'> real-time processing, low-latency streaming, secure IoT connectivity, and AI-driven intelligence,</span> this decade is set to redefine what embedded platforms can achieve.",
                "In this article, we’ll explore <span class='font-semibold'>key trends, market forecasts, challenges, and real-world applications</span> that every product company, R&D team, and engineering leader should be watching.",
            ],
            button: {
                label: "Explore Protocol Choices",
                link: "/protocol-comparison",
            },
            image: {
                src: SrtPng,
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
                    "<span class='font-bold'>•</span> Increasing adoption of <span class='font-semibold'>edge AI chips, 5G-enabled IoT devices, and streaming frameworks</span> is fueling R&D investments.",
                    "<span class='font-bold'>•</span> In sectors like <span class='font-semibold'>media broadcasting</span>, embedded systems are not just enablers—they are the <span class='font-semibold'>core platforms</span> that make ultra-low latency video delivery possible.",
                ],
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
                    "With powerful yet <span class='font-semibold'>energy-efficient SoCs</span>, devices can now run <span class='font-semibold'>machine learning models locally</span>, enabling faster response times in <span class='font-semibold'>drones, wearables, industrial robotics</span>, and <span class='font-semibold'>live media analytics</span>.",
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
                    "Advances in <span class='font-semibold'>protocol handling (NDI, RTP, SRT, RIST)</span> and <span class='font-semibold'>AV sync optimization</span> are becoming <span class='font-semibold'>mission-critical</span> for product differentiation.",
                ],
            },
            {
                id: 5,
                title: "Energy-Efficient and Green Embedded Systems",
                icon: <BiLeaf className="size-4 text-emerald-600" />,
                content: [
                    "With growing <span class='font-semibold'>sustainability demands</span>, the industry is pushing for <span class='font-semibold'>ultra-low-power designs</span>, <span class='font-semibold'>optimized sleep modes</span>, and <span class='font-semibold'>eco-friendly chipsets</span> that balance performance with <span class='font-semibold'>environmental responsibility</span>.",
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
                    "The future of embedded systems is seamlessly tied to <span class='font-semibold'>5G</span> and <span class='font-semibold'>cloud-native infrastructure</span>, enabling <span class='font-semibold'>predictive maintenance, smart automation</span>, and <span class='font-semibold'>new digital services</span>.",
                ],
            },
        ],
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
        introData: {
            title: "NDI in Hybrid IP/SDI Workflows: What Product Teams Must Know",
            highlight: "Teams Must Know",
            paragraphs: [
                "The broadcast industry is undergoing a rapid transformation. For decades, <span class='font-semibold'>Serial Digital Interface (SDI)</span> cables were the gold standard of professional video production—delivering reliability, consistency, and predictable performance. But as audiences demand more content across more platforms, and as remote/cloud production gains traction, <span class='font-semibold'>Internet Protocol (IP)-based workflows</span> have emerged as a flexible and scalable alternative.",
                "Caught between these two worlds, many organizations are deploying <span class='font-semibold'>hybrid IP/SDI workflows</span>, where legacy SDI infrastructure coexists with newer IP systems. At the center of this hybrid era is <span class='font-semibold'>NDI (Network Device Interface)</span>, a protocol developed by NewTek that has quickly become a key enabler for product teams building modern broadcast solutions.",
                "This article explores <span class='font-semibold'>what NDI means for hybrid workflows</span>, the opportunities it offers, the challenges product teams must anticipate, and best practices for smooth adoption.",
            ],
            button: {
                label: "Explore NDI for Hybrid Workflows",
                link: "/ndi-hybrid-workflows",
            },
            image: {
                src: DecisionChartPng,
                alt: "NDI in Hybrid IP/SDI Workflows",
            },
        },
        qaTitle: "Understanding the Hybrid Broadcast Landscape",
        qa: [
            {
                id: 1,
                title: "The Traditional SDI Backbone – Reliability and Limitations",
                content: [
                    "SDI has been the workhorse of live video production since the late 1980s. Its strengths include:",
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
                    "IP workflows replace dedicated SDI cabling with <span class='font-semibold'>standard Ethernet networks</span>.",
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
                    "With <span class='font-semibold'>NDI 5</span> and <span class='font-semibold'>NDI Bridge</span>, teams can transmit <span class='font-semibold'>live video</span> across <span class='font-semibold'>WANs</span> or to the <span class='font-semibold'>cloud</span>, enabling <span class='font-semibold'>distributed production models</span>.",
                ],
            },
        ],
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
        scenariosTitle: 'NDI Integration Scenarios & Best Practices',
        scenariosDescription: 'Practical scenarios, best practices, and future trends for product teams adopting NDI.',
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
        "introData": {
            "title": "Buildroot vs Yocto for Video Devices: A Pragmatic Product Guide",
            "highlight": "Pragmatic Product Guide",
            "paragraphs": [
                "For companies building <span class='font-semibold'>video encoders, broadcast equipment, or multimedia devices</span>, one of the first technical roadblocks is selecting the right <span class='font-semibold'>embedded Linux build system</span>. Two names dominate the space: <span class='font-semibold'>Buildroot</span> and <span class='font-semibold'>Yocto</span>.",
                "Both are open-source, battle-tested, and widely adopted. Yet for product teams, the decision is rarely straightforward. Choose Buildroot, and you’ll enjoy speed and simplicity — but may face limits in complex pipelines. Choose Yocto, and you’ll unlock flexibility and long-term maintainability — but risk higher setup costs and a steep learning curve.",
                "This guide takes a pragmatic, product-focused look at <span class='font-semibold'>Buildroot vs Yocto for video devices</span>."
            ],
            "button": {
                "label": "Explore Buildroot vs Yocto",
                "link": "/buildroot-vs-yocto"
            },
            "image": {
                "src": DecisionChartPng,
                "alt": "Buildroot vs Yocto for Video Devices"
            }
        },
        "qaTitle": "The Embedded Video Device Challenge & Buildroot at a Glance",
        "qa": [
            {
                "id": 1,
                "title": "The Embedded Video Device Challenge",
                "content": [
                    "Modern video devices face pressures far beyond “just working.” Whether you’re building a <span class='font-semibold'>streaming encoder, a broadcast transceiver, or a custom multimedia device</span>, you must deliver:",
                    "<span class='font-semibold'>• Ultra-low latency</span> (±10ms AV sync).",
                    "<span class='font-semibold'>• Protocol diversity </span>(NDI, RTP, SRT, RTMP, RIST).",
                    "<span class='font-semibold'>• Codec flexibility</span> (H.264, H.265/HEVC, VP9).",
                    "<span class='font-semibold'>• Reliability</span> under 24/7 live workloads.",
                    "This is why the <span class='font-semibold'>Board Support Package (BSP)</span> and its build system matter. The BSP defines how fast your device boots, how stable it stays, and how easily it can be updated. Selecting <span class='font-semibold'>Buildroot</span> or <span class='font-semibold'>Yocto</span> sets the tone for your entire product lifecycle."
                ]
            },
            {
                "id": 2,
                "title": "Buildroot at a Glance – Key Philosophy & Approach",
                "content": [
                    "Buildroot is designed for <span class='font-semibold'>simplicity and speed</span>. It generates a root filesystem, kernel, and bootloader with minimal fuss. Its configuration is menu-driven (<span class='font-semibold'>make menuconfig</span>), making it easy to get started."
                ]
            },
            {
                "id": 3,
                "title": "Buildroot at a Glance – Strengths in Video Devices",
                "content": [
                    "<span class='font-semibold'>• Small footprint –</span> Ideal for devices with constrained storage or memory.",
                    "<span class='font-semibold'>• Fast boot times –</span> Can be tuned to achieve sub-2-second boots.",
                    "<span class='font-semibold'>• Straightforward customization –</span> Quick to add/remove packages.",
                    "<span class='font-semibold'>• Perfect for prototypes –</span> Product teams can validate hardware quickly."
                ]
            },
            {
                "id": 4,
                "title": "Buildroot at a Glance – Limitations",
                "content": [
                    "<span class='font-semibold'>• Limited scalability –</span> Managing complex pipelines or large systems becomes difficult.",
                    "<span class='font-semibold'>• Package dependencies –</span>Less modular than Yocto; harder to integrate advanced stacks.",
                    "<span class='font-semibold'>• Community ecosystem –</span> Active, but not as extensive as Yocto’s."
                ]
            }
        ],
        "twiceQa": {
            "qaTitle": "Yocto at a Glance",
            "qa": [
                {
                    "id": 1,
                    "title": "Key Philosophy & Approach",
                    "content": [
                        "The <span class='font-semibold'>Yocto Project</span> is built for <span class='font-semibold'> flexibility, scalability, and ecosystem  support.</span> Its metalayer approach allows developers to create highly modular, reusable components across projects."
                    ]
                },
                {
                    "id": 2,
                    "title": "Strengths in Video Devices",
                    "content": [
                        "• <span class='font-semibold'>Rich ecosystem</span> – Wide support for codecs, multimedia frameworks, and device drivers.",
                        "• <span class='font-semibold'>Scalable</span> – Handles everything from small encoders to enterprise broadcast gear.",
                        "• <span class='font-semibold'>Update strategies</span> – Easier to implement OTA updates and long-term maintainability.",
                        "• <span class='font-semibold'>Strong community & vendor support</span> – Backed by semiconductor vendors (NXP, TI, Intel)."
                    ]
                },
                {
                    "id": 3,
                    "title": "Limitations",
                    "content": [
                        "• <span class='font-semibold'>Learning curve</span> – Requires knowledge of recipes, layers, and bitbake.",
                        "• <span class='font-semibold'>Build time</span> – Slower initial builds compared to Buildroot.",
                        "• <span class='font-semibold'>Overhead</span> – Can be excessive for lightweight or single-purpose devices."
                    ]
                },
                {
                    "id": 4,
                    "title": "Head-to-Head Comparison for Video Devices",
                    "table": {
                        "header": [
                            "Factor",
                            "Buildroot",
                            "Yocto"
                        ],
                        "rows": [
                            {
                                "feature": "Boot Time & Footprint",
                                "Buildroot": "Minimal, boots in seconds",
                                "Yocto": "Larger, optimized but slower"
                            },
                            {
                                "feature": "Codec & Protocol Support",
                                "Buildroot": "Good but requires manual effort",
                                "Yocto": "Wide support out-of-the-box"
                            },
                            {
                                "feature": "BSP Customization",
                                "Buildroot": "Very fast",
                                "Yocto": "Slower, but more robust"
                            },
                            {
                                "feature": "Speed",
                                "Buildroot": "Very fast",
                                "Yocto": "Slower, but more robust"
                            },
                            {
                                "feature": "Long-Term Maintenance",
                                "Buildroot": "Harder to manage upgrades",
                                "Yocto": "Strong OTA & lifecycle support"
                            },
                            {
                                "feature": "Learning Curve",
                                "Buildroot": "Easy to start",
                                "Yocto": "Steep for beginners"
                            }
                        ]
                    },
                }
            ]
        } as QASection,
        scenariosTitle: "Pragmatic Scenarios: Which to Choose?",
        scenariosDescription: "Choosing the Right Tool for Your Product",
        scenarios: [
            {
                "id": 1,
                "category": "Choose Buildroot if:",
                "items": [
                    "<span class='font-semibold'>Prototyping or lightweight devices:</span> Ideal for simple or resource-constrained projects.",
                    "<span class='font-semibold'>Fast boot time & small footprint:</span> Prioritize minimal builds that boot in seconds.",
                    "<span class='font-semibold'>Limited protocol needs:</span> Works when you don’t need complex multi-protocol support."
                ]
            },
            {
                "id": 2,
                "category": "Choose Yocto if:",
                "items": [
                    "<span class='font-semibold'>Full-featured broadcast/multimedia gear:</span> Best for complex, high-end video devices.",
                    "<span class='font-semibold'>Long-term maintenance & compliance:</span> Supports OTA updates, regulatory standards, and lifecycle management.",
                    "<span class='font-semibold'>Vendor-backed ecosystem:</span> Strong support from semiconductor vendors and community."
                ]
            }
        ],
        "caseStudy": {
            "title": "Case Study Snapshot: eByteLogic Experience",
            "description": "Recently, <span class='font-semibold'>eByteLogic</span> helped a client running hardware based on a <span class='font-semibold'>Rockchip SoC platform</span> by customizing <span class='font-semibold'>Buildroot from scratch</span> and deploying it on custom hardware. The client had its own proprietary OS and required:",
            "caseStudies": [
                {
                    "id": 1,
                    "title": "Custom BSP adaptation",
                    "description": "Delivered <span class='font-semibold'>tailored BSP bring-up</span> for the client’s proprietary OS and hardware platform.",
                    "icon": <FaMicrochip className='size-4 group-hover:text-white text-green-500' />
                },
                {
                    "id": 2,
                    "title": "Low-latency streaming",
                    "description": "Optimized the streaming stack for <span class='font-semibold'>high reliability</span> and <span class='font-semibold'>low-latency</span> video pipelines.",
                    "icon": <FaVideo className='size-4 group-hover:text-white text-indigo-500' />
                },
                {
                    "id": 3,
                    "title": "Boot-time optimization",
                    "description": "Achieved a <span class='font-semibold'>dramatic reduction in boot time</span> through deep Buildroot customization.",
                    "icon": <FaBolt className='size-4 group-hover:text-white text-yellow-500' />
                }
            ]
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
];

type QAItem = {
    id: number;
    title: string;
    content?: string[];
    chartTitle?: string;
    chartType?: string;
    chart?: any;
    chartData?: any;
    beforeAfter?: any;
    flowchart?: any;
    image?: StaticImageData;
    table?: {
        header: string[];
        rows: Record<string, string>[];
    };
};
type QASection = {
    qaTitle: string;
    qa: QAItem[];
};
const BlogsInfo = () => {
    const router = useRouter();
    const { id } = useParams() as { id: string };
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
                <span className="text-slate-500"> {data?.id}</span>
            </p>
            {/* intro */}
            {data?.introData && (
                <section id="introduction" className="py-8 md:py-16 px-5 md:px-10 bg-white">
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
                                onClick={() => router.push(data?.introData?.button?.link || "/")}
                                className="h-12 w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white"
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
                                    beforeAfter,
                                    flowchart,
                                    table,
                                    image,
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
                                            className="absolute -top-8 -right-6 w-36 h-36 bg-blue-50 rounded-full opacity-40 blur-3xl pointer-events-none"
                                            aria-hidden="true"
                                        />
                                        <div
                                            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-[#2b6ff5]/20 to-transparent rounded-full pointer-events-none"
                                            aria-hidden="true"
                                        />
                                        <h2 className="text-lg md:text-2xl font-serif font-semibold text-primary mb-4 relative">
                                            {title}
                                            <span className="block w-10 h-1 bg-blue-300 rounded-full mt-1"></span>
                                        </h2>
                                        <div className="space-y-3 text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                                            {content?.map((para, i) => (
                                                <p
                                                    className=""
                                                    key={i}
                                                    dangerouslySetInnerHTML={{ __html: para }}
                                                />
                                            ))}
                                        </div>
                                        {chart && (
                                            <div className="mt-12">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                                                    {chartTitle}
                                                </h3>

                                                <div
                                                    className={`flex ${chartType === "vertical"
                                                        ? "flex-col"
                                                        : "flex-wrap justify-center"
                                                        } items-center`}
                                                >
                                                    <div
                                                        className={`flex ${chartType === "vertical" ? "flex-col" : "flex-row"
                                                            } gap-4 items-center`}
                                                    >
                                                        {chart.map((stage, index) => (
                                                            <div
                                                                key={index}
                                                                className={`flex gap-4 ${chartType === "vertical"
                                                                    ? "flex-col"
                                                                    : "flex-row"
                                                                    } items-center`}
                                                            >
                                                                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 text-center">
                                                                    <p className="font-semibold text-lg text-primary">
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
                                        {/* {chartData && (
                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">{chartData?.chartTitle}</h3>
                                        <Line data={chartData?.data} />
                                    </div>
                                )} */}
                                        {chartData && (
                                            <div className="mt-8">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                                    {chartData?.chartTitle}
                                                </h3>
                                                {chartData?.chartType === "bar" ? (
                                                    <Bar
                                                        data={{
                                                            labels: chartData?.data?.labels, // Buffer sizes (x-axis) from JSON
                                                            datasets: chartData?.data?.datasets.map(
                                                                (dataset) => ({
                                                                    label: dataset?.rttLabel, // Dynamic RTT label from JSON
                                                                    data: dataset?.rttData, // RTT values (y-axis) from JSON
                                                                    backgroundColor: dataset?.barColor, // Bar color from JSON
                                                                    borderColor: dataset?.borderColor, // Border color from JSON
                                                                    borderWidth: dataset?.borderWidth, // Border width from JSON
                                                                    hoverBackgroundColor: dataset?.hoverBarColor, // Hover color from JSON
                                                                })
                                                            ),
                                                        }}
                                                        options={{
                                                            responsive: true,
                                                            scales: {
                                                                x: {
                                                                    title: {
                                                                        display: true,
                                                                        text: chartData?.data?.datasets[0]
                                                                            ?.xAxisLabel, // X-axis label from JSON
                                                                    },
                                                                    ticks: {
                                                                        autoSkip: true,
                                                                        maxTicksLimit: 10, // Optional: You can adjust the number of ticks on the x-axis.
                                                                    },
                                                                },
                                                                y: {
                                                                    title: {
                                                                        display: true,
                                                                        text: chartData?.data?.datasets[0]
                                                                            ?.yAxisLabel, // Y-axis label from JSON
                                                                    },
                                                                    beginAtZero: true, // Ensure y-axis starts from 0
                                                                },
                                                            },
                                                            plugins: {
                                                                tooltip: {
                                                                    callbacks: {
                                                                        label: (context) => {
                                                                            return `${context.dataset.label}: ${context.raw} ms`; // Dynamic tooltip text from JSON
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                            elements: {
                                                                bar: {
                                                                    borderRadius:
                                                                        chartData?.data?.datasets[0]?.barRadius, // Optional: Bar corner radius from JSON
                                                                },
                                                            },
                                                            layout: {
                                                                padding:
                                                                    chartData?.data?.datasets[0]?.layoutPadding, // Optional: Padding between bars and chart edges
                                                            },
                                                            datasets: {
                                                                bar: {
                                                                    barThickness:
                                                                        chartData?.data?.datasets[0]?.barThickness, // Dynamic bar thickness (default: 15)
                                                                    maxBarThickness:
                                                                        chartData?.data?.datasets[0]
                                                                            ?.maxBarThickness, // Maximum bar thickness (default: 30)
                                                                },
                                                            },
                                                        }}
                                                    />
                                                ) : (
                                                    <Line data={chartData?.data} />
                                                )}
                                            </div>
                                        )}
                                        {beforeAfter && (
                                            <div className="mt-8">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
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
                                        {flowchart && (
                                            <div className="mt-8">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                    {flowchart?.title}
                                                </h3>
                                                {flowchart?.image && (
                                                    <div className="mt-4">
                                                        <Image
                                                            src={flowchart?.image}
                                                            width={300}
                                                            height={300}
                                                            alt="SRT Latency Flowchart"
                                                            className="rounded border"
                                                        />
                                                    </div>
                                                )}
                                            </div>
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
                                    {/* same card rendering logic as your normal QA */}
                                    <h2 className="text-lg md:text-2xl font-serif font-semibold text-primary mb-4">
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {trend.id}. {trend.title}
                                </h3>
                                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    {trend.content.map((point, index) => (
                                        <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
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
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {challenge.id}. {challenge.title}
                                </h3>
                                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    {challenge.content.map((point, index) => (
                                        <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
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
                        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-12 text-center tracking-wide">
                            {data?.caseStudy?.title}
                        </h2>
                        <p
                            className="text-gray-600 mb-12 max-w-3xl mx-auto"
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

                                        <h3 className="text-lg xl:text-xl text-left font-semibold text-gray-800 mb-2">
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
                                    <h2 className="text-lg md:text-2xl font-serif font-semibold text-primary mb-4 relative">
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
                        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-800 mb-12 text-center tracking-wide">
                            {data?.scenariosTitle}
                        </h1>
                        <p className="text-gray-600 mb-10">
                            {data?.scenariosDescription}
                        </p>

                        {/* <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data?.scenarios?.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {section.category}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  {section.items.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{__html : item}}/>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {data?.scenarios?.map((section) => (
                                <div
                                    key={section.id}
                                    className="relative bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                                    <div className="text-2xl mb-3">📌</div>

                                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                                        {section.category}
                                    </h2>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
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

                            <div className="flex items-start justify-between gap-12 overflow-x-auto px-2">
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
                <section id='conclusion' className="relative py-8 md:py-16 md:px-10">
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
                                                    className="bg-blue-50 text-primary px-3 py-1 text-sm font-medium rounded-full border border-blue-100"
                                                >
                                                    {ref}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogsInfo;

export const runtime = "edge";