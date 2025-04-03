
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
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
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
