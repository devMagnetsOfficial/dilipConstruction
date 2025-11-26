import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-light text-dark font-sans py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-primary-blue mb-12">
          About Premium Construction Co.
        </h1>

        {/* Company Story */}
        <p className="text-lg md:text-xl text-neutral-dark leading-relaxed mb-12 max-w-4xl mx-auto">
          Premium Construction Co. has been delivering top-quality construction projects for over a decade. 
          Our expertise spans residential, commercial, and industrial sectors, and we pride ourselves on precision, reliability, and sustainable practices. 
          Every project is executed with meticulous attention to detail, ensuring structures that are both beautiful and durable.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-dark text-light p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">Our Mission</h3>
            <p className="text-neutral-light text-base">
              To deliver exceptional construction projects that exceed client expectations through innovation, quality, and sustainability.
            </p>
          </div>
          <div className="bg-dark text-light p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">Our Vision</h3>
            <p className="text-neutral-light text-base">
              To be a leading construction company recognized for excellence, innovation, and community-focused projects.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-dark text-light p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-accent-gold mb-2">Integrity</h4>
            <p className="text-neutral-light text-base">
              We operate with honesty, transparency, and accountability in every project.
            </p>
          </div>
          <div className="bg-neutral-dark text-light p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-accent-gold mb-2">Quality</h4>
            <p className="text-neutral-light text-base">
              Excellence in every detail, ensuring durable and aesthetically superior results.
            </p>
          </div>
          <div className="bg-neutral-dark text-light p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-accent-gold mb-2">Innovation</h4>
            <p className="text-neutral-light text-base">
              Applying modern technologies and creative solutions to improve construction efficiency and design.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-primary-blue mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light rounded-lg p-6 shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-dark mb-2">John Smith</h4>
              <p className="text-neutral-dark text-base">Chief Engineer</p>
            </div>
            <div className="bg-light rounded-lg p-6 shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-dark mb-2">Sara Lee</h4>
              <p className="text-neutral-dark text-base">Project Manager</p>
            </div>
            <div className="bg-light rounded-lg p-6 shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-dark mb-2">Michael Brown</h4>
              <p className="text-neutral-dark text-base">Architect</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent-gold text-dark py-16 px-6 rounded-xl shadow-lg text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact us today and let our expert team bring your construction vision to life with premium services.
          </p>
          <button className="bg-primary-blue text-light font-semibold px-8 py-4 rounded-lg text-xl hover:bg-dark transition-colors shadow-lg">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
