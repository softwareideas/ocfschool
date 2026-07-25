import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/common/PageParts";
import Reveal from "../components/common/Reveal";
import { IMAGES, SCHOOL } from "../data/siteData";
import { usePageMeta } from "../hooks/usePageMeta";

const Admissions = () => {
  usePageMeta({
    title: "Admissions | OCF School Avadi — Ordnance Clothing Factory School",
    description:
      "Admissions information for OCF School (Ordnance Clothing Factory School), Avadi, Chennai — process, eligibility and how to apply for the CBSE curriculum.",
    path: "/admissions",
  });

  return (
    <div data-testid="admissions-page">
      <PageHero
        testid="admissions-hero"
        title="Admissions"
        subtitle="Important information regarding admissions at Ordnance Clothing Factory School, Avadi."
        image={IMAGES.toddlers}
      />

      {/* Notice */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div
            data-testid="admissions-closure-notice"
            className="rounded-3xl border-l-4 border-gold bg-white p-8 shadow-[0_8px_30px_rgb(11,37,69,0.06)] sm:p-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-maroon">
              Admissions Notice
            </p>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
              Classes V to X
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              Presently, OCF School, Avadi is running from Standard V to
              Standard X. For any queries, please contact the school office and
              our team will be glad to assist you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-testid="admissions-contact-button"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-maroon"
              >
                Contact the School Office <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SCHOOL.phone}`}
                data-testid="admissions-call-button"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3 text-sm font-semibold text-navy transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                {SCHOOL.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Admissions;
