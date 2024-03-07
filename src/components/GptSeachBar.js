import React from "react";

const GptSeachBar = () => {
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="mx-auto bg-black w-[50vw] grid grid-cols-12 rounded-md">
                <input
                    type="text"
                    className="p-4 m-4 border col-span-9"
                    placeholder="What would you like to watch today?"
                />
                <button className="px-4 m-4 bg-red-600 text-white font-bold rounded-md col-span-3">
                    Search
                </button>
            </form>
        </div>
    );
};

export default GptSeachBar;
