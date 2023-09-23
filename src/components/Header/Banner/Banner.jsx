import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-[500px] border-2 border-dotted bg-[url(/assets/photo-1616077168079-7e09a677fb2c.avif)]  bg-cover  bg-center bg-no-repeat object-cover mt-10 flex justify-center items-center">
      <div className="w-5/6 flex gap-5">
        <input
          type="text"
          name="name"
          id=""
          className="flex-1 p-2 rounded"
          placeholder="Search here..."
        />
        <Link
          to=""
          className="bg-green-400 text-white font-medium py-2 px-4 rounded"
        >
          <input type="submit" value="Search" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
