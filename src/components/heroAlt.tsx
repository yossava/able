import RateFormAlt from "./rateFormAlt";

export default function HeroAlt() {
  return (
    <div className="relative h-screen overflow-hidden w-full flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/globe-bg-3.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 right-0 bottom-0 left-0 overlay z-20"></div>

      <div className="relative flex justify-between items-center z-30 mx-auto container text-left">
        <div className="pr-40 w-8/12">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span className="text-yellow-500">Licensed</span> money exchange
          </h1>
          <p className="mt-4 text-xl text-gray-300 mb-5">
            We consolidate a group of premier licensed money exchange and
            remittance companies in Indonesia, to offer excellent service and
            competitive rates for a wide range of currencies.
          </p>
          <div className="flex justify-start items-center space-x-5">
            <button
              type="button"
              className="bg-yellow-500 p-2 px-5 rounded-full text-white flex justify-center space-x-2 items-center w-[200px]"
            >
              <span>Exchange Rate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <button
              type="button"
              className="bg-blue-800 p-2 px-5 rounded-full text-white flex justify-center space-x-2 items-center w-[200px]"
            >
              <span>Why Us?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <RateFormAlt />
        </div>
      </div>
    </div>
  );
}
