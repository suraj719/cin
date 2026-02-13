import React, { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { allEvents } from "../constants/eventsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  DollarSign,
  FileText,
  ArrowLeft,
  Mail,
} from "lucide-react";
import { ComicText } from "../registry/magicui/comic-text";

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const event = allEvents.find((e) => e.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".detail-header", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">
            Event Not Found
          </h1>
          <Link to="/" className="text-indigo-400 hover:text-indigo-300">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-pattern-dots"
      data-testid="event-detail-page"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-16 overflow-hidden bg-black/50 backdrop-blur-sm border-b-4 border-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate("/")}
            className="detail-header flex items-center gap-2 text-white hover:text-[#22d3ee] mb-8 transition-colors font-bold bg-black/50 px-4 py-2 rounded-full w-fit backdrop-blur-md border border-white/20"
            data-testid="back-button"
          >
            <ArrowLeft size={20} />
            <span>Back to Events</span>
          </button>

          <div className="detail-header">
            <span
              className={`inline-block px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4 border-2 border-black shadow-[4px_4px_0_#000] ${
                event.category === "Technical"
                  ? "bg-[#ddd6fe] text-black"
                  : "bg-[#cbf0f8] text-black"
              }`}
            >
              {event.category}
            </span>
            <div className="mb-4">
              <ComicText
                fontSize="clamp(3rem, 5vw, 6rem)"
                className="text-white drop-shadow-[5px_5px_0_#000] leading-none"
              >
                {event.name}
              </ComicText>
            </div>
            <p className="text-2xl md:text-3xl text-white font-mono bg-black/60 inline-block px-2">
              {event.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="detail-content card-sassy p-8 md:p-10">
                <h2 className="font-heading text-3xl font-bold text-black mb-6 border-b-4 border-[#22d3ee] inline-block">
                  About the Event
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                  {event.fullDescription}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Rules */}
              <div className="detail-content card-sassy p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <FileText size={28} className="text-indigo-600" />
                  <h2 className="font-heading text-3xl font-bold text-black border-b-4 border-indigo-400 inline-block">
                    Rules & Guidelines
                  </h2>
                </div>
                <ul className="space-y-4">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black mt-1 shadow-[2px_2px_0_#ccc]">
                        {index + 1}
                      </span>
                      <span className="text-slate-800 font-medium text-lg">
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prizes */}
              <div className="detail-content card-sassy p-8 md:p-10 bg-[#fefce8]">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy size={28} className="text-yellow-600" />
                  <h2 className="font-heading text-3xl font-bold text-black border-b-4 border-yellow-400 inline-block">
                    Prizes
                  </h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  {event.prizes.map((prize, index) => (
                    <div
                      key={index}
                      className={`text-center p-6 border-2 border-black bg-white shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-1`}
                    >
                      <div className="text-xs font-black uppercase tracking-wider mb-2 bg-black text-white inline-block px-2 py-1 rotate-2">
                        {index === 0
                          ? "1st Prize"
                          : index === 1
                            ? "2nd Prize"
                            : "3rd Prize"}
                      </div>
                      <div className="text-2xl font-black font-mono text-black mt-2">
                        {prize}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Ticket */}
              <div className="detail-content ticket-clipper bg-[#fff1f2] drop-shadow-ticket relative sticky top-24">
                <div className="p-8 pb-12">
                  <div className="border-b-2 border-dashed border-black/20 pb-4 mb-6 text-center">
                    <h3 className="font-heading text-2xl font-bold text-black">
                      EVENT DETAILS
                    </h3>
                    <div className="text-xs font-mono uppercase text-slate-500">
                      ADMIT ONE
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Calendar
                        size={24}
                        className="text-black flex-shrink-0 mt-1"
                      />
                      <div>
                        <div className="text-xs font-bold uppercase text-slate-500 mb-1">
                          Date & Time
                        </div>
                        <div className="text-black font-bold text-lg">
                          {event.date}
                        </div>
                        <div className="text-slate-600 font-mono">
                          {event.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin
                        size={24}
                        className="text-black flex-shrink-0 mt-1"
                      />
                      <div>
                        <div className="text-xs font-bold uppercase text-slate-500 mb-1">
                          Venue
                        </div>
                        <div className="text-black font-bold text-lg">
                          {event.venue}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Users
                        size={24}
                        className="text-black flex-shrink-0 mt-1"
                      />
                      <div>
                        <div className="text-xs font-bold uppercase text-slate-500 mb-1">
                          Team Size
                        </div>
                        <div className="text-black font-bold text-lg">
                          {event.teamSize}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <DollarSign
                        size={24}
                        className="text-black flex-shrink-0 mt-1"
                      />
                      <div>
                        <div className="text-xs font-bold uppercase text-slate-500 mb-1">
                          Registration Fee
                        </div>
                        <div className="text-black font-bold text-lg">
                          {event.registrationFee}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail
                        size={24}
                        className="text-black flex-shrink-0 mt-1"
                      />
                      <div>
                        <div className="text-xs font-bold uppercase text-slate-500 mb-1">
                          Contact
                        </div>
                        <a
                          href={`mailto:${event.contact}`}
                          className="text-indigo-600 hover:text-indigo-800 font-bold break-all underline decoration-2"
                        >
                          {event.contact}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Register Button */}
                  <a
                    href={`mailto:${event.contact}?subject=Registration for ${event.name}`}
                    className="block w-full mt-8 px-6 py-4 bg-[#22d3ee] text-black border-2 border-black shadow-[4px_4px_0_#000] text-center font-heading text-xl hover:translate-y-1 hover:shadow-none transition-all uppercase"
                    data-testid="register-event-btn"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetailPage;
