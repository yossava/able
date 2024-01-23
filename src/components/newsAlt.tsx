import Title from "./Title";

export default function NewsAlt() {
  return (
    <div className="container mx-auto w-full overflow-hidden">
      <Title title="Latest News" />
      <ul className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4 p-3">
        <li className="mb-6 bg-gray-100 rounded-md hover:shadow-lg transition-all">
          <a href="#">
            <img
              src="https://www.westernunion.com/blog/wp-content/uploads/2023/12/Popular-Places-for-Canadians-to-Travel-During-the-Winter.jpg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </li>
        <li className="mb-6 bg-gray-100 rounded-md hover:shadow-lg transition-all">
          <a href="#">
            <img
              src="https://www.westernunion.com/blog/wp-content/uploads/2023/12/Popular-Places-for-Canadians-to-Travel-During-the-Winter.jpg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </li>
        <li className="mb-6 bg-gray-100 rounded-md hover:shadow-lg transition-all">
          <a href="#">
            <img
              src="https://www.westernunion.com/blog/wp-content/uploads/2023/12/Popular-Places-for-Canadians-to-Travel-During-the-Winter.jpg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </li>
        <li className="mb-6 bg-gray-100 rounded-md hover:shadow-lg transition-all">
          <a href="#">
            <img
              src="https://www.westernunion.com/blog/wp-content/uploads/2023/12/Popular-Places-for-Canadians-to-Travel-During-the-Winter.jpg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </li>
      </ul>
      <div className="px-3">
        <button
          type="button"
          className="bg-secondary p-4 rounded text-white flex justify-center space-x-2 items-center w-full md:w-[200px]"
        >
          <span>READ MORE</span>
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
  );
}
