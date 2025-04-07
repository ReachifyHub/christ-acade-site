import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Heart, Target, Clock, Award } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

const About = () => {
  return (
    <div>
      <Hero
        title="About Christ Acade Group of School"
        subtitle="Our Story"
        description="Learn about our mission, vision, values, and the dedicated team that makes Christ Acade a special place for learning and growth."
        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        small={true}
      />

      {/* Welcome Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-primary mb-6">Welcome to Christ Acade Group of School</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Christ Acade Group of School, we are committed to providing a holistic education that nurtures the intellectual, physical, emotional, and spiritual growth of our students. We believe in creating a supportive and challenging learning environment where students can discover their talents, pursue their passions, and reach their full potential.
            </p>
            <p className="text-lg text-gray-600">
              Our dedicated faculty and staff work tirelessly to instill values of excellence, integrity, and service in our students, preparing them not just for academic success, but for a lifetime of meaningful contributions to society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-school-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide a comprehensive education that fosters academic excellence, character development, and spiritual growth in a nurturing environment, empowering students to become lifelong learners and responsible citizens.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-school-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading educational institution that inspires and prepares students to excel academically, develop strong moral character, and make positive contributions to their communities and the world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-school-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excellence in all endeavors</li>
                <li>• Integrity and honesty</li>
                <li>• Respect for self and others</li>
                <li>• Responsibility and accountability</li>
                <li>• Compassion and service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our History"
            subtitle="Where We Began"
          />
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-gray-600 mb-6">
              Christ Acade Group of School was founded with a vision to provide quality education grounded in strong moral values. Since our establishment, we have grown from a small school with just a few classrooms to a comprehensive educational institution serving students from various backgrounds.
            </p>
            <p className="text-gray-600 mb-6">
              Throughout our history, we have maintained our commitment to academic excellence while adapting to the changing educational landscape. We have continually updated our facilities, curriculum, and teaching methodologies to ensure that our students receive the best possible education.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey has been marked by the dedication of our faculty and staff, the support of parents and the community, and the achievements of our students. We are proud of our history and excited about the future as we continue to build on our foundation of excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-school-primary mr-2" />
                  <h4 className="font-medium text-school-primary">Key Milestones</h4>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Founding of Christ Acade Primary School</li>
                  <li>• Expansion to include junior secondary classes</li>
                  <li>• Addition of senior secondary school</li>
                  <li>• Development of modern facilities and resources</li>
                  <li>• Recognition for academic and extracurricular achievements</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-5 h-5 text-school-primary mr-2" />
                  <h4 className="font-medium text-school-primary">Achievements</h4>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Consistent high performance in national examinations</li>
                  <li>• Recognition for excellence in sports and arts</li>
                  <li>• Community service awards</li>
                  <li>• Partnerships with educational institutions</li>
                  <li>• Alumni success in various fields</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet Our Staff"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="min-h-84 h-auto">
      <img
        src="https://i.ibb.co/39xY22BF/IMG-20250407-WA0000.jpg"
        alt="Prophet Olamoyesan A. Aderemi"
        className="w-full h-full object-contain"
        style={{
          aspectRatio: 'auto',
          maxHeight: '500px'
        }}
        onError={(e) => {
          console.error('Image failed to load');
          e.target.style.display = 'none';
        }}
      />
    </div>
  </div>
</div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-1">Prophet Olamoyesan A. Aderemi</h3>
                <p className="text-school-secondary font-medium mb-4">Proprietor</p>
                <p className="text-gray-600 mb-4">
                  Prophet Olamoyesan brings years of educational leadership experience to Christ Acade. He is dedicated to fostering a culture of academic excellence and holistic development.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://i.ibb.co/dJBwNP1T/IMG-20250402-WA0002.jpg"
                  alt="Mrs. Olamoyesan E.O."
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-1">Mrs. Olamoyesan E.O.</h3>
                <p className="text-school-secondary font-medium mb-4">School Coordinator</p>
                <p className="text-gray-600 mb-4">
                  Mrs. Olamoyesan oversees academic affairs and student development. She works closely with faculty to ensure high-quality teaching and learning experiences.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://i.ibb.co/C3PpCwwn/IMG-20250402-WA0003.jpg"
                  alt="Mrs. Rebecca Adejumo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-1">Mrs. Rebecca Adejumo</h3>
                <p className="text-school-secondary font-medium mb-4">HOS</p>
                <p className="text-gray-600 mb-4">
                  Mrs. Rebecca Adejumo coordinates staff development and administrative functions. She ensures the smooth operation of school activities and programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Educational Approach"
                subtitle="How We Teach"
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                At Christ Acade, we believe in a balanced approach to education that addresses the intellectual, physical, emotional, and spiritual dimensions of our students. Our curriculum is designed to be challenging yet supportive, encouraging students to think critically, solve problems creatively, and communicate effectively.
              </p>
              <p className="text-gray-600 mb-8">
                We employ a variety of teaching methodologies to accommodate different learning styles and ensure that each student receives the attention and support they need to thrive. Our small class sizes allow for personalized instruction and meaningful teacher-student interactions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard
                  title="Student-Centered Learning"
                  icon={<Users className="w-6 h-6" />}
                  description="We place students at the center of the learning process, empowering them to take ownership of their education."
                />
                <FeatureCard
                  title="Character Development"
                  icon={<Heart className="w-6 h-6" />}
                  description="We integrate character education into all aspects of school life, helping students develop into responsible, compassionate individuals."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Classroom teaching"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md mt-8">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Students working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Science experiment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md mt-8">
                <img
                  src="https://images.unsplash.com/photo-1576976201807-a5fdb4a95ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Sports activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Facilities"
            subtitle="Learning Environment"
          />
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide modern facilities and resources that support effective teaching and learning, creating an environment where students can explore, discover, and grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Classrooms"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Modern Classrooms</h3>
                <p className="text-gray-600">
                  Our spacious, well-lit classrooms are equipped with modern teaching aids and technology to enhance the learning experience.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Science Labs"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Science Laboratories</h3>
                <p className="text-gray-600">
                  Our state-of-the-art science labs provide hands-on learning opportunities in physics, chemistry, and biology.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Library"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Library & Media Center</h3>
                <p className="text-gray-600">
                  Our library offers a rich collection of books, periodicals, and digital resources to support research and independent learning.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Computer Lab"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Computer Labs</h3>
                <p className="text-gray-600">
                  Our computer labs are equipped with the latest hardware and software, providing students with essential technology skills for the Nigerian educational system.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Sports Facilities"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Sports Facilities</h3>
                <p className="text-gray-600">
                  Our sports facilities include playing fields, courts, and equipment for various individual and team sports.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Arts Studios"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Arts & Music Studios</h3>
                <p className="text-gray-600">
                  Our dedicated spaces for visual arts, music, and performing arts allow students to explore and develop their creative talents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join the Christ Acade Family
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Experience a supportive community where your child can grow, learn, and thrive. Take the first step towards providing your child with an exceptional education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-school-secondary hover:bg-school-secondary/90">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
