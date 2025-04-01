
import { Link } from "react-router-dom";

type MobileNavProps = {
  closeMenu: () => void;
};

const MobileNavigation = ({ closeMenu }: MobileNavProps) => {
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

export default MobileNavigation;
