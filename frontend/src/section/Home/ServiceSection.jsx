import React from 'react';

export default function ServiceSection() {
 const services = [
  {
    title: "POP Ceiling Work",
    description:
      "High-quality POP false ceiling designs for modern homes, offices, and commercial spaces. Durable, smooth, and premium finishing.",
    features: [
      "Custom false ceiling designs",
      "Lighting-friendly patterns",
      "Crack-free smooth finishing",
    ],
    icon: (
      <svg className="w-12 h-12 mb-4 text-accent-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 17h18M5 7v10M19 7v10" />
      </svg>
    ),
  },

  {
    title: "House Construction",
    description:
      "Complete residential building construction with strong structural work and high-quality materials for long-term durability.",
    features: [
      "Foundation & structural work",
      "Brickwork & plastering",
      "Finishing & supervision",
    ],
    icon: (
      <svg className="w-12 h-12 mb-4 text-accent-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
      </svg>
    ),
  },

  {
    title: "Interior Work",
    description:
      "Professional interior finishing including painting, wall designing, wooden work, lighting setup, and renovation.",
    features: [
      "Painting & wall decoration",
      "Modular interior solutions",
      "Renovation & repair work",
    ],
    icon: (
      <svg className="w-12 h-12 mb-4 text-accent-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
  },
];


  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-r from-neutral-light via-light to-neutral-light">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl font-extrabold text-dark mb-16 text-center tracking-wide">
          Our Premium Services
        </h3>
        <div className="grid md:grid-cols-3 gap-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark rounded-xl p-10 text-light shadow-2xl transform hover:scale-105 hover:shadow-accent-gold transition-transform transition-shadow duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h4 className="text-3xl font-semibold mb-5 text-accent-gold text-center">
                {service.title}
              </h4>
              <p className="text-neutral-light mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-light max-w-xs mx-auto mb-8">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="block mx-auto bg-accent-gold text-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-blue transition-colors shadow-md">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
