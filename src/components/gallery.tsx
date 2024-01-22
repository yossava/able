export default function Gallery() {
  return (
    <div className="flex justify-center items-center text-white w-full">
      <div className="text-center container w-full">
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">
          Gallery
        </p>

        <p className="w-[500px] mx-auto mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          magnam, repudiandae laborum illo corrupti temporibus
        </p>
        <div className="grid grid-cols-3 gap-5 mt-20 container mx-auto">
          <div className="p-2 bg-white-tran rounded-lg">
            <div
              className="w-full h-40 bg-no-repeat rounded-lg bg-center"
              style={{
                background: "url(/gallery/1.webp)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white font-bold pt-2">PIK</div>
          </div>
          <div className="p-2 bg-white-tran rounded-lg">
            <div
              className="w-full h-40 bg-no-repeat rounded-lg bg-center"
              style={{
                background: "url(/gallery/2.webp)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white font-bold pt-2">PIK</div>
          </div>
          <div className="p-2 bg-white-tran rounded-lg">
            <div
              className="w-full h-40 bg-no-repeat rounded-lg bg-center"
              style={{
                background: "url(/gallery/3.webp)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white font-bold pt-2">PIK</div>
          </div>
          <div className="p-2 bg-white-tran rounded-lg">
            <div
              className="w-full h-40 bg-no-repeat rounded-lg bg-center"
              style={{
                background: "url(/gallery/4.webp)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white font-bold pt-2">Central Park Mall</div>
          </div>
          <div className="p-2 bg-white-tran rounded-lg">
            <div
              className="w-full h-40 bg-no-repeat rounded-lg bg-center"
              style={{
                background: "url(/gallery/5.webp)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white font-bold pt-2">Central Park Mall</div>
          </div>
          <div className="p-2 bg-white-tran rounded-lg">
            <div
              className="w-full h-40 bg-no-repeat rounded-lg bg-center"
              style={{
                background: "url(/gallery/6.webp)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white font-bold pt-2">Central Park Mall</div>
          </div>
        </div>
      </div>
    </div>
  );
}
