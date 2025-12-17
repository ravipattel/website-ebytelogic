import React from 'react'
import ContactUs from '@/src/views/contact-us'
import JsonLd from '@/src/components/JsonLd';

export const metadata = {
  title: "Contact eByteLogic | Embedded Systems & Video Engineering Experts",
  description: "Get in touch with eByteLogic's team of embedded software and multimedia engineering experts for custom solutions and consulting services."
};

const breadCrumbSchema={
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
      "name": "Contact Us",
      "item": "https://www.ebytelogic.com/contact-us"
    }
  ]
}

const ContactUsPage = () => {
  return (
    <div>
      <JsonLd json={breadCrumbSchema} />
      <ContactUs />
    </div>
  )
}

export default ContactUsPage
