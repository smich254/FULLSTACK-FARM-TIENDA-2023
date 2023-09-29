import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};
