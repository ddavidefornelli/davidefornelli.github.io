import { Link } from "react-router-dom"
import Header from "../components/header"

const projects = [
  {name: "sudoku",
    role: "built it",
    description: "uni project made with friends. a simple sudoku game played in the terminal",
    date: "(06/25 - 06/25)",
    url: "https://github.com/ddavidefornelli/unicef"
  },
  {name: "othello",
    role: "built it",
    description: "another small uni project made my friend.",
    date: "(07/25 - 08/25)",
    url: "https://github.com/cell0-hub/othello_project"
  },
]

function ProjectCard({name, role, description, date, url}){
  return (
    <a 
      className="flex flex-col mb-8 hover:text-rose-500 transition ease-linear" 
      href={url}
      target="_blank"
      rel="noopener nereffer"
      aria-label={`View project${name} on Github`}
    >
      <h2 className="text-xl font-bold mb-0.2 ">{name}</h2>
      <h4 className="text-stone-400 mb-0.5 text-sm">{role} {date}</h4>
      <div className="flex justify-between">
        <h3 className="text-stone-900 text-base">{description}</h3>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <>
    <Header />
      <h1 className="font-extrabold text-2xl mb-8 "><span className= "text-rose-500">&gt;</span> projects</h1>
      {projects.map((project, index) => (
      <ProjectCard 
          name={project.name}
          description={project.description}
          role={project.role}
          url={project.url}
          date={project.date}
          key={index}
        />
      ))}
      <Link to="/projects" className="group flex text-rose-500 font-bold not-hover:text-stone-900 transition ease-linear text-lg"href="./projects.html">
        all projects <span className="rotate-315 font-bold transition-transform group-hover:-translate-y-1.5"> →  </span>
      </Link>
    </>
  )
}
