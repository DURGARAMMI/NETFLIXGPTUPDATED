import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingTrailer from '../hooks/useNowPlayingTrailer'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useNowPlayingTrailer(movieId);

    return (
        <div className='w-screen'>
            {/* rendering youtube video */}
            {/* https://www.youtube.com/watch?v=e1k1PC0TtmE */}
            <iframe
                //  width="560" height="315"
                className='w-screen aspect-video'
                // src="https://www.youtube.com/embed/e1k1PC0TtmE?si=tJZmcvJSS8p0kwAT"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=true&mute=true"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div >
    )
}

export default VideoBackground;