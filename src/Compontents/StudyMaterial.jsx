import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const studyMaterials = [
  { id: 1, title: "HTML Basics", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: 2, title: "CSS Essentials", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: 3, title: "Tailwind CSS", link: "https://tailwindcss.com/docs/installation/using-vite" },
  { id: 4, title: " Bootstrap CSS", link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },
  { id: 5, title: "JavaScript Guide", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 6, title: "React Notes", link: "https://react.dev/learn" },
  { id: 7, title: "React Redux Notes", link: "https://react-redux.js.org/introduction/getting-started" },
  { id: 8, title: "React Router dom", link: "https://reactrouter.com/home" },
  { id: 9, title: "React swiper js ", link: "https://swiperjs.com/demos" },
  { id: 10, title: "React Hot Toast", link: "https://react-hot-toast.com/docs" },
  { id: 11, title: "React lucide ", link: "https://lucide.dev/guide/packages/lucide-react" },

];

const StudyMaterial = () => {
  return (
    <>
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Study Materials</h1>
        <ul className="space-y-2">
        {studyMaterials.map((material) => (
          <li key={material.id}>
            <NavLink to={material.link}  className="text-blue-600 hover:underline">
            {material.title}
            </NavLink>
          </li>
        ))}
        </ul>
      </div>
     

      <Footer />
    </>
  );
};

export default StudyMaterial;
