export default function Contact() {
  return (
    <>
      <div
        className="bg-[url(/blog-placeholder.jpeg)] bg-no-repeat bg-center
         min-h-[300px] py-20 relative flex justify-center flex-col z-[1]
          before:absolute before:left-0 before:top-0 before:w-full 
          before:h-full before:bg-black/70 before:z-[-1] before:opacity-[0.7] bg-cover"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="text-center">
                <h2 className="text-3xl text-white mb-2">Contact</h2>
                <ul>
                  <li
                    className="inline-block px-[5px] text-xl relative font-heading-font sm:text-[18px]
                                after:content-['/'] after:relative after:left-[7px] after:text-white"
                  >
                    <a
                      href="/"
                      className="text-white text-[20px] transition-all hover:text-secondary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="inline-block px-[5px] text-[20px] relative font-heading-font sm:text-[18px] ">
                    <span className="text-tertiary">Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="office-location py-section bg-white p-3 pt-10 lg:pt-20 text-gray-700">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="single-office">
              <div className="bg-[#f4f4f4] rounded-xl p-8">
                <figure className="text-center relative group">
                  <img src="/cpm.webp" />{" "}
                  <figcaption className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-medium border-2 border-white px-10 min-w-max py-3 rounded-lg group-hover:bg-primary group-hover:text-white">
                    Central Park Mall
                  </figcaption>
                </figure>
              </div>{" "}
              <div className="border-2 border-[#f4f4f4] rounded-xl p-8 mt-8">
                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>{" "}
                    <a href="#" className="hover:text-primary">
                      +62 1234 5677
                    </a>
                  </div>{" "}
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                      </svg>
                    </div>{" "}
                    <a
                      href="mailto:example@mail.com"
                      className="hover:text-primary"
                    >
                      example@mail.com
                    </a>
                  </div>{" "}
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>{" "}
                    <p>
                      CENTRAL PARK MALL LT LG-205C, Letjen S. Parman No.28,
                      Jakarta 11470
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="single-office">
              <div className="bg-[#f4f4f4] rounded-xl p-8">
                <figure className="text-center relative group">
                  <img src="/pik.webp" />{" "}
                  <figcaption className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-medium border-2 border-white px-10 min-w-max py-3 rounded-lg group-hover:bg-primary group-hover:text-white">
                    PIK
                  </figcaption>
                </figure>
              </div>{" "}
              <div className="border-2 border-[#f4f4f4] rounded-xl p-8 mt-8">
                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>{" "}
                    <a href="#" className="hover:text-primary">
                      +62 7896 999
                    </a>
                  </div>{" "}
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                      </svg>
                    </div>{" "}
                    <a
                      href="mailto:example@mail.com"
                      className="hover:text-primary"
                    >
                      example@mail.com
                    </a>
                  </div>{" "}
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>{" "}
                    <p>
                      Jalan The Golf Island Boulevard, Ruko The Beach Blok A
                      Nomor 19, Provinsi DKI Jakarta
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="contact-map pb-section bg-white px-3 pb-20 pt-10 text-gray-700">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-x-8">
            <div className="contact-form lg:pr-10">
              <h2 className="mb-7 text-2xl md:text-3xl -mt-2">Get in Touch</h2>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Name*"
                  className="bg-[#f4f4f4] w-full rounded-lg focus:outline outline-primary outline-1 font-medium px-5 py-4"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="bg-[#f4f4f4] w-full rounded-lg focus:outline outline-primary outline-1 font-medium px-5 py-4"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-[#f4f4f4] w-full rounded-lg focus:outline outline-primary outline-1 font-medium px-5 py-4"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-[#f4f4f4] w-full rounded-lg focus:outline outline-primary outline-1 font-medium px-5 py-4 h-min-20"
                ></textarea>
                <button className="bg-primary w-full px-5 py-4 font-medium rounded-lg hover:text-white hover:bg-primary-dark transition-all text-white">
                  {" "}
                  Send Message{" "}
                </button>
              </form>
            </div>
            <div className="google-map mt-10 md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=+++Photo+Photo+Photo+Photo+Photo+Photo+Photo+Photo+Photo++More+photos+Street+View+PT+Able+Exchange+(Money+Changer+/+jasa+penukaran+uang+asing)+di+cp+mall&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                className="w-full h-[300px] md:h-[550px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
