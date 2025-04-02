
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";

const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="A Tradition of Excellence in Education"
              subtitle="Our Mission"
              alignment="left"
            />
            <p className="text-gray-600 mb-6">
              At Christ Acade Group of School, we believe in providing a holistic education that nurtures not just the mind, but also the heart and spirit of each student. Our commitment to academic excellence, character formation, and spiritual development has been our guiding principle since our establishment.
            </p>
            <p className="text-gray-600 mb-8">
              Our dedicated faculty and staff work tirelessly to create a supportive and challenging learning environment where students can discover their talents, pursue their passions, and reach their full potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
              <img
                src="/assets/images/campus.jpg"
                alt="School campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/assets/images/classroom.jpeg"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/assets/images/science-lab.jpg"
                alt="Science lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md transform translate-y-(-8)">
              <img
                src="/assets/images/sports.jpg"
                alt="Sports activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
