import { NavLink } from "react-router";

const base = "transition hover:text-blue-400";
const active = "text-blue-400 font-semibold";

const NavItemDesktop = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? active : base)}
  >
    {children}
  </NavLink>
);

export default NavItemDesktop;