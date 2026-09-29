
export default function Navbar() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:items-center sm:px-8 sm:py-4 ">
      <h2 className="text-2xl font-bold">MovieExplorer</h2>
      <ul className="flex flex-wrap justify-center gap-6 sm:justify-start ">
        <li><a className="text-gray-700 hover:text-black cursor-pointer">Home</a></li>
        <li><a className="text-gray-700 hover:text-black cursor-pointer">About</a></li>
        <li><a className="text-gray-700 hover:text-black cursor-pointer">Contact</a></li>
      </ul>
      <button
        onClick={() => document.getElementById('movies')?.scrollIntoView({ behavior: 'smooth' })}
        className="rounded-lg bg-black text-white px-5 py-2 hover:bg-gray-800 cursor-pointer"
      >Movies</button>
    </div>
  )
}
