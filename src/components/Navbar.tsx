import { useEffect, useState } from "react";
import { Languages, Menu, X, Sun, Moon } from "lucide-react";
import { translations, type Lang } from "@/lib/i18n";
import { useTheme } from "@/hooks/use-theme";

const Navbar = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const t = translations[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#experience", label: t.experience },
    { href: "#awards", label: t.awards },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`container mx-auto px-6 ${scrolled ? "max-w-5xl" : ""}`}>
        <nav className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass" : ""}`}>
          <a href="#home" className="flex items-center gap-2 font-mono font-bold text-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-aurora glow-cyan" />
            <span className="text-gradient">SB</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full glass glass-hover"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-primary" /> : <Moon className="w-3.5 h-3.5 text-primary" />}
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono glass glass-hover"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5 text-primary" />
              {lang.toUpperCase()}
            </button>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-full glass" aria-label="Menu">
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden glass mt-2 rounded-3xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a onClick={() => setOpen(false)} href={l.href} className="block px-4 py-2.5 rounded-2xl hover:bg-white/5">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
