import { BookText, Users, Lightbulb, Palette, Dribbble, CalendarDays, BookOpenCheck } from "lucide-react";
import { PageHero, SectionHeading } from "../components/common/PageParts";
import Reveal from "../components/common/Reveal";
import {
  IMAGES,
  ACADEMIC_SECTIONS,
  DEPARTMENTS,
  ANNUAL_EVENTS,
  SCHOLASTIC_AREAS,
} from "../data/siteData";
import { usePageMeta } from "../hooks/usePageMeta";

const Academics = () => {
  usePageMeta({
    title: "Academics | OCF School Avadi — CBSE Curriculum, Chennai",
    description:
      "Explore academics at OCF School (Ordnance Clothing Factory School), Avadi — CBSE curriculum, departments, scholastic areas and annual events for Primary to Higher Secondary.",
    path: "/academics",
  });

  return (
    <div data-testid="academics-page">
      <PageHero
        testid="academics-hero"
        title="Academics"
        subtitle="A progressive, CBSE-aligned curriculum designed to build strong foundations and future-ready skills."
        image={IMAGES.learning}
      />

      {/* Curriculum */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Curriculum"
              title="CBSE / State Board framework"
            />
            <p className="mt-5 text-base leading-relaxed text-[#4B5563]">
              Our curriculum follows the CBSE framework (affiliation
              placeholder), thoughtfully enriched with activity-based and
              experiential learning. We emphasise conceptual understanding over
              rote memorisation, ensuring students develop critical thinking,
              problem-solving and communication skills.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              Continuous and comprehensive evaluation helps us track each
              child&apos;s progress and provide personalised support wherever needed.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src={IMAGES.classroom}
              alt="Classroom learning"
              className="w-full rounded-2xl object-cover shadow-[0_20px_50px_rgb(11,37,69,0.15)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Academic Stages"
              title="Structured learning at every level"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {ACADEMIC_SECTIONS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div
                  data-testid={`academics-stage-${i}`}
                  className="h-full rounded-2xl border border-navy/5 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(11,37,69,0.1)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <a.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">
                    {a.grades}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scholastic Areas */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Scholastic Areas"
            title="Subjects offered — Class VI to X"
            description="Our academic subjects across classes VI to X, including language options by section."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOLASTIC_AREAS.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <div
                data-testid={`scholastic-area-${i}`}
                className="flex items-center gap-3 rounded-xl border border-navy/5 bg-white px-5 py-4 transition-colors duration-300 hover:border-gold"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <BookOpenCheck className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-navy">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Departments & Methodology */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Departments" title="Our academic departments" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {DEPARTMENTS.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 rounded-xl border border-navy/5 bg-white px-4 py-3"
                >
                  <Users className="h-4 w-4 flex-shrink-0 text-gold" />
                  <span className="text-sm font-medium text-navy">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading
              eyebrow="Teaching Methodology"
              title="How we help students learn"
            />
            <div className="mt-6 space-y-4">
              {[
                {
                  icon: Lightbulb,
                  title: "Experiential Learning",
                  desc: "Hands-on projects, labs and real-world application of concepts.",
                },
                {
                  icon: BookText,
                  title: "Concept-first Teaching",
                  desc: "Building deep understanding before practice and assessment.",
                },
                {
                  icon: Users,
                  title: "Personalised Attention",
                  desc: "Optimal class sizes and mentoring for every student.",
                },
              ].map((m) => (
                <div
                  key={m.title}
                  className="flex gap-4 rounded-2xl border border-navy/5 bg-white p-5"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-navy">{m.title}</h4>
                    <p className="mt-1 text-sm text-[#4B5563]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Co-curricular, Sports & Events */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl bg-white/5 p-8">
                <Palette className="h-10 w-10 text-gold" />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Co-curricular Activities
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  Music, dance, drama, debate, art and craft, coding clubs and
                  eco initiatives help students discover and develop their
                  talents beyond the classroom.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-white/5 p-8">
                <Dribbble className="h-10 w-10 text-gold" />
                <h3 className="mt-5 text-xl font-semibold text-white">Sports</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  Cricket, football, basketball, athletics, yoga and indoor
                  games — backed by trained coaches and well-maintained
                  grounds — build fitness and team spirit.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl bg-white/5 p-8">
                <CalendarDays className="h-10 w-10 text-gold" />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Annual Events
                </h3>
                <ul className="mt-3 space-y-2">
                  {ANNUAL_EVENTS.map((e) => (
                    <li
                      key={e}
                      className="flex items-center gap-2 text-sm text-cream/75"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
