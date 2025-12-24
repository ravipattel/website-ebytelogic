import NotFound from '@/app/not-found';
import { blogsMetaData } from '@/content/blogsMetaData';
import BlogDetails from '@/src/views/blogs/[id]'
import React from 'react'

export async function generateMetadata({ params }) {
  const { id } = await params;

  let metaTitle = "eByteLogic Blog | Embedded Systems, Video Engineering & Low-Latency Streaming Experts";
  let metaDescription ="Insights and engineering deep-dives on embedded systems, Linux BSPs, video streaming, AV sync, protocol design, and low-latency multimedia systems.";

  if (id === "av-lip-sync-in-2025") {
    metaTitle = blogsMetaData["av-lip-sync-in-2025"].title;
    metaDescription = blogsMetaData["av-lip-sync-in-2025"].description;

  } else if (id === "SRT-vs-RIST-vs-RTMP") {
    metaTitle = blogsMetaData["SRT-vs-RIST-vs-RTMP"].title;
    metaDescription = blogsMetaData["SRT-vs-RIST-vs-RTMP"].description;

  } else if (id === "the-future-of-embedded-systems") {
    metaTitle = blogsMetaData["the-future-of-embedded-systems"].title;
    metaDescription = blogsMetaData["the-future-of-embedded-systems"].description;

  } else if (id === "ndi-in-hybrid-ip-sdi-workflows") {
    metaTitle = blogsMetaData["ndi-in-hybrid-ip-sdi-workflows"].title;
    metaDescription = blogsMetaData["ndi-in-hybrid-ip-sdi-workflows"].description;

  } else if (id === "buildroot-vs-yocto-for-video-devices") {
    metaTitle = blogsMetaData["buildroot-vs-yocto-for-video-devices"].title;
    metaDescription = blogsMetaData["buildroot-vs-yocto-for-video-devices"].description;

  } else if (id === "linux-bsp-techniques-that-work") {
    metaTitle = blogsMetaData["linux-bsp-techniques-that-work"].title;
    metaDescription =
      blogsMetaData["linux-bsp-techniques-that-work"].description;

  } else if (id === "cea-608-708-and-line21-dtvcc-conversion") {
    metaTitle = blogsMetaData["cea-608-708-and-line21-dtvcc-conversion"].title;
    metaDescription = blogsMetaData["cea-608-708-and-line21-dtvcc-conversion"].description;

  } else if (id === "ptp-and-smpte-st-2110-for-non-broadcasters") {
    metaTitle = blogsMetaData["ptp-and-smpte-st-2110-for-non-broadcasters"].title;
    metaDescription = blogsMetaData["ptp-and-smpte-st-2110-for-non-broadcasters"].description;

  } else if (id === "fixing-frame-drops-during-protocol-switching") {
    metaTitle = blogsMetaData["fixing-frame-drops-during-protocol-switching"].title;
    metaDescription = blogsMetaData["fixing-frame-drops-during-protocol-switching"].description;

  } else if (id === "ffmpeg-filters-frame-pacing-lip-sync") {
    metaTitle = blogsMetaData["ffmpeg-filters-frame-pacing-lip-sync"].title;
    metaDescription = blogsMetaData["ffmpeg-filters-frame-pacing-lip-sync"].description;

  } else if (id === "measuring-glass-to-glass-latency") {
    metaTitle = blogsMetaData["measuring-glass-to-glass-latency"].title;
    metaDescription = blogsMetaData["measuring-glass-to-glass-latency"].description;

  } else if (id === "edge-encoders-for-rugged-environments") {
    metaTitle = blogsMetaData["edge-encoders-for-rugged-environments"].title;
    metaDescription = blogsMetaData["edge-encoders-for-rugged-environments"].description;

  } else if (id === "automated-qa-for-live-video") {
    metaTitle = blogsMetaData["automated-qa-for-live-video"].title;
    metaDescription = blogsMetaData["automated-qa-for-live-video"].description;

  } else if (id === "secure-streaming") {
    metaTitle = blogsMetaData["secure-streaming"].title;
    metaDescription = blogsMetaData["secure-streaming"].description;

  } else if (id === "hardware-accelerated-transcoding-on-jetson-i.MX") {
    metaTitle = blogsMetaData["hardware-accelerated-transcoding-on-jetson-i.MX"].title;
    metaDescription = blogsMetaData["hardware-accelerated-transcoding-on-jetson-i.MX"].description;
  }

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `/blogs/${id}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `/blogs/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}


const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

    const blogMeta = blogsMetaData[id];

  if (!blogMeta) {
    return <NotFound />;
  }

  return (
    <>
      <BlogDetails/>
    </>
  )
}

export default BlogDetailsPage
export const runtime = 'edge';
