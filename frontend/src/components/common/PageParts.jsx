import { motion } from "framer-motion";

export const PageHero = ({ title, subtitle, image, testid, imagePosition = "object-top" }) => {
  return (
    <section
      data-testid={testid}
      className="relative flex min-h-[42vh] items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold"
        >
          Ordnance Clothing Factory School
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export const SectionHeading = ({ eyebrow, title, description, center }) => {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-maroon">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
          {description}
        </p>
      )}
    </div>
  );
};
