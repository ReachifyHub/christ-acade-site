
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, GraduationCap, Trophy, Users, Home as HomeIcon } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Nurturing Excellence, Shaping Futures"
        subtitle="Welcome to Christ Acade Group of School"
        description="We provide a comprehensive education that fosters academic excellence, character development, and spiritual growth in a nurturing environment."
        image="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        buttonText="Apply Now"
        buttonLink="/apply"
      />

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="A Tradition of Excellence in Education"
                subtitle="Our Mission"
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                At Christ Acade Group of School, we believe in providing a holistic education that nurtures not just the mind, but also the heart and spirit of each student. Our commitment to academic excellence, character formation, and spiritual development has been our guiding principle since our establishment.
              </p>
              <p className="text-gray-600 mb-8">
                Our dedicated faculty and staff work tirelessly to create a supportive and challenging learning environment where students can discover their talents, pursue their passions, and reach their full potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="School campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1595126710466-5d444f5be811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Science lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-(-8)">
                <img
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Sports activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Christ Acade"
            subtitle="Our Advantages"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Academic Excellence"
              icon={<BookOpen className="w-6 h-6" />}
              description="Our rigorous curriculum and dedicated faculty ensure that students receive a top-quality education that prepares them for future success."
            />
            <FeatureCard
              title="Character Formation"
              icon={<Users className="w-6 h-6" />}
              description="We emphasize values like integrity, responsibility, and compassion, helping students develop strong moral character."
            />
            <FeatureCard
              title="Safe Environment"
              icon={<HomeIcon className="w-6 h-6" />}
              description="Our secure campus and caring staff create a safe, nurturing environment where students can focus on learning and growth."
            />
            <FeatureCard
              title="Extracurricular Activities"
              icon={<Trophy className="w-6 h-6" />}
              description="We offer a wide range of sports, arts, and club activities to help students discover and develop their talents outside the classroom."
            />
            <FeatureCard
              title="Modern Facilities"
              icon={<GraduationCap className="w-6 h-6" />}
              description="Our state-of-the-art classrooms, libraries, laboratories, and sports facilities provide an ideal setting for learning and development."
            />
            <FeatureCard
              title="Community Engagement"
              icon={<Calendar className="w-6 h-6" />}
              description="We actively involve students in community service projects, fostering a sense of social responsibility and global citizenship."
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
                  src="https://images.unsplash.com/photo-1577896852618-3b02bc95851c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Begin Your Child's Educational Journey with Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Take the first step towards providing your child with an exceptional education that will prepare them for a successful future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-school-secondary hover:bg-school-secondary/90">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-primary">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Events Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="News & Upcoming Events"
            subtitle="Stay Informed"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1531496681073-2315c7bce613?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Student Achievement Award"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">June 15, 2023</div>
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">
                  Students Win National Science Competition
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Our senior secondary school science team won first place in the National Science Olympiad, showcasing their exceptional talent and hard work.
                </p>
                <Button asChild variant="link" className="p-0 text-school-primary">
                  <Link to="/news">Read More</Link>
                </Button>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1511543508775-2b13beb9b3c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="New Library Opening"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 28, 2023</div>
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">
                  New State-of-the-Art Library Opens
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  We are excited to announce the opening of our new library, featuring the latest digital resources and learning spaces.
                </p>
                <Button asChild variant="link" className="p-0 text-school-primary">
                  <Link to="/news">Read More</Link>
                </Button>
              </div>
            </div>

            {/* Event */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Annual Sports Day"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-school-secondary font-medium mb-2">Upcoming Event</div>
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">
                  Annual Inter-House Sports
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>July 12, 2023</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Join us for our Annual Inter-House Sports competition, featuring athletic events, performances, and community activities.
                </p>
                <Button asChild variant="link" className="p-0 text-school-primary">
                  <Link to="/news">View All Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
    </div>
  );
};

export default Home;
