
export default function MovieModal({ show, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden  bg-black/70 p-4 ">

            <div className=" relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl  ">

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4  rounded-full bg-black text-white px-3 py-1 text-lg font-bold hover:bg-gray-700 cursor-pointer "
                >X</button>

                <div>
                    <img
                        src={show.image?.original}
                        alt={show.name}
                        className="h-64 sm:h-80 md:h-125 w-full object-cover "
                    />
                </div>

                <div className="px-1">
                    <h3 className="mt-6 text-3xl font-bold ">{show.name}</h3>
                    <div className=" mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 ">
                        <p>Rating: {show.rating?.average ?? 'N/A'}</p>
                        <p>Release: {show.premiered}</p>
                        <p>Genre: {show.genres?.length ? show.genres.join(', ') : 'N/A'}</p>
                        <p>Language: {show.language}</p>
                        <p>Status: {show.status}</p>
                    </div>

                    <div className="mt-6">
                        <p className="mb-2 text-lg font-semibold ">Overview:</p>
                        <div
                            dangerouslySetInnerHTML={{ __html: show.summary }}
                            className="leading-7 text-gray-800 "
                        ></div>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-6 rounded-lg bg-black text-white px-5 py-2 font-semibold hover:bg-gray-800 cursor-pointer "
                    >Close</button>
                </div>
            </div>
        </div>
    )
}
