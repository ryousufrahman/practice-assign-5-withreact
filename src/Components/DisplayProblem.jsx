import React from "react";
import close from "../assets/images/Closed- Status .png";
import open from "../assets/images/Open-Status.png";

const DisplayProblem = ({ problem }) => {
  console.log(problem);
  const date = new Date(problem.createdAt);
     const formattedDate = date.toLocaleDateString();

  return (
    <>
      <div className={`rounded-lg shadow p-4 ${problem.status ==='open' ? 'border-t-4 border-green-500' : 'border-t-4 border-purple-500'}`}>
        <div className="status-bar flex justify-between mb-3">
          <img className="w-[30px]" src={problem.status === "open" ? open : close} alt="" />
          <span
            className={`px-3 py-2 rounded-4xl ${problem.priority === "high" ? "bg-red-200" : problem.priority === "medium" ? "bg-yellow-200" : "bg-gray-200"}`}
          >
            {problem.priority.toUpperCase()}
          </span>
        </div>
        <div className="title-body mb-3">
            <h2 className="font-bold mt-2">{problem.title}</h2>
            <p className="text-gray-500 line-clamp-2 mt-2">{problem.description}</p>
            <div className="problem-name-span mb-4">

            </div>
        </div>
        <hr />
        <div className="mt-4">
           <p className="text-gray-500">by {problem.author}</p>
           <p className="text-gray-500">{formattedDate}</p>
        </div>
      </div>
    </>
  );
};

export default DisplayProblem;
