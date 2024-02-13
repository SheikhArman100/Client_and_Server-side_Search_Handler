"use client";
import MovieCard from "@/components/MovieCard.js";
import useDebounce from "@/hooks/useDebounce.js";
import { useMemo, useState } from "react";
import { movies } from "../../../movie_data.js";

const UsingUseState = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceSearchQuery = useDebounce(searchQuery);

  const filterData = useMemo(
    () =>
      movies.filter((movie) => {
        return (
          movie.title
            .toLowerCase()
            .includes(debounceSearchQuery.toLowerCase()) ||
          movie.genre.toLowerCase().includes(debounceSearchQuery.toLowerCase())
        );
      }),
    [debounceSearchQuery]
  );

  return (
    <div className=" flex flex-col items-start gap-y-3">
      <h1 className="text-2xl font-bold">
        Client Side Search functionality using useState Hook
      </h1>
      {/* ------------------------search bar------------------------------------ */}

      <input
        type="text"
        placeholder="Type here"
        value={searchQuery}
        className="bg-transparent border px-4 py-2 rounded-lg border-gray-500 text-sm "
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <section className="w-full h-full flex  justify-center ">
        <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto sm:gap-x-8 lg:gap-x-12 sm:gap-y-6  gap-x-4 gap-y-3  mt-2 sm:my-4  ">
          {debounceSearchQuery.length === 0 ? (
            movies.map((movie) => (
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
          ) : filterData.length === 0 ? (
            <p className="">No movies found</p>
          ) : (
            filterData.map((movie) => (
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
          )}
        </div>
      </section>
    </div>
  );
};

export default UsingUseState;
