
export default function MovieCard({ name, image, rating, premiered, show, onShowSelect }) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="aspect-2/3 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="truncate text-lg font-bold ">{name}</h3>
                <div className=" mt-2 space-y-1 text-sm text-gray-600">
                    <p className="font-medium ">Rating: ⭐ {rating ?? 'N/A'}</p>
                    <p>Premiered: {premiered}</p>
                </div>
                <button
                    onClick={() => onShowSelect(show)}
                    className="mt-4 w-full rounded-lg bg-black text-white px-4 py-2 font-semibold hover:bg-gray-800 cursor-pointer "
                >See Details</button>
            </div>
        </div>
    )
}
