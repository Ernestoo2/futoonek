import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Grid, PauseCircle, PlayCircle, X, ZoomIn } from "lucide-react";
import { Card, CardContent } from "../pages/Ui/CardUi";

// Optimized Image Component
const OptimizedImage = ({ 
    src, 
    alt, 
    className = '', 
    quality = 'cover', 
    position = 'center',
    highResSrc = null,
    placeholder = '/placeholder.png'
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const objectFitClasses = {
        'cover': 'object-cover',
        'contain': 'object-contain',
        'fill': 'object-fill',
        'scale-down': 'object-scale-down',
        'none': 'object-none'
    };
    
    const objectPositionClasses = {
        'center': 'object-center',
        'top': 'object-top',
        'bottom': 'object-bottom',
        'left': 'object-left',
        'right': 'object-right'
    };
    
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Placeholder while loading */}
            {!imageLoaded && (
                <img 
                    src={placeholder} 
                    alt="Loading" 
                    className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50"
                />
            )}
            
            {/* Main Image */}
            <img
                src={src}
                srcSet={highResSrc ? `${src} 1x, ${highResSrc} 2x` : undefined}
                alt={alt}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`
                    w-full 
                    h-full 
                    ${objectFitClasses[quality]} 
                    ${objectPositionClasses[position]}
                    transition-opacity 
                    duration-300 
                    ${className}
                    ${!imageLoaded ? 'opacity-0' : 'opacity-100'}
                `}
            />
        </div>
    );
};

const EnhancedGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'slideshow'

    const galleryImages = [
        { 
            src: "/frame-226.png?/800/600", 
            alt: "Volunteers distributing food to the homeless", 
            category: "Community Outreach" 
        },
        { 
            src: "/frame-234.png?/800/600", 
            alt: "Children learning in a newly built school",
            category: "Education" 
        },
        { 
            src: "/frame-235.png?/800/600", 
            alt: "Medical team providing healthcare in rural areas", 
            category: "Healthcare" 
        },
        { 
            src: "/frame-237.png?/800/600", 
            alt: "Reforestation project in progress", 
            category: "Environment" 
        },
        { 
            src: "/frame-226.png?/800/600", 
            alt: "Clean water well inauguration ceremony", 
            category: "Water Sanitation" 
        },
        { 
            src: "/image-11.png?/800/600", 
            alt: "Women's empowerment workshop", 
            category: "Women Empowerment" 
        },
        { 
            src: "/img1.jpg?/800/600", 
            alt: "Charity run event with participants", 
            category: "Fundraising Events" 
        },
        { 
            src: "/frame-235.png?/800/600", 
            alt: "Disaster relief team in action", 
            category: "Disaster Relief" 
        },
        { 
            src: "/frame-235.png?/800/600", 
            alt: "Youth volunteers cleaning up a beach", 
            category: "Environment" 
        },
        { 
            src: "/frame-226.png?/800/600",
            alt: "Mobile library reaching remote areas", 
            category: "Education" 
        },
        { 
            src: "/frame-234.png?/800/600", 
            alt: "Elderly care program in action", 
            category: "Community Outreach"
        },
        { 
            src: "/frame-235.png?/800/600", 
            alt: "Sustainable farming initiative", 
            category: "Environment" 
        },
    ];


    const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    React.useEffect(() => {
        let interval;
        if (isPlaying && viewMode === 'slideshow') {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, filteredImages.length, viewMode]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <main className="pb-16 font-['Inter'] antialiased">
            <section className="bg-[#4ade80] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-['Roboto'] uppercase">Our Impact in Pictures</h1>
                    <p className="text-xl max-w-2xl mx-auto font-light tracking-wide">Explore the moments we've captured in our journey to make a difference. Each image tells a story of hope, compassion, and positive change.</p>
                </div>
            </section>
            
            <Card className="container mx-auto px-4 py-16">
                <CardContent className="p-6">
                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-4 mb-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setCurrentIndex(0);
                                }}
                                className={`px-5 py-4 rounded-full transition-all duration-300 font-medium tracking-wide ${
                                    activeCategory === category
                                        ? 'bg-[#4ade80] text-white shadow-lg'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* View Mode Toggles */}
                    <div className="flex justify-end mb-4 gap-2">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-4 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                        >
                            <Grid size={30} />
                        </button>
                        <button
                            onClick={() => setViewMode('slideshow')}
                            className={`p-2 rounded-lg ${viewMode === 'slideshow' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                        >
                            <PlayCircle size={30} />
                        </button>
                    </div>

                    {/* Grid View */}
                    {viewMode === 'grid' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                        <OptimizedImage
                                            src={image.src}
                                            highResSrc={image.highResSrc}
                                            alt={image.alt}
                                            quality="cover"
                                            position="center"
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                        <p className="text-white text-sm font-medium tracking-wide">{image.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Slideshow View */}
                    {viewMode === 'slideshow' && (
                        <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
                            <OptimizedImage
                                src={filteredImages[currentIndex].src}
                                highResSrc={filteredImages[currentIndex].highResSrc}
                                alt={filteredImages[currentIndex].alt}
                                quality="cover"
                                position="center"
                                className="w-full h-full"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                <p className="text-white font-medium tracking-wide">{filteredImages[currentIndex].alt}</p>
                                <p className="text-gray-300 text-sm font-light tracking-wider">{filteredImages[currentIndex].category}</p>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>

                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                            >
                                {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                            </button>
                        </div>
                    )}

                    {/* Lightbox */}
                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div
                                className="relative max-w-6xl w-full p-4"
                                onClick={e => e.stopPropagation()}
                            >
                                <OptimizedImage
                                    src={selectedImage.src}
                                    highResSrc={selectedImage.highResSrc}
                                    alt={selectedImage.alt}
                                    quality="contain"
                                    position="center"
                                    className="w-full h-auto max-h-[90vh] rounded-lg shadow-2xl"
                                />
                                
                                <div className="absolute bottom-8 left-0 right-0 text-center">
                                    <p className="text-white text-lg font-medium tracking-wide">{selectedImage.alt}</p>
                                    <p className="text-gray-300 font-light tracking-wider">{selectedImage.category}</p>
                                    {selectedImage.description && (
                                        <p className="text-gray-200 text-sm mt-2">{selectedImage.description}</p>
                                    )}
                                </div>
                                
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                                >
                                    <X className="text-white" size={24} />
                                </button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </main>
    );
};

export default EnhancedGallery;