import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
            <h2 className='text-6xl font-bold'>{title}</h2>
            <p className='py-6 text-lg w-2/4'>{overview}</p>
            <div className='flex gap-3'>
                <button className='bg-white hover:bg-opacity-80 rounded-md font-bold w-auto py-4 px-14 text-center text-black text-xl'>► Play</button>
                <button className='bg-gray-500 rounded-md font-bold w-auto py-4 px-14 text-center text-white text-xl'>More Info</button>
            </div>
        </div >
    )
}

export default VideoTitle