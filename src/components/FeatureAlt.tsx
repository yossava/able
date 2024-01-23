import Title from "./Title";

export default function FeaturesAlt() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="lg:text-center">
          <Title title="The Smarter Way to Exchange" />
        </div>

        <div className="mt-10">
          <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            <div className="relative flex flex-col items-center p-5 bg-white shadow-md rounded hover:shadow-lg transition-all group">
              <img
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/110441/good-idea.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white"></div>
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Trust Our Expertise
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative flex flex-col items-center p-5 bg-white shadow-md rounded hover:shadow-lg transition-all group">
              <img
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/503138/webpack.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white"></div>
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Get Personalized Service
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative flex flex-col items-center p-5 bg-white shadow-md rounded hover:shadow-lg transition-all group">
              <img
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/470489/exchange.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white"></div>
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Access Competitive Rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative flex flex-col items-center p-5 bg-white shadow-md rounded hover:shadow-lg transition-all group">
              <img
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/470489/exchange.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white">
                  ≈
                </div>
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Enjoy Convenient Online Transactions
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative flex flex-col items-center p-5 bg-white shadow-md rounded hover:shadow-lg transition-all group">
              <img
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/503138/webpack.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white"></div>
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Get Personalized Service
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative flex flex-col items-center p-5 bg-white shadow-md rounded hover:shadow-lg transition-all group">
              <img
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/503138/webpack.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white"></div>
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Get Personalized Service
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
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
