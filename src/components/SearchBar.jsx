import { useState } from "react"


export default function SearchBar({ onSearch }) {
    const [userInput, setUserInput] = useState('');

    const handleInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleSearch = () => {
        onSearch(userInput)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }


    return (
        <div className="flex flex-col justify-center gap-3 px-4 py-8 sm:flex-row">
            <input
                type='text'
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder='Search for a movie...'
                className="w-full max-w-xl rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
            <button
                onClick={handleSearch}
                className="rounded-lg bg-black text-white px-5 py-3 hover:bg-gray-800 sm:w-auto cursor-pointer "
            >Search</button>
        </div>
    )
}
