import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </main>
  );
}
