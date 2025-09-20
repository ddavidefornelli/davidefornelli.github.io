export default function Header() {
  return (
      <header>
        <h1 className = "ml10">
          <span className="text-wrapper">
          <h1 className="font-bold text-4xl mb-4">
            hi, i'm davide 
          </h1>
          </span>
        </h1>
        <div className="flex">
          <h3 className="text-md text-stone-500 mb-4">🤌🏼 bari, italia</h3>
          <a className="hover:text-rose-500 transition ease-linear text-stone-500 ml-16 "href="https://github.com/ddavidefornelli">github</a>
        </div>
        <p className="mb-16 leading-relaxed text-lg">
          I'm a 20 y/o CS undergrad. I'm an aspiring fullstack developer.
          <br />In my spare time I run.
        </p>
      </header>
  )
}
