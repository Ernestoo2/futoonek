import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const galleryImages: GalleryImage[] = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Volunteers distributing food to the homeless", category: "Community Outreach" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Children learning in a newly built school", category: "Education" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Medical team providing healthcare in rural areas", category: "Healthcare" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Reforestation project in progress", category: "Environment" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Clean water well inauguration ceremony", category: "Water Sanitation" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Women's empowerment workshop", category: "Women Empowerment" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Charity run event with participants", category: "Fundraising Events" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Disaster relief team in action", category: "Disaster Relief" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Youth volunteers cleaning up a beach", category: "Environment" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Mobile library reaching remote areas", category: "Education" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Elderly care program in action", category: "Community Outreach" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Sustainable farming initiative", category: "Environment" },
  ]

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))]

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="bg-[#FCFCFC] min-h-screen">
      <Header />

      <main className="pb-16">
        <section className="bg-[#4ade80] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact in Pictures</h1>
            <p className="text-xl max-w-2xl mx-auto">Explore the moments we've captured in our journey to make a difference. Each image tells a story of hope, compassion, and positive change.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full ₦{
                    activeCategory === category
                      ? 'bg-[#4ade80] text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  } transition-colors duration-200`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <div className="max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain" />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-[#4ade80] rounded-full p-2 hover:bg-[#FF5555] transition-colors"
                aria-label="Close image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}