import React from 'react'
import { BACKGROUND_URL } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSeachBar from './GptSeachBar'

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src={BACKGROUND_URL}
                    alt="netflix-logo"
                />
            </div>
            <GptSeachBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch