const Step3 = () => {
  return (
    <div className="w-[600px] my-4 mx-auto">
      <h2 className="text-[1.5rem] text-[#111827]">Challenge Preference</h2>
      <p className="text-[#6B7280] text-[0.8rem] mb-[1.5rem]">
        Please tell us which frontend challenges you would like to participate in.
      </p>
      <div className="flex flex-wrap justify-between py-4 my-4">
        <div className="p-4 w-full sm:w-[48%] rounded-[0.625rem] mb-3" style={{ border: '1px solid #D1D5DB' }}>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#FC6C4C]" />
            <span className="text-[#111827]">HTML/CSS/JS</span>
          </label>
        </div>

        <div className="p-4 w-full sm:w-[48%] rounded-[0.625rem] mb-3" style={{ border: '1px solid #D1D5DB' }}>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#FC6C4C]"  />
            <span className="text-[#111827]">ReactJs</span>
          </label>
        </div>

        <div className="p-4 w-full sm:w-[48%] rounded-[0.625rem] mb-3" style={{ border: '1px solid #D1D5DB' }}>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#FC6C4C]" />
            <span className="text-[#111827]">AngularJs</span>
          </label>
        </div>

        <div className="p-4 w-full sm:w-[48%] rounded-[0.625rem] mb-3" style={{ border: '1px solid #D1D5DB' }}>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#FC6C4C]" />
            <span className="text-[#111827]">Vue.js</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step3;
