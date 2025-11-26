import React from "react";

// Sample images (replace these URLs with your own images)
const sectionImages = {
  pop: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&w=800&q=80",
  greet: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  gypsum: "https://images.unsplash.com/photo-1616627982930-f7b56c3c1484?auto=format&fit=crop&w=800&q=80",
};

const ceilingWorks = {
  pop: [
    { name: "POP Ceiling", quantity: 110, unit: "sq. ft" },
    { name: "POP Patta", quantity: 110, unit: "running ft" },
    { name: "POP Takkar", quantity: 100, unit: "running ft" },
    { name: "POP Group", quantity: 50, unit: "running ft" },
    { name: "POP", quantity: 30, unit: "sq. ft" },
    { name: "Molding", quantity: 60, unit: "running ft" },
    { name: "Profile", quantity: 60, unit: "running ft" },
    { name: "Cornice 3 inch", quantity: 100, unit: "running ft" },
    { name: "Cornice 5 inch", quantity: 130, unit: "running ft" },
  ],
  greet: [
    { name: "Local Greet Ceiling", quantity: 70, unit: "sq. ft" },
    { name: "Armystrong Greet Ceiling", quantity: 140, unit: "sq. ft" },
  ],
  gypsum: [
    { name: "Gypsum Ceiling", quantity: 80, unit: "sq. ft" },
    { name: "Gypsum Patta", quantity: 80, unit: "running ft" },
    { name: "Gypsum Takkar", quantity: 60, unit: "running ft" },
  ],
};

function Section({ title, items, image }) {
  return (
    <div className="mb-20">
      {/* Image */}
      <div className="max-w-xl mx-auto mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue mb-10 text-center drop-shadow-md">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-primary-blue mb-4 text-center">
              {item.name}
            </h3>
            <p className="text-xl md:text-2xl font-bold text-dark text-center">
              {item.quantity} {item.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CeilingWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-gray-50 py-24 px-6 font-sans">
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary-blue text-center mb-12 drop-shadow-md">
        Premium Ceiling Works & Quantities
      </h1>
      <p className="text-lg md:text-xl text-neutral-dark text-center max-w-4xl mx-auto mb-20">
        Explore our comprehensive range of POP, Greet, and Gypsum ceiling works. Each project is executed with precision, using high-quality materials and craftsmanship.
      </p>

      {/* Sections with Images */}
      <Section title="POP Ceiling Works" items={ceilingWorks.pop} image={sectionImages.pop} />
      <Section title="Greet Ceiling Works" items={ceilingWorks.greet} image={sectionImages.greet} />
      <Section title="Gypsum Ceiling Works" items={ceilingWorks.gypsum} image={sectionImages.gypsum} />

      {/* Note */}
      <p className="text-center text-neutral-dark text-lg mt-20 max-w-2xl mx-auto">
        Quantities are indicative and may vary based on actual site measurements. Contact us for customized solutions and detailed estimates.
      </p>
    </div>
  );
}
