export const technicalEvents = [
  {
    id: "hackathon",
    name: "Hackathon",
    tagline: "24 Hours of Innovation",
    description:
      "Compete in an intense 24-hour coding marathon. Build innovative solutions.",
    fullDescription:
      "Join us for the most anticipated coding event! This 24-hour hackathon challenges you to create groundbreaking solutions.",
    date: "March 13, 2026",
    time: "10:00 AM Onwards",
    venue: "Main Block",
    category: "Technical",
    teamSize: "2-4 members",
    prizes: ["₹50,000", "₹30,000", "₹20,000"],
    rules: ["Teams of 2-4", "Original code only"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    registrationFee: "₹500",
    contact: "hackathon@ciencia.in",
  },
  {
    id: "webathon",
    name: "Webathon",
    tagline: "Design the Future Web",
    description: "Showcase your web development skills under time pressure.",
    fullDescription:
      "Design and develop a fully functional, responsive website.",
    date: "March 13, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Computer Lab 1",
    category: "Technical",
    teamSize: "1-2 members",
    prizes: ["₹25,000", "₹15,000"],
    rules: ["Responsive design", "Deployment required"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    registrationFee: "₹300",
    contact: "webathon@ciencia.in",
  },
  {
    id: "technical-symposium",
    name: "CIENCIA 2K26 (Tech)",
    tagline: "Technical Symposium",
    description: "The main technical fest comprising various competitions.",
    fullDescription:
      "A day full of technical excellence, paper presentations, and coding challenges.",
    date: "March 13, 2026",
    time: "9:00 AM - 5:00 PM",
    venue: "Auditorium",
    category: "Technical",
    teamSize: "Various",
    prizes: ["Exciting Cash Prizes"],
    rules: ["College ID mandatory"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    registrationFee: "Varies",
    contact: "tech@ciencia.in",
  },
];

export const nonTechnicalEvents = [
  {
    id: "flash-mob",
    name: "Flash Mob",
    tagline: "Dance & Surprise",
    description: "A spontaneous dance performance to kickstart the fest vibes.",
    fullDescription:
      "Witness the energy and rhythm as students come together for a spectacular flash mob.",
    date: "March 7, 2026",
    time: "4:00 PM",
    venue: "Open Air Theatre",
    category: "Pre-Fest",
    teamSize: "Group",
    prizes: ["N/A"],
    rules: ["Open to all"],
    image:
      "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=800&q=80",
    registrationFee: "Free",
    contact: "cultural@ciencia.in",
  },
  {
    id: "5k-run",
    name: "5K Run",
    tagline: "Run for a Cause",
    description: "Join us for a healthy morning run to promote fitness.",
    fullDescription:
      "Start your day with energy! The 5K run is open to all students and faculty.",
    date: "March 8, 2026",
    time: "6:00 AM",
    venue: "Campus Grounds",
    category: "Pre-Fest",
    teamSize: "Individual",
    prizes: ["Medals & Certificates"],
    rules: ["Sports attire mandatory"],
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    registrationFee: "₹100",
    contact: "sports@ciencia.in",
  },
  {
    id: "cultural-fest",
    name: "CIENCIA 2K26 (Non-Tech)",
    tagline: "Cultural Extravaganza",
    description: "Music, Dance, and Art competitions.",
    fullDescription:
      "Unleash your creative side with singing, dancing, and art competitions.",
    date: "March 14, 2026",
    time: "10:00 AM Onwards",
    venue: "Main Stage",
    category: "Cultural",
    teamSize: "Various",
    prizes: ["Trophies & Cash"],
    rules: ["Decency in performance"],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    registrationFee: "Varies",
    contact: "cultural@ciencia.in",
  },
  {
    id: "traditional-day",
    name: "Traditional Day",
    tagline: "Celebrating Culture",
    description: "Showcase the rich heritage with traditional attire.",
    fullDescription:
      "A vibrant display of our diverse culture through traditional clothing and ramp walks.",
    date: "March 14, 2026",
    time: "All Day",
    venue: "Campus",
    category: "Cultural",
    teamSize: "Individual",
    prizes: ["Best Dressed Awards"],
    rules: ["Traditional attire only"],
    image:
      "https://images.unsplash.com/photo-1596464716127-f9a0639b9154?w=800&q=80",
    registrationFee: "Free",
    contact: "cultural@ciencia.in",
  },
  {
    id: "annual-day",
    name: "Annual Day",
    tagline: "Grand Finale",
    description: "The grand closure of the academic year fest.",
    fullDescription:
      "Evening filled with official addresses, prize distributions, and pro-shows.",
    date: "March 14, 2026",
    time: "5:00 PM Onwards",
    venue: "Main Auditorium",
    category: "Cultural",
    teamSize: "N/A",
    prizes: ["N/A"],
    rules: ["Entry by ID only"],
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    registrationFee: "Free",
    contact: "admin@ciencia.in",
  },
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];

export const faqs = [
  {
    question: "Who can participate in Ciencia 2k26?",
    answer:
      "The fest is open to all students from recognized colleges and universities. Some specific events might be restricted to our college students only.",
  },
  {
    question: "How do I register for events?",
    answer:
      "You can register for individual events through the specific event pages on this website. On-spot registration might be available for select events.",
  },
  {
    question: "Is accommodation provided?",
    answer:
      "Limited accommodation is available for outstation participants on a first-come-first-serve basis.",
  },
  {
    question: "What is the entry fee?",
    answer:
      "Entry to the fest grounds is free. However, participation in specific competitions and workshops requires a registration fee as mentioned in the event details.",
  },
  {
    question: "Are there cash prizes?",
    answer:
      "Yes! Most technical and non-technical competitions have exciting cash prizes and certificates for winners.",
  },
];

export const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "Festival Coordinator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: { linkedin: "#", twitter: "#", email: "arjun@ciencia2k26.in" },
  },
  {
    name: "Priya Sharma",
    role: "Technical Head",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    social: { linkedin: "#", twitter: "#", email: "priya@ciencia2k26.in" },
  },
  {
    name: "Rahul Verma",
    role: "Events Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    social: { linkedin: "#", twitter: "#", email: "rahul@ciencia2k26.in" },
  },
  {
    name: "Ananya Iyer",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    social: { linkedin: "#", twitter: "#", email: "ananya@ciencia2k26.in" },
  },
  {
    name: "Vikram Singh",
    role: "Sponsorship Head",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: { linkedin: "#", twitter: "#", email: "vikram@ciencia2k26.in" },
  },
  {
    name: "Sneha Patel",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    social: { linkedin: "#", twitter: "#", email: "sneha@ciencia2k26.in" },
  },
];

export const sponsors = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    tier: "platinum",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    tier: "gold",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    tier: "gold",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg",
    tier: "gold",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    tier: "silver",
  },
];
