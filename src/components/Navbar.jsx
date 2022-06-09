import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="h-20 text-3xl mt-5 font-bold">#todo</header>
      <nav className="flex w-full justify-center">
        <ul className="w-full h-11 flex justify-center items-stretch border-b-slate-300 border-b-[1px]">
          <li className="w-[33%] flex justify-center font-medium box-border">
            <NavLink
              className={({ isActive }) => (isActive ? "first-letter:uppercase min-w-[95px] text-center font-medium border-white border-[2px] border-b-blue-500 border-b-[3px]" : "first-letter:uppercase min-w-[85px] text-center font-medium")}
              to="/"
            >
              all
            </NavLink>
          </li>
          <li className="w-1/2 flex justify-center font-medium box-border">
            <NavLink
              className={({ isActive }) => (isActive ? "first-letter:uppercase min-w-[95px] text-center font-medium border-white border-[2px] border-b-blue-500 border-b-[3px]" : "first-letter:uppercase min-w-[85px] text-center font-medium")}
              to="/active"
            >
              active
            </NavLink>
          </li>
          <li className="w-[33%] flex justify-center font-medium box-border">
            <NavLink
              className={({ isActive }) => (isActive ? "first-letter:uppercase min-w-[95px] text-center font-medium border-white border-[2px] border-b-blue-500 border-b-[3px]" : "first-letter:uppercase min-w-[85px] text-center font-medium")}
              to="/completed"
            >
              completed
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
