import Link from "next/link";
import Image from "next/image";
import { Dial } from "@/components/ui/SpeedDial";

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
                <Image
                  src="https://source.unsplash.com/random?girl,woman,cute=2"
                  alt="image"
                  loading="lazy"
                  height="300"
                  width="300"
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
        <section className="light: body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 light:">
                OUR FOUNDERS
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We are expanding our experience by building a counseling
                platform that enables people to resolve issues efficiently.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center object-cover object-center">
                  <Image
                    height="300"
                    width="300"
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://source.unsplash.com/random?girl,portrait,cute=3"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg light:">
                      Siddhartha Singh
                    </h2>
                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                    <p className="mb-4">
                      Final Year Student at VIT Bhopal University
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
                <div className="h-full flex flex-col items-center text-center object-cover object-center">
                  <Image
                    alt="team"
                    height="300"
                    width="300"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://source.unsplash.com/random?girl,portrait,cute=4"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg light:">
                      Siddhartha Singh
                    </h2>
                    <h3 className="text-gray-500 mb-3">Back-End Developer</h3>
                    <p className="mb-4">
                      Final Year Student at VIT Bhopal University
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

      {/* our story  */}
      <>
        {/* component */}
        <div
          className="flex items-center md:px-12 px-5 text-white"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/random?girl,woman,cute=4)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <section className="bg-cover bg-center py-24 w-full">
            <div className="container mx-auto text-left dark:text-white">
              <div className="flex items-center justify-end mb-5 flex-col md:flex-row ">
                <div className="md:w-[40vw] bg-purple-900 dark:text-white p-8 px-10 rounded-xl md:mr-10">
                  <h1 className="text-4xl font-medium mb-6">Our Story</h1>
                  <p className="text-medium ">
                    After 4 years of self suffering, we are expanding our
                    experience by building a counseling platform that enables
                    people to resolve issues efficiently. Not all issues can be
                    resolved through ignorance, especially when they have a long
                    history, for example rejections. A short-term counselling
                    can resolve these issues by helping you uncover matters that
                    impact your mental health and find methods to help you cope
                    and build resilience.
                  </p>{" "}
                  <p className="text-medium mt-5">
                    On this platform, we help providing method to connect
                    counsellers with those with a history in suffering from
                    mental illness before and fight back, girl rejections and
                    social shyness or an student suffering from a placement
                    rejections, those who are recovered from all of these will
                    help you to rise.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
      {/* our story  */}

      {/* our suffering story */}
      <>
        <section className=" body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
                GET INSPIRATON BY US
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font ">
                Our Sufferings and how we inspire others
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-purple-100 dark:bg-purple-900 p-8 flex-col shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                      <svg
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm192 112c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-16 104c0-30.9 25.1-56 56-56s56 25.1 56 56v102.1c0 36.4-29.5 65.9-65.9 65.9-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9l41.2 41.3V248z" />
                      </svg>
                    </div>
                    <h2 className=" text-lg title-font font-medium ">
                      Experts
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-center">
                      Provide quality mental health services and support by
                      carefully vetting and selecting a team of experts
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-purple-100  dark:bg-purple-900 p-8 flex-col shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                      <svg
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm192 112c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-16 104c0-30.9 25.1-56 56-56s56 25.1 56 56v102.1c0 36.4-29.5 65.9-65.9 65.9-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9l41.2 41.3V248z" />
                      </svg>
                    </div>
                    <h2 className=" text-lg title-font font-medium">
                      The Rejections
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-center">
                      Respond and treat every individual with respect and
                      dignity, while empowering them to have their own voice and
                      encouraging them to participate actively in caring for
                      their own mental peace
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-purple-100  dark:bg-purple-900 p-8 flex-col shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                      <svg
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm192 112c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-16 104c0-30.9 25.1-56 56-56s56 25.1 56 56v102.1c0 36.4-29.5 65.9-65.9 65.9-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9l41.2 41.3V248z" />
                      </svg>
                    </div>
                    <h2 className=" text-lg title-font font-medium">People</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-center">
                      Continually learning, researching and creating more
                      efficient methods to reach and serve the community
                      optimally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      {/* our suffering story */}

      {/* footer banner */}
      <>
        <div className="p-6 py-12  dark:bg-purple-900 text-white bg-purple-700">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-4xl tracki font-bold">
                Ask Us Any Question !
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>
                  View <span className="font-bold text-lg">QnA</span> section or
                  use our <span className="font-bold text-lg">ChatBot</span>
                </span>
              </div>
              <Link
                href="/faqs"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md block dark:bg-gray-50 bg-white text-purple-900 dark:border-gray-400 shadow-lg hover:bg-purple-400 hover:text-white"
              >
                Ask Us Now
              </Link>
            </div>
          </div>
        </div>
      </>
      {/* footer banner */}
      <div className="">
        <Dial />
      </div>
    </div>
  );
}
