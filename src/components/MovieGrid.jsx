
import MovieCard from './MovieCard'

export default function MovieGrid({ shows, onShowSelect }) {

    return (
        <div className='grid grid-cols-1 gap-6 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-4'>

            {
                shows?.map(show => <MovieCard
                    key={show.id}
                    name={show.name}
                    image={show.image?.original}
                    rating={show.rating?.average}
                    premiered={show.premiered}
                    show={show}
                    onShowSelect={onShowSelect}
                />)
            }

        </div>
    )
}
