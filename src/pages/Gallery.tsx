import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GalleryFilters from "@/components/gallery/GalleryFilters";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Campus", "Academic", "Arts", "Sports", "Events"];

  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/KxvhL881/2024-07-16.webp",
      alt: "School campus",
      category: "Campus",
      caption: "Our beautiful main building surrounded by lush gardens"
    },
    {
      id: 2,
      src: "/assets/images/classroom.jpeg",
      alt: "Modern classroom",
      category: "Academic",
      caption: "Modern classrooms equipped with the latest educational technology"
    },
    {
      id: 3,
      src: "/assets/images/science-lab.jpg",
      alt: "Science laboratory",
      category: "Academic",
      caption: "Well-equipped science laboratory for practical learning"
    },
    {
      id: 4,
      src: "/assets/images/sports.jpg",
      alt: "Sports activities",
      category: "Sports",
      caption: "Students participating in various sports activities"
    },
    {
      id: 5,
      src: "/assets/images/news1.jpg",
      alt: "School event",
      category: "Events",
      caption: "Annual school celebration with cultural performances"
    },
    {
      id: 6,
      src: "/assets/images/news2.jpg",
      alt: "Art exhibition",
      category: "Arts",
      caption: "Student art exhibition showcasing their creative talents"
    },
    {
      id: 7,
      src: "/assets/images/event1.jpg",
      alt: "Sports day",
      category: "Sports",
      caption: "Inter-house sports competition"
    },
    {
      id: 8,
      src: "/assets/images/junior-secondary.jpg",
      alt: "Junior secondary students",
      category: "Academic",
      caption: "Junior secondary students in a collaborative learning session"
    },
    {
      id: 9,
      src: "/assets/images/primary-school.jpg",
      alt: "Primary school students",
      category: "Academic",
      caption: "Primary school students engaged in an interactive lesson"
    },
  ];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(image => image.category === activeFilter);

  return (
    <div>
      <PageHeader
        title="School Gallery"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Gallery" }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <GalleryFilters 
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-64 relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{image.caption}</p>
                <span className="inline-block mt-2 text-xs bg-school-accent text-school-primary px-2 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
