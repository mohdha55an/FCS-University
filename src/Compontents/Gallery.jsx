import React from 'react';
import uni1 from '../assets/uni-1.png';
import lic from '../assets/lic.png';
import doc from '../assets/doc.png';
import spo from '../assets/spo.png';
import fes from '../assets/fes.png';
import com from '../assets/com.png';
import Footer from './Footer';




const universityImages = [
  { id: 1, title: 'Main Campus', img :uni1  },
  { id: 2, title: 'Library', img: lic },
  { id: 3, title: 'Laboratory', img:doc },
  { id: 4, title: 'Sports Ground', img:spo },
  { id: 5, title: 'Cultural Fest', img: fes},
  { id: 6, title: 'Computer Lab', img:com  },
 
];

const Gallery = () => {
  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">University Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
        {universityImages.map((image) => (
          <div key={image.id} className="rounded overflow-hidden shadow-lg">
            <img
              src={image.img}
              alt={image.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="px-4 py-2 bg-white text-center font-medium text-gray-700">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;
