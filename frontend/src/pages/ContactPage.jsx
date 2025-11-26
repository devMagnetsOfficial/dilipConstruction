import React from 'react';

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-light via-neutral-light to-light font-sans py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-12">
          <h3 className="text-5xl font-extrabold text-dark mb-12 text-center tracking-wide">
            Contact Us
          </h3>
          <form className="flex flex-col space-y-8" noValidate>
            <label className="block text-dark font-semibold">
              Your Name <span className="text-danger-red">*</span>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="mt-3 w-full p-5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-3 focus:ring-accent-gold transition shadow-sm"
              />
              <small className="text-sm text-neutral-light mt-1 block">
                Please enter your full name.
              </small>
            </label>

            <label className="block text-dark font-semibold">
              Your Email <span className="text-danger-red">*</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="mt-3 w-full p-5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-3 focus:ring-accent-gold transition shadow-sm"
              />
              <small className="text-sm text-neutral-light mt-1 block">
                We respect your privacy and won’t share your email.
              </small>
            </label>

            <label className="block text-dark font-semibold">
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                className="mt-3 w-full p-5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-3 focus:ring-accent-gold transition shadow-sm resize-y"
              />
            </label>

            <button
              type="submit"
              className="bg-accent-gold text-dark font-bold py-4 rounded-lg text-xl hover:bg-primary-blue transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="flex flex-col justify-between">
          <div className="bg-dark text-light rounded-xl p-10 shadow-2xl mb-12">
            <h4 className="text-3xl font-semibold mb-8 text-accent-gold">Get in Touch</h4>
            <p className="text-neutral-light mb-10 leading-relaxed text-lg">
              Have questions or want to discuss a project? Reach out to us anytime. We’re here to help you build your vision with professionalism and excellence.
            </p>
            <div className="space-y-8 text-lg">
              <div>
                <strong className="block mb-2 text-primary-blue">Phone:</strong>
                <a href="tel:+1234567890" className="hover:text-accent-gold underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <strong className="block mb-2 text-primary-blue">Email:</strong>
                <a href="mailto:contact@mywebsite.com" className="hover:text-accent-gold underline">
                  contact@mywebsite.com
                </a>
              </div>
              <div>
                <strong className="block mb-2 text-primary-blue">Address:</strong>
                <address className="not-italic">
                  123 Main Street, Suite 400<br />
                  Your City, State, ZIP
                </address>
              </div>
            </div>
          </div>

          {/* Optional Map placeholder */}
          <div className="rounded-xl overflow-hidden shadow-xl h-64 bg-neutral-dark flex items-center justify-center text-neutral-light">
            <p className="text-xl italic select-none">
              <div className="rounded-xl overflow-hidden shadow-xl h-64">
  <iframe
    title="Location Map"
    src="https://maps.app.goo.gl/UzsYLkSzGafE8nnR7"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
