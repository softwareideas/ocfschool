import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Quote,
} from "lucide-react";
import {
  SCHOOL,
  IMAGES,
  WHY_CHOOSE_US,
  FACILITIES,
  ACADEMIC_SECTIONS,
  GALLERY,
  SCHOOL_STATS,
  CAMPUS_NEWS,
} from "../data/siteData";
import Reveal from "../components/common/Reveal";
import { SectionHeading } from "../components/common/PageParts";
import { usePageMeta } from "../hooks/usePageMeta";

const Home = () => {
  usePageMeta({
    title: "OCF School Avadi | Ordnance Clothing Factory School, Chennai",
    description:
      "OCF School (Ordnance Clothing Factory School), Avadi, Chennai — a CBSE-affiliated school under the Ministry of Defence offering Primary to Higher Secondary education since 1974.",
    path: "/",
  });

  return (
    <div data-testid="home-page">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroExterior}
            alt="School campus"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            {SCHOOL.location} · Est. {SCHOOL.established}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {SCHOOL.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-xl text-lg font-medium text-cream/90 md:text-xl"
          >
            <span className="font-[Lora] italic text-gold">
              “{SCHOOL.motto}”
            </span>{" "}
            — {SCHOOL.subTagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="/academics"
              data-testid="hero-apply-button"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-maroon hover:text-white"
            >
              Explore Academics <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-contact-button"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-navy"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={IMAGES.classroom}
                alt="Students in classroom"
                className="w-full rounded-2xl object-cover shadow-[0_20px_50px_rgb(11,37,69,0.15)]"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy px-7 py-5 text-white shadow-xl sm:block">
                <p className="font-[Lora] text-3xl font-bold text-gold">52+</p>
                <p className="text-xs uppercase tracking-wide text-cream/80">
                  Years of Service
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading
              eyebrow="About Our School"
              title="A legacy of learning since 1974"
            />
            <p className="mt-5 text-base leading-relaxed text-[#4B5563]">
              OCF School was started in 1974 as a departmental school following
              the CBSE curriculum, to serve the educational needs of the wards
              of OCF employees. For over 52 years, the school has rendered
              excellent service by providing quality education, with the
              significant support of the Deputy Director General, Defence Field
              Unit Avadi (DFUAV) and other officers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              At present the school has a strength of 303 students from Class VI
              to X (two sections each), guided by 13 permanent teachers and 4
              honorarium teachers. The first batch of Class X passed out in
              1983, and in 2025–26 our 43rd batch appeared for the X Board
              Examination. Our alumni are spread across the world in diverse
              fields.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SCHOOL_STATS.map((s) => (
                <div
                  key={s.label}
                  data-testid={`about-stat-${s.label}`}
                  className="rounded-xl border border-navy/5 bg-white p-4 text-center"
                >
                  <p className="font-[Lora] text-2xl font-bold text-maroon">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-[#4B5563]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              data-testid="about-read-more-button"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-maroon"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why Choose Us"
              title="Reasons families trust our school"
              description="We combine strong academics with a caring, safe and inspiring environment for every learner."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  data-testid={`why-choose-card-${i}`}
                  className="group h-full rounded-2xl border border-navy/5 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(11,37,69,0.1)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-maroon group-hover:text-white">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Our Facilities
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                World-class infrastructure for holistic learning
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div
                  data-testid={`facility-card-${i}`}
                  className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academics */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Academics"
            title="Education for every stage of growth"
            description="Structured learning through the middle and high school years — Classes VI to X."
          />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {ACADEMIC_SECTIONS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div
                data-testid={`academic-card-${i}`}
                className="group h-full overflow-hidden rounded-2xl border border-navy/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(11,37,69,0.1)]"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    {a.grades}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {a.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Campus News at a Glance */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Campus Life"
              title="Campus news at a glance"
              description="A vibrant campus that nurtures reading, discipline, service and all-round development."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAMPUS_NEWS.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.07}>
                <div
                  data-testid={`campus-news-${i}`}
                  className="h-full rounded-2xl border border-navy/5 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(11,37,69,0.1)]"
                >
                  <span className="font-[Lora] text-2xl font-bold text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {n.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Notice */}
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center sm:px-12 lg:py-16">
            <div className="absolute inset-0 opacity-10">
              <img
                src={IMAGES.learning}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Admissions Notice
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold text-white sm:text-3xl">
                Classes V to X
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-cream/85">
                Presently, OCF School, Avadi is running from Standard V to
                Standard X.
              </p>
              <Link
                to="/contact"
                data-testid="cta-contact-button"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-maroon hover:text-white"
              >
                Contact the School Office <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Gallery Preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Gallery"
              title="Glimpses of life at OCF School"
            />
            <Link
              to="/gallery"
              data-testid="gallery-view-all-button"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div
                data-testid={`gallery-preview-${i}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-80" />
                <p className="absolute bottom-4 left-5 text-lg font-semibold text-white">
                  {g.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Get In Touch"
              title="We would love to hear from you"
              description="Have questions about admissions, curriculum or campus life? Reach out and our team will be glad to help."
            />
            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: "Address", value: SCHOOL.address },
                { icon: Phone, label: "Phone", value: SCHOOL.phone },
                { icon: Mail, label: "Email", value: SCHOOL.email },
              ].map((c) => (
                <div key={c.label} className="flex gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-maroon">
                      {c.label}
                    </p>
                    <p className="mt-0.5 text-navy">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              data-testid="contact-preview-button"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-maroon"
            >
              Contact Page <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              data-testid="home-contact-map"
              className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-navy/10"
            >
              <iframe
                title="Ordnance Clothing Factory School, Avadi location map"
                src="https://www.google.com/maps?q=Ordnance%20Clothing%20Factory%20School%2C%20Avadi%2C%20Chennai&z=15&output=embed"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
