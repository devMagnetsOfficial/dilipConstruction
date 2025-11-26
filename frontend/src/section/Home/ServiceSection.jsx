import React from 'react';

export default function ServiceSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom full-stack web applications built for performance, scalability, and maintainability.",
      features: [
        "Responsive design",
        "RESTful APIs",
        "Cloud integration",
      ],
      icon: (
        <svg className="w-12 h-12 mb-4 text-accent-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Engaging and intuitive designs focusing on user experience, accessibility, and brand identity.",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Brand-consistent interfaces",
      ],
      icon: (
        <svg className="w-12 h-12 mb-4 text-accent-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: "Consulting",
      description:
        "Expert advice on digital strategy, project planning, technology selection, and growth.",
      features: [
        "Technical audits",
        "Roadmap planning",
        "Performance optimization",
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
