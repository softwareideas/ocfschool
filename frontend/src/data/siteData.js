import {
  GraduationCap,
  Trophy,
  ShieldCheck,
  Dribbble,
  Sprout,
  FlaskConical,
  Laptop,
  BookOpen,
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
  phone: "044 2638 0709",
  email: "ocfschool@rediffmail.com",
  address: "Ordnance Clothing Factory Estate, Avadi, Chennai, Tamil Nadu 600054",
  hours: "Mon – Sat: 8:50 AM – 3:10 PM (2nd Saturday holiday)",
};

export const LOGO_URL = "/images/school-logo.png";

export const IMAGES = {
  heroExterior: "/images/school-main-gate.jpeg",
  building: "/images/shivaji-block.jpeg",
  classroom: "/images/classroom-assessment.jpeg",
  learning: "/images/interactive-learning-session.jpeg",
  library: "/images/library.jpeg",
  geography: "/images/school-main-gate.jpeg",
  toddlers: "/images/national-space-day-assembly.jpeg",
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
    icon: FlaskConical,
    title: "Science Labs",
    desc: "Well-equipped Physics, Chemistry and Biology laboratories.",
    image: "/images/chemistry-laboratory.jpeg",
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
];

export const ACADEMIC_SECTIONS = [
  {
    icon: BookOpen,
    title: "Middle School",
    grades: "Grades VI – VIII",
    desc: "A balanced curriculum that develops critical thinking, curiosity and independent study habits.",
    image: "/images/middle-school.jpg",
  },
  {
    icon: School,
    title: "High School",
    grades: "Grades IX – X",
    desc: "Rigorous academics preparing students for board examinations with strong conceptual clarity.",
    image: "/images/high-school.jpg",
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

export const REAL_PHOTOS = {
  mainGate: "/images/school-main-gate.jpeg",
  shivajiBlock: "/images/shivaji-block.jpeg",
  chemistryLab: "/images/chemistry-laboratory.jpeg",
  ramanHouseExhibition: "/images/raman-house-bulletin-board.jpeg",
  nehruHouseExhibition: "/images/nehru-house-bulletin-board.jpeg",
  outdoorAssembly: "/images/career-guidance.jpeg",
  nccParade: "/images/drug-awareness-pledge.jpeg",
  sportsMeet: "/images/annual-sports-meet.jpeg",
  marchingBand: "/images/marching-band-display.jpeg",
  yogaField: "/images/yoga-on-the-field.jpeg",
  kabaddiWinners: "/images/kabaddi-champions.jpeg",
  vocationalSession: "/images/vocational-education-session.jpeg",
  independenceDance: "/images/independence-day-dance.jpeg",
  yogaPyramid: "/images/yoga-pyramid-formation.jpeg",
  republicDayDance: "/images/republic-day-dance-performance.jpeg",
  humanPyramid: "/images/human-pyramid-formation.jpeg",
  teachersDayDance: "/images/teachers-day-dance-performance.jpeg",
  interactiveLearning: "/images/interactive-learning-session.jpeg",
  tankModelExhibit: "/images/tank-model-exhibit.jpeg",
  artCraftSession: "/images/art-craft-session.jpeg",
  artCraftSketching: "/images/art-craft-sketching.jpeg",
  nationalSpaceDayAssembly: "/images/national-space-day-assembly.jpeg",
  spaceDayRocketExhibition: "/images/space-day-rocket-exhibition.jpeg",
  adityaL1Talk: "/images/aditya-l1-mission-talk.jpeg",
  classroomAssessment: "/images/classroom-assessment.jpeg",
  tributeToScientists: "/images/tribute-to-scientists.jpeg",
  treePlantationDrive: "/images/tree-plantation-drive.jpeg",
  careerGuidanceTalk: "/images/career-guidance-neet-jee-talk.jpeg",
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
    title: "Career Guidance",
    image: REAL_PHOTOS.outdoorAssembly,
    category: "Classrooms",
  },
  {
    title: "Chemistry Laboratory",
    image: REAL_PHOTOS.chemistryLab,
    category: "Science Exhibition",
  },
  {
    title: "Raman House — Bulletin Board",
    image: REAL_PHOTOS.ramanHouseExhibition,
    category: "Classrooms",
  },
  {
    title: "Nehru House — Bulletin Board",
    image: REAL_PHOTOS.nehruHouseExhibition,
    category: "Classrooms",
  },
  {
    title: "Vocational Education Session",
    image: REAL_PHOTOS.vocationalSession,
    category: "Classrooms",
  },
  {
    title: "Drug Awareness Pledge",
    image: REAL_PHOTOS.nccParade,
    category: "Campus",
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
  {
    title: "Interactive Digital Learning",
    image: REAL_PHOTOS.interactiveLearning,
    category: "Classrooms",
  },
  {
    title: "DRDO Tank Model Exhibit",
    image: REAL_PHOTOS.tankModelExhibit,
    category: "Science Exhibition",
  },
  {
    title: "Art & Craft Session",
    image: REAL_PHOTOS.artCraftSession,
    category: "Classrooms",
  },
  {
    title: "Art & Craft — Sketching",
    image: REAL_PHOTOS.artCraftSketching,
    category: "Classrooms",
  },
  {
    title: "National Space Day Assembly",
    image: REAL_PHOTOS.nationalSpaceDayAssembly,
    category: "Science Exhibition",
  },
  {
    title: "National Space Day — Rocket Model Exhibition",
    image: REAL_PHOTOS.spaceDayRocketExhibition,
    category: "Science Exhibition",
  },
  {
    title: "Aditya L1 Mission Talk",
    image: REAL_PHOTOS.adityaL1Talk,
    category: "Science Exhibition",
  },
  {
    title: "Classroom Assessment",
    image: REAL_PHOTOS.classroomAssessment,
    category: "Classrooms",
  },
  {
    title: "Tribute to Indian Scientists",
    image: REAL_PHOTOS.tributeToScientists,
    category: "Science Exhibition",
  },
  {
    title: "Tree Plantation Drive",
    image: REAL_PHOTOS.treePlantationDrive,
    category: "Campus",
  },
  {
    title: "Career Guidance — NEET/JEE Talk",
    image: REAL_PHOTOS.careerGuidanceTalk,
    category: "Classrooms",
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
    a: "The school operates Monday to Saturday from 8:50 AM to 3:10 PM, with the second Saturday of every month as a holiday.",
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
