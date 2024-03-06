import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-48 hover:scale-105'>
            <img src={IMG_CDN_URL + posterPath} alt="MoviePoster" />
        </div>
    )
}

export default MovieCard