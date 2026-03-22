import React from "react";
import close from "../assets/images/Closed- Status .png";
import open from "../assets/images/Open-Status.png";

const DisplayProblem = ({ problem }) => {
  console.log(problem);

  return (
    <>
      <div className="rounded-2xl shadow p-4">
        <div className="status-bar flex justify-between mb-3">
          <img src={problem.status === "open" ? open : close} alt="" />
          <span
            className={`px-3 py-2 rounded-4xl ${problem.priority === "high" ? "bg-red-200" : problem.priority === "medium" ? "bg-yellow-200" : "bg-gray-200"}`}
          >
            {problem.priority.toUpperCase()}
          </span>
        </div>
        <div className="title-body">
            <h2 className="font-bold">{problem.title}</h2>
            <p>{problem.description}</p>
            <div className="problem-name-span">

            </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default DisplayProblem;
