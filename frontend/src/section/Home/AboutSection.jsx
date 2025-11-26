import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-light">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h3 className="text-4xl md:text-5xl font-bold text-primary-blue mb-12">
          About Premium Construction Co.
        </h3>

        {/* About Description */}
        <p className="text-lg md:text-xl text-neutral-dark leading-relaxed mb-12 max-w-4xl mx-auto">
          At Premium Construction Co., we are committed to delivering exceptional construction services that combine innovation, quality, and sustainability. 
          With years of experience in residential, commercial, and industrial projects, our team ensures every build meets the highest standards of excellence.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-dark text-light p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-accent-gold mb-4">Our Mission</h4>
            <p className="text-neutral-light text-base">
              To build premium, durable, and sustainable structures while exceeding client expectations through innovative solutions and unmatched craftsmanship.
            </p>
          </div>
          <div className="bg-dark text-light p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-accent-gold mb-4">Our Vision</h4>
            <p className="text-neutral-light text-base">
              To be a leading construction company recognized for delivering landmark projects that shape communities and redefine quality standards.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-dark text-light p-6 rounded-lg shadow-lg">
            <h5 className="text-xl font-semibold text-accent-gold mb-2">Integrity</h5>
            <p className="text-neutral-light text-base">
              We operate with transparency, honesty, and accountability in every project.
            </p>
          </div>
          <div className="bg-neutral-dark text-light p-6 rounded-lg shadow-lg">
            <h5 className="text-xl font-semibold text-accent-gold mb-2">Quality</h5>
            <p className="text-neutral-light text-base">
              Excellence in every detail, ensuring durable and aesthetically superior results.
            </p>
          </div>
          <div className="bg-neutral-dark text-light p-6 rounded-lg shadow-lg">
            <h5 className="text-xl font-semibold text-accent-gold mb-2">Innovation</h5>
            <p className="text-neutral-light text-base">
              Applying the latest technologies and creative solutions to improve construction efficiency and design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
