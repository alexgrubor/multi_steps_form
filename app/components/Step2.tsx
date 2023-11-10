import { UserDetails } from "./Form";
import Button from "./Button";
import Dividender from "./Dividender";

const SkillLevel = [
  {
    text: "Beginner",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_12_62)">
          <path
            d="M10 8.33333C10 7.00725 9.47322 5.73548 8.53553 4.7978C7.59785 3.86012 6.32608 3.33333 5 3.33333H2.5V5C2.5 6.32608 3.02678 7.59785 3.96447 8.53553C4.90215 9.47321 6.17392 10 7.5 10H10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11.6667C10 10.3406 10.5268 9.06882 11.4645 8.13113C12.4021 7.19345 13.6739 6.66667 15 6.66667H17.5V7.5C17.5 8.82608 16.9732 10.0979 16.0355 11.0355C15.0979 11.9732 13.8261 12.5 12.5 12.5H10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 16.6667V8.33333"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_62">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    text: "Intermediate",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_12_123)">
          <path
            d="M6.66663 13.3333L8.33329 8.33333L13.3333 6.66667L11.6666 11.6667L6.66663 13.3333Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_123">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    text: "Advanced",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_12_98)">
          <path
            d="M3.33337 10.8333C4.81928 11.0099 6.20258 11.6813 7.26067 12.7394C8.31876 13.7975 8.99012 15.1808 9.16671 16.6667C9.90331 16.242 10.5194 15.6365 10.9569 14.9074C11.3943 14.1784 11.6386 13.3498 11.6667 12.5C13.066 12.0078 14.2878 11.1117 15.1778 9.925C16.0678 8.73835 16.586 7.31444 16.6667 5.83333C16.6667 5.17029 16.4033 4.5344 15.9345 4.06556C15.4656 3.59672 14.8297 3.33333 14.1667 3.33333C12.6856 3.41408 11.2617 3.93222 10.075 4.8222C8.88838 5.71219 7.99228 6.93407 7.50004 8.33333C6.65026 8.36139 5.82167 8.60569 5.09259 9.04314C4.36352 9.48059 3.75803 10.0967 3.33337 10.8333Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83329 11.6667C4.96598 12.1563 4.26467 12.8938 3.81925 13.7847C3.37383 14.6755 3.20462 15.679 3.33329 16.6667C4.32092 16.7953 5.32447 16.6261 6.21531 16.1807C7.10614 15.7353 7.84364 15.034 8.33329 14.1667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6666 7.50001C11.6666 7.72102 11.7544 7.93298 11.9107 8.08926C12.067 8.24554 12.2789 8.33334 12.5 8.33334C12.721 8.33334 12.9329 8.24554 13.0892 8.08926C13.2455 7.93298 13.3333 7.72102 13.3333 7.50001C13.3333 7.27899 13.2455 7.06703 13.0892 6.91075C12.9329 6.75447 12.721 6.66667 12.5 6.66667C12.2789 6.66667 12.067 6.75447 11.9107 6.91075C11.7544 7.06703 11.6666 7.27899 11.6666 7.50001Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_98">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    text: "Expert",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_12_103)">
          <path
            d="M6.66663 17.5H13.3333"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14.1667V17.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83337 3.33333H14.1667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1667 3.33333V9.99999C14.1667 11.1051 13.7277 12.1649 12.9463 12.9463C12.1649 13.7277 11.1051 14.1667 10 14.1667C8.89497 14.1667 7.83516 13.7277 7.05376 12.9463C6.27236 12.1649 5.83337 11.1051 5.83337 9.99999V3.33333"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 7.49999C2.5 7.94202 2.67559 8.36595 2.98816 8.67851C3.30072 8.99107 3.72464 9.16666 4.16667 9.16666C4.60869 9.16666 5.03262 8.99107 5.34518 8.67851C5.65774 8.36595 5.83333 7.94202 5.83333 7.49999C5.83333 7.05797 5.65774 6.63404 5.34518 6.32148C5.03262 6.00892 4.60869 5.83333 4.16667 5.83333C3.72464 5.83333 3.30072 6.00892 2.98816 6.32148C2.67559 6.63404 2.5 7.05797 2.5 7.49999Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1666 7.49999C14.1666 7.94202 14.3422 8.36595 14.6548 8.67851C14.9673 8.99107 15.3913 9.16666 15.8333 9.16666C16.2753 9.16666 16.6992 8.99107 17.0118 8.67851C17.3244 8.36595 17.5 7.94202 17.5 7.49999C17.5 7.05797 17.3244 6.63404 17.0118 6.32148C16.6992 6.00892 16.2753 5.83333 15.8333 5.83333C15.3913 5.83333 14.9673 6.00892 14.6548 6.32148C14.3422 6.63404 14.1666 7.05797 14.1666 7.49999Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_103">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
interface Step2Props {
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  nextStep: () => void;
  previousSteps: () => void;
}
const Step2 = ({
  userDetails,
  setUserDetails,
  nextStep,
  previousSteps,
}: Step2Props) => {
  return (
    <div className="flex flex-col gap-2 p-6 ">
      <div className="p-2">
        <h2 className="text-[1.5rem] text-[#111827]">Skill Level</h2>
        <p className="text-[#6B7280] text-[0.8rem] mb-[1.5rem]">
          Please tell us about your skill level in frontend development.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap p-2 py-3 ">
        {SkillLevel.map((skill) => (
          <div
            key={skill.text}
            className={`p-4 w-full cursor-pointer sm:w-[48%] flex gap-4 rounded-[0.625rem] ${
              userDetails.skillLevel === skill.text
                ? "border-2 border-orange-500"
                : "border border-[#D1D5DB]"
            }`}
            onClick={() => {
              setUserDetails((prev) => ({
                ...prev,
                skillLevel: skill.text,
              }));
            }}
          >
            <div className="bg-orange-400 w-7 h-7 rounded-full flex justify-center items-center">
              {skill.svg}
            </div>
            <p className="text-[#111827]">{skill.text}</p>
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
          disabled={userDetails.skillLevel === ""}
          onClick={() => {
            nextStep();
          }}
          className={`text-white cursor-pointer px-4 py-2 rounded-md ${
            userDetails.skillLevel === ""
              ? "bg-[#D3D3D3] cursor-not-allowed"
              : "bg-custom-gradient"
          }`}
        />
      </div>
    </div>
  );
};
export default Step2;
