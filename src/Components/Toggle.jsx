import React, { useState } from "react";

const Toggle = () => {
    const [active , setActive]=useState(1)
    

    
  return (
    <>
      <section className="button-toggle-section shadow rounded p-5 space-x-4 mt-2 sm:mt-6">
        <button
          onClick={()=> setActive(1)}
          className={active ===1 ? ' w-[80px] btn btn-primary':'btn w-[80px] '}
          id="all-filter-btn"
        >
          All
        </button>
        <button
            onClick={()=> setActive(2)}
          className={active ===2 ? ' w-[80px]  btn btn-primary':'btn w-[80px]'}
          id="open-filter-btn"
        >
          Open
        </button>
        <button
       onClick={()=> setActive(3)}
          className={active ===3 ? ' btn btn-primary':'btn'}
          id="close-filter-btn"
        >
          Closed
        </button>
      </section>
    </>
  );
};

export default Toggle;
