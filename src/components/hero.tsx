import ExchangeTable from "./exchangeTable";

export default function Hero() {
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
        <div className="pr-40">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span className="text-yellow-500">Licensed</span> money exchange
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            We consolidate a group of premier licensed money exchange and
            remittance companies in Indonesia, to offer excellent service and
            competitive rates for a wide range of currencies.
          </p>
        </div>
        <div className="">
          <ExchangeTable />
        </div>
      </div>
    </div>
  );
}
