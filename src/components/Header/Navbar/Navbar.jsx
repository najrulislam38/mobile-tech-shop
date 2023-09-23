import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-5 shadow">
      <h2 className="text-2l font-semibold">Phone Shop</h2>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
