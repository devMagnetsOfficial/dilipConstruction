import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      description:
        "We design and build luxury homes, apartments, and villas with a focus on structural integrity, aesthetic appeal, and sustainable materials. Our team manages every aspect of residential projects from planning to completion.",
      icon: "🏠"
    },
    {
      title: "Commercial Construction",
      description:
        "Premium office buildings, retail spaces, and commercial complexes constructed with modern techniques. We ensure high-quality workmanship, timely delivery, and compliance with safety and regulatory standards.",
      icon: "🏢"
    },
    {
      title: "Industrial Construction",
      description:
        "We specialize in industrial facilities, warehouses, and factories. Using advanced construction methods, we create durable and efficient spaces that optimize operational workflows.",
      icon: "🏭"
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with modern renovation solutions. We upgrade interiors and exteriors, improving functionality, aesthetics, and overall value of properties.",
      icon: "🔨"
    },
    {
      title: "Project Management & Consulting",
      description:
        "Our expert consultants provide guidance on project planning, budgeting, timeline management, and resource allocation. We ensure that projects run smoothly from start to finish.",
      icon: "📋"
    },
    {
      title: "Green & Sustainable Building",
      description:
        "We design eco-friendly structures using sustainable materials and energy-efficient solutions. Our goal is to reduce environmental impact while maintaining top-tier quality.",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-light text-dark font-sans py-20 px-6">
      {/* Page Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-primary-blue text-center mb-16">
        Our Premium Services
      </h1>
      <p className="text-lg md:text-xl text-neutral-dark text-center max-w-4xl mx-auto mb-20">
        At Premium Construction Co., we provide comprehensive construction solutions tailored to residential, commercial, and industrial projects. 
        Our expert team ensures every project is delivered with excellence, safety, and innovative design.
      </p>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-neutral-dark rounded-xl p-8 text-light shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-neutral-light text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Section: Why Choose Us */}
      <section className="mt-24 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-primary-blue mb-8">
          Why Choose Premium Construction Co.?
        </h2>
        <p className="text-lg md:text-xl text-neutral-dark mb-12 leading-relaxed max-w-4xl mx-auto">
          We combine years of expertise, modern construction techniques, and a passion for perfection. 
          Every project is handled with attention to detail, strict quality standards, and commitment to client satisfaction. 
          From concept to completion, our goal is to deliver structures that are durable, aesthetically superior, and environmentally sustainable.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold text-accent-gold mb-2">Expert Team</h4>
            <p className="text-neutral-light text-base">
              Our engineers, architects, and project managers have decades of combined experience.
            </p>
          </div>
          <div className="bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold text-accent-gold mb-2">High Quality</h4>
            <p className="text-neutral-light text-base">
              We use only premium materials and cutting-edge techniques to ensure lasting results.
            </p>
          </div>
          <div className="bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold text-accent-gold mb-2">Customer Satisfaction</h4>
            <p className="text-neutral-light text-base">
              We prioritize clear communication, transparency, and delivering projects on time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 bg-accent-gold text-dark py-16 px-6 rounded-xl text-center shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Contact us today and let our expert team bring your vision to life with premium construction services.
        </p>
        <button className="bg-primary-blue text-light font-semibold px-8 py-4 rounded-lg text-xl hover:bg-dark transition-colors shadow-lg">
          Get a Quote
        </button>
      </section>
    </div>
  );
}
