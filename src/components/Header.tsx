
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

        {/* Desktop Navigation - Using NavigationMenu */}
        <div className="hidden md:block">
          <DesktopNavigation />
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
            <NavLinksMobile closeMenu={() => setIsMobileMenuOpen(false)} />
            <div className="flex flex-col space-y-2 pt-2">
              <Button asChild variant="outline" className="border-school-primary text-school-primary w-full">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild className="bg-school-primary text-white w-full">
                <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const DesktopNavigation = () => {
  return (
    <div className="flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-school-primary hover:text-school-secondary">About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium">About Our School</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/about#history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium">History</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/academics" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
              Academics
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/admissions" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
              Admissions
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/gallery" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
              Gallery
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/news" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
              News
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex space-x-2">
        <Button asChild variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary hover:text-white">
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild className="bg-school-primary text-white hover:bg-school-primary/90">
          <Link to="/apply">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

const NavLinksMobile = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <Link
        to="/"
        className="text-school-primary hover:text-school-secondary font-medium py-2 transition-colors"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-school-primary hover:text-school-secondary font-medium py-2 transition-colors"
        onClick={closeMenu}
      >
        About Us
      </Link>
      <Link
        to="/academics"
        className="text-school-primary hover:text-school-secondary font-medium py-2 transition-colors"
        onClick={closeMenu}
      >
        Academics
      </Link>
      <Link
        to="/admissions"
        className="text-school-primary hover:text-school-secondary font-medium py-2 transition-colors"
        onClick={closeMenu}
      >
        Admissions
      </Link>
      <Link
        to="/gallery"
        className="text-school-primary hover:text-school-secondary font-medium py-2 transition-colors"
        onClick={closeMenu}
      >
        Gallery
      </Link>
      <Link
        to="/news"
        className="text-school-primary hover:text-school-secondary font-medium py-2 transition-colors"
        onClick={closeMenu}
      >
        News & Events
      </Link>
      <Link
        to="/contact"
        className="text-school-primary hover:text-school-secondary font-medium py-2 transition-colors"
        onClick={closeMenu}
      >
        Contact Us
      </Link>
    </>
  );
};

export default Header;
