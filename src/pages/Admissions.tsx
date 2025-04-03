
import Hero from "@/components/Hero";
import AdmissionInquiryForm from "@/components/admissions/AdmissionInquiryForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Admissions = () => {
  return (
    <div>
      <Hero
        title="Admissions"
        subtitle="Join Our Community"
        description="We welcome students who are eager to learn, grow, and contribute to our vibrant educational community."
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        small={true}
      />

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-school-primary">Our Admission Process</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our admissions process is designed to be straightforward, 
              allowing us to get to know your child and ensure they will thrive in our school environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-school-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-school-primary font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Submit Application</h3>
              <p className="text-gray-600">
                Complete our online application form with all required information about your child.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-school-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-school-primary font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Assessment</h3>
              <p className="text-gray-600">
                Your child will be invited for an entrance assessment appropriate for their age.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-school-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-school-primary font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Enrollment</h3>
              <p className="text-gray-600">
                Upon acceptance, complete the enrollment process and welcome to our community!
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-school-primary hover:bg-school-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-school-primary">Admission Requirements</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              To ensure a smooth admission process, please prepare the following documents.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Completed Application Form</h3>
                    <p className="text-gray-600">Fill out our comprehensive application form with all required details.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Birth Certificate</h3>
                    <p className="text-gray-600">A copy of the child's birth certificate or passport.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Academic Records</h3>
                    <p className="text-gray-600">Previous school reports and transcripts from the last two years.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Passport Photographs</h3>
                    <p className="text-gray-600">Recent passport-sized photographs of the applicant.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Immunization Records</h3>
                    <p className="text-gray-600">Up-to-date immunization records.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Application Fee</h3>
                    <p className="text-gray-600">Payment of the non-refundable application processing fee.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-school-primary">Inquire About Admissions</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have questions about our admissions process? Fill out the form below, and our admissions team will get back to you promptly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <AdmissionInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
