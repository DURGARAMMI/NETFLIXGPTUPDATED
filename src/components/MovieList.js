import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="p-3 max-w-7xl">
            <h2 className="font-bold text-2xl text-white mb-2">{title}</h2>
            <div className="flex overflow-x-scroll">
                <div className="flex gap-2">
                    {movies && movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
