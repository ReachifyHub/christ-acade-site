
import { BookOpen, Users, Home as HomeIcon, Trophy, GraduationCap, Calendar } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

const WhyChooseSection = () => {
  return (
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
  );
};

export default WhyChooseSection;
