import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header className="top-0 w-full bg-white/5 shadow-sm shadow-white flex justify-between items-center py-1 px-2">
        <Navbar />
      </header>
      <main className="top-29 px-3 fixed w-full bg-white/5 overflow-auto shadow-sm shadow-white flex justify-center items-center landscape:items-start">
        <Outlet />
      </main>
      <footer className="bottom-0 fixed w-full text-center bg-white/5">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
