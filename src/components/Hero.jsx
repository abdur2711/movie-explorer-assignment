
export default function Hero() {
    return (
        <div className="bg-linear-to-r from-gray-950 via-gray-800 to-gray-950 px-8 py-28  text-center text-white">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-6xl ">DISCOVER MOVIES</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 ">
                Explore and discover your favorite movies from around the world.
            </p>
            <button
                onClick={() => document.getElementById('movies')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 rounded-lg bg-white text-black px-6 py-3 hover:bg-gray-200 cursor-pointer "
            >Explore Now</button>
        </div>
    )
}
