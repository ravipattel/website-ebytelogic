import React from 'react'
import IndustryDetail from '@/src/views/industries/[id]'
import { industryMetaData } from '@/content/industryMetaData'
import JsonLd from '@/src/components/JsonLd'

export async function generateMetadata({ params }) {
  const { id } = await params

  let metaTitle = "eByteLogic | Industry Solutions & Expertise"
  let metaDescription = "Explore eByteLogic's industry-specific solutions across embedded software, multimedia, and Linux BSP development for wearables, broadcasting, semiconductors, and more."

  if (id === 'smarter-power-efficient-wearables') {
    metaTitle = industryMetaData["smarter-power-efficient-wearables"].title;
    metaDescription = industryMetaData["smarter-power-efficient-wearables"].description;
  } else if (id === 'media-broadcasting-multimedia') {
    metaTitle = industryMetaData["media-broadcasting-multimedia"].title;
    metaDescription = industryMetaData["media-broadcasting-multimedia"].description;
  } else if (id === 'semiconductor-platforms') {
    metaTitle = industryMetaData["semiconductor-platforms"].title;
    metaDescription = industryMetaData["semiconductor-platforms"].description;
  } else if (id === 'fire-alarm-panels-control-systems') {
    metaTitle = industryMetaData["fire-alarm-panels-control-systems"].title;
    metaDescription = industryMetaData["fire-alarm-panels-control-systems"].description;
  } else if (id === 'aerospace-remote-sensing-systems') {
    metaTitle = industryMetaData["aerospace-remote-sensing-systems"].title;
    metaDescription = industryMetaData["aerospace-remote-sensing-systems"].description;
  } else if (id === 'industrial-automation-iot-gateways') {
    metaTitle = industryMetaData["industrial-automation-iot-gateways"].title;
    metaDescription = industryMetaData["industrial-automation-iot-gateways"].description;
  }

  const url = `/industries/${id}`;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: url,
      images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  }
}


const IndustryDetailPage = async({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const metaTitle = industryMetaData[id]?.title || "eByteLogic Industries";
  
  const breadCrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ebytelogic.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://www.ebytelogic.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": metaTitle,
        "item": `https://www.ebytelogic.com/industries/${id}`
      }
    ]
  };

  return (
    <>
      <JsonLd json={breadCrumbSchema} />
      <IndustryDetail industryId={id} />
    </>
  )
}

export default IndustryDetailPage
export const runtime = 'edge';