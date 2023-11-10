"use client";

import { useState } from "react";
import Form from "./Form";
import SuccessFullSubmit from "./SuccessFullSubmit";
import Dividender from "./Dividender";
const MultiStepForm = () => {
  const [steps, setSteps] = useState(1);
  const stepsNum = ["1", "2", "3", "4"];
  const [submitted, setIsSubmitted] = useState(false);
  const nextStep = ()=> { 
    setSteps((prevSteps) =>
      prevSteps < 4 ? prevSteps + 1 : prevSteps
    )
  }
  const previousStep = ()=> {
    setSteps((prevSteps) =>
      prevSteps > 1 ? prevSteps - 1 : prevSteps
    )
  }

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
          <Dividender/>
          <Form steps={steps} nextStep={nextStep} previousStep={previousStep} submit={setIsSubmitted} />
       
        </>
      )}
      {
        submitted && <SuccessFullSubmit/>
      }
    </div>
  );
};
export default MultiStepForm;
