import { eventData } from "@/content/events";
import JsonLd from "@/src/components/JsonLd";
import Exhibition from "@/src/views/events/[id]";
import { notFound } from "next/navigation";
import React from "react";

function findEventBySlug(slug: string) {
  return [...eventData.upcoming, ...eventData.past].find((e) => e.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = findEventBySlug(id);

  if (!event) {
    return {
      title: "Event Not Found | eByteLogic",
      description: "The requested event could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const metaTitle =
    event.metaTitle ?? `${event.title} | eByteLogic`;
  const metaDescription =
    event.metaDescription ??
    `Learn about ${event.title} and other eByteLogic events, talks, and exhibitions.`;
  const path = `/events/${event.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: path,
      images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

const EventDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const event = findEventBySlug(id);
  if (!event) return notFound();

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
        "name": "Events",
        "item": "https://www.ebytelogic.com/events"
      },
        {
          "@type": "ListItem",
          "position": 3,
          "name": event?.title,
          "item": `https://www.ebytelogic.com/events/${event.slug}`
        }
    ]
  }
  
  if (event.details?.kind === "exhibition" || event.details?.kind === "webinar") {
    return (
      <>
        <JsonLd json={breadCrumbList} />
        <Exhibition data={event?.details?.content} />
      </>
    );
  }

  return notFound();
};

export default EventDetailsPage;

export const runtime = 'edge';