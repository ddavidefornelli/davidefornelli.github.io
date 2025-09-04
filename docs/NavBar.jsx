import { Link } from 'react-router-dom'
import './index.css'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start mb-16 text-lg">
      <Link to="/" className="text-sm mr-6 hover:text-rose-500 transition ease-linear text-stone-500">home</Link>
      <Link to="/projects" className="text-sm mr-6 hover:text-rose-500 transition ease-linear text-stone-500">projects</Link>
      <Link to="/aiclone" className="text-sm mr-6 hover:text-rose-500 transition ease-linear text-stone-500">AI clone </Link>
    </nav>
  )
}
