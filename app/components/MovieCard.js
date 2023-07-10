import Image from "next/image";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const MovieCard = ({ id, image, rating, genre, title, type, plot }) => {
  return (
    <div
      className="h-[12rem] sm:h-[16rem] aspect-[6/8]   bg-gray-800 rounded-md relative"
      key={id}
    >
      <Image
        src={image}
        priority
        className="w-full h-full rounded-md object-cover"
        alt="gf"
        width="800"
        height="800"
      />

      <div className="absolute top-0 right-0 w-full px-1 py-2 flex flex-col justify-between h-full rounded-md hover:glassEffect group">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-1 bg-white text-black p-1 rounded">
            <p className="text-xs font-medium">{rating}</p>
            <AiFillStar className="h-4 w-4 text-yellow-500" />
          </div>
          <AiOutlineHeart className="h-6 w-6 font-bold text-white" />
        </div>

        <div className="flex flex-col items-start px-1 py-1 ">
          <p className="text-[0.6rem] px-2 py-1 font-medium rounded-md bg-black mt-1 hidden group-hover:block">
            {genre}
          </p>
          <h4 className="text-base font-semibold mt-1 leading-4">{title}</h4>
          <h5 className="text-xs text-gray-400 font-medium mt-0.5 hidden group-hover:block">
            {type}
          </h5>
          <p className="text-xs  hidden group-hover:line-clamp-2">{plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
