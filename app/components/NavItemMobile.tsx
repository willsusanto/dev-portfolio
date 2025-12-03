import { NavLink } from "react-router";

const base = "transition hover:text-blue-400";
const active = "text-blue-400 font-semibold";

const NavItemMobile = ({ to, children, handleClick }: { to: string; children: React.ReactNode; handleClick: () => void }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? active : base)}
    onClick={() => handleClick()}
  >
    {children}
  </NavLink>
);

export default NavItemMobile;