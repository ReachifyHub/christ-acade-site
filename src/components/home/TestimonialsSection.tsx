
import SectionTitle from "@/components/SectionTitle";

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Community Says"
          subtitle="Testimonials"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-school-accent flex items-center justify-center mr-4">
                <span className="text-school-primary font-bold text-xl">A</span>
              </div>
              <div>
                <h4 className="font-semibold">Adebola Adeyemi</h4>
                <p className="text-sm text-gray-500">Parent</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Christ Acade has been a blessing for our family. The teachers truly care about each student's success, and the values-based education has helped shape our child into a compassionate and responsible individual."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-school-accent flex items-center justify-center mr-4">
                <span className="text-school-primary font-bold text-xl">O</span>
              </div>
              <div>
                <h4 className="font-semibold">Oluwaseun Olatunji</h4>
                <p className="text-sm text-gray-500">Alumni</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The education I received at Christ Acade prepared me well for university and beyond. The academic rigor, combined with opportunities for leadership and service, gave me a strong foundation for success."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-school-accent flex items-center justify-center mr-4">
                <span className="text-school-primary font-bold text-xl">C</span>
              </div>
              <div>
                <h4 className="font-semibold">Dr. Chioma Nwankwo</h4>
                <p className="text-sm text-gray-500">Education Professional</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "As an education professional, I'm impressed by Christ Acade's commitment to pedagogical excellence. Their balanced approach to education nurtures both academic achievement and character development."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
