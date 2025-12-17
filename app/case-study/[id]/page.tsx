import CaseStudyDetails from '@/src/views/case-study/[id]'
import React from 'react'
import { caseStudyMetaData } from '@/content/casestudyMetaData'
import JsonLd from '@/src/components/JsonLd';

export async function generateMetadata({ params }) {
  const { id } = await params;

  let metaTitle = "eByteLogic | Case Studies ";
  let metaDescription = "Explore real-world implementations and technical achievements from eByteLogic's embedded software and multimedia solutions.";

  if (id === "reducing-wearable-display-latency") {
    metaTitle = caseStudyMetaData["reducing-wearable-display-latency"].title;
    metaDescription = caseStudyMetaData["reducing-wearable-display-latency"].description;
  } else if (id === "bypassing-proprietary-audio-pipeline") {
    metaTitle = caseStudyMetaData["bypassing-proprietary-audio-pipeline"].title;
    metaDescription = caseStudyMetaData["bypassing-proprietary-audio-pipeline"].description;
  } else if (id === "broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency") {
    metaTitle = caseStudyMetaData["broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency"].title;
    metaDescription = caseStudyMetaData["broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency"].description;
  } else if (id === "u-boot-logo-for-IMX8MQ") {
    metaTitle = caseStudyMetaData["u-boot-logo-for-IMX8MQ"].title;
    metaDescription = caseStudyMetaData["u-boot-logo-for-IMX8MQ"].description;
  } else if (id === "multi-platform-driver-development-uBoot-customization") {
    metaTitle = caseStudyMetaData["multi-platform-driver-development-uBoot-customization"].title;
    metaDescription = caseStudyMetaData["multi-platform-driver-development-uBoot-customization"].description;
  } else if (id === "ndi-protocol-integration-inremote-recorder-player") {
    metaTitle = caseStudyMetaData["ndi-protocol-integration-inremote-recorder-player"].title;
    metaDescription = caseStudyMetaData["ndi-protocol-integration-inremote-recorder-player"].description;
  } else if (id === "rapid-lcd-touchscreen-bring-up-for-telematics-display") {
    metaTitle = caseStudyMetaData["rapid-lcd-touchscreen-bring-up-for-telematics-display"].title;
    metaDescription = caseStudyMetaData["rapid-lcd-touchscreen-bring-up-for-telematics-display"].description;
  } else if (id === "secure-mcu-firmware-upgrade-via-canopen") {
    metaTitle = caseStudyMetaData["secure-mcu-firmware-upgrade-via-canopen"].title;
    metaDescription = caseStudyMetaData["secure-mcu-firmware-upgrade-via-canopen"].description;
  } else if (id === "hdmi-multiview-player") {
    metaTitle = caseStudyMetaData["hdmi-multiview-player"].title;
    metaDescription = caseStudyMetaData["hdmi-multiview-player"].description;
  } else if (id === "sub-100ms-latency-in-uav-video-streaming") {
    metaTitle = caseStudyMetaData["sub-100ms-latency-in-uav-video-streaming"].title;
    metaDescription = caseStudyMetaData["sub-100ms-latency-in-uav-video-streaming"].description;
  } else if (id === "can-to-modbus-bridge") {
    metaTitle = caseStudyMetaData["can-to-modbus-bridge"].title;
    metaDescription = caseStudyMetaData["can-to-modbus-bridge"].description;
  } else if (id === "yocto-migration-for-safety-panel") {
    metaTitle = caseStudyMetaData["yocto-migration-for-safety-panel"].title;
    metaDescription = caseStudyMetaData["yocto-migration-for-safety-panel"].description;
  } else if (id === "yocto-buildroot-migration") {
    metaTitle = caseStudyMetaData["yocto-buildroot-migration"].title;
    metaDescription = caseStudyMetaData["yocto-buildroot-migration"].description;
  } else if (id === "multi-master-i2c-problem-resolution") {
    metaTitle = caseStudyMetaData["multi-master-i2c-problem-resolution"].title;
    metaDescription = caseStudyMetaData["multi-master-i2c-problem-resolution"].description;
  } else if (id === "multi-os-bsp-porting-and-boot-time-optimization") {
    metaTitle = caseStudyMetaData["multi-os-bsp-porting-and-boot-time-optimization"].title;
    metaDescription = caseStudyMetaData["multi-os-bsp-porting-and-boot-time-optimization"].description;
  } else if (id === "unified-yocto-build-environment-for-multi-SoM-product-lines") {
    metaTitle = caseStudyMetaData["unified-yocto-build-environment-for-multi-SoM-product-lines"].title;
    metaDescription = caseStudyMetaData["unified-yocto-build-environment-for-multi-SoM-product-lines"].description;
  } else if (id === "low-cost-android-ott-tv-box-development") {
    metaTitle = caseStudyMetaData["low-cost-android-ott-tv-box-development"].title;
    metaDescription = caseStudyMetaData["low-cost-android-ott-tv-box-development"].description;
  }

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `/case-study/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}


const CaseStudyDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const metaTitle = caseStudyMetaData[id]?.title || "eByteLogic Case Studies";

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
        "name": "Case Studies",
        "item": "https://www.ebytelogic.com/case-study"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": metaTitle,
        "item": `https://www.ebytelogic.com/case-study/${id}`
      }
    ]
  };


  return (
    <>
      <JsonLd json={breadCrumbSchema} />
      <CaseStudyDetails />
    </>
  )
}

export default CaseStudyDetailPage

export const runtime = 'edge';