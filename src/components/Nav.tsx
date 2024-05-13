import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-[#0ca678] flex justify-between items-center px-[3em] py-[0.5em] text-white w-[100%]">
        <div>
          <h2>Clocking</h2>
          <p className="pr-[0.9em] bg-[#b49f96]">tallen@tallen.tech</p>
        </div>

        <ul className="flex gap-[1.7em]">
          <NavLink to="/nav/report">Report</NavLink>
          <NavLink to="/nav/users">Users</NavLink>
          <NavLink to="/">Log Out</NavLink>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
