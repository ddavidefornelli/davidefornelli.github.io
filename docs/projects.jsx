const projects = [
  {name: "sudoku",
   state: "(not maintained)",
    date: "06/25 - 06/25",
    achievements: "learned how to manage memory and files in c, also first time using bt",
    url: "https://github.com/ddavidefornelli/unicef",
    description: "uni project made with friends. a simple sudoku game played in the terminal",
    technologies: "c"
  },
  {name: "othello",
   state: "(W.I.P)",
    date: "08/25 - 08/25",
    achievements: "became more confident writing in c",
    url: "https://github.com/cell0-hub/othello_project",
    description: "another uni project made with friends. a simple othello game played in the terminal",
    technologies: "c"
  },
]

function Project({name, state, date, achievements, url, description, technologies}) {
  return (
  <div className="transition ease-linear hover:border-rose-500 hover:text-orange-500 flex flex-row items-start mb-16 border-stone-900 border-3 border-solid p-4">
    <a className="w-full" href={url}>
      <div className="flex justify-between items-center">
        <h1 className="text-stone-900 text-3xl font-bold"><span className="text-rose-500"> &gt; </span>{name}</h1>
        <h3 className="font-extrabold">→ </h3>
      </div>
      <div className="mb-4">
        <h3 className="text-stone-500 text-sm mt-1 font-medium">{state} - {date}</h3>
        <h3 className="text-stone-700 mt-1 text-sm font-medium">{description}</h3>
      </div>
      <div className="mb-4">
        <h1 className="text-lg mt-2 text-stone-900 font-semibold">achievements</h1>
        <h3 className="text-stone-700 mt-1 font-medium text-sm">{achievements}</h3>
      </div>
      <div className="">
        <h1 className="text-lg mt-2 text-stone-900 font-semibold">technologies</h1>
        <div className="flex text-stone-700 text-sm mt-2">
          <h3 className="mr-3 rounded-sm p-1 bg-stone-300 font-medium">{technologies}</h3>
        </div>
      </div>
    </a>
  </div>
  )
}

export default function Projects() {
  return (
    <>
    <header>
      <div className="flex">
      <h1 id="projects" className="font-bold text-4xl mb-4">projects</h1>
    </div>
    <p className="mb-16 leading-relaxed text-stone-700 text-lg">
      this is a collection of my projects. Nothing more
    </p>
    </header>

    {projects.map((project, index) => (
        <Project
          {...project}
          key={index} />
    ))}
    </>
  );
}
