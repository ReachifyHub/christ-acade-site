
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { CalendarDays, CheckCircle, Clock, FileText, HelpCircle, Medal } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/Hero";

const Admissions = () => {
  const navigate = useNavigate();
  
  const handleApplyNow = () => {
    // Check if user is authenticated
    const user = localStorage.getItem("user");
    
    if (user) {
      // If user is logged in, navigate directly to the application form
      navigate("/apply");
    } else {
      // If user is not logged in, navigate to login with return URL
      navigate("/login", { state: { returnUrl: "/apply" } });
    }
  };

  return (
    <div>
      <Hero
        title="Join Our Community of Learners"
        subtitle="Admissions"
        description="We welcome students who are eager to learn, grow, and contribute to our school community. Our admissions process is designed to ensure a good fit between your child and our educational philosophy."
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        buttonText="Apply Now"
        buttonLink="#"
        buttonOnClick={handleApplyNow}
        small={true}
      />

      {/* Admissions Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Admissions Process"
            subtitle="Step by Step"
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-1 order-2 md:order-1 md:text-right md:pr-12">
                    <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Inquiry & School Tour</h3>
                    <p className="text-gray-600 mb-4">
                      Begin by exploring our website and submitting an inquiry form. Schedule a campus tour to experience our school culture firsthand and have your initial questions answered.
                    </p>
                    <Button asChild variant="outline" size="sm" className="mb-4 md:mb-0">
                      <Link to="/contact">Schedule a Tour</Link>
                    </Button>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-school-primary text-white mb-4 md:mb-0 md:mx-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-1 order-2 md:order-1 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-school-primary text-white mb-4 md:mb-0 md:mx-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex-1 order-3 md:pl-12">
                    <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Application Submission</h3>
                    <p className="text-gray-600 mb-4">
                      Complete and submit the online application form along with the required documents.
                    </p>
                    <Button variant="outline" size="sm" onClick={handleApplyNow}>
                      Start Application
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-1 order-2 md:order-1 md:text-right md:pr-12">
                    <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Student Assessment</h3>
                    <p className="text-gray-600 mb-4">
                      Potential students participate in age-appropriate assessments to help us understand their academic abilities, learning style, and social development.
                    </p>
                    <Button asChild variant="outline" size="sm" className="mb-4 md:mb-0">
                      <Link to="/assessment-details">Assessment Details</Link>
                    </Button>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-school-primary text-white mb-4 md:mb-0 md:mx-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-1 order-2 md:order-1 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-school-primary text-white mb-4 md:mb-0 md:mx-4">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex-1 order-3 md:pl-12">
                    <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Family Interview</h3>
                    <p className="text-gray-600 mb-4">
                      Both parents and the student meet with our admissions team to discuss educational goals, family values, and how our school can meet your child's needs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-1 order-2 md:order-1 md:text-right md:pr-12">
                    <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Admissions Decision</h3>
                    <p className="text-gray-600 mb-4">
                      Within a few weeks, our admissions committee will make a decision based on all components of the application process and notify you of the outcome.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-school-primary text-white mb-4 md:mb-0 md:mx-4">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Admission Requirements"
                subtitle="What We Look For"
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                At Christ Acade, we seek students who will thrive in our challenging academic environment and contribute positively to our school community. While we consider multiple factors in our admissions decisions, we value:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Academic Potential</h4>
                    <p className="text-gray-600">Students who demonstrate a readiness to engage with our curriculum</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Character Development</h4>
                    <p className="text-gray-600">Evidence of positive character traits and values alignment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Family Involvement</h4>
                    <p className="text-gray-600">Parents who are committed to an active partnership with the school</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Diverse Perspectives</h4>
                    <p className="text-gray-600">Students who bring unique talents, backgrounds, and interests</p>
                  </div>
                </li>
              </ul>
              <p className="text-gray-600 italic mb-4">
                We aim to build a diverse community of learners who will challenge and inspire one another.
              </p>
              <Button asChild>
                <Link to="/admission-requirements">View Full Requirements</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Required Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Completed Application Form</h4>
                    <p className="text-gray-600 text-sm">All sections must be filled out accurately</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Academic Records</h4>
                    <p className="text-gray-600 text-sm">Last 2-3 years of school reports/transcripts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Teacher Recommendations</h4>
                    <p className="text-gray-600 text-sm">From current Math and English teachers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Standardized Test Scores</h4>
                    <p className="text-gray-600 text-sm">If applicable to your child's grade level</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Birth Certificate</h4>
                    <p className="text-gray-600 text-sm">Copy of the original document</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Immunization Records</h4>
                    <p className="text-gray-600 text-sm">Up-to-date immunization history</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-school-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-school-primary">Application Fee</h4>
                    <p className="text-gray-600 text-sm">Non-refundable fee of ₦10,000</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates & Deadlines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Admissions Timeline"
            subtitle="Key Dates & Deadlines"
          />
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-school-primary p-6 text-white">
              <h3 className="text-xl font-serif font-bold">2023-2024 Academic Year</h3>
              <p>Important dates for the upcoming admissions cycle</p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-school-accent p-3 rounded-lg mr-4 flex-shrink-0">
                    <CalendarDays className="w-6 h-6 text-school-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary">October 1, 2023</h4>
                    <p className="text-gray-600">Applications Open for All Grade Levels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-accent p-3 rounded-lg mr-4 flex-shrink-0">
                    <CalendarDays className="w-6 h-6 text-school-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary">December 15, 2023</h4>
                    <p className="text-gray-600">Priority Application Deadline (Early Decision)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-accent p-3 rounded-lg mr-4 flex-shrink-0">
                    <CalendarDays className="w-6 h-6 text-school-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary">January 15, 2024</h4>
                    <p className="text-gray-600">Early Decision Notifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-accent p-3 rounded-lg mr-4 flex-shrink-0">
                    <CalendarDays className="w-6 h-6 text-school-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary">February 15, 2024</h4>
                    <p className="text-gray-600">Regular Application Deadline</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-accent p-3 rounded-lg mr-4 flex-shrink-0">
                    <CalendarDays className="w-6 h-6 text-school-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary">March 15, 2024</h4>
                    <p className="text-gray-600">Regular Decision Notifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-accent p-3 rounded-lg mr-4 flex-shrink-0">
                    <CalendarDays className="w-6 h-6 text-school-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary">April 15, 2024</h4>
                    <p className="text-gray-600">Enrollment Contracts & Deposits Due</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center text-school-primary">
                  <Clock className="w-5 h-5 mr-2" />
                  <p className="font-medium">Rolling Admissions</p>
                </div>
                <p className="text-gray-600 mt-2">
                  After February 15, applications are considered on a rolling basis as space allows. We encourage early application as some grade levels fill quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tuition */}
            <div>
              <SectionTitle
                title="Tuition & Fees"
                subtitle="Investment in Education"
                alignment="left"
              />
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Tuition at Christ Acade Group of School represents an investment in your child's future. Our comprehensive fee structure includes most educational expenses.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-semibold text-school-primary mb-2">2023-2024 Annual Tuition</h4>
                      <div className="flex justify-between">
                        <span>Elementary School (K-5):</span>
                        <span className="font-medium">₦950,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Middle School (6-8):</span>
                        <span className="font-medium">₦1,100,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>High School (9-12):</span>
                        <span className="font-medium">₦1,250,000</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-semibold text-school-primary mb-2">New Student Fees</h4>
                      <div className="flex justify-between">
                        <span>Application Fee (non-refundable):</span>
                        <span className="font-medium">₦10,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enrollment Fee (one-time):</span>
                        <span className="font-medium">₦100,000</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-school-primary mb-2">Additional Fees</h4>
                      <div className="flex justify-between">
                        <span>Technology Fee:</span>
                        <span className="font-medium">₦35,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Activity Fee:</span>
                        <span className="font-medium">₦20,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Extended Day Program:</span>
                        <span className="font-medium">Varies</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic mb-4">
                    * Tuition can be paid annually, semi-annually, or in 10 monthly installments through our tuition management system.
                  </p>
                  <Button asChild>
                    <Link to="/tuition-details">View Full Tuition Details</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Financial Aid */}
            <div>
              <SectionTitle
                title="Financial Aid"
                subtitle="Making Education Accessible"
                alignment="left"
              />
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Christ Acade is committed to making our education accessible to qualified students from diverse socioeconomic backgrounds. Our financial aid program assists families who demonstrate financial need.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Medal className="w-5 h-5 text-school-secondary mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-school-primary">Merit Scholarships</h4>
                        <p className="text-gray-600">Available to new and returning students who demonstrate exceptional academic achievement, leadership, or talent in specific areas.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Medal className="w-5 h-5 text-school-secondary mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-school-primary">Need-Based Financial Aid</h4>
                        <p className="text-gray-600">Awarded based on family financial circumstances and available funds. Families must complete a financial aid application.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Medal className="w-5 h-5 text-school-secondary mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-school-primary">Sibling Discounts</h4>
                        <p className="text-gray-600">Families with multiple children enrolled receive a 5% discount on tuition for the second child and 10% for additional children.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center mb-2">
                      <HelpCircle className="w-5 h-5 text-school-primary mr-2" />
                      <h4 className="font-semibold text-school-primary">How to Apply for Financial Aid</h4>
                    </div>
                    <ol className="list-decimal pl-5 text-gray-600 space-y-1">
                      <li>Complete the admissions application</li>
                      <li>Submit the financial aid application through FACTS</li>
                      <li>Provide required financial documentation</li>
                      <li>Financial aid decisions are made separately from admissions decisions</li>
                    </ol>
                  </div>
                  <Button asChild>
                    <Link to="/financial-aid">Financial Aid Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Admissions FAQ"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">When should we apply?</h3>
              <p className="text-gray-600">
                We recommend applying as early as possible, as some grade levels fill quickly. Our priority application deadline is December 15, with regular applications due by February 15. After these dates, we accept applications on a rolling basis as space allows.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">What age must my child be to enter Kindergarten?</h3>
              <p className="text-gray-600">
                Children must be 5 years old by September 1 of the academic year they are entering Kindergarten. We do consider developmental readiness alongside chronological age.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">How do you make admissions decisions?</h3>
              <p className="text-gray-600">
                We take a holistic approach to admissions, considering academic records, assessment results, teacher recommendations, family interviews, and how well the student's needs align with our educational program. We seek students who will thrive in our environment and contribute positively to our community.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Can we visit the school before applying?</h3>
              <p className="text-gray-600">
                Yes, we strongly encourage prospective families to tour our campus before applying. This gives you an opportunity to see our facilities, observe classes in session, and get a feel for our school culture. Please contact our Admissions Office to schedule a visit.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Is financial aid available for new students?</h3>
              <p className="text-gray-600">
                Yes, financial aid is available for both new and returning students who demonstrate financial need. Aid is awarded based on available funds and family circumstances. Financial aid decisions are made separately from admissions decisions.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/admissions-faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Have Questions? We're Here to Help
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Our admissions team is ready to assist you through every step of the process. Contact us with any questions or to schedule a campus visit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:admissions@christacade.edu" className="text-white/80 hover:text-white transition-colors">
                      admissions@christacade.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="text-white">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-white/80">
                      Monday - Friday: 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-6">Send Us a Message</h3>
              <AdmissionsInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AdmissionsInquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your inquiry has been submitted successfully. A member of our admissions team will contact you shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name*
          </label>
          <Input id="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name*
          </label>
          <Input id="lastName" required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address*
        </label>
        <Input id="email" type="email" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number*
        </label>
        <Input id="phone" type="tel" required />
      </div>
      <div>
        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
          Student Name*
        </label>
        <Input id="studentName" required />
      </div>
      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
          Grade Applying For*
        </label>
        <select
          id="grade"
          className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
          required
        >
          <option value="">Select a grade...</option>
          <option value="K">Kindergarten</option>
          <option value="1">1st Grade</option>
          <option value="2">2nd Grade</option>
          <option value="3">3rd Grade</option>
          <option value="4">4th Grade</option>
          <option value="5">5th Grade</option>
          <option value="6">6th Grade</option>
          <option value="7">7th Grade</option>
          <option value="8">8th Grade</option>
          <option value="9">9th Grade</option>
          <option value="10">10th Grade</option>
          <option value="11">11th Grade</option>
          <option value="12">12th Grade</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Questions/Comments
        </label>
        <Textarea id="message" rows={4} />
      </div>
      <div className="pt-2">
        <Button type="submit" className="w-full bg-school-primary hover:bg-school-primary/90" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </Button>
      </div>
    </form>
  );
};

export default Admissions;
