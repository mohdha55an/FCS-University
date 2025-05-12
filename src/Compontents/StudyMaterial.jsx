import React from "react";
import Footer from "./Footer";
import taliwind from "../assets/taliwind.png";
import bootstrap from "../assets/bootstrap.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import router from "../assets/router.png";
import swiper from "../assets/swiper.png";
import rht from "../assets/rht.png";

const studyMaterials = [
  { id: 1, title: "HTML Basics", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", img: html },
  { id: 2, title: "CSS Essentials", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", img: css },
  { id: 3, title: "Tailwind CSS", link: "https://tailwindcss.com/docs/installation/using-vite", img: taliwind },
  { id: 4, title: "Bootstrap CSS", link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/", img: bootstrap },
  { id: 5, title: "JavaScript Guide", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: js },
  { id: 6, title: "React Notes", link: "https://react.dev/learn", img: react },
  { id: 7, title: "React Redux Notes", link: "https://react-redux.js.org/introduction/getting-started", img: redux },
  { id: 8, title: "React Router DOM", link: "https://reactrouter.com/home", img: router },
  { id: 9, title: "React Swiper JS", link: "https://swiperjs.com/demos", img: swiper },
  { id: 10, title: "React Hot Toast", link: "https://react-hot-toast.com/docs", img: rht },
];

const StudyMaterial = () => {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Study Materials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyMaterials.map((material) => (
            <div
              key={material.id}
              className="rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={material.img}
                alt={material.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="px-4 py-2 bg-white flex justify-between items-center font-medium text-gray-700">
                <span>{material.title}</span>
                <a
                  href={material.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white p-2 ml-5 rounded-md hover:bg-blue-700 transition"
                >
                  Documents
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default StudyMaterial;
