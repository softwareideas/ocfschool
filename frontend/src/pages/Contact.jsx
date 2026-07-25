import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero, SectionHeading } from "../components/common/PageParts";
import Reveal from "../components/common/Reveal";
import { IMAGES, SCHOOL } from "../data/siteData";
import { usePageMeta } from "../hooks/usePageMeta";

const Contact = () => {
  usePageMeta({
    title: "Contact Us | OCF School Avadi — Ordnance Clothing Factory School",
    description:
      "Contact OCF School (Ordnance Clothing Factory School), Avadi, Chennai — address, phone, email and school hours.",
    path: "/contact",
  });

  const details = [
    { icon: MapPin, label: "Address", value: SCHOOL.address },
    { icon: Phone, label: "Phone", value: SCHOOL.phone, href: `tel:${SCHOOL.phone}` },
    { icon: Mail, label: "Email", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
    { icon: Clock, label: "School Hours", value: SCHOOL.hours },
  ];

  return (
    <div data-testid="contact-page">
      <PageHero
        testid="contact-hero"
        title="Contact Us"
        subtitle="We are here to answer your questions about admissions, academics and campus life."
        image={IMAGES.building}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Reach out to our team"
            description="For any queries about our school, please contact the office using the details below."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {details.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-navy/5 bg-white p-6 shadow-[0_8px_30px_rgb(11,37,69,0.05)]">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-maroon">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      data-testid={`contact-${d.label.toLowerCase()}`}
                      className="mt-1 block text-navy transition-colors hover:text-gold"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-navy">{d.value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Google Map */}
        <Reveal delay={0.15}>
          <div
            data-testid="contact-map"
            className="mt-8 overflow-hidden rounded-2xl border border-navy/10"
          >
            <iframe
              title="Ordnance Clothing Factory School, Avadi location map"
              src="https://www.google.com/maps?q=Ordnance%20Clothing%20Factory%20School%2C%20Avadi%2C%20Chennai&z=15&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Contact;
