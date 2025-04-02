
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
            <p className="text-gray-600">No. 3B Owoeye Street, Ayetoro Area, Osogbo, Osun State</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-school-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-600">08102473418</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-school-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Email</p>
            <div className="text-gray-600 break-words">
              <p>christacadegroupofschool@gmail.com</p>
            </div>
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
