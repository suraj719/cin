import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allEvents } from "../constants/eventsData";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EventsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative py-24 md:py-32 overflow-hidden bg-pattern-dots"
      data-testid="events-section"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl text-[#fefce8] drop-shadow-[5px_5px_0_#000] rotate-2 inline-block">
            UPCOMING
            <br />
            EVENTS
          </h2>

          {/* Sticker Badge */}
          <div className="sticker-badge absolute top-0 right-0 md:right-20 lg:right-40 rotate-12 bg-[#22d3ee] text-black border-2 border-black shadow-[4px_4px_0_#000] px-4 py-2 font-heading text-sm md:text-base transform animate-pulse">
            DON'T MISS OUT!
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-10 pb-16 pt-10 px-4 hide-scrollbar snap-x snap-mandatory">
          {allEvents.map((event, index) => {
            // Alternating rotations for collage effect
            const rotations = [
              "rotate-1",
              "-rotate-2",
              "rotate-3",
              "-rotate-1",
              "rotate-2",
            ];
            const rotationClass = rotations[index % rotations.length];

            // Dynamic Pastel Colors for Body
            const cardColors = [
              "bg-[#ffcfd2]",
              "bg-[#cbf0f8]",
              "bg-[#d9f99d]",
              "bg-[#ddd6fe]",
            ];
            const cardColor = cardColors[index % cardColors.length];

            // Dynamic Saturated Colors for Header (Matching sequence)
            const headerColors = [
              "bg-[#fda4af]",
              "bg-[#67e8f9]",
              "bg-[#bef264]",
              "bg-[#c4b5fd]",
            ];
            // Using 300-400 shades for headers to keep it readable with black text but distinct
            const headerColor = headerColors[index % headerColors.length];

            return (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className={`flex-shrink-0 w-[300px] md:w-[340px] snap-center group ${rotationClass} transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-50`}
                data-testid={`event-card-${event.id}`}
              >
                {/* 
                   Ticket Shape Container 
                   - Uses drop-shadow filter to create the "border" around the clipped shape 
                   - Clip-path handles the jagged bottom
                */}
                <div className="w-full relative drop-shadow-ticket">
                  <div
                    className={`ticket-clipper ${cardColor} flex flex-col min-h-[400px]`}
                  >
                    {/* Ticket Header */}
                    <div
                      className={`${headerColor} p-4 text-center border-b-2 border-dashed border-black/20 relative`}
                    >
                      {/* Corner Bolts */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-3 w-3 h-3 bg-black rounded-full" />
                      <div className="absolute top-1/2 -translate-y-1/2 right-3 w-3 h-3 bg-black rounded-full" />

                      <h3 className="font-heading text-xl md:text-2xl text-black uppercase tracking-wider">
                        {event.tagline || "EVENT"}
                      </h3>
                    </div>

                    {/* Ticket Body */}
                    <div className="p-6 text-black flex flex-col flex-grow relative">
                      {/* Date */}
                      <div className="flex items-center gap-2 mb-4 font-mono font-bold text-sm uppercase">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>

                      {/* Event Name */}
                      <h2 className="font-heading text-3xl mb-4 leading-tight flex-grow text-black group-hover:text-[#ec4899] transition-colors">
                        {event.name}
                      </h2>

                      {/* Dashed Divider */}
                      <div className="border-b-2 border-dashed border-black/30 my-4 w-full"></div>

                      {/* Venue & Action */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase">
                          <MapPin size={16} />
                          <span>{event.venue}</span>
                        </div>

                        <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white group-hover:bg-[#ec4899] group-hover:text-white transition-colors">
                          <ArrowRight
                            size={20}
                            className="-rotate-45 group-hover:rotate-0 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default EventsSection;
