import MultiStepFormContainer from "./components/MultiStepFormContainer";
export default function Home() {
  return (
    <main className="bg-[#F3F3E3] h-screen flex flex-col gap-3 items-center justify-center">
      <h1 className="text-[#111827] text-[2rem] w-[35rem]">Join our Community of Developers</h1>
      <p className="text-[#111827] text-xl text-center w-[35rem]">
        To join our community and participate in frontend challenges. Please
        fill out the following form.
      </p>
      <MultiStepFormContainer/>
    </main>
  );
}
