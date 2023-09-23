import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen bg-green-800 flex flex-col gap-6 justify-center items-center">
      <h1 className="text-3xl text-center text-white font-medium">
        Oops!, The page is not Found!
      </h1>
      <Link to={"/"}>
        <button className="py-2 px-5 bg-purple-600 rounded-md text-white font-medium">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
