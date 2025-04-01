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
        image="assets/images/hero-image.jpg"
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
                  src="/assets/images/campus.jpg"
                  alt="School campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/assets/images/classroom.jpg"
                  alt="Students in classroom
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/assets/images/science-lab.jpg"
                  alt="Science lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-(-8)">
                <img
                  src="/assets/images/sports.jpg"
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
                  src="/assets/images/primary-school.jpg"
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
                  src="/assets/images/junior-secondary.jpg"
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
                  src="/assets/images/senior-secondary.jpg"
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
                  src="/assets/images/news1.jpg"
                  alt="Student Achievement Award"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">June 15, 2025</div>
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
                  src="/assets/images/news2.jpg"
                  alt="New Library Opening"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 28, 2025</div>
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
                  src="/assets/images/event1.jpg"
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
                  <span>July 12, 2025</span>
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
