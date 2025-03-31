
import SectionTitle from "@/components/SectionTitle";

const FaqSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Common Inquiries"
        />
        <div className="max-w-3xl mx-auto mt-8 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">What are your office hours?</h3>
            <p className="text-gray-600">
              Our administrative office is open Monday through Friday from 8:00 AM to 4:00 PM, and Saturday from 9:00 AM to 12:00 PM. The office is closed on Sundays and public holidays.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">How can I schedule a campus tour?</h3>
            <p className="text-gray-600">
              To schedule a campus tour, please contact our admissions office at +234 810 247 3418 or send an email to christacadegroupofschool@gmail.com. Tours are typically available during regular school hours.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">How do I apply for admission?</h3>
            <p className="text-gray-600">
              You can apply for admission through our website by visiting the Admissions page and completing the online application form. If you have any questions about the application process, please contact our admissions office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
