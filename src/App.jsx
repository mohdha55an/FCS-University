import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Compontents/Layout"; // Import your new layout
import Home from "./Compontents/Home";
import StudyMaterial from "./Compontents/StudyMaterial";
import Results from "./Compontents/Results";
import Gallery from "./Compontents/Gallery";
import About from "./Compontents/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "study", element: <StudyMaterial /> },
      { path: "results", element: <Results /> },
      { path: "gallery", element: <Gallery /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
