
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import AcademicPrograms from "@/components/home/AcademicPrograms";
import CtaSection from "@/components/home/CtaSection";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Nurturing Excellence, Shaping Futures"
        subtitle="Welcome to Christ Acade Group of School"
        description="We provide a comprehensive education that fosters academic excellence, character development, and spiritual growth in a nurturing environment."
        image="assets/images/hero-image.jpg"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Programs Section */}
      <AcademicPrograms />

      {/* CTA Section */}
      <CtaSection />

      {/* News & Events Preview */}
      <NewsEventsSection />

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;
