
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-medium text-lg text-school-primary mb-4">Contact Information</h3>
      
      <div className="space-y-6 mt-6">
        <div className="flex items-start">
          <div className="bg-school-accent p-3 rounded-lg mr-4">
            <MapPin className="w-6 h-6 text-school-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-school-primary">Address</h3>
            <p className="text-gray-600 mt-1">No. 3B Owoeye Street, Ayetoro Area, Osogbo, Osun State</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-school-accent p-3 rounded-lg mr-4">
            <Phone className="w-6 h-6 text-school-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-school-primary">Phone</h3>
            <p className="text-gray-600 mt-1">
              <a href="tel:+2348102473418" className="hover:text-school-primary transition-colors">
                +234 810 247 3418
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-school-accent p-3 rounded-lg mr-4">
            <Mail className="w-6 h-6 text-school-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-school-primary">Email</h3>
            <p className="text-gray-600 mt-1">
              <a href="mailto:christacadegroupofschool@gmail.com" className="hover:text-school-primary transition-colors">
                christacadegroupofschool@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-school-accent p-3 rounded-lg mr-4">
            <Clock className="w-6 h-6 text-school-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-school-primary">Office Hours</h3>
            <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
