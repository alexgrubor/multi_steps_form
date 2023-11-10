import Dividender from "./Dividender";
import { UserDetails } from "./Form";
import Button from "./Button";

const challengePreference = ["HTML/CSS/JS", "ReactJs", "AngularJs", "Vue.js"];
interface Step3Props {
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  nextStep: () => void;
  previousSteps: () => void;
}
const Step3 = ({
  userDetails,
  setUserDetails,
  nextStep,
  previousSteps,
}: Step3Props) => {
  const handleChangeChallengePref = (e: any) => {
    const selectedChallenge = e.target.value;
    setUserDetails((prev) => ({
      ...prev,
      challengePreference:
        prev.challengePreference === selectedChallenge ? "" : selectedChallenge,
    }));
  };
  return (
    <div className=" my-4 mx-auto">
      <div className="p-2">
        <h2 className="text-[1.5rem] text-[#111827]">Challenge Preference</h2>
        <p className="text-[#6B7280] text-[0.8rem] mb-[1.5rem]">
          Please tell us which frontend challenges you would like to participate
          in.
        </p>
      </div>

      <div className="flex flex-wrap justify-between p-2 py-4 my-2">
        {challengePreference.map((challenge) => (
          <div
            key={challenge}
            className="p-4 w-full sm:w-[48%] rounded-[0.625rem] mb-3"
            style={{ border: "1px solid #D1D5DB" }}
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value={challenge}
                checked={userDetails.challengePreference === challenge}
                onChange={handleChangeChallengePref}
                className="accent-[#FC6C4C]"
              />
              <span className="text-[#111827]">{challenge}</span>
            </label>
          </div>
        ))}
      </div>
      <Dividender />
      <div className="flex justify-between mt-[2rem]">
        <Button
          text="Previous"
          onClick={previousSteps}
          className="bg-[#F9FAFB] cursor-pointer px-4 py-2 rounded-md text-[#FC6C4C] border border-[#FC6C4C]"
        />
        <Button
          text="Next Step"
          disabled={userDetails.challengePreference === ""}
          onClick={() => {
            nextStep();
          }}
          className={`text-white cursor-pointer px-4 py-2 rounded-md ${
            userDetails.challengePreference === ""
              ? "bg-[#D3D3D3] cursor-not-allowed"
              : "bg-custom-gradient"
          }`}
        />
      </div>
    </div>
  );
};

export default Step3;
