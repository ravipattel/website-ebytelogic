import { serviceMetaData } from '@/content/serviceMetaData';
import ServiceDetail from '@/src/views/services/[id]'

export async function generateMetadata({ params }) {
    const { id } = await params;

    let metaTitle = "Service Details | eByteLogic";
    let metaDescription = "Explore our comprehensive service offerings and solutions.";

    if (id === "multimedia-framework") {
        metaTitle = serviceMetaData["multimedia-framework"].title;
        metaDescription = serviceMetaData["multimedia-framework"].description;
    } else if (id === "linux-bsp-android") {
        metaTitle = serviceMetaData["linux-bsp-android"].title;
        metaDescription = serviceMetaData["linux-bsp-android"].description;
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
    };
}

const ServiceDetailsPage = async ({ params }) => {
    const { id } = await params;

    return (
        <ServiceDetail serviceid={id} />
    );
};

export default ServiceDetailsPage;

export const runtime = 'edge';
