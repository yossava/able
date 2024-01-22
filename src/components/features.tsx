export default function Features() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-heading mb-4 bg-yellow-500  px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-white uppercase title-font">
            Why choose us?
          </h2>
          <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            The Smarter Way to Exchange
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            Our secure online platform allows you to exchange currency anytime,
            anywhere. You can trust us to deliver convenience and competitive
            prices.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/110441/good-idea.svg" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Trust Our Expertise
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Get Personalized Service
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/470489/exchange.svg" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Access Competitive Rates
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/358326/transaction.svg" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Enjoy Convenient Online Transactions
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
