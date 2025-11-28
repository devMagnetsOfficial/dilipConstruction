import React, { useState } from 'react';

// Sample images for construction projects
const images = [
  'https://tse1.explicit.bing.net/th/id/OIP.ou2xEGe2kycVPjhbogc4uwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' ,
  'https://housing.com/news/wp-content/uploads/2023/02/Simple-ceiling-designs-to-beautify-your-home-f.jpg',
  'https://images.unsplash.com/photo-1701184788923-c35f876bf234?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
  'https://images.unsplash.com/photo-1505144260209-24e40c03261c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNlaWxpbmd8ZW58MHx8MHx8fDA%3D' ,
  'https://i.pinimg.com/736x/29/9f/2e/299f2e05a8f63630182c817f01c64cd5.jpg' ,
  'https://www.bing.com/th/id/OIP.RQ2JMF2hGSpVFaQvVCjsygHaFj?w=281&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  'https://th.bing.com/th/id/OIP.TfSOUK5ietIr8R_kWmedJwHaFj?w=245&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.4nQQWcO3oNDbLi7d0Fr-bQHaFb?w=266&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.YZ5U8IXw7W3O0-KzBbUCGAHaFj?w=240&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.b2grRjs3yUKculmmltEUzgHaEK?w=89&h=90&c=1&rs=1&qlt=70&r=0&o=7&dpr=1.3&pid=InlineBlock&rm=3 ',
  'https://www.bing.com/th/id/OIP.fGN-VH6N53l4ubW2GP5ctwHaJ4?w=157&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' ,
  'https://th.bing.com/th/id/OIP.5dZraCRfQDjSNP5blmyUCAHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.j1fFRTcERdmtvymbln1zkAHaJZ?w=148&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://www.bing.com/th/id/OIP.isUpn448xiJmc8kyRwwS1gHaFm?w=243&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' ,
  'https://www.bing.com/th/id/OIP.3rNTjVxBGtsNQH9qpHM_PAHaEj?w=298&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' ,
  'https://www.bing.com/th/id/OIP.BuXMO-FaPI6_lUvU_ImmBgHaE6?w=277&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' ,
  'https://www.bing.com/th/id/OIP.4IgK0J2fUKZDfXr_GlW3KQHaHa?w=175&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' , 
  'https://www.bing.com/th/id/OIP.R4tmNCHUT6vrF6RqzP_j3QHaFj?w=239&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' ,
  'https://th.bing.com/th/id/OIP.vexDWWgQNVxhyTuCr_vSZwHaFj?w=244&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.hpcJ6dtQR3CjpTesnlOfeQHaEA?w=316&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.R4tmNCHUT6vrF6RqzP_j3QHaFj?w=246&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.7z0bSpBoZK4yDRHc9ZNBgwHaFW?w=224&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.1ff7TJrRkhjMVnrtLSTudAHaEK?w=328&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.dRRq6el1auBD5ni-Ml8NfgHaFB?w=263&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.J5yYnecEp-QJqWYIwaxHtwHaE7?w=214&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.WrOrmWkQDDBUKHeo74eWeQHaEd?w=275&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.JMjV8AVsB98UT4c_cEuO8QHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
  'https://th.bing.com/th/id/OIP.1YJ5pBd9RwdPQDwlCwV2rQHaDL?w=304&h=150&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' ,
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
