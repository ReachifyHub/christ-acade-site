
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Palette, Globe, Trophy, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

const Academics = () => {
  return (
    <div>
      <PageHeader 
        title="Academics" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Academics" }
        ]} 
      />

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Academic Excellence"
                subtitle="Our Approach"
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                At Christ Acade Group of School, we believe in providing a comprehensive education that challenges students intellectually while nurturing their unique talents and abilities. Our curriculum is designed to foster critical thinking, creativity, and a lifelong love of learning.
              </p>
              <p className="text-gray-600 mb-6">
                Our dedicated faculty employ innovative teaching methods that engage students actively in the learning process. Small class sizes allow for personalized attention and meaningful student-teacher interactions.
              </p>
              <p className="text-gray-600">
                We set high academic standards and provide the support students need to meet those standards. Our goal is to prepare students not just for college, but for life—equipping them with the knowledge, skills, and character they need to succeed in an ever-changing world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Student with teacher"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-(-6)">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Group project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Science experiment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Levels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Academic Programs"
            subtitle="Nigerian Educational System"
          />
          
          {/* Primary School */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-school-primary h-auto lg:h-full">
                <img 
                  src="/assets/images/primary-school.jpg" 
                  alt="Primary School" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="col-span-2 p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-school-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-school-primary">Primary School (Basic 1-6)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our primary education provides a strong foundation in literacy, numeracy, and essential life skills following the Nigerian curriculum. Students are taught core subjects including Mathematics, English Language, Basic Science and Technology, Religious and National Values, and Cultural and Creative Arts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Comprehensive Nigerian curriculum</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Strong focus on literacy and numeracy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Hands-on learning experiences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Character and moral education</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Special Programs:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Computer studies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>STEM enrichment activities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Creative arts and cultural expression</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Sports and physical education</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Junior Secondary School */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="col-span-2 p-8 order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-school-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-school-primary">Junior Secondary School (JSS 1-3)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our JSS program follows the Nigerian Basic Education Curriculum, preparing students for the Basic Education Certificate Examination (BECE). Students study a wide range of subjects including Mathematics, English, Basic Science, Social Studies, Business Studies, and more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>BECE examination preparation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Expanded curriculum with specialized subjects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Development of critical thinking skills</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Introduction to pre-vocational subjects</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Special Programs:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Information and Communication Technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Vocational skill development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Sports and athletics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Community service projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-school-primary h-auto lg:h-full order-1 lg:order-2">
                <img 
                  src="/assets/images/junior-secondary.jpg" 
                  alt="Junior Secondary School" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
          
          {/* Senior Secondary School */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-school-primary h-auto lg:h-full">
                <img 
                  src="/assets/images/senior-secondary.jpg" 
                  alt="Senior Secondary School" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="col-span-2 p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-school-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-school-primary">Senior Secondary School (SSS 1-3)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our SSS program prepares students for WAEC, NECO, and JAMB examinations with specialized subject combinations in Science, Arts, and Commercial tracks. We provide comprehensive support for university preparation and career guidance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>National examination preparation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Subject specialization tracks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>University entrance preparation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Career counseling services</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Special Programs:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>University entrance coaching</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Science and technology projects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Leadership development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Career exposure opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Specialized Programs"
            subtitle="Beyond the Core"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="STEM Excellence"
              icon={<BookOpen className="w-6 h-6" />}
              description="Our comprehensive STEM program integrates science, technology, engineering, and mathematics through hands-on projects and real-world applications."
            />
            <FeatureCard
              title="Arts Program"
              icon={<Palette className="w-6 h-6" />}
              description="Our robust arts curriculum includes visual arts, music, drama, and dance, allowing students to explore and develop their creative talents."
            />
            <FeatureCard
              title="Global Studies"
              icon={<Globe className="w-6 h-6" />}
              description="This program cultivates global awareness and cultural competence through language studies, international exchanges, and cross-cultural experiences."
            />
            <FeatureCard
              title="Athletics & Wellness"
              icon={<Trophy className="w-6 h-6" />}
              description="Our comprehensive athletics program promotes physical fitness, teamwork, leadership, and sportsmanship through competitive and recreational sports."
            />
            <FeatureCard
              title="Advanced Learning"
              icon={<GraduationCap className="w-6 h-6" />}
              description="We offer advanced learning opportunities for high-achieving students, providing additional challenges and preparation for higher education."
            />
            <FeatureCard
              title="Extended Day Program"
              icon={<Clock className="w-6 h-6" />}
              description="Our before and after school programs provide supervised care, homework help, and enrichment activities for families needing extended hours."
            />
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Academic Support & Resources"
            subtitle="Support for Success"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Learning Support Services</h3>
              <p className="text-gray-600 mb-6">
                We recognize that students have diverse learning needs and styles. Our Learning Support Program provides additional assistance for students who need it, including:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Individualized learning plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Small group instruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Study skills development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Reading and math specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Examination preparation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Academic Enrichment</h3>
              <p className="text-gray-600 mb-6">
                For students seeking additional challenges beyond the standard curriculum, we offer numerous enrichment opportunities:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Academic competitions and Olympiads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Advanced academic clubs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Independent research projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Summer enrichment programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-secondary mr-2">•</span>
                  <span>Gifted student services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Distinguished Faculty"
            subtitle="Meet Our Teachers"
          />
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Our educators are the heart of Christ Acade. They are not just subject matter experts but are also mentors who inspire, challenge, and nurture our students. Our faculty members:
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-school-accent flex items-center justify-center mr-3">
                      <span className="text-school-primary font-bold">1</span>
                    </span>
                    <span>Hold advanced degrees in their teaching fields</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-school-accent flex items-center justify-center mr-3">
                      <span className="text-school-primary font-bold">2</span>
                    </span>
                    <span>Participate in ongoing professional development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-school-accent flex items-center justify-center mr-3">
                      <span className="text-school-primary font-bold">3</span>
                    </span>
                    <span>Bring real-world experience to the classroom</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-school-accent flex items-center justify-center mr-3">
                      <span className="text-school-primary font-bold">4</span>
                    </span>
                    <span>Implement innovative teaching methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-school-accent flex items-center justify-center mr-3">
                      <span className="text-school-primary font-bold">5</span>
                    </span>
                    <span>Are committed to the success of each student</span>
                  </li>
                </ul>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Meet Our Faculty
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Teacher with students" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Science teacher" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1598814292794-8c9c7023696d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Art teacher" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Math teacher" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Academic Excellence
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Ready to provide your child with an exceptional education? Learn more about our admission process or schedule a campus tour today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-school-secondary hover:bg-school-secondary/90 h-11 rounded-md px-8 text-white">
              Apply for Admission
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-white text-white hover:bg-white hover:text-school-primary h-11 rounded-md px-8">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
