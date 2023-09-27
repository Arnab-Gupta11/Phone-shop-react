import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
const Nabvar = () => {
  return (
    <div className="flex justify-between items-center px-8 shadow-lg py-8">
      <div>
        <Logo></Logo>
      </div>
      <div className="flex gap-10 list-none">
        <li>
          <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-violet-700 underline" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-violet-700 underline text-xl font-medium" : "")}
          >
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-violet-700 underline text-xl font-medium" : "")}
          >
            Login
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Nabvar;
