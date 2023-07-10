"use client";
import MovieCard from "@/app/components/MovieCard.js";
import { movies } from "../../../movie_data.js";
import { useCallback, useEffect, useState } from "react";

const UsingUseState = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterList, setFilterList] = useState([]);

  const handleChange = useCallback(() => {
    const filterData = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
    });
    setFilterList(filterData);
  }, [searchQuery]);

  // EFFECT: Search Handler
  useEffect(() => {
    // Debounce search handler
    const timer = setTimeout(() => {
      handleChange();
    }, 500);

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [handleChange]);

  return (
    <div className="flex flex-col items-start gap-y-3">
      <h1 className="text-2xl font-bold">
        Client Side Search bar using useState Hook
      </h1>
      {/* ------------------------search bar------------------------------------ */}

      <input
        type="text"
        placeholder="Type here"
        value={searchQuery}
        className="bg-transparent border px-4 py-2 rounded-lg border-gray-500 text-sm "
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto sm:gap-x-8 lg:gap-x-12 sm:gap-y-6  gap-x-4 gap-y-3  mt-2 sm:mt-4 place-items-center">
        {searchQuery.length > 0
          ? filterList.map((movie) => (
              //------------------ Movie card---------------------------------
              <MovieCard
                key={movie.id}
                image={movie.image}
                rating={movie.rating}
                genre={movie.genre}
                title={movie.title}
                type={movie.type}
                plot={movie.plot}
              />
            ))
          : movies.map((movie) => (
              //------------------ Movie card---------------------------------
              <MovieCard
                key={movie.id}
                image={movie.image}
                rating={movie.rating}
                genre={movie.genre}
                title={movie.title}
                type={movie.type}
                plot={movie.plot}
              />
            ))}
      </div>
    </div>
  );
};

export default UsingUseState;
