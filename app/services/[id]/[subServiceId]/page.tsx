import { serviceData } from "@/content/serviceData";
import { subServiceMetaData } from "@/content/subServiceMetaData";
import JsonLd from "@/src/components/JsonLd";
import ServiceDetails from "@/src/views/services/[id]";

export async function generateMetadata({ params }: { params: Promise<{ id: string; subServiceId?: string }> }) {
    const { id, subServiceId } = await params;

    let metaTitle = "Service Details | eByteLogic";
    let metaDescription = "Explore our comprehensive service offerings and solutions.";

    if (subServiceId && subServiceMetaData[subServiceId]) {
        metaTitle = subServiceMetaData[subServiceId].title;
        metaDescription = subServiceMetaData[subServiceId].description;
    } 
    else if (subServiceMetaData[id]) {
        metaTitle = subServiceMetaData[id].title;
        metaDescription = subServiceMetaData[id].description;
    }

    const url = subServiceId ? `/services/${id}/${subServiceId}` : `/services/${id}`;

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


const SubServicePage = async ({ params }: { params: Promise<{ id: string; subServiceId: string }> }) => {

  const { id, subServiceId } = await params;
  const faqItems = fetchFaqsData(subServiceId);
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

  return (
    <>
      <JsonLd json={faqSchema} />
      <ServiceDetails
        serviceid={id}
        subServiceId={subServiceId}
      />
    </>
  );
};

export default SubServicePage;
export const runtime = 'edge';
