import { useEffect, useState } from "react";
import FavoritePhonesCard from "./FavoritePhonesCard";

const Favorites = () => {
  const [favoritePhones, setFavoritePhones] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavoritePhones(favoriteItems);

      const total = favoriteItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );
      setTotalPrice(total.toFixed(2));
    } else {
      setNotFound("Your Favorite Phone data is Empty.");
    }
  }, []);

  const handleRemoveAllFavoritesItems = () => {
    localStorage.clear();
    setFavoritePhones([]);
    setNotFound("Your Favorite Phone data is Empty.");
  };

  // console.log(favoritePhones);
  return (
    <div>
      {notFound ? (
        <p className="text-xl font-medium h-[80vh] flex justify-center items-center">
          {notFound}
        </p>
      ) : (
        <div className="my-10">
          <div>
            <button
              onClick={handleRemoveAllFavoritesItems}
              className="block mx-auto mb-7 select-none rounded-lg bg-green-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Remove all Favorite Phone
            </button>
            <h1 className="text-center text-lg mb-7">
              Total Price: {totalPrice}
            </h1>
          </div>
          <div className="px-5 md:grid md:grid-cols-2 gap-6">
            {isShow
              ? favoritePhones.map((phone) => (
                  <FavoritePhonesCard
                    key={phone.id}
                    phone={phone}
                  ></FavoritePhonesCard>
                ))
              : favoritePhones
                  .slice(0, 4)
                  .map((phone) => (
                    <FavoritePhonesCard
                      key={phone.id}
                      phone={phone}
                    ></FavoritePhonesCard>
                  ))}
          </div>
          {favoritePhones.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 py-2 my-8 bg-green-300 block mx-auto rounded-md"
            >
              {isShow ? "See less" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
