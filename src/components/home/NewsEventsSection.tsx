
import { Calendar } from "lucide-react";
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
                Students Excel in WAEC Examination
              </h3>
              <p className="text-gray-600 mb-4">
                Our senior secondary school students achieved outstanding results in the West African Examinations Council (WAEC) exams, with 95% scoring distinctions in core subjects.
              </p>
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
                New Computer Laboratory Opens
              </h3>
              <p className="text-gray-600 mb-4">
                We are proud to announce the opening of our new computer laboratory, equipped with modern facilities to enhance ICT education for all students.
              </p>
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
                Annual Inter-House Sports Competition
              </h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>July 12, 2025</span>
              </div>
              <p className="text-gray-600 mb-4">
                Join us for our Annual Inter-House Sports competition, featuring athletics, football, and traditional Nigerian games and cultural performances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
