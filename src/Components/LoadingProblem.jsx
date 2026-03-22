import React, { use } from 'react';
import DisplayProblem from './DisplayProblem';

const LoadingProblem = ({ProblemFetch}) => {
    const problemUse =use(ProblemFetch);
    const problemData = problemUse.data;
    console.log(problemData);
    
    


    return (
       <>
          {
            problemData.map(problem => <DisplayProblem key={problem.id} problem={problem}></DisplayProblem>)
          }
       </>
    );
};

export default LoadingProblem;