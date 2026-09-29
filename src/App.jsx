
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MovieGrid from './components/MovieGrid'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieModal from './components/MovieModal'

function App() {

  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.tvmaze.com/shows')
      const json = await result.json();
      setShows(json)
    }
    fetchData();
  }, []);

  const onSearch = async (searchText) => {
    if (!searchText.trim()) {
      return;
    }

    const result = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    const json = await result.json()
    setShows(json.map(item => item.show))
  }

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  }

  const handleCloseModal = () => {
    setSelectedShow(null);
  }

  return (
    <>
      <Navbar />

      <div className='min-h-screen bg-gray-50'>
        <Hero />
        <SearchBar onSearch={onSearch} />
        <div id='movies'>
          <MovieGrid shows={shows} onShowSelect={handleShowSelect} />
        </div>
        <MovieModal show={selectedShow} onClose={handleCloseModal} />
      </div>

      <Footer />
    </>
  )
}

export default App
