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
    } else if (id === "embedded-software-development") {
        metaTitle = serviceMetaData["embedded-software-development"].title;
        metaDescription = serviceMetaData["embedded-software-development"].description;
    } else if (id === "av-protocol") {
        metaTitle = serviceMetaData["av-protocol"].title;
        metaDescription = serviceMetaData["av-protocol"].description;
    } else if (id === "embedded-software-testing") {
        metaTitle = serviceMetaData["embedded-software-testing"].title;
        metaDescription = serviceMetaData["embedded-software-testing"].description;
    } else if (id === "iot-integration-solutions") {
        metaTitle = serviceMetaData["iot-integration-solutions"].title;
        metaDescription = serviceMetaData["iot-integration-solutions"].description;
    }

    return {
        title: metaTitle,
        description: metaDescription,
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: `/services/${id}`,
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
        }
    };
}

const ServiceDetailsPage = async ({ params }) => {
    const { id } = await params;
    const metaTitle = serviceMetaData[id]?.title || "eByteLogic Services";

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
        </>
    );
};

export default ServiceDetailsPage;

export const runtime = 'edge';
