
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DesktopNavigation from "./navigation/NavigationLinks";
import MobileNavigation from "./navigation/MobileNavigation";
import AuthButtons from "./navigation/AuthButtons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-school-primary">
            Christ Acade
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:justify-between md:flex-grow md:ml-10">
          <DesktopNavigation />
          
          {/* Auth buttons */}
          <div className="flex space-x-2 ml-4">
            <AuthButtons />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-school-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavigation closeMenu={() => setIsMobileMenuOpen(false)} />
            <div className="flex flex-col space-y-2 pt-2">
              <AuthButtons mobile onButtonClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
