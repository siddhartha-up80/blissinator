"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";


const Intro = () => {
  const list = [
    {
      title: "Online Counselling For College Students",
      img: "https://source.unsplash.com/random/900x700/?college=1",
      description:
        "Support for college students dealing with academic and personal challenges.",
    },
    {
      title: "Depression and Anxiety in College",
      img: "https://source.unsplash.com/random/900x700/?depression=1",
      description:
        "Manage depression and anxiety while navigating the challenges of college life.",
    },
    {
      title: "Relationship Counseling for College Couples",
      img: "https://source.unsplash.com/random/900x700/?relationship=1",
      description:
        "Improve relationships and communication in college couples.",
    },
    {
      title: "Dealing with Rejections",
      img: "https://source.unsplash.com/random/900x700/?rejection=1",
      description:
        "Counseling for coping with college rejections, including academic and placement rejections.",
    },
    {
      title: "Overcoming Academic Stress",
      img: "https://source.unsplash.com/random/900x700/?academic=1",
      description:
        "Strategies to overcome academic stress and excel in college.",
    },
    {
      title: "Coping with Girl Rejections",
      img: "https://source.unsplash.com/random/900x700/?rejection=girl",
      description:
        "Support for college students dealing with romantic rejections and relationship challenges.",
    },
    {
      title: "Placement and Career Counseling",
      img: "https://source.unsplash.com/random/900x700/?career=1",
      description:
        "Guidance for college students in career planning and handling placement challenges.",
    },
    {
      title: "Self-Discovery and Personal Growth",
      img: "https://source.unsplash.com/random/900x700/?growth=1",
      description:
        "Explore self-discovery and personal growth during your college journey.",
    },
  ];

  return (
    <div>
      <>
        {/* component */}
        <div
          id="services"
          className="section relative pt-5 pb-8 md:pt-5 md:pb-0 dark:text-white"
        >
          <div className="container xl:max-w-6xl mx-auto px-4">
            {/* Heading start */}
            <header className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="text-2xl leading-normal mb-2 font-bold text-black dark:text-white">
                Discover Online Counselling or Online Therapy by Experts
              </h2>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 60"
                style={{ margin: "0 auto", height: 35 }}
                xmlSpace="preserve"
              >
                <circle
                  cx="50.1"
                  cy="30.4"
                  r={5}
                  className="stroke-primary"
                  style={{
                    fill: "transparent",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                  }}
                />
                <line
                  x1="55.1"
                  y1="30.4"
                  x2={100}
                  y2="30.4"
                  className="stroke-primary"
                  style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                />
                <line
                  x1="45.1"
                  y1="30.4"
                  x2={0}
                  y2="30.4"
                  className="stroke-primary"
                  style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                />
              </svg>
              <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2 dark:text-white">
                Discover Expert Online Counselling and Therapy for Various
                Concerns
              </p>
            </header>
            {/* End heading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {list.map((item, index) => (
                <div key={index} className="mx-auto">
                  <div
                    className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp min-w-[30vw]"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <Card
                      isPressable
                      className="mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 md:min-h-[55vh] "
                    >
                      <CardBody>
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          alt={item.title}
                          className="w-full object-cover h-[30vh]"
                          src={item.img}
                        />

                        <div className="text-lg leading-normal mt-2 font-semibold flex justify-center items-center text-center dark:text-black">
                          {item.title}
                        </div>
                      </CardBody>
                      <CardFooter className="text-gray-500">
                        {item.description}
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
            {/* end row */}
          </div>
        </div>
      </>

      {/* features section */}
      <>
        <section className="dark:bg-purple-900 dark:text-gray-100">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
                Mental Health Counseling for Students and Everyone
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
                We provide professional counseling services to help you navigate
                the challenges of student life and beyond.
              </p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  Managing Academic Stress
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  We offer support for coping with the pressures of academic
                  life, helping you achieve balance and success in your studies.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900 dark:bg-purple-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Overcoming Anxiety and Stress
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Our counselors are here to help you manage anxiety and
                        stress effectively so you can focus on your well-being.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900 dark:bg-purple-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Relationship Counseling
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Our professional counselors provide guidance to improve
                        relationships and communication, both in personal and
                        academic life.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900 dark:bg-purple-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Coping with Rejections
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Our counselors are here to support you through academic
                        and personal rejections, helping you build resilience
                        and move forward.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card
                isPressable
                aria-hidden="true"
                className="mt-10 lg:mt-0 isPressable"
              >
                <Image
                  src="https://source.unsplash.com/random/900x700/?student"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </Card>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                    Personal Growth and Well-Being
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-400">
                    We are here to help you explore self-discovery, personal
                    growth, and overall well-being during your academic journey.
                  </p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900 dark:bg-purple-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          Building Self-Esteem and Confidence
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          Our counselors offer guidance to boost your
                          self-esteem and confidence, empowering you to thrive
                          in all aspects of life.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900 dark:bg-purple-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          Managing Grief and Loss
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          Our counselors provide support to help you cope with
                          grief and loss, offering a safe space for healing and
                          understanding.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900 dark:bg-purple-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          Addiction and Recovery Support
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          We are here to help you overcome addiction and start
                          your journey to recovery with understanding and care.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card
                  isPressable
                  className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                >
                  <Image
                    src="https://source.unsplash.com/random/900x700/?student=2"
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </>
      {/* features section */}

      <>
        {/* book now secion */}
        <div className="w-full   bg-purple-800 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
          <p className=" text-white">
            {" "}
            <span className="text-4xl font-medium">
              Still Confused ? Try us once !
            </span>{" "}
            <br />{" "}
            <span className="text-lg">Book your Consultation Today ! </span>
          </p>
          <Link href="/counselling">
            {" "}
            <Button
              fullWidth
              className="py-4 px-12 rounded-lg font-medium text-white shadow-xl  hover:bg-purple-200 hover:text-gray-800 duration-150  bg-purple-500"
            >
              Read More{" "}
            </Button>
          </Link>
        </div>
        {/* book now secion */}
      </>
    </div>
  );
};

export default Intro;
