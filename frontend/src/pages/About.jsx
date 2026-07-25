import { Target, Eye, History, Quote } from "lucide-react";
import { PageHero, SectionHeading } from "../components/common/PageParts";
import Reveal from "../components/common/Reveal";
import { IMAGES, CAMPUS_NEWS_FULL } from "../data/siteData";
import { usePageMeta } from "../hooks/usePageMeta";

const About = () => {
  usePageMeta({
    title: "About Us | OCF School Avadi — Ordnance Clothing Factory School",
    description:
      "Learn about OCF School (Ordnance Clothing Factory School), Avadi, Chennai — our history since 1974, mission, vision and CBSE-affiliated academics under the Ministry of Defence.",
    path: "/about",
  });

  return (
    <div data-testid="about-page">
      <PageHero
        testid="about-hero"
        title="About Our School"
        subtitle="Six decades of shaping confident, compassionate and capable young minds in Avadi, Chennai."
        image={IMAGES.building}
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="School Overview"
              title="A community built on knowledge and character"
            />
            <p className="mt-5 text-base leading-relaxed text-[#4B5563]">
              Ordnance Clothing Factory School, Avadi, is a co-educational
              institution dedicated to providing well-rounded education from
              Standard V to Standard X. Our approach blends academic rigour with
              values, creativity and life skills.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              With a spacious green campus, modern facilities and a team of
              committed educators, we create an environment where students feel
              safe, supported and inspired to achieve their best.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src={IMAGES.learning}
              alt="Students learning"
              className="w-full rounded-2xl object-cover shadow-[0_20px_50px_rgb(11,37,69,0.15)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be a leading institution that empowers students to become lifelong learners, ethical leaders and responsible global citizens who contribute meaningfully to society.",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver holistic, value-based education through innovative teaching, nurturing environments and a strong partnership between school, students and parents.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div
                  data-testid={`about-vm-${i}`}
                  className="h-full rounded-2xl border border-navy/5 bg-cream p-8 lg:p-10"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4B5563]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <History className="h-12 w-12 text-gold" />
            <SectionHeading eyebrow="Our History" title="A journey of growth since 1972" />
            <p className="mt-5 text-base leading-relaxed text-[#4B5563]">
              Established to serve the educational needs of the Ordnance Clothing
              Factory community and the wider Avadi region, our school has grown
              from humble beginnings into a respected institution. Over the
              decades, we have expanded our facilities, embraced modern
              pedagogy and celebrated generations of successful alumni.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              Today, we continue that proud legacy — combining tradition with
              innovation to prepare students for the challenges of tomorrow.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src={IMAGES.geography}
              alt="School history"
              className="w-full rounded-2xl object-cover shadow-[0_20px_50px_rgb(11,37,69,0.15)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Quote className="h-12 w-12 text-gold" />
            <p className="mb-3 mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Principal&apos;s Message
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Leading with purpose and care
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/85">
              “Education is not merely about scores; it is about shaping human
              beings of substance. At OCF School, we are devoted to bringing
              out the best in every child — academically, socially and
              emotionally. I invite you to join our family and be part of a
              journey that celebrates learning, curiosity and kindness.”
            </p>
            <div className="mt-6">
              <p className="font-[Lora] text-lg font-semibold text-white">
                B. Revathi
              </p>
              <p className="text-sm text-gold">In-charge Principal</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Campus News at a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Campus Life"
            title="Campus news at a glance"
            description="A vibrant campus that nurtures reading, discipline, service and the all-round development of every student."
          />
        </Reveal>
        <div className="mt-12 space-y-4">
          {CAMPUS_NEWS_FULL.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                data-testid={`campus-news-full-${i}`}
                className="flex gap-4 rounded-2xl border border-navy/5 bg-white p-6 transition-colors duration-300 hover:border-gold"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-[#4B5563]">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
