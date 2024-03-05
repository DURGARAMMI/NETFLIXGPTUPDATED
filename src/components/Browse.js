import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {

    useNowPlayingMovies();

    return (
        <div className="flex w-screen justify-between">
            <div className="overflow-hidden">
                <Header />
                <MainContainer />
                <SecondaryContainer />
            </div>
        </div>
    );
};

export default Browse;
