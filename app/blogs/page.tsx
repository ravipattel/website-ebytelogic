import React from 'react'
import Blog from '@/src/views/blogs'

export const metadata = {
  title: "eByteLogic Blog | Embedded Systems, Video Engineering & Low-Latency Streaming Experts",
  description: "Insights and engineering deep-dives on embedded systems, Linux BSPs, video streaming, AV sync, protocol design, and low-latency multimedia systems.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "eByteLogic Blog | Embedded Systems, Video Engineering & Low-Latency Streaming Experts",
    description: "Insights and engineering deep-dives on embedded systems, Linux BSPs, video streaming, AV sync, protocol design, and low-latency multimedia systems.",
    url: "https://www.ebytelogic.com/blogs",
    images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "eByteLogic Blog | Embedded Systems, Video Engineering & Low-Latency Streaming Experts",
    description: "Insights and engineering deep-dives on embedded systems, Linux BSPs, video streaming, AV sync, protocol design, and low-latency multimedia systems.",
   }
};

const BlogPage = () => {
  return (
    <div>
      <Blog />
    </div>
  )
}

export default BlogPage
export const runtime = 'edge';
