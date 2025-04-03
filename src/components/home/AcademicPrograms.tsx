
import SectionTitle from "@/components/SectionTitle";

const AcademicPrograms = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Academic Programs"
          subtitle="Nigerian Educational System"
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
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Primary School (Basic 1-6)</h3>
              <p className="text-gray-600 mb-4">
                Our primary education provides a strong foundation in literacy, numeracy, and essential life skills following the Nigerian curriculum.
              </p>
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
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Junior Secondary (JSS 1-3)</h3>
              <p className="text-gray-600 mb-4">
                Our JSS program follows the Nigerian Universal Basic Education curriculum, preparing students for BECE examinations and senior classes.
              </p>
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
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Senior Secondary (SSS 1-3)</h3>
              <p className="text-gray-600 mb-4">
                Our SSS program prepares students for WAEC, NECO, and JAMB examinations with specialized subject combinations in Science, Arts, and Commercial tracks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
