import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">About Our University</h1>
      <p className="text-gray-700 mb-6 text-justify">
        Our university is a leading institution committed to academic excellence, innovation, and holistic development.
        With a vibrant campus, experienced faculty, and world-class infrastructure, we empower students to become
        future-ready professionals and responsible global citizens.
      </p>

      <div className="bg-gray-100 rounded-lg p-4 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600">
          To provide quality education that transforms students through rigorous academic engagement, research opportunities,
          and community involvement, fostering lifelong learning and leadership.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-600">
          To be recognized as a premier global institution, shaping future leaders with knowledge, ethics, and compassion.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
