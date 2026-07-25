import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NAV_LINKS, SCHOOL, LOGO_URL } from "../../data/siteData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 hover:text-gold ${
      isActive ? "text-gold" : scrolled ? "text-navy" : "text-navy"
    }`;

  return (
    <header
      data-testid="main-navbar"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgb(11,37,69,0.08)]"
          : "bg-cream shadow-[0_1px_0_rgb(11,37,69,0.06)]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          data-testid="navbar-logo"
          className="flex items-center gap-3"
        >
          <img
            src={LOGO_URL}
            alt="OCF School crest"
            className="h-12 w-12 flex-shrink-0 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-[Lora] text-base font-700 font-bold text-navy sm:text-lg">
              {SCHOOL.shortName}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-wide text-maroon">
              {SCHOOL.location}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={linkClass}
            >
              {l.label}
            </NavLink>
          ))}
          <button
            data-testid="navbar-apply-button"
            onClick={() => navigate("/contact")}
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-maroon"
          >
            Enquire
          </button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="mobile-menu-button"
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-navy"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-cream">
              <div className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-navy text-white"
                          : "text-navy hover:bg-white"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <button
                  data-testid="mobile-apply-button"
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact");
                  }}
                  className="mt-3 rounded-full bg-gold px-5 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-maroon"
                >
                  Enquire
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
