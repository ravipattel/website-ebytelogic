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
    } else if (id === "embedded-software") {
        metaTitle = serviceMetaData["embedded-software"].title;
        metaDescription = serviceMetaData["embedded-software"].description;
    } else if (id === "av-protocol") {
        metaTitle = serviceMetaData["av-protocol"].title;
        metaDescription = serviceMetaData["av-protocol"].description;
    } else if (id === "qa-validation") {
        metaTitle = serviceMetaData["qa-validation"].title;
        metaDescription = serviceMetaData["qa-validation"].description;
    } else if (id === "iot-integration") {
        metaTitle = serviceMetaData["iot-integration"].title;
        metaDescription = serviceMetaData["iot-integration"].description;
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
