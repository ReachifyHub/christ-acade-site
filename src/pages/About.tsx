
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Award, Heart, BookMarked, Globe, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About Us" }
        ]} 
      />

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our History"
                subtitle="Since 1995"
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                Christ Acade Group of School was founded in 1995 with a vision to provide quality education grounded in strong values. What began as a small school with just a few classrooms has grown into a prestigious educational institution serving hundreds of students across multiple campuses.
              </p>
              <p className="text-gray-600 mb-6">
                Throughout our history, we have remained committed to our founding principles: academic excellence, character development, and service to the community. These principles continue to guide us as we prepare students to meet the challenges of an ever-changing world.
              </p>
              <p className="text-gray-600">
                Today, Christ Acade is recognized as a leading educational institution, known for its rigorous academics, supportive community, and commitment to nurturing well-rounded individuals who will make a positive impact on society.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="School history" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-school-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="text-4xl font-bold mb-2">28+</div>
                <div className="text-lg">Years of Educational Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission, Vision & Values"
            subtitle="What Drives Us"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-school-primary">
              <h3 className="text-2xl font-serif font-bold text-school-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide a transformative educational experience that empowers students to excel academically, develop morally, and contribute meaningfully to society through a balanced curriculum that fosters critical thinking, creativity, and character.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-school-secondary">
              <h3 className="text-2xl font-serif font-bold text-school-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a beacon of educational excellence that inspires lifelong learning, cultivates global citizenship, and prepares students to lead with integrity and purpose in an interconnected world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-school-primary">
              <h3 className="text-2xl font-serif font-bold text-school-primary mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-school-secondary rounded-full mr-2"></span>
                  <span>Excellence in all endeavors</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-school-secondary rounded-full mr-2"></span>
                  <span>Integrity and ethical conduct</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-school-secondary rounded-full mr-2"></span>
                  <span>Respect for all individuals</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-school-secondary rounded-full mr-2"></span>
                  <span>Responsibility to self and community</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-school-secondary rounded-full mr-2"></span>
                  <span>Compassion and service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership Team"
            subtitle="Meet Our Leaders"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Principal */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-1">Dr. Sarah Johnson</h3>
                <p className="text-school-secondary mb-4">Principal</p>
                <p className="text-gray-600 mb-4">
                  With over 20 years of experience in education, Dr. Johnson brings visionary leadership and a passion for academic excellence to Christ Acade.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Ed.D., Harvard University</span>
                  <Button asChild variant="link" className="p-0 text-school-primary">
                    <Link to="#">Profile</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Vice Principal */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="Prof. Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-1">Prof. Michael Chen</h3>
                <p className="text-school-secondary mb-4">Vice Principal, Academics</p>
                <p className="text-gray-600 mb-4">
                  Prof. Chen oversees our rigorous academic programs, ensuring that our curriculum remains challenging, relevant, and forward-thinking.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">M.Ed., Stanford University</span>
                  <Button asChild variant="link" className="p-0 text-school-primary">
                    <Link to="#">Profile</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dean of Students */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="Mrs. Angela Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-1">Mrs. Angela Williams</h3>
                <p className="text-school-secondary mb-4">Dean of Students</p>
                <p className="text-gray-600 mb-4">
                  Mrs. Williams leads our student development initiatives, focusing on character formation, leadership, and pastoral care.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">M.A., Columbia University</span>
                  <Button asChild variant="link" className="p-0 text-school-primary">
                    <Link to="#">Profile</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Educational Approach"
            subtitle="How We Teach"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Balanced Curriculum"
              icon={<BookOpen className="w-6 h-6" />}
              description="We provide a well-rounded education that balances academics, arts, athletics, and character development to nurture the whole child."
            />
            <FeatureCard
              title="Student-Centered Learning"
              icon={<User className="w-6 h-6" />}
              description="Our teaching methods focus on the individual needs, abilities, and learning styles of each student, fostering engagement and deep understanding."
            />
            <FeatureCard
              title="Character Education"
              icon={<Heart className="w-6 h-6" />}
              description="We integrate values and ethics into every aspect of school life, helping students develop strong moral character and personal integrity."
            />
            <FeatureCard
              title="Academic Excellence"
              icon={<Award className="w-6 h-6" />}
              description="Our rigorous academic programs challenge students to think critically, solve problems creatively, and strive for excellence in all their endeavors."
            />
            <FeatureCard
              title="Faith Integration"
              icon={<BookMarked className="w-6 h-6" />}
              description="We weave spiritual principles throughout our curriculum, helping students develop a strong moral compass and sense of purpose."
            />
            <FeatureCard
              title="Global Perspective"
              icon={<Globe className="w-6 h-6" />}
              description="We prepare students to be global citizens who understand and appreciate diverse cultures and are equipped to make a positive impact in our interconnected world."
            />
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Campus Facilities"
            subtitle="World-Class Infrastructure"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Modern Classrooms" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-serif font-semibold text-xl">Modern Classrooms</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1526815456940-2c11653292a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Science Laboratories" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-serif font-semibold text-xl">Science Laboratories</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Library & Media Center" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-serif font-semibold text-xl">Library & Media Center</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518093929017-e68457d5f4fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Sports Facilities" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-serif font-semibold text-xl">Sports Facilities</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Performing Arts Center" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-serif font-semibold text-xl">Performing Arts Center</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Dining Hall" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-serif font-semibold text-xl">Dining Hall</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Christ Acade in Person
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            We invite you to visit our campus, meet our faculty, and see for yourself the Christ Acade difference. Schedule a tour today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-school-secondary hover:bg-school-secondary/90">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-primary">
              <Link to="/admissions">Learn About Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
