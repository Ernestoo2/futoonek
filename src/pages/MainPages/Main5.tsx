import React, { useState } from "react";

// Define TypeScript interfaces for better type safety
interface NewsItem {
  title: string;
  date: string;
  image: string;
  url: string;
  isHighlighted: boolean;
}

const Main5 = () => {
  const [newsItems] = useState<NewsItem[]>([
    {
      title: "New Partnership Announcement",
      date: "December 28, 2024",
      image: "/partnership.png?height=200&width=300",
      url: "/AboutUs",
      isHighlighted: true
    },
    {
      title: "Successful Fundraising Campaign",
      date: "December 15, 2024",
      image: "/donate.png?height=200&width=300",
      url: "/AboutUs",
      isHighlighted: false
    },
    {
      title: "Volunteer Appreciation Day",
      date: "December 5, 2024",
      image: "/appreciate.png?height=200&width=300",
      url: "/AboutUs",
      isHighlighted: true
    },
  ]);

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const filterNews = (filter: string) => {
    setActiveFilter(filter);
  };

  const getFilteredNews = () => {
    const currentDate = new Date().getTime(); // Get timestamp for comparison
    switch (activeFilter) {
      case "recent":
        return newsItems.filter(news => {
          const newsDate = new Date(news.date).getTime();
          const diffTime = currentDate - newsDate;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 14;
        });
      case "highlighted":
        return newsItems.filter(news => news.isHighlighted);
      default:
        return newsItems;
    }
  };

  // Since we can't use react-router-dom directly, we'll use window.location
  // You should replace this with your preferred navigation method
  const handleReadMore = (url: string) => {
    window.location.href = url;
  };

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => filterNews("all")}
              className={`px-4 py-2 rounded-md transition-colors ₦{
                activeFilter === "all"
                  ? "bg-[#4ade80] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              All News
            </button>
            <button
              onClick={() => filterNews("recent")}
              className={`px-4 py-2 rounded-md transition-colors ₦{
                activeFilter === "recent"
                  ? "bg-[#4ade80] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Recent News
            </button>
            <button
              onClick={() => filterNews("highlighted")}
              className={`px-4 py-2 rounded-md transition-colors ₦{
                activeFilter === "highlighted"
                  ? "bg-[#4ade80] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Highlighted
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredNews().map((news, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 ₦{
                  isHovered === index ? "transform scale-105" : ""
                } ₦{news.isHighlighted ? "border-2 border-[#4ade80]" : ""}`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  {news.isHighlighted && (
                    <div className="absolute top-2 right-2 bg-[#4ade80] text-white px-2 py-1 rounded-md text-sm">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.date}</p>
                  <a
                    href={news.url}
                    className="inline-block px-4 py-2 bg-[#4ade80] text-white rounded-md hover:bg-[#3ab669] transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {getFilteredNews().length === 0 && (
            <div className="text-center text-gray-600 mt-8">
              No news items found for the selected filter.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Main5;