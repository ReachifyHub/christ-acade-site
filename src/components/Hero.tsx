
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  buttonOnClick?: () => void;
  children?: ReactNode;
  overlay?: boolean;
  small?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  buttonOnClick,
  children,
  overlay = true,
  small = false,
}: HeroProps) => {
  // Ensure image path has correct format
  const imagePath = image.startsWith("http") || image.startsWith("./") || image.startsWith("/") 
    ? image 
    : `/${image}`;
    
  return (
    <div
      className={`relative flex items-center ${small ? "min-h-[40vh]" : "min-h-[80vh]"} w-full bg-cover bg-center`}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-school-primary/90 via-school-primary/80 to-school-primary/60"></div>
      )}

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-3xl">
          {subtitle && (
            <span className="text-school-secondary uppercase tracking-wider font-medium animate-fade-in">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-2 mb-4 animate-fade-in">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white/90 mb-8 animate-fade-in">
              {description}
            </p>
          )}
          
          {buttonText && (buttonLink || buttonOnClick) && (
            <Button 
              size="lg" 
              className="bg-school-secondary hover:bg-school-secondary/90 text-white animate-fade-in"
              onClick={buttonOnClick}
              asChild={buttonLink ? true : false}
            >
              {buttonLink ? <Link to={buttonLink}>{buttonText}</Link> : <span>{buttonText}</span>}
            </Button>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
