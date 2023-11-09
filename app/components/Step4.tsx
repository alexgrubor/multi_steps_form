const Step4 = () => {
  return (
    <div className="w-[600px] my-4 mx-auto">
      <h2 className="text-[1.5rem] text-[#111827]">Review and Confirm</h2>
      <p className="text-[#6B7280] text-[0.8rem] mb-[1.5rem]">
        Please review your information to make sure everything is accurate.{" "}
      </p>
      <div className="flex flex-wrap justify-start gap-4">
  <div className="flex w-44 h-[4.3rem] p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
    <p className="text-[#4B5563] text-[0.75rem]">Full Name</p>
    <p className="text-[#111827] text-[0.75rem]">John Doe</p>
  </div>
  <div className="flex w-44  p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
    <p className="text-[#4B5563] text-[0.75rem]">Email Address</p>
    <p className="text-[#111827] text-[0.75rem]">
        john@example.com
    </p>
  </div>
  <div className="flex w-44 p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
    <p className="text-[#4B5563] text-[0.75rem]">Phone Number</p>
    <p className="text-[#111827] text-[0.75rem]">+1 (234) 567-8910</p>
  </div>
  <div className="flex w-44 h-[4.3rem] p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
    <p className="text-[#4B5563] text-[0.75rem]">Portfolio/GitHub Link</p>
    <p className="text-[#111827] text-[0.75rem]">github.com/rishipurwar1</p>
  </div>
  <div className="flex w-44 p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
    <p className="text-[#4B5563] text-[0.75rem]">Skill Level</p>
    <p className="text-[#111827] text-[0.75rem]">Intermediate</p>
  </div>
  <div className="flex w-44  p-4 flex-col items-start space-y-0.5 shrink-0 rounded-lg bg-gray-200 bg-opacity-50">
    <p className="text-[#4B5563] text-[0.75rem]">Challenge Preference</p>
    <p className="text-[#111827] text-[0.75rem]">HTML/CSS/JS</p>
  </div>
</div>




    </div>
  );
};
export default Step4;
