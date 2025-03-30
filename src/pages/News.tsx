
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight, Tag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

const News = () => {
  return (
    <div>
      <PageHeader 
        title="News & Events" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "News & Events" }
        ]} 
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="news">Latest News</TabsTrigger>
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="news" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <NewsGrid />
                </div>
                <div>
                  <NewsSidebar />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <EventsList />
                </div>
                <div>
                  <EventsSidebar />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

const NewsGrid = () => {
  const newsItems = [
    {
      id: 1,
      title: "Students Win National Science Competition",
      excerpt: "Our high school science team won first place in the National Science Olympiad, showcasing their exceptional talent and dedication in the fields of physics, chemistry, and biology.",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Academic Achievement"
    },
    {
      id: 2,
      title: "New State-of-the-Art Library Opens",
      excerpt: "We are excited to announce the opening of our new library, featuring the latest digital resources, collaborative learning spaces, and an expanded collection of books and multimedia materials.",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Campus Update"
    },
    {
      id: 3,
      title: "Christ Acade Students Participate in International Youth Forum",
      excerpt: "A delegation of ten high school students represented our school at the International Youth Leadership Forum in Geneva, where they engaged in discussions about global challenges with peers from around the world.",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Student Achievement"
    },
    {
      id: 4,
      title: "School Choir Wins Regional Championship",
      excerpt: "Our talented school choir delivered a stunning performance at the Regional Choral Competition, earning first place and receiving special recognition for their technical skill and emotional expressiveness.",
      date: "April 30, 2023",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Arts"
    },
    {
      id: 5,
      title: "New STEM Initiative Launches Next Semester",
      excerpt: "We're thrilled to announce the launch of our enhanced STEM program next semester, which will include new robotics courses, advanced computer science offerings, and partnerships with local technology companies.",
      date: "April 15, 2023",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Curriculum"
    },
    {
      id: 6,
      title: "Community Service Day Makes a Difference",
      excerpt: "Our annual Community Service Day saw over 500 students, faculty, and parents volunteering at 15 locations across the city, contributing more than 2,000 hours of service to make our community a better place.",
      date: "March 28, 2023",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Community"
    },
  ];

  return (
    <div>
      {/* Featured News Item */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-60 md:h-auto overflow-hidden">
            <img 
              src={newsItems[0].image} 
              alt={newsItems[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{newsItems[0].date}</span>
              <span className="mx-2">•</span>
              <Tag className="w-4 h-4 mr-1" />
              <span>{newsItems[0].category}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-school-primary mb-3">{newsItems[0].title}</h2>
            <p className="text-gray-600 mb-4">{newsItems[0].excerpt}</p>
            <Button asChild>
              <Link to={`/news/${newsItems[0].id}`}>Read Full Story</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.slice(1).map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{item.date}</span>
                <span className="mx-2">•</span>
                <Tag className="w-4 h-4 mr-1" />
                <span>{item.category}</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
              <Button asChild variant="outline" size="sm">
                <Link to={`/news/${item.id}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" className="w-10 h-10 p-0">1</Button>
          <Button variant="outline" size="sm" className="w-10 h-10 p-0">2</Button>
          <Button variant="outline" size="sm" className="w-10 h-10 p-0">3</Button>
          <Button variant="outline" size="sm" className="w-10 h-10 p-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const NewsSidebar = () => {
  const categories = [
    { name: "Academic Achievement", count: 8 },
    { name: "Campus Update", count: 6 },
    { name: "Student Achievement", count: 12 },
    { name: "Arts", count: 5 },
    { name: "Sports", count: 7 },
    { name: "Curriculum", count: 4 },
    { name: "Community", count: 9 },
    { name: "Alumni News", count: 3 },
  ];

  const recentPosts = [
    {
      id: 7,
      title: "Math Team Places 2nd in State Competition",
      date: "March 15, 2023",
    },
    {
      id: 8,
      title: "New Athletic Field Renovation Completed",
      date: "March 8, 2023",
    },
    {
      id: 9,
      title: "Student Art Exhibition Opens Downtown",
      date: "February 28, 2023",
    },
    {
      id: 10,
      title: "Teacher Receives Excellence in Education Award",
      date: "February 12, 2023",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">Search News</h3>
        <div className="relative">
          <Input placeholder="Search..." className="pr-10" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-school-primary">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link 
                to={`/news/category/${encodeURIComponent(category.name.toLowerCase())}`}
                className="flex justify-between items-center py-2 border-b border-gray-100 text-gray-600 hover:text-school-primary transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-1">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-start">
              <div className="flex-1">
                <Link 
                  to={`/news/${post.id}`}
                  className="text-gray-700 hover:text-school-primary font-medium transition-colors"
                >
                  {post.title}
                </Link>
                <div className="text-sm text-gray-500 mt-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-school-primary text-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-serif font-semibold mb-4">Subscribe to Newsletter</h3>
        <p className="text-white/80 mb-4">Stay updated with our latest news and events.</p>
        <Input placeholder="Your email address" className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/60" />
        <Button variant="secondary" className="w-full bg-white text-school-primary hover:bg-white/90">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

const EventsList = () => {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "July 12, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "School Athletic Field",
      description: "Join us for our Annual Sports Day celebration, featuring athletic competitions, performances, and community activities for students of all ages.",
      image: "https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Parent-Teacher Conference",
      date: "July 20-21, 2023",
      time: "3:00 PM - 8:00 PM",
      location: "School Classrooms",
      description: "Schedule meetings with your child's teachers to discuss academic progress, strengths, and areas for growth as we conclude the academic term.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Summer Music Concert",
      date: "August 5, 2023",
      time: "6:30 PM - 8:30 PM",
      location: "School Auditorium",
      description: "Our music department presents a delightful evening of performances showcasing the talents of our choir, orchestra, and band students.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "College Admissions Information Night",
      date: "August 15, 2023",
      time: "7:00 PM - 9:00 PM",
      location: "School Library",
      description: "High school students and parents are invited to learn about the college application process, financial aid options, and strategies for success.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "Back to School Night",
      date: "September 2, 2023",
      time: "6:00 PM - 8:30 PM",
      location: "School Campus",
      description: "Meet your child's teachers, learn about the curriculum, and get important information about the upcoming school year at this essential event.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      title: "Annual Charity Gala",
      date: "September 23, 2023",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Hotel Downtown",
      description: "Support our scholarship fund at this elegant evening featuring dining, entertainment, and both live and silent auctions.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="h-48 md:h-auto overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-2 md:mb-0">{event.title}</h3>
                <div className="flex items-center bg-school-accent text-school-primary px-3 py-1 rounded-full text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{event.date}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex space-x-3">
                <Button asChild>
                  <Link to={`/events/${event.id}`}>Event Details</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/calendar">Add to Calendar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const EventsSidebar = () => {
  const upcomingEvents = [
    {
      id: 7,
      title: "Fall Sports Tryouts",
      date: "August 10-12, 2023",
      type: "Sports"
    },
    {
      id: 8,
      title: "New Family Orientation",
      date: "August 25, 2023",
      type: "Orientation"
    },
    {
      id: 9,
      title: "First Day of School",
      date: "September 5, 2023",
      type: "Academic"
    },
    {
      id: 10,
      title: "Homecoming Game & Dance",
      date: "October 14, 2023",
      type: "Social"
    },
  ];

  const eventTypes = [
    { name: "Academic", count: 12 },
    { name: "Arts", count: 8 },
    { name: "Sports", count: 10 },
    { name: "Community Service", count: 5 },
    { name: "Social", count: 7 },
    { name: "Parent Events", count: 6 },
  ];

  return (
    <div className="space-y-8">
      {/* Calendar Link */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">School Calendar</h3>
        <p className="text-gray-600 mb-4">View our complete school calendar with all upcoming events and important dates.</p>
        <Button asChild>
          <Link to="/calendar">View Full Calendar</Link>
        </Button>
      </div>

      {/* Event Registration */}
      <div className="bg-school-primary text-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-serif font-semibold mb-4">Event Registration</h3>
        <p className="text-white/80 mb-4">Need to register for an upcoming event? Click the button below to access our event registration portal.</p>
        <Button variant="secondary" className="w-full bg-white text-school-primary hover:bg-white/90">
          Event Registration Portal
        </Button>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">More Upcoming Events</h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
              <Link 
                to={`/events/${event.id}`}
                className="text-gray-700 hover:text-school-primary font-medium transition-colors"
              >
                {event.title}
              </Link>
              <div className="flex justify-between items-center mt-1">
                <div className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{event.date}</span>
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{event.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-2 border-t border-gray-100 text-center">
          <Button asChild variant="link" className="text-school-primary">
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>

      {/* Event Types */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">Event Types</h3>
        <ul className="space-y-2">
          {eventTypes.map((type) => (
            <li key={type.name}>
              <Link 
                to={`/events/type/${encodeURIComponent(type.name.toLowerCase())}`}
                className="flex justify-between items-center py-2 border-b border-gray-100 text-gray-600 hover:text-school-primary transition-colors"
              >
                <span>{type.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-1">{type.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
