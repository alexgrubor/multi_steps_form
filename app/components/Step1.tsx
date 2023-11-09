const Step1 = () => {
  return (
    <form className="flex flex-col gap-2 p-6">
      <h2 className="text-[1.5rem] text-[#111827]">Personal Information</h2>
      <p className="text-[#6B7280] text-[0.8rem] mb-[1.5rem]">
        Please provide your personal details so we can get to know you better.
      </p>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full sm:w-1/2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#111827]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-[0.625rem] placeholder-gray-400"
            style={{
              border: "1px solid #D1D5DB",
            }}
          />
        </div>
        <div className="p-2 w-full sm:w-1/2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#111827]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@example.com"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-[0.625rem] placeholder-gray-400"
            style={{
              border: "1px solid #D1D5DB",
            }}
          />
        </div>
        <div className="p-2 w-full sm:w-1/2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#111827]"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="(555) 555-1234"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-[0.625rem] placeholder-gray-400"
            style={{
              border: "1px solid #D1D5DB",
            }}
          />
        </div>
        <div className="p-2 w-full sm:w-1/2">
          <label
            htmlFor="portfolio"
            className="block text-sm font-medium text-[#111827]"
          >
            Portfolio/GitHub Link
          </label>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            placeholder="https://github.com/johndoe"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-[#FC6C4C] block w-full shadow-sm border-gray-300 rounded-[0.625rem] placeholder-gray-400"
            style={{
              border: "1px solid #D1D5DB",
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Step1;
