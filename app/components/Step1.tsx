import { UserDetails } from "./Form";
import Button from "./Button";
import Dividender from "./Dividender";
interface Step1Props {
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  nextStep:()=>void;
}
const Step1 = ({ userDetails, setUserDetails, nextStep }: Step1Props) => {
  const buttonHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      portfolio: { value: string };
    };

    setUserDetails({
      ...userDetails,
      fullName: target.name.value,
      email: target.email.value,
      phoneNumber: target.phone.value,
      github: target.portfolio.value,
    });
    
    nextStep();
  };
  return (
    <form onSubmit={buttonHandler} className="flex w-full flex-col gap-2 p-6">
      <div>
        <h2 className="text-xl text-gray-900 p-2">Personal Information</h2>
        <p className="text-gray-600 text-sm mb-6 p-2">
          Please provide your personal details so we can get to know you better.
        </p>
      </div>
      
      <div className="flex flex-wrap">
        <div className="p-2 w-full md:w-1/2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={userDetails.fullName}
            placeholder="John Doe"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="p-2 w-full md:w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={userDetails.email}
            placeholder="john.doe@example.com"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="p-2 w-full md:w-1/2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="(555) 555-1234"
            defaultValue={userDetails.phoneNumber}
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="p-2 w-full md:w-1/2">
          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-900">
            Portfolio/GitHub Link
          </label>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            defaultValue={userDetails.github}
            placeholder="https://github.com/johndoe"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
          />
        </div>
      </div>
      <Dividender />
      <div className="flex justify-end w-full mt-4">
        <Button
          text="Next Step"
          className="text-white px-4 py-2 rounded-md bg-custom-gradient"
        />
      </div>
    </form>
  );
};

export default Step1;
