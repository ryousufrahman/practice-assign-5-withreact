import React from 'react';
import Apetures from '../assets/images/Aperture.png'

const StatusCount = () => {
    return (
        <>
           <section className="issues-count-section shadow rounded p-5 space-x-4 mt-4">
        <div className="flex justify-between items-center">
           <div className="flex gap-3 items-center">
              <div>
                <img src={Apetures} alt="" className="w-[50px] h-[50px]"></img>
              </div>
              <div>
                <h2 className="text-xl font-bold"><span id="count-in-heading"></span> Issues</h2>
                <p className="text-[#64748B]">Track and manage your project issues</p>
              </div>
           </div>
           <div className="flex gap-5">
             <div className="flex gap-4 items-center">
                <div className="bg-[#00A96E] w-[12px] h-[12px] rounded-full"></div>
                <p>Open</p>
             </div>
             <div className="flex gap-4 items-center">
                <div className="bg-[#A855F7] w-[12px] h-[12px] rounded-full"></div>
                <p>Closed</p>
             </div>

           </div>

        </div>

     </section>
     
        
        
        </>
            
        
    );
};

export default StatusCount;