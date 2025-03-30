
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, MessageCircle, Video } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold mb-4">Christ Acade</h3>
            <p className="text-gray-400">
              Providing quality education with excellence and integrity since our founding.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/2348102473418" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.tiktok.com/@christacadegroup" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary transition-colors">
                <Video size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-400 hover:text-white transition-colors">Academics</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-school-secondary" />
                <span className="text-gray-400">No. 3B Owoeye Street, Ayetoro Area, Osogbo, Osun State</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-school-secondary" />
                <a href="tel:08102473418" className="text-gray-400 hover:text-white transition-colors">08102473418</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-school-secondary" />
                <a href="mailto:christacadegroupofschool@gmail.com" className="text-gray-400 hover:text-white transition-colors">christacadegroupofschool@gmail.com</a>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-medium mb-4">Office Hours</h3>
            <div className="text-gray-400 space-y-2">
              <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
              <p>Saturday: 9:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-2">School Terms</h3>
              <div className="text-gray-400 space-y-2">
                <p>First Term: September - December</p>
                <p>Second Term: January - March</p>
                <p>Third Term: April - July</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Christ Acade Group of School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
