
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [open, setOpen] = useState(false);

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Campus Main Building",
      category: "campus"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Students in Library",
      category: "academics"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511543508775-2b13beb9b3c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "School Library",
      category: "campus"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Classroom Learning",
      category: "academics"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Sports Field",
      category: "sports"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Art Class",
      category: "arts"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Basketball Game",
      category: "sports"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1598386651573-9232cc0c2d6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Science Lab",
      category: "academics"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Music Performance",
      category: "arts"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "School Play",
      category: "arts"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Outdoor Campus Area",
      category: "campus"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Soccer Training",
      category: "sports"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1577896852418-3b02bc95851c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Computer Lab",
      category: "academics"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1599666517773-52088cfddc38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Art Exhibition",
      category: "arts"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Swimming Pool",
      category: "sports"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Graduation Ceremony",
      category: "events"
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "School Cafeteria",
      category: "campus"
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Annual Sports Day",
      category: "events"
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Dance Performance",
      category: "arts"
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "School Science Fair",
      category: "events"
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Photo Gallery" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Gallery" }
        ]} 
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Capturing School Life"
            subtitle="Our Visual Journey"
          />
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="campus">Campus</TabsTrigger>
                <TabsTrigger value="academics">Academics</TabsTrigger>
                <TabsTrigger value="arts">Arts</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image) => (
                  <GalleryItem key={image.id} image={image} onClick={() => openImage(image)} />
                ))}
              </div>
            </TabsContent>
            
            {["campus", "academics", "arts", "sports", "events"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {galleryImages
                    .filter((image) => image.category === category)
                    .map((image) => (
                      <GalleryItem key={image.id} image={image} onClick={() => openImage(image)} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Video Highlights"
            subtitle="Watch & Learn"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoItem 
              title="Campus Tour" 
              thumbnail="https://images.unsplash.com/photo-1537111355507-1f247d707429?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              embedId="dQw4w9WgXcQ"
            />
            <VideoItem 
              title="Academic Excellence" 
              thumbnail="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              embedId="dQw4w9WgXcQ"
            />
            <VideoItem 
              title="Arts Program Spotlight" 
              thumbnail="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              embedId="dQw4w9WgXcQ"
            />
            <VideoItem 
              title="Athletics Highlights" 
              thumbnail="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              embedId="dQw4w9WgXcQ"
            />
            <VideoItem 
              title="Student Testimonials" 
              thumbnail="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              embedId="dQw4w9WgXcQ"
            />
            <VideoItem 
              title="Annual School Concert" 
              thumbnail="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              embedId="dQw4w9WgXcQ"
            />
          </div>
        </div>
      </section>

      {/* Lightbox dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full rounded-lg max-h-[80vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md cursor-pointer group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <p className="text-white text-sm font-medium">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

interface VideoItemProps {
  title: string;
  thumbnail: string;
  embedId: string;
}

const VideoItem = ({ title, thumbnail, embedId }: VideoItemProps) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 bg-gray-200">
        {playing ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="w-full h-full cursor-pointer group"
            onClick={() => setPlaying(true)}
          >
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-school-primary/90 rounded-full flex items-center justify-center group-hover:bg-school-secondary transition-colors">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-school-primary">{title}</h3>
      </div>
    </div>
  );
};

export default Gallery;
