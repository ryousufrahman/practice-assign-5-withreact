import React, { use } from 'react';
import DisplayProblem from './DisplayProblem';
import Toggle from './Toggle';
import Apetures from '../assets/images/Aperture.png'

const LoadingProblem = ({problemFetch , active  }) => {
    const problemUse =use(problemFetch);
    const problemData = problemUse.data;
    console.log(problemData);
    const openProblem = problemData.filter(problem => problem.status ==='open');
    console.log(openProblem);
    const closeProblem =problemData.filter(problem => problem.status ==='closed');
    console.log(closeProblem);
   const allDatalength =problemData.length;
   const openLength =openProblem.length;
   const closeLenght =closeProblem.length;
    
    
    
    
    
    


    return (
       <>
          <section className="issues-count-section shadow rounded p-5 space-x-4 mt-4 mb-4">
        <div className="flex justify-between items-center">
           <div className="flex gap-3 items-center">
              <div>
                <img src={Apetures} alt="" className="w-[50px] h-[50px]"></img>
              </div>
              <div>
                <h2 className="text-xl font-bold"><span>{` ${active ==1 ? allDatalength : active ==2 ? openLength : closeLenght} `}</span> Issues</h2>
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
     

       <div className='grid p-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5'>
          {
           active ==1 ? problemData.map(problem => <DisplayProblem key={problem.id} problem={problem} ></DisplayProblem>): active ==2 ? openProblem.map(problem => <DisplayProblem key={problem.id} problem={problem} ></DisplayProblem>) : closeProblem.map(problem => <DisplayProblem key={problem.id} problem={problem} ></DisplayProblem>)
          }
         
        </div>
       </>
    );
};

export default LoadingProblem;