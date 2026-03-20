import React from "react";

const Toggle = () => {
 
  return (
    <>
      <section class="button-toggle-section shadow rounded p-5 space-x-4 mt-2 sm:mt-6">
        <button
          
          class="btn btn-primary w-[80px]"
          id="all-filter-btn"
        >
          All
        </button>
        <button
          
          class="btn  w-[80px]"
          id="open-filter-btn"
        >
          Open
        </button>
        <button
   
          class="btn"
          id="close-filter-btn"
        >
          Closed
        </button>
      </section>
    </>
  );
};

export default Toggle;
