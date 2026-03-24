import React, { use } from 'react';
import DisplayProblem from './DisplayProblem';
import Toggle from './Toggle';

const LoadingProblem = ({problemFetch , active  }) => {
    const problemUse =use(problemFetch);
    const problemData = problemUse.data;
    console.log(problemData);
    const openProblem = problemData.filter(problem => problem.status ==='open');
    console.log(openProblem);
    const closeProblem =problemData.filter(problem => problem.status ==='closed');
    console.log(closeProblem);
   
    
    
    
    
    
    


    return (
       <>
       <div className='grid p-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5'>
          {
           active ==1 ? problemData.map(problem => <DisplayProblem key={problem.id} problem={problem} ></DisplayProblem>): active ==2 ? openProblem.map(problem => <DisplayProblem key={problem.id} problem={problem} ></DisplayProblem>) : closeProblem.map(problem => <DisplayProblem key={problem.id} problem={problem} ></DisplayProblem>)
          }
         
        </div>
       </>
    );
};

export default LoadingProblem;