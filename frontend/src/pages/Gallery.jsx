import React, { useState } from 'react';

// Sample images for construction projects
const images = [
  "https://images.unsplash.com/photo-1593012140484-4a2c2b6f7f0e?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1610353679243-cf9fbb5c34f6?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1581091012184-3fa86f88fa2b?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1560184897-e07d6e994c41?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1532562145520-b8cce2486cd2?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1602524818274-f7b1831a3245?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1581090700221-0c1e1b58c2e1?auto=format&fit=crop&w=1350&q=80",
  "https://cdn.pixabay.com/photo/2017/03/28/12/10/construction-2184352_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/01/15/crane-1869619_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/27/20/59/handyman-5097425_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/09/25/21/39/construction-3692621_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/10/17/11/46/modern-house-1749827_1280.jpg",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1581093588401-f109cf5c0b72?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1534009324847-2ec8a7b3d6e1?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1578496472741-7ea2a508abb7?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1581092339039-fc702d2106c8?auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1350&q=80",
  "https://cdn.pixabay.com/photo/2015/03/26/10/09/bridge-690524_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/01/19/16/47/suspension-bridge-1149655_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/11/07/15/27/crane-1031463_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/07/31/23/52/crane-407745_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/20/00/30/construction-1990359_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/05/08/building-1868514_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/18/44/hard-hat-1851227_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/02/12/10/39/worker-631916_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/11/08/50/worker-838207_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/09/15/09/worker-2610337_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/16/23/10/worker-2077116_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/12/16/14/00/boiler-1915723_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/08/01/21/44/bridge-3571631_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/01/20/27/city-967015_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/12/15/17/16/cranes-568504_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/01/16/19/22/architecture-601493_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/20/22/57/construction-2159602_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/10/13/47/construction-715614_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/04/01/11/28/construction-1301857_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/01/24/00/04/bridge-1150450_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/11/27/08/56/worker-1060967_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/14/12/59/crane-1977028_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/12/21/03/47/bridge-1922011_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/27/18/58/crane-1222617_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/31/10/43/scaffolding-1011195_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/12/29/10/08/bridge-1935563_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/05/07/08/56/crane-2295041_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/05/09/29/skyline-2581429_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/31/11/54/scaffold-868891_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/19/11/26/building-1216759_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/02/08/22/26/construction-628657_1280.jpg"
];


export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20;

  // Pagination logic
  const indexOfLast = currentPage * imagesPerPage;
  const indexOfFirst = indexOfLast - imagesPerPage;
  const currentImages = images.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen bg-light py-20 px-6 font-sans text-dark">
      <h1 className="text-5xl md:text-6xl font-bold text-primary-blue text-center mb-16">
        Our Projects Gallery
      </h1>
      <p className="text-lg md:text-xl text-neutral-dark text-center max-w-4xl mx-auto mb-12">
        Explore some of our premium construction projects. Each image represents the quality, craftsmanship, and innovation we deliver.
      </p>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-light text-lg font-semibold">View Project</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-6 py-2 rounded-lg shadow-lg font-semibold ${
            currentPage === 1
              ? "bg-neutral-dark text-neutral-light cursor-not-allowed"
              : "bg-primary-blue text-light hover:bg-accent-gold transition-colors"
          }`}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-6 py-2 rounded-lg shadow-lg font-semibold ${
            currentPage === totalPages
              ? "bg-neutral-dark text-neutral-light cursor-not-allowed"
              : "bg-primary-blue text-light hover:bg-accent-gold transition-colors"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal Lightbox with Close Button */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-accent-gold transition-colors"
          >
            &times;
          </button>
          <img
            src={selectedImg}
            alt="Selected Project"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}
