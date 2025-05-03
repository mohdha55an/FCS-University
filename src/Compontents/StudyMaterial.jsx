import React from 'react';
import Footer from './Footer';

const studyMaterials = [
  { id: 1, title: 'HTML Basics', link: '/materials/html' },
  { id: 2, title: 'CSS Essentials', link: '/materials/css' },
  { id: 3, title: 'JavaScript Guide', link: '/materials/javascript' },
  { id: 4, title: 'React Notes', link: '/materials/react' },
  { id: 1, title: 'HTML Basics', link: '/materials/html' },
  { id: 2, title: 'CSS Essentials', link: '/materials/css' },
  { id: 3, title: 'JavaScript Guide', link: '/materials/javascript' },
  { id: 4, title: 'React Notes', link: '/materials/react' },
  { id: 1, title: 'HTML Basics', link: '/materials/html' },
  { id: 2, title: 'CSS Essentials', link: '/materials/css' },
  { id: 3, title: 'JavaScript Guide', link: '/materials/javascript' },
  { id: 4, title: 'React Notes', link: '/materials/react' },
  { id: 1, title: 'HTML Basics', link: '/materials/html' },
  { id: 2, title: 'CSS Essentials', link: '/materials/css' },
  { id: 3, title: 'JavaScript Guide', link: '/materials/javascript' },
  { id: 4, title: 'React Notes', link: '/materials/react' },
];

const StudyMaterial = () => {
  return (
    <>
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Study Materials</h1>
      <ul className="space-y-2">
        {studyMaterials.map((material) => (
          <li key={material.id}>
            <a
              href={material.link}
              className="text-blue-600 hover:underline"
            >
              {material.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default StudyMaterial;
