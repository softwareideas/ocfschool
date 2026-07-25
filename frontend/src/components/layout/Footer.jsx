import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { NAV_LINKS, SCHOOL, LOGO_URL } from "../../data/siteData";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "Youtube" },
];

const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="OCF School crest"
              className="h-14 w-14 flex-shrink-0 rounded-full bg-white/95 object-contain p-1"
            />
            <span className="font-[Lora] text-lg font-bold text-white">
              {SCHOOL.shortName}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            {SCHOOL.tagline}. Committed to nurturing knowledge, character and
            values in every student since {SCHOOL.established}.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                data-testid={`footer-social-${s.label.toLowerCase()}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream transition-colors duration-300 hover:bg-gold hover:text-navy"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-cream/75 transition-colors duration-200 hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Contact Information
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>{SCHOOL.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <a href={`tel:${SCHOOL.phone}`} className="hover:text-gold">
                {SCHOOL.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <a href={`mailto:${SCHOOL.email}`} className="hover:text-gold">
                {SCHOOL.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            School Hours
          </h4>
          <p className="mt-4 text-sm text-cream/75">{SCHOOL.hours}</p>
          <p className="mt-3 text-sm text-cream/75">Classes V – X · CBSE</p>
          <Link
            to="/contact"
            data-testid="footer-apply-button"
            className="mt-5 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-maroon hover:text-white"
          >
            Contact Office
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-cream/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {SCHOOL.name}, {SCHOOL.location}. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
