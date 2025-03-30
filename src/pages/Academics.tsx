
import { Button } from "@/components/ui/button";
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
            subtitle="Learning Pathways"
          />
          
          {/* Elementary School */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-school-primary h-auto lg:h-full">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Elementary School" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="col-span-2 p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-school-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-school-primary">Elementary School (Grades K-5)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our elementary program establishes a strong foundation in core academic subjects while fostering creativity, curiosity, and a love of learning. We focus on developing essential skills in reading, writing, mathematics, science, and social studies through engaging, hands-on activities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Phonics-based reading instruction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Singapore Math curriculum</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Hands-on science exploration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Arts integration across subjects</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Special Programs:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Language immersion options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>STEM enrichment activities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Character development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Introduction to musical instruments</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/elementary-curriculum">View Full Elementary Curriculum</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Middle School */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="col-span-2 p-8 order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-school-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-school-primary">Middle School (Grades 6-8)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our middle school program bridges the transition between elementary and high school, offering a balanced curriculum that challenges students academically while supporting their social and emotional development during these formative years.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Departmentalized instruction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Advanced math pathway</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Literature-based language arts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Integrated science curriculum</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Special Programs:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Leadership development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Robotics and coding</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Public speaking workshops</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Community service projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/middle-curriculum">View Full Middle School Curriculum</Link>
                </Button>
              </div>
              <div className="bg-school-primary h-auto lg:h-full order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1577896852618-3b02bc95851c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Middle School" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
          
          {/* High School */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-school-primary h-auto lg:h-full">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="High School" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="col-span-2 p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-school-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-school-primary">High School (Grades 9-12)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our high school program prepares students for college and beyond through a rigorous college-preparatory curriculum. We offer a wide range of core courses, electives, honors courses, and Advanced Placement options to challenge students and help them discover their interests and talents.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Comprehensive college preparation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>AP and Honors courses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Advanced research opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>College counseling services</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-primary mb-2">Special Programs:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Dual college enrollment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Business and entrepreneurship</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>Fine arts concentration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-secondary mr-2">•</span>
                        <span>International study opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/high-curriculum">View Full High School Curriculum</Link>
                </Button>
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
              title="Advanced Placement"
              icon={<GraduationCap className="w-6 h-6" />}
              description="We offer a wide range of AP courses that challenge high-achieving students and provide the opportunity to earn college credit while in high school."
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
                  <span>Executive functioning support</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/learning-support">Learn More</Link>
              </Button>
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
              <Button asChild variant="outline">
                <Link to="/enrichment">Learn More</Link>
              </Button>
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
                <Button asChild>
                  <Link to="/faculty">Meet Our Faculty</Link>
                </Button>
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
            <Button asChild size="lg" className="bg-school-secondary hover:bg-school-secondary/90">
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-primary">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
