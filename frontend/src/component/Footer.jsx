import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-light pt-12 pb-6 px-6">
      {/* Top section: Logo + Quick Links */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-accent-gold">Premium Construction Co.</h1>
          <p className="text-neutral-light mt-2 text-sm">
            Building excellence, one project at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-light">Quick Links</h3>
            <a href="/" className="text-neutral-light hover:text-accent-gold transition-colors">Home</a>
            <a href="/services" className="text-neutral-light hover:text-accent-gold transition-colors">Services</a>
            <a href="/about" className="text-neutral-light hover:text-accent-gold transition-colors">About</a>
            <a href="/contact" className="text-neutral-light hover:text-accent-gold transition-colors">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-light">Contact Us</h3>
            <p className="text-neutral-light text-sm">📧 info@premiumconstruction.com</p>
            <p className="text-neutral-light text-sm">📞 +91 123 456 7890</p>
            <p className="text-neutral-light text-sm">🏢 123 Builder Street, City, Country</p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-light">Follow Us</h3>
            <div className="flex space-x-4 text-neutral-light">
              <a href="#" className="hover:text-accent-gold transition-colors">Facebook</a>
              <a href="#" className="hover:text-accent-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent-gold transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section: Copyright */}
      <div className="border-t border-neutral-light/20 pt-6 text-center text-sm text-neutral-light">
        © 2025 Premium Construction Co. All Rights Reserved.
      </div>
    </footer>
  );
}
