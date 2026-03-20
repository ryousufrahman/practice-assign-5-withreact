import React from "react";
import githubLOgo from "../assets/images/github-logo.png";

const Navbar = () => {
  return (
    <>
      <header class=" navbar bg-base-100 shadow-sm">
        <div class=" flex-col gap-3 sm:flex-row navbar max-w-[1300px] mx-auto ">
          <div class="flex-1 flex items-center gap-3 ">
            <img
              src={githubLOgo}
              alt=""
              class="w-[40px]"
            ></img>
            <h2 class=" text-xl font-bold">GitHub Issues Tracker</h2>
          </div>
          <div class="flex gap-1">
            <input
              type="search"
              placeholder=" Search issues..."
              class="input input-bordered w-24 md:w-auto"
              id="input-search"
            />
            <button id="btn-search" class="btn btn-primary">
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
