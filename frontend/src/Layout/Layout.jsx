import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-light text-dark font-sans">
      <Header />
      <main className="flex-grow pt-16 pb-16 overflow-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
