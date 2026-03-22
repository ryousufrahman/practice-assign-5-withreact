import React, { use } from 'react';
import DisplayProblem from './DisplayProblem';

const LoadingProblem = ({problemFetch}) => {
    const problemUse =use(problemFetch);
    const problemData = problemUse.data;
    console.log(problemData);
    
    


    return (
       <>
       <div className='grid p-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5'>
          {
            problemData.map(problem => <DisplayProblem key={problem.id} problem={problem}></DisplayProblem>)
          }
        </div>
       </>
    );
};

export default LoadingProblem;