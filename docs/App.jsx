import Home from "./home";
import Projects from "./projects";
import AiClone from "./aiclone";
import Navbar from "./NavBar";
import Links from "./socials";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <div className=" bg-opacity-90 font-sans flex items-start justify-center text-stone-900">
        <div className="max-w-xl mx-auto px-4 py-8 w-full">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/aiclone" element={<AiClone />}></Route>
          </Routes>
          
        <Links/>
      </div>   
    </div>
  )

}
