
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const AcademicPrograms = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Academic Programs"
          subtitle="Educational Offerings"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-school-primary">
              <img
                src="/assets/images/primary-school.jpg"
                alt="Primary School"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Primary School</h3>
              <p className="text-gray-600 mb-4">
                Our primary program builds a strong foundation in core subjects while nurturing creativity and curiosity in young learners.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/academics">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-school-primary">
              <img
                src="/assets/images/junior-secondary.jpg"
                alt="Junior Secondary School"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Junior Secondary School</h3>
              <p className="text-gray-600 mb-4">
                Our JSS program helps students navigate the crucial transition years with academic rigor and personal guidance.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/academics">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-school-primary">
              <img
                src="/assets/images/senior-secondary.jpg"
                alt="Senior Secondary School"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Senior Secondary School</h3>
              <p className="text-gray-600 mb-4">
                Our SSS program prepares students for WAEC, NECO and university entrance examinations with advanced academics and leadership opportunities.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/academics">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
