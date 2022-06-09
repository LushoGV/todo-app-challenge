import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      {/* <header className="headerNav"> */}
      <header className="flex w-full max-w-3xl flex-col items-center justify-center px-2 md:px-3">
        <Navbar />
      </header>
      <main className="w-full max-w-3xl flex flex-col items-end px-2 md:px-3">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
