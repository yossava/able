function SubscribeSection() {
  return (
    <div className="flex container mx-auto">
      <div className="w-2/3 pr-10">
        <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
        <p className="text-black">
          Get the latest news and updates from our team by subscribing to our
          newsletter.
        </p>
      </div>

      <div className="w-1/3">
        <form className="flex justify-start items-center">
          <input
            className="w-full border border-white p-3 rounded-lg border-r-0 rounded-tr-none rounded-br-none"
            type="email"
            placeholder="Enter your email"
          />

          <button
            className="bg-blue-800 border text-white  border-l-0 border-blue-800 py-3 px-6 rounded-lg border-r-0 rounded-tl-none rounded-bl-none"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscribeSection;
