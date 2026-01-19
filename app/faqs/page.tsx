import { embeddedLinuxFaqs, embeddedTestingFaqs, generalFaqs, iotMobileIntegrationFaqs, multimediaFaqs } from '@/content/pageFaqData';
import JsonLd from '@/src/components/JsonLd';
import Faqs from '@/src/views/faqs'
import React from 'react'

export const metadata = {
  title: "FAQs | eByteLogic Embedded Systems & Video Engineering",
  description: "Frequently asked questions about eByteLogic's embedded software, multimedia solutions, and consulting services.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs | eByteLogic Embedded Systems & Video Engineering",
    description: "Frequently asked questions about eByteLogic's embedded software, multimedia solutions, and consulting services.",
    url: "https://www.ebytelogic.com/faqs",
    images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | eByteLogic Embedded Systems & Video Engineering",
    description: "Frequently asked questions about eByteLogic's embedded software, multimedia solutions, and consulting services.",
  },
};

const breadCrumbList = {
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
      "name": "FAQ",
      "item": "https://www.ebytelogic.com/faqs"
    }
  ]
}

const faqsData = [
  ...generalFaqs,
  ...multimediaFaqs,
  ...embeddedLinuxFaqs,
  ...embeddedTestingFaqs,
  ...iotMobileIntegrationFaqs,
];

const fetchFaqsData = () => {
  return faqsData.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
};

const FaqsPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fetchFaqsData().map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <div>
      <JsonLd json={breadCrumbList} />
      <JsonLd json={faqSchema} />
      <Faqs />
    </div>
  )
}

export default FaqsPage
