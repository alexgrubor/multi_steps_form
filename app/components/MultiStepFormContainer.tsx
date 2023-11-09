"use client";

import { useState } from "react";
import Form from "./Form";
import SuccessFullSubmit from "./SuccessFullSubmit";
const MultiStepForm = () => {
  const [steps, setSteps] = useState(1);
  const stepsNum = ["1", "2", "3", "4"];
  const [submitted, setIsSubmitted] = useState(false);

  return (
    <div
      className="w-[40rem] h-[32.8125rem] flex flex-col justify-center items-center"
      style={{
        borderRadius: "1rem",
        backgroundColor: "#fff",
        boxShadow: "10px 10px 0px 0px rgba(250, 181, 100, 0.10) ",
      }}
    >
      {!submitted && (
        <>
          <div className="flex gap-4 p-3">
            {stepsNum.map((num, index) => (
              <div key={num} className="flex items-center gap-6">
                <div
                  className={`w-[2rem] h-[2rem] cursor-pointer flex items-center justify-center rounded-full ${
                    steps >= parseInt(num)
                      ? "bg-[#FC6C4C] text-white"
                      : "bg-[#E5E7EB] text-[#111827]"
                  }`}
                  onClick={() => {
                    setSteps(parseInt(num));
                  }}
                >
                  {num}
                </div>
                {index < stepsNum.length - 1 && (
                  <div
                    className={`h-3 flex w-[6.25rem] ${
                      steps > parseInt(num) ? "bg-[#FC6C4C]" : "bg-[#E5E7EB]"
                    }`}
                    key={`divider-${num}`}
                    style={{ borderRadius: "3rem" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <svg
            width="580"
            height="2"
            viewBox="0 0 580 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1C226.504 1 353.496 1 580 1" stroke="#E5E7EB" />
          </svg>
          <Form steps={steps} />
          <svg
            width="580"
            height="2"
            viewBox="0 0 580 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1C226.504 1 353.496 1 580 1" stroke="#E5E7EB" />
          </svg>
          <div className="relative w-full h-14 rounded-full">
            {steps > 1 && steps < 4 && (
              <button
                onClick={() =>
                  setSteps((prevSteps) =>
                    prevSteps > 1 ? prevSteps - 1 : prevSteps
                  )
                }
                className="absolute left-2 top-1 text-white px-4 py-2 rounded-md "
                style={{
                  background:
                    "linear-gradient(0deg, #FC6C4C 0%, #FC6C4C 100%), #FFF",
                }}
              >
                Go Back
              </button>
            )}
            {steps < 4 && (
              <button
                onClick={() =>
                  setSteps((prevSteps) =>
                    prevSteps < 4 ? prevSteps + 1 : prevSteps
                  )
                }
                className="absolute right-2 top-1 text-white px-4 py-2 rounded-md "
                style={{
                  background:
                    "linear-gradient(0deg, #FC6C4C 0%, #FC6C4C 100%), #FFF",
                }}
              >
                Next Step
              </button>
            )}
            {steps === 4 && (
              <button
                className="absolute right-1 top-1 text-white px-4 py-2 rounded-md "
                style={{
                  background:
                    "linear-gradient(0deg, #FC6C4C 0%, #FC6C4C 100%), #FFF",
                }}
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}
      {
        submitted && <SuccessFullSubmit/>
      }
    </div>
  );
};
export default MultiStepForm;
