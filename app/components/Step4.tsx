import Button from "./Button";
import Dividender from "./Dividender";
import { UserDetails } from "./Form";
interface Step4Props {
  previousSteps: () => void;
  userDetails: UserDetails;
  submit: React.Dispatch<React.SetStateAction<boolean>>;
}
const Step4 = ({ previousSteps, userDetails, submit }: Step4Props) => {

  
  return (
    <div className="w-[600px] my-4 p-2 mx-auto">
      <h2 className="text-[1.5rem] text-[#111827]">Review and Confirm</h2>
      <p className="text-[#6B7280] text-[0.8rem] mb-[1.5rem]">
        Please review your information to make sure everything is accurate.{" "}
      </p>
      <div className="flex flex-wrap justify-start p-2 gap-4 mb-4">
        <div className="flex w-44 h-[4.3rem] p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
          <p className="text-[#4B5563] text-[0.75rem]">Full Name</p>
          <p className="text-[#111827] text-[0.75rem]">
            {userDetails.fullName}
          </p>
        </div>
        <div className="flex w-44  p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
          <p className="text-[#4B5563] text-[0.75rem]">Email Address</p>
          <p className="text-[#111827] text-[0.75rem]">{userDetails.email}</p>
        </div>
        <div className="flex w-44 p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
          <p className="text-[#4B5563] text-[0.75rem]">Phone Number</p>
          <p className="text-[#111827] text-[0.75rem]">
            {userDetails.phoneNumber}
          </p>
        </div>
        <div className="flex w-44 h-[4.3rem] p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
          <p className="text-[#4B5563] text-[0.75rem]">Portfolio/GitHub Link</p>
          <p className="text-[#111827] text-[0.75rem]">{userDetails.github}</p>
        </div>
        <div className="flex w-44 p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
          <p className="text-[#4B5563] text-[0.75rem]">Skill Level</p>
          <p className="text-[#111827] text-[0.75rem]">
            {userDetails.skillLevel}
          </p>
        </div>
        <div className="flex w-44  p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
          <p className="text-[#4B5563] text-[0.75rem]">Challenge Preference</p>
          <p className="text-[#111827] text-[0.75rem]">
            {userDetails.challengePreference}
          </p>
        </div>
      </div>
      <Dividender/>
      <div className="flex justify-between mt-[2rem]">

        <Button
          text="Previous"
          onClick={previousSteps}
          className="bg-[#F9FAFB] cursor-pointer px-4 py-2 rounded-md text-[#FC6C4C] border border-[#FC6C4C]"
        />
        <Button
          text="Submit"
          onClick={() =>{
            if(userDetails.email !== ''){
              submit(true)
            }
          }}
          className="bg-[#FC6C4C] cursor-pointer px-4 py-2 rounded-md text-white"
        />

      </div>
    </div>
  );
};
export default Step4;
