export default function AboutPage() {
  return (
    <div>
      <>
        {/* image component */}
        <div
          className="flex items-center w-screen h-[50vh] bg-cover bg-center md:px-12 px-5 text-white"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/random?girl,woman,cute=1)",
          }}
        ></div>
        {/* image component */}
      </>

      {/* about us  */}
      <>
        {/* component */}
        <div className="py-16 ">
          <div className="container m-auto px-6  md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="https://source.unsplash.com/random?girl,woman,cute=2"
                  alt="image"
                  loading="lazy"
                  width=""
                  className="object-cover rounded-lg shadow-2xl max-h-[40vh] w-[40vw]"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl font-bold md:text-4xl ">
                  <span className="border-b-purple-700 border-b-4">
                    About Us
                  </span>
                </h2>
                <p className="mt-6 ">
                  Blissinator Foundation is a non-profit project that partners
                  with experts to help people thrive by providing counseling and
                  personal development.
                </p>
                <p className="mt-4 ">
                  {" "}
                  Blissinator Foundation is a mental health building platform.
                  Our personal project started for the first time in 2023 to
                  offer psychological counselling and crisis mediation to anyone
                  who is experiencing distress due to depression, trauma, mood
                  disorders, relationship issues, and mulitple rejections, to
                  name a few.
                </p>{" "}
                <p className="mt-4 ">
                  {" "}
                  Started as a personal resume project in 2023 and growing by
                  supporting those who need mental and emotional counselling, we
                  have facilitated 100+ conversations to date. Our emergency
                  mental health expert service will be expanding to accessible
                  by 24 hours a day, 365 days a year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* about us  */}

      {/* founders */}
      <>
        <section className="light:text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 light:text-gray-900">
                OUR FOUNDERS
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven&apos;t heard of them.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://source.unsplash.com/random?girl,portrait,cute=3"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg light:text-gray-900">
                      Siddhartha Singh
                    </h2>
                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://source.unsplash.com/random?girl,portrait,cute=4"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg light:text-gray-900">
                      Krapansh Srivastava
                    </h2>
                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      {/* founders */}
    </div>
  );
}
