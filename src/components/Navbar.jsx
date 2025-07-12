import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Publications", href: "#publications" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    let scrollY = 0;

    if (isMenuOpen) {
      // Save current scroll position
      scrollY = window.scrollY;
      
      // Disable scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Get the scroll position from the body style
      const bodyTop = document.body.style.top;
      const scrollPosition = bodyTop ? parseInt(bodyTop) * -1 : 0;
      
      // Re-enable scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position immediately
      if (scrollPosition > 0) {
        window.scrollTo(0, scrollPosition);
      }
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      if (isMenuOpen) {
        const bodyTop = document.body.style.top;
        const scrollPosition = bodyTop ? parseInt(bodyTop) * -1 : 0;
        
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        if (scrollPosition > 0) {
          window.scrollTo(0, scrollPosition);
        }
      }
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Mahmud Al Ashiq </span>{" "}
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          
          {/* Theme toggle for desktop */}
          <ThemeToggle />
        </div>

        {/* mobile nav controls */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme toggle for mobile */}
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};