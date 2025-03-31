
import SectionTitle from "@/components/SectionTitle";

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Visit Our Campus"
          subtitle="Find Us"
        />
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.356764982788!2d4.566172!3d7.4227199999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381dcdbc649a8f%3A0x8c60f01e3c6d150!2sAyetoro%2C%20Osogbo!5e0!3m2!1sen!2sng!4v1716215050230!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
