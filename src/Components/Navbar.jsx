import React from "react";
import githubLOgo from "../assets/images/github-logo.png";

const Navbar = () => {
  return (
    <>
      <header className=" navbar bg-base-100 shadow-sm">
        <div className=" flex-col gap-3 sm:flex-row navbar max-w-[1300px] mx-auto ">
          <div className="flex-1 flex items-center gap-3 ">
            <img
              src={githubLOgo}
              alt=""
              className="w-[40px]"
            ></img>
            <h2 className=" text-xl font-bold">GitHub Issues Tracker</h2>
          </div>
          <div className="flex gap-1">
            <input
              type="search"
              placeholder=" Search issues..."
              
              className="input input-bordered w-24 md:w-auto"
              id="input-search"
            />
            <button id="btn-search" className="btn btn-primary">
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
