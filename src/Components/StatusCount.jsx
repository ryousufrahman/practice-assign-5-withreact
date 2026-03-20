import React from 'react';
import Apetures from '../assets/images/Aperture.png'

const StatusCount = () => {
    return (
        <>
           <section class="issues-count-section shadow rounded p-5 space-x-4 mt-4">
        <div class="flex justify-between items-center">
           <div class="flex gap-3 items-center">
              <div>
                <img src={Apetures} alt="" class="w-[50px] h-[50px]"></img>
              </div>
              <div>
                <h2 class="text-xl font-bold"><span id="count-in-heading">0</span> Issues</h2>
                <p class="text-[#64748B]">Track and manage your project issues</p>
              </div>
           </div>
           <div class="flex gap-5">
             <div class="flex gap-4 items-center">
                <div class="bg-[#00A96E] w-[12px] h-[12px] rounded-full"></div>
                <p>Open</p>
             </div>
             <div class="flex gap-4 items-center">
                <div class="bg-[#A855F7] w-[12px] h-[12px] rounded-full"></div>
                <p>Closed</p>
             </div>

           </div>

        </div>

     </section>
     
        
        
        </>
            
        
    );
};

export default StatusCount;