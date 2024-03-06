import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div className="flex w-screen justify-between">
            <div>
                <Header />
                <MainContainer />
                <SecondaryContainer />
            </div>
        </div>
    );
};

export default Browse;
