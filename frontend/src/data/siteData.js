import {
  GraduationCap,
  MonitorSmartphone,
  Trophy,
  ShieldCheck,
  Dribbble,
  Sprout,
  FlaskConical,
  Laptop,
  BookOpen,
  Bus,
  Trees,
  School,
} from "lucide-react";

export const SCHOOL = {
  name: "Ordnance Clothing Factory School",
  shortName: "OCF School",
  location: "Avadi, Chennai",
  tagline: "Arise & Shine",
  subTagline: "Shaping Young Minds for a Better Future",
  board: "CBSE Curriculum",
  established: "1974",
  motto: "Arise & Shine",
  phone: "+91 44 2637 0000",
  email: "info@ocfschoolavadi.edu.in",
  address: "Ordnance Clothing Factory Estate, Avadi, Chennai, Tamil Nadu 600054",
  hours: "Mon – Sat: 8:30 AM – 4:00 PM",
};

export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_tamil-education/artifacts/cwum4sea_converted.png";

export const IMAGES = {
  heroExterior:
    "https://images.unsplash.com/photo-1777378543333-b4fb4f96fdd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDB8fHx8MTc4MzUxOTkwNnww&ixlib=rb-4.1.0&q=85",
  building:
    "https://images.unsplash.com/photo-1777378543333-b4fb4f96fdd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDB8fHx8MTc4MzUxOTkwNnww&ixlib=rb-4.1.0&q=85",
  classroom:
    "https://images.pexels.com/photos/8422158/pexels-photo-8422158.jpeg",
  learning:
    "https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg",
  library: "https://images.pexels.com/photos/3747511/pexels-photo-3747511.jpeg",
  geography:
    "https://images.pexels.com/photos/35551010/pexels-photo-35551010.jpeg",
  toddlers: "https://images.unsplash.com/photo-1527822618093-743f3e57977c",
  principal:
    "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const WHY_CHOOSE_US = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    desc: "Highly qualified, caring teachers with decades of combined teaching experience.",
  },
  {
    icon: MonitorSmartphone,
    title: "Smart Classrooms",
    desc: "Digitally-enabled classrooms that make learning interactive and engaging.",
  },
  {
    icon: Trophy,
    title: "Excellent Academic Results",
    desc: "A consistent record of outstanding board results and academic achievements.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    desc: "Secure, CCTV-monitored campus with trained staff ensuring student safety.",
  },
  {
    icon: Dribbble,
    title: "Sports & Cultural Activities",
    desc: "A vibrant calendar of sports, arts, music and cultural programmes.",
  },
  {
    icon: Sprout,
    title: "Holistic Development",
    desc: "Nurturing values, creativity and character alongside academic excellence.",
  },
];

export const FACILITIES = [
  {
    icon: MonitorSmartphone,
    title: "Digital Classrooms",
    desc: "Interactive smart boards in every classroom.",
    image: IMAGES.classroom,
  },
  {
    icon: FlaskConical,
    title: "Science Labs",
    desc: "Well-equipped Physics, Chemistry and Biology laboratories.",
    image: IMAGES.geography,
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    desc: "Modern computers with high-speed internet access.",
    image: IMAGES.learning,
  },
  {
    icon: BookOpen,
    title: "Library",
    desc: "A rich collection of books, journals and reference material.",
    image: IMAGES.library,
  },
  {
    icon: Trees,
    title: "Playground",
    desc: "Spacious grounds for outdoor sports and athletics.",
    image: IMAGES.building,
  },
  {
    icon: Bus,
    title: "Transportation",
    desc: "Safe, GPS-enabled bus service across Avadi and Chennai.",
    image: IMAGES.heroExterior,
  },
];

export const ACADEMIC_SECTIONS = [
  {
    icon: BookOpen,
    title: "Middle School",
    grades: "Grades VI – VIII",
    desc: "A balanced curriculum that develops critical thinking, curiosity and independent study habits.",
    image: IMAGES.classroom,
  },
  {
    icon: School,
    title: "High School",
    grades: "Grades IX – X",
    desc: "Rigorous academics preparing students for board examinations with strong conceptual clarity.",
    image: IMAGES.learning,
  },
];

export const SCHOLASTIC_AREAS = [
  "English — First Language",
  "Hindi — Second Language (Section A)",
  "Tamil — Second Language (Section B)",
  "Hindi — Third Language (Section B)",
  "Tamil — Third Language (Section A)",
  "Mathematics",
  "Science",
  "Social Science",
  "Computer Science / IT",
];

export const TESTIMONIALS = [
  {
    name: "Priya Raghavan",
    role: "Parent, Grade VII",
    quote:
      "The teachers here genuinely care about every child. My daughter has grown in confidence and loves coming to school every day.",
  },
  {
    name: "Arjun Menon",
    role: "Alumnus, Batch 2019",
    quote:
      "OCF School gave me a strong foundation. The values and discipline I learned here still guide me in college and life.",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Parent, Grade II",
    quote:
      "Safe campus, warm environment and excellent communication. I feel completely assured about my son's education.",
  },
  {
    name: "Sanjay Kumar",
    role: "Student, Grade XI",
    quote:
      "The science labs and smart classrooms make learning exciting. Teachers push us to think, not just memorise.",
  },
];

export const REAL_PHOTOS = {
  mainGate: "/images/gallery-01.jpeg",
  shivajiBlock: "/images/gallery-02.jpeg",
  chemistryLab: "/images/gallery-03.jpeg",
  ramanHouseExhibition: "/images/gallery-04.jpeg",
  nehruHouseExhibition: "/images/gallery-05.jpeg",
  outdoorAssembly: "/images/gallery-06.jpeg",
  principalAddress: "/images/gallery-07.jpeg",
  nccParade: "/images/gallery-08.jpeg",
  sportsMeet: "/images/gallery-09.jpeg",
  marchingBand: "/images/gallery-10.jpeg",
  yogaField: "/images/gallery-11.jpeg",
  kabaddiWinners: "/images/gallery-12.jpeg",
  vocationalSession: "/images/gallery-13.jpeg",
  independenceDance: "/images/gallery-14.jpeg",
  yogaPyramid: "/images/gallery-15.jpeg",
  republicDayDance: "/images/gallery-16.jpeg",
  humanPyramid: "/images/gallery-17.jpeg",
  teachersDayDance: "/images/gallery-18.jpeg",
};

export const GALLERY = [
  {
    title: "School Main Gate",
    image: REAL_PHOTOS.mainGate,
    category: "Campus",
  },
  {
    title: "Shivaji Block",
    image: REAL_PHOTOS.shivajiBlock,
    category: "Campus",
  },
  {
    title: "Outdoor Assembly",
    image: REAL_PHOTOS.outdoorAssembly,
    category: "Campus",
  },
  {
    title: "Principal Addressing Students",
    image: REAL_PHOTOS.principalAddress,
    category: "Campus",
  },
  {
    title: "Chemistry Laboratory",
    image: REAL_PHOTOS.chemistryLab,
    category: "Science Exhibition",
  },
  {
    title: "Raman House — Science Exhibition",
    image: REAL_PHOTOS.ramanHouseExhibition,
    category: "Science Exhibition",
  },
  {
    title: "Nehru House — Science Exhibition",
    image: REAL_PHOTOS.nehruHouseExhibition,
    category: "Science Exhibition",
  },
  {
    title: "Vocational Education Session",
    image: REAL_PHOTOS.vocationalSession,
    category: "Classrooms",
  },
  {
    title: "NCC Parade Drill",
    image: REAL_PHOTOS.nccParade,
    category: "Sports",
  },
  {
    title: "Annual Sports Meet",
    image: REAL_PHOTOS.sportsMeet,
    category: "Sports",
  },
  {
    title: "Marching Band Display",
    image: REAL_PHOTOS.marchingBand,
    category: "Sports",
  },
  {
    title: "Yoga on the Field",
    image: REAL_PHOTOS.yogaField,
    category: "Sports",
  },
  {
    title: "Kabaddi Champions",
    image: REAL_PHOTOS.kabaddiWinners,
    category: "Sports",
  },
  {
    title: "Yoga Pyramid Formation",
    image: REAL_PHOTOS.yogaPyramid,
    category: "Sports",
  },
  {
    title: "Human Pyramid Formation",
    image: REAL_PHOTOS.humanPyramid,
    category: "Sports",
  },
  {
    title: "Independence Day Dance",
    image: REAL_PHOTOS.independenceDance,
    category: "Cultural Events",
  },
  {
    title: "Republic Day Dance Performance",
    image: REAL_PHOTOS.republicDayDance,
    category: "Cultural Events",
  },
  {
    title: "Teachers' Day Dance Performance",
    image: REAL_PHOTOS.teachersDayDance,
    category: "Cultural Events",
  },
];

export const CAMPUS_NEWS_FULL = [
  "At present we have 4,909 books in our school library to enrich the knowledge of the students. Apart from this, three leading newspapers and various periodicals are made available to inculcate the habit of reading amongst students.",
  "Monthly PTA meetings for classes VI to X are conducted on the last working day of every month.",
  "Environmental Education, being a part of the curriculum, is emphasized through environment-friendly activities. Students are motivated to be care-takers of the saplings planted in the campus. In connection with the Swachh Bharat Campaign, students are encouraged to maintain cleanliness of their classrooms and surroundings.",
  "Laying stress on the all-round development of the child, co-scholastic activities are encouraged in the school and also evaluated on record.",
  "The school is divided into four houses – Shivaji, Tagore, Raman and Nehru. Co-curricular activities are held regularly, and interschool competitions are conducted to develop healthy co-operation among students and expose their creative talents.",
  "Mass Yoga and Mass Drill are conducted once a week for classes VI to X with the aim of improving the physical and mental well-being of the students.",
  "We are part of the Thiruvallur District Scouts and Guides Association. Regular meetings are conducted every week — 76 students are enrolled and effectively carry out many services and act as volunteers during school functions.",
  "Sports & Games are an integral part of the curriculum. Our school holds an Annual Sports Meet every year on the school campus.",
];

export const CORE_VALUES = [
  { title: "Integrity", desc: "Honesty and strong moral principles in all we do." },
  { title: "Excellence", desc: "A relentless pursuit of quality in learning and life." },
  { title: "Respect", desc: "Valuing every individual, culture and idea." },
  { title: "Discipline", desc: "Building focus, responsibility and self-control." },
  { title: "Compassion", desc: "Kindness and empathy towards the community." },
  { title: "Curiosity", desc: "Encouraging lifelong questioning and discovery." },
];

export const FAQS = [
  {
    q: "What board is the school affiliated to?",
    a: "The school follows the CBSE curriculum (affiliation placeholder). Detailed curriculum information is available on the Academics page.",
  },
  {
    q: "What are the school timings?",
    a: "The school operates Monday to Saturday from 8:30 AM to 4:00 PM. Timings for primary classes may vary slightly.",
  },
  {
    q: "Is transport available?",
    a: "Yes. We offer safe, GPS-enabled bus service covering Avadi and surrounding areas of Chennai.",
  },
  {
    q: "How can I apply for admission?",
    a: "You can begin the process through the Admissions page and submit an inquiry using our online form. Our team will guide you through the next steps.",
  },
  {
    q: "What extracurricular activities are offered?",
    a: "Students can participate in sports, music, dance, art, science clubs and a range of cultural activities throughout the year.",
  },
];

export const ADMISSION_STEPS = [
  { step: "01", title: "Submit Inquiry", desc: "Fill out the online admission inquiry form with student details." },
  { step: "02", title: "Campus Visit", desc: "Visit the campus and meet our admission counsellors." },
  { step: "03", title: "Assessment / Interaction", desc: "A friendly interaction to understand the child's readiness." },
  { step: "04", title: "Confirmation", desc: "Complete documentation and fee payment to confirm the seat." },
];

export const REQUIRED_DOCUMENTS = [
  "Birth Certificate (original + copy)",
  "Previous school Transfer Certificate (for Grade II and above)",
  "Report card of the previous academic year",
  "Passport-size photographs of the student",
  "Aadhaar card copy of student and parents",
  "Address proof of parent / guardian",
];

export const DEPARTMENTS = [
  "Languages (English, Tamil, Hindi)",
  "Mathematics",
  "Science (Physics, Chemistry, Biology)",
  "Social Sciences",
  "Computer Science",
  "Physical Education",
  "Arts & Music",
  "Value Education",
];

export const ANNUAL_EVENTS = [
  "Annual Day Celebration",
  "Sports Day & Athletic Meet",
  "Science & Innovation Exhibition",
  "Cultural & Talent Fest",
  "Independence & Republic Day",
  "Educational Field Trips",
];

export const SCHOOL_STATS = [
  { value: "52+", label: "Years of Service" },
  { value: "303", label: "Students (Class V–X)" },
  { value: "43", label: "Board Batches" },
  { value: "1974", label: "Established" },
];

export const HOUSES = ["Shivaji", "Tagore", "Raman", "Nehru"];

export const CAMPUS_NEWS = [
  {
    title: "Well-Stocked Library",
    desc: "4,909 books along with three leading newspapers and periodicals nurture a strong reading habit among students.",
  },
  {
    title: "Four Houses",
    desc: "Students belong to four houses — Shivaji, Tagore, Raman and Nehru — fostering healthy competition and team spirit.",
  },
  {
    title: "Scouts & Guides",
    desc: "Part of the Thiruvallur District Scouts & Guides Association with 76 enrolled students serving as volunteers.",
  },
  {
    title: "Mass Yoga & Drill",
    desc: "Conducted weekly for classes VI to X to improve the physical and mental well-being of every student.",
  },
  {
    title: "Environmental Education",
    desc: "Students care for saplings on campus and lead Swachh Bharat cleanliness drives in their classrooms and surroundings.",
  },
  {
    title: "Sports & Games",
    desc: "An integral part of the curriculum, with an Annual Sports Meet held every year on the school campus.",
  },
];

export const EXAM_SCHEDULE = [
  { exam: "Unit Test I", month: "July 2026" },
  { exam: "Periodic Test I", month: "August 2026" },
  { exam: "Half Yearly Exam", month: "September 2026" },
  { exam: "Unit Test II", month: "November 2026" },
  { exam: "Periodic Test II", month: "January 2027" },
  { exam: "Annual Exam", month: "March 2027" },
];
