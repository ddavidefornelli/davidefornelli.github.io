import Home from "./pages/home";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import Links from "./components/socials";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <div className=" bg-opacity-90 font-sans flex items-start justify-center text-stone-900">
        <div className="max-w-xl mx-auto px-4 py-8 w-full">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
          
        <Links/>
      </div>   
    </div>
  )

}
