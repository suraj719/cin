import React, { useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { allEvents } from "../constants/eventsData";

gsap.registerPlugin(ScrollTrigger);

const EventsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.from(".event-title-anim", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Sort events by date
  const sortedEvents = useMemo(() => {
    const events = [...allEvents];
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    return events;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#030712] relative overflow-hidden"
      id="events"
    >
      {/* Sticker Badge */}
      <div className="hidden md:block absolute top-10 right-10 sticker-badge rotate-12 bg-yellow-400 text-black p-4 text-xl z-20 shadow-[6px_6px_0_#000]">
        DON'T MISS OUT!
      </div>

      <div className="py-20 bg-pattern-dots border-b-4 border-black">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="font-heading text-5xl md:text-8xl text-white mb-6 event-title-anim drop-shadow-[6px_6px_0_#000]">
            UPCOMING <span className="text-[#ec4899]">EVENTS</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto event-title-anim font-mono">
            Join the biggest tech fest of the year. Competitions, workshops, and
            unlimted fun awaiting you.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-10 pb-12 pt-4 px-4 hide-scrollbar snap-x snap-mandatory">
          {sortedEvents.map((event, index) => {
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
            const headerColor = headerColors[index % headerColors.length];

            return (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className={`flex-shrink-0 w-[320px] md:w-[360px] snap-center group ${rotationClass} transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-50`}
                data-testid={`event-card-${event.id}`}
              >
                <div className="w-full relative drop-shadow-ticket">
                  <div
                    className={`ticket-clipper ${cardColor} flex flex-col min-h-[400px]`}
                  >
                    {/* Ticket Header */}
                    <div
                      className={`${headerColor} p-4 text-center border-b-2 border-dashed border-black/20 relative`}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 left-3 w-3 h-3 bg-black rounded-full" />
                      <div className="absolute top-1/2 -translate-y-1/2 right-3 w-3 h-3 bg-black rounded-full" />
                      <h3 className="font-heading text-xl md:text-2xl text-black uppercase tracking-wider">
                        {event.tagline || "EVENT"}
                      </h3>
                    </div>

                    {/* Ticket Body */}
                    <div className="p-6 text-black flex flex-col flex-grow relative">
                      <div className="flex items-center gap-2 mb-4 font-mono font-bold text-sm uppercase">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>

                      <h2 className="font-heading text-3xl mb-4 leading-tight flex-grow text-black group-hover:text-[#ec4899] transition-colors">
                        {event.name}
                      </h2>

                      <div className="border-b-2 border-dashed border-black/30 my-4 w-full"></div>

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
    </section>
  );
};

export default EventsSection;
