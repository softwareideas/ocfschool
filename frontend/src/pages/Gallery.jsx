import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, SectionHeading } from "../components/common/PageParts";
import Reveal from "../components/common/Reveal";
import { IMAGES, GALLERY } from "../data/siteData";
import { usePageMeta } from "../hooks/usePageMeta";

const categories = ["All", ...new Set(GALLERY.map((g) => g.category))];

const Gallery = () => {
  usePageMeta({
    title: "Gallery | OCF School Avadi — Ordnance Clothing Factory School",
    description:
      "Photo gallery of OCF School (Ordnance Clothing Factory School), Avadi, Chennai — campus life, science exhibitions, sports, and cultural events.",
    path: "/gallery",
  });

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? GALLERY
      : GALLERY.filter((g) => g.category === active);

  return (
    <div data-testid="gallery-page">
      <PageHero
        testid="gallery-hero"
        title="Gallery"
        subtitle="Moments of learning, celebration and achievement captured across our vibrant campus."
        image={IMAGES.geography}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Campus Life"
            title="Explore our photo gallery"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                data-testid={`gallery-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                  active === c
                    ? "bg-navy text-white"
                    : "border border-navy/15 bg-white text-navy hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((g, i) => (
              <motion.div
                key={g.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                data-testid={`gallery-item-${i}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-90" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    {g.category}
                  </p>
                  <p className="mt-0.5 text-lg font-semibold text-white">
                    {g.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;
