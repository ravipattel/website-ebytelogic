import ServiceDetailsInfo from "./ServiceDetailsInfo";

const ServiceDetails = ({
  serviceid,
  subServiceId,
}: {
  serviceid: string;
  subServiceId?: string;
}) => {
  return (
    <ServiceDetailsInfo
      meta={serviceid}
      subServiceId={subServiceId}
    />
  );
};

export default ServiceDetails;

export const runtime = 'edge';