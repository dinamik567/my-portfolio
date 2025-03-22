export function MainPage() {
  return (
    <div className="w-[87%] h-screen bg-dark_prime text-white">
      <div className="flex justify-between items-start gap-20 w-10/12 mx-auto mt-44">
        <div className="pt-4 px-4">
          <h1 className="text-xl font-bold mb-6">
            Hello, my name is{" "}
            <span className="font-normal text-red-700 italic">
              Vladislav Irhin
            </span>
          </h1>
          <h2 className="text-lg font-bold mb-5">
            I`m a{" "}
            <span className="text-red-700 pl-1 relative before:absolute before:left-[-1%] before:border-red-700 before:border-l-4 before:bg-dark_prime before:h-full before:w-full before:animate-runline">
              Frontend Developer
            </span>
          </h2>
          <p className="text-slate-300 mb-14">
            I`m a Frontend Developer extensive experience for over 10 years. My
            experience is to create and website design, graphic design, and more
          </p>
          <button className="bg-red-700 py-2 px-8 rounded-xl">
            More About me
          </button>
          <p className="mt-28 font-bold text-3xl leading-10">
            <span className="block mb-2">Light & Dark Mode</span>
            <span className="block">Theme Colors</span>
          </p>
        </div>
        <div className="relative max-w-xs px-7 py-14 flex justify-center after:absolute after:bottom-[95%] after:right-[95%] bg-black after:w-16 after:h-16 after:border-l-8 after:border-t-8 after:border-red-700 before:absolute before:top-[95%] before:left-[95%] before:w-16 before:h-16 before:border-r-8 before:border-b-8 before:border-red-700 ">
          <img className="" src="./images/cat.coder.jpg" alt="cat coder" />
        </div>
      </div>
    </div>
  );
}
