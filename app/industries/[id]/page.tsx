import React from 'react'
import IndustryDetail from '@/src/views/industries/[id]'
import { industryData, industryMetaData } from '@/content/industryData'
import JsonLd from '@/src/components/JsonLd'

export async function generateMetadata({ params }) {
  const { id } = await params

  let metaTitle = "eByteLogic | Industry Solutions & Expertise"
  let metaDescription = "Explore eByteLogic's industry-specific solutions across embedded software, multimedia, and Linux BSP development for wearables, broadcasting, semiconductors, and more."

  if (id === 'smart-displays-and-hmis') {
    metaTitle = industryMetaData["smart-displays-and-hmis"].title;
    metaDescription = industryMetaData["smart-displays-and-hmis"].description;
  } else if (id === 'media-broadcasting-multimedia') {
    metaTitle = industryMetaData["media-broadcasting-multimedia"].title;
    metaDescription = industryMetaData["media-broadcasting-multimedia"].description;
  } else if (id === 'edge-ai-vision-systems') {
    metaTitle = industryMetaData["edge-ai-vision-systems"].title;
    metaDescription = industryMetaData["edge-ai-vision-systems"].description;
  } else if (id === 'networking-and-telecom-gateways') {
    metaTitle = industryMetaData["networking-and-telecom-gateways"].title;
    metaDescription = industryMetaData["networking-and-telecom-gateways"].description;
  } else if (id === 'industrial-automation-iiot') {
    metaTitle = industryMetaData["industrial-automation-iiot"].title;
    metaDescription = industryMetaData["industrial-automation-iiot"].description;
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
  const data= industryData.find(item => item.id === id);
  
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

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data?.faqsData?.map((item:any) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
    "@type": "Answer",
    "text": item.a,
    },
    })),
    };

  return (
    <>
      <JsonLd json={breadCrumbSchema} />
      <JsonLd json={faqPageSchema} />
      <IndustryDetail industryId={id} />
    </>
  )
}

export default IndustryDetailPage
export const runtime = 'edge';