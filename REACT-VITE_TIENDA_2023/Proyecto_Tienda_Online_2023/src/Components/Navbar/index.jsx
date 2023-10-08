import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <ul>
        <li>
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/">Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/">Others</NavLink>
        </li>
      </ul>
      <ul>
        <li>smich254@gmail.com</li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
