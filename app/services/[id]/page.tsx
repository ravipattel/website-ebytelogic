import { serviceData } from '@/content/serviceData';
import { serviceMetaData } from '@/content/serviceMetaData';
import JsonLd from '@/src/components/JsonLd';
import ServiceDetail from '@/src/views/services/[id]'

export async function generateMetadata({ params }) {
    const { id } = await params;

    let metaTitle = "Service Details | eByteLogic";
    let metaDescription = "Explore our comprehensive service offerings and solutions.";

    if (id === "multimedia-framework") {
        metaTitle = serviceMetaData["multimedia-framework"].title;
        metaDescription = serviceMetaData["multimedia-framework"].description;
    } else if (id === "embedded-application-development") {
        metaTitle = serviceMetaData["embedded-application-development"].title;
        metaDescription = serviceMetaData["embedded-application-development"].description;
    } else if (id === "embedded-bsp-development") {
        metaTitle = serviceMetaData["embedded-bsp-development"].title;
        metaDescription = serviceMetaData["embedded-bsp-development"].description;
    } else if (id === "multi-platform-qa-test-automation") {
        metaTitle = serviceMetaData["multi-platform-qa-test-automation"].title;
        metaDescription = serviceMetaData["multi-platform-qa-test-automation"].description;
    } else if (id === "linux-bsp-development") {
        metaTitle = serviceMetaData["linux-bsp-development"].title;
        metaDescription = serviceMetaData["linux-bsp-development"].description;
    }
    else if (id === "android-bsp-development") {
        metaTitle = serviceMetaData["android-bsp-development"].title;
        metaDescription = serviceMetaData["android-bsp-development"].description;
    }

    const url = `/services/${id}`;
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
        }
    };
}

const fetchFaqsData = (id: string) => {
  return serviceData.find((service) => service.id === id)?.faqs.map((faq) => ({
    q: faq.q,
    a: faq.a,
  }));
};

const ServiceDetailsPage = async ({ params }) => {
    const { id } = await params;
    const metaTitle = serviceMetaData[id]?.title || "eByteLogic Services";
    const faqItems = fetchFaqsData(id);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems?.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
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
                "name": "Services",
                "item": "https://www.ebytelogic.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": metaTitle,
                "item": `https://www.ebytelogic.com/services/${id}`
            }
        ]
    }

    return (
        <>
            <JsonLd json={breadCrumbList} />
            <ServiceDetail serviceid={id} />
            <JsonLd json={faqSchema} />
    
        </>
    );
};

export default ServiceDetailsPage;

export const runtime = 'edge';
