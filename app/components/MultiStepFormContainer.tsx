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
    <div className="flex flex-col justify-center items-center w-11/12 min-h-[60vh] max-w-4xl  p-4 rounded-lg mb-4 bg-white shadow-[10px_10px_0px_0px_rgba(250,181,100,0.10)]">
    {!submitted ? (
      <>
        <div className="flex gap-4 p-3 flex-wrap">
          {stepsNum.map((num, index) => (
            <div key={num} className="flex items-center gap-6">
              <div
                className={`w-8 h-8 cursor-pointer flex items-center justify-center rounded-full ${
                  steps >= parseInt(num)
                    ? 'bg-[#FC6C4C] text-white'
                    : 'bg-[#E5E7EB] text-[#111827]'
                }`}
              >
                {num}
              </div>
              {index < stepsNum.length - 1 && (
                <div
                  className={`h-1 flex ${
                    steps > parseInt(num) ? 'bg-[#FC6C4C]' : 'bg-[#E5E7EB]'
                  }`}
                  key={`divider-${num}`}
                  style={{ width: '5vw', maxWidth: '40px', borderRadius: '9999px' }}
                ></div>
              )}
            </div>
          ))}
        </div>
        <Dividender />
        <Form steps={steps} nextStep={nextStep} previousStep={previousStep} submit={setIsSubmitted} />
      </>
    ) : (
      <SuccessFullSubmit />
    )}
  </div>
  );
};
export default MultiStepForm;
