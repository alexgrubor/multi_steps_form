import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

import { useState } from "react";
interface FormProps {
  steps: number;
  nextStep: () => void;
  previousStep: () => void;
  submit: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface UserDetails {
  fullName: string;
  email: string;
  phoneNumber: string;
  github: string;
  skillLevel: string;
  challengePreference: string;
}

const Form = ({ steps, nextStep, previousStep, submit }: FormProps) => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    github: "",
    skillLevel: "",
    challengePreference: "",
  } as UserDetails);
  return (
    <>
      {steps === 1 && (
        <Step1
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          nextStep={nextStep}
        />
      )}
      {steps === 2 && (
        <Step2
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          nextStep={nextStep}
          previousSteps={previousStep}
        />
      )}
      {steps === 3 && (
        <Step3
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          nextStep={nextStep}
          previousSteps={previousStep}
        />
      )}
      {steps === 4 && (
        <Step4
          userDetails={userDetails}
          previousSteps={previousStep}
          submit={submit}
        />
      )}
    </>
  );
};
export default Form;
