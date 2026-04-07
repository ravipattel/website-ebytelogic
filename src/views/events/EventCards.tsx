import { eventData } from "@/content/events";
import Image from "next/image";
import Link from "next/link";
import { RiLockLine, RiCalendarLine, RiMapPinLine, RiTimerFlashLine, RiArrowRightLine } from "react-icons/ri";

function EventCard({ event, type }) {
  const isOpen = event.status === "open";
  const isClickable = isOpen && Boolean(event.slug);
  const coverSrc =
    event.details?.content?.banner?.backgroundImageUrl ||
    event.image ||
    "/images/default-event.jpg";

  const CardInner = (
    <div className={`group relative h-full flex flex-col bg-white rounded-2xl border transition-all duration-300 overflow-hidden
      ${isOpen
        ? "border-gray-200 hover:border-[#3078FB] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
        : "border-gray-100 opacity-80 grayscale-[0.5]"
      }`}>

      {/* Banner */}
      <div className="relative h-40 w-full bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <Image
          src={coverSrc}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-[#3078FB] transition-colors">
            {event.title}
          </h3>
        </div>

        {/* Meta Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <RiCalendarLine size={14} className="text-[#3078FB]" />
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <RiTimerFlashLine size={14} className="text-[#3078FB]" />
              <span>{event.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <RiMapPinLine size={14} className="text-[#3078FB]" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className={`text-sm font-semibold flex items-center gap-1 transition-all
            ${isOpen ? "text-[#3078FB] group-hover:gap-2" : "text-gray-400"}`}>
            {event.cta}
            {isOpen && <RiArrowRightLine size={16} />}
          </span>
        </div>
      </div>
    </div>
  );

  if (!isClickable) return <div className="h-full">{CardInner}</div>;

  return (
    <Link href={`/events/${event.slug}`} className="block h-full">
      {CardInner}
    </Link>
  );
}

export default function EventsPage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Events
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Join our community gatherings, workshops, and seminars.
              Stay ahead with our latest upcoming experiences.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <span className="px-4 py-2 bg-white border rounded-full text-xs font-medium text-gray-600">
              {eventData.upcoming.length} Upcoming
            </span>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Upcoming Experiences
            </h2>
            <div className="h-px bg-blue-100 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventData.upcoming.map((event) => (
              <EventCard key={event.id} event={event} type="upcoming" />
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Past Highlights
            </h2>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventData.past.map((event) => (
              <EventCard key={event.id} event={event} type="past" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}