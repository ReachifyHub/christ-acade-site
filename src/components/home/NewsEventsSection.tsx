
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const NewsEventsSection = () => {
  return (
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
  );
};

export default NewsEventsSection;
