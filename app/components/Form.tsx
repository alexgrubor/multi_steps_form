import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

interface FormProps {
  steps: number;
}

const Form = ({ steps }: FormProps) => {
  return (
    <div className="h-[20rem]">
      {steps === 1 && <Step1 />}
      {steps === 2 && <Step2 />}
      {steps === 3 && <Step3 />}
    {steps === 4 && <Step4 />}
    </div>
  );
};
export default Form;
