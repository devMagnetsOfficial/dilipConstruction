import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-r from-light via-neutral-light to-light">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h3 className="text-4xl font-semibold text-dark mb-10 text-center tracking-wide">
            Contact Us
          </h3>
          <form className="flex flex-col space-y-6" noValidate>
            <label className="block text-dark font-medium">
              Your Name <span className="text-danger-red">*</span>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="mt-2 w-full p-4 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold shadow-sm transition"
              />
              <small className="text-sm text-neutral-light mt-1 block">Enter your full name</small>
            </label>

            <label className="block text-dark font-medium">
              Your Email <span className="text-danger-red">*</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="mt-2 w-full p-4 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold shadow-sm transition"
              />
              <small className="text-sm text-neutral-light mt-1 block">We’ll never share your email.</small>
            </label>

            <label className="block text-dark font-medium">
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="mt-2 w-full p-4 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold shadow-sm transition"
              />
            </label>

            <button
              type="submit"
              className="bg-accent-gold text-dark font-semibold py-4 rounded-lg text-xl hover:bg-primary-blue transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Side Panel */}
        <div className="bg-dark rounded-xl p-8 text-light shadow-xl">
          <h4 className="text-3xl font-semibold mb-6 text-accent-gold">Get in Touch</h4>
          <p className="text-neutral-light mb-8 leading-relaxed">
            Have questions or want to discuss a project? Reach out to us anytime. We’re here to help you build your vision with excellence and professionalism.
          </p>
          <div className="space-y-4 text-lg">
            <div>
              <strong className="block mb-1 text-primary-blue">Phone:</strong>
              <a href="tel:+1234567890" className="hover:text-accent-gold transition-colors">+91 9311450431</a>
            </div>
            <div>
              <strong className="block mb-1 text-primary-blue">Email:</strong>
              <a href="mailto:contact@mywebsite.com" className="hover:text-accent-gold transition-colors">
               dilip.9990923845@gmail.com
              </a>
            </div>
            <div>
              <strong className="block mb-1 text-primary-blue">Address:</strong>
              <address className="not-italic">
                Sector 49, Noida / Baraula <br /> Gautam Buddha Nagar, Uttar Pradesh
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
