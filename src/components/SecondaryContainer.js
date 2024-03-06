import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return (

        movies.nowPlayingMovies &&
        <div className=' bg-black'>
            {/* Movie List: popular, trending, now playing,.. */}
            {/* cards and horizontal rows */}
            <div className='-mt-48 z-40 relative'>
                <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Up Coming"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
            </div>
        </div>

    )
}

export default SecondaryContainer