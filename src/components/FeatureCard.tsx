
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  description: string;
}

const FeatureCard = ({ title, icon, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-school-accent text-school-primary mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-semibold text-school-primary">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
