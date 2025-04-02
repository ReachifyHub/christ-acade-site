
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="font-medium text-lg text-school-primary mb-4">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-school-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600">20 Rumuoparli Avenue, Off Ada George Road, Port Harcourt, Rivers State, Nigeria</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-school-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-600">+234 810 247 3418</p>
            <p className="text-gray-600">+234 703 426 2624</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-school-primary mt-1 flex-shrink-0" />
          <div className="break-words">
            <p className="font-medium">Email</p>
            <p className="text-gray-600 break-all">info@christacadegroup.com</p>
            <p className="text-gray-600 break-all">admissions@christacadegroup.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-school-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Office Hours</p>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
