'use client'

import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import TabsComponent from '@/components/tabs/tabs';
import { Chip } from "@nextui-org/react";
import ContactForm from '@/components/contactform';

const Page = () => {

const topics = [
  "Depression",
  "Anxiety",
  "Relationship issues",
  "Grief",
  "Alcohol/Substance addiction",
  "Post-Traumatic stress",
  "Study-related concerns",
  "Eating/Sleep-related issues",
  "Job/Career concerns",
];

const counselingServices = [
  {
    title: "Individual Counseling",
    description:
      "One-on-one counseling to address your personal mental health needs.",
  },
  {
    title: "Relationship Counseling",
    description:
      "Counseling to improve communication and resolve issues in your relationships.",
  },
  {
    title: "Addiction Counseling",
    description:
      "Support and guidance to overcome alcohol or substance addiction.",
  },
  {
    title: "Trauma Counseling",
    description: "Help to cope with and recover from traumatic experiences.",
  },
];

  return (
    <div className="max-w-[100vw]">
      <>
        {/* component */}
        <div className=" bg-purple-800 dark:bg-purple-900 flex items-center md:px-12 px-5 text-white">
          <section className="bg-cover bg-center py-24 w-full">
            <div className="container mx-auto text-left dark:text-white">
              <div className="flex items-center mb-5 flex-col md:flex-row">
                <div className="md:w-1/2 ">
                  <h1 className="text-5xl font-medium mb-6">
                    Focus on your mental health first
                  </h1>
                  <p className="text-xl mb-6">
                    When you show the courage to heal and grow, everyone around
                    you benefits
                  </p>
                  <p className="text-lg mb-12">
                    Get our consultation through video/telephone to provide the
                    necessary support in improving your mental wellbeing Regular
                    consultation with experts of your choice
                  </p>
                  <a
                    href="#"
                    className="bg-purple-500 text-white py-4 px-12 rounded-lg hover:bg-purple-600"
                  >
                    Demo
                  </a>
                </div>
                <div className="md:w-1/2 md:pl-16 py-10">
                  <img
                    src="https://source.unsplash.com/random?girl,woman,cute"
                    className="h-[50vh] w-full object-cover rounded-xl"
                    alt="Layout Image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
      {/* steps component */}
      <>
        <div className="flex justify-center items-center ">
          <div className="md:max-w-[70vw] max-w-[90vw] bg-purple-50 py-5 relative -top-16 rounded-lg shadow-md dark:text-black dark:bg-gray-700">
            <div className="flex md:flex-row flex-col">
              <div className="md:w-1/3 text-center px-6">
                <div className="dark:bg-gray-300 bg-purple-300 rounded-lg flex items-center justify-center border border-gray-200">
                  <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" />
                    </svg>
                  </div>
                  <div className="w-2/3 dark:bg-gray-200 bg-purple-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                    <h2 className="font-bold text-sm">Enter Info</h2>
                    <p className="text-xs text-gray-600">
                      Just your personal information
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="rotate-90 md:rotate-0 my-2"
                >
                  <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
                </svg>
              </div>
              <div className="md:w-1/3 text-center px-6">
                <div className="dark:bg-gray-300 bg-purple-300 rounded-lg flex items-center justify-center border border-gray-200">
                  <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                    <svg
                      width={24}
                      height={24}
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z" />
                    </svg>
                  </div>
                  <div className="w-2/3 dark:bg-gray-200 bg-purple-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                    <h2 className="font-bold text-sm">Contact Info</h2>
                    <p className="text-xs text-gray-600">
                      Anything platform you want to connect
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="rotate-90 md:rotate-0 my-2"
                >
                  <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
                </svg>
              </div>
              <div className="md:w-1/3 text-center px-6">
                <div className="dark:bg-gray-300 bg-purple-300 rounded-lg flex items-center justify-center border border-gray-200">
                  <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                    <svg
                      width={24}
                      height={24}
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                    </svg>
                  </div>
                  <div className="w-2/3 dark:bg-gray-200 bg-purple-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                    <h2 className="font-bold text-sm">Confirmation</h2>
                    <p className="text-xs text-gray-600">Finish it!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* steps component */}

      {/* counselling method */}

      <>
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Chat face-to-face with our Mental Health Practitioners
              </h3>
              <p className="mt-3 text-lg font-semibold dark:text-gray-400">
                Opening up about your mental health is the first step towards
                recovery.
              </p>
              <p className="mt-3 text-lg font-semibold dark:text-gray-400">
                When you show the courage to heal and grow, everyone around you
                benefits
              </p>
              <p className="mt-3 text-lg dark:text-gray-400">
                Get our consultation through video/telephone to provide the
                necessary support in improving your mental wellbeing Regular
                consultation with experts of your choice
              </p>
            </div>
            <Card
              isPressable
              className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 md:w-[30vw] md:mx-20"
            >
              <Image
                src="https://source.unsplash.com/random/900x700/?student=2"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </Card>
          </div>
        </div>
      </>
      {/* counselling method */}

      {/* tabs topics component */}
      <>
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-1">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Meet our network of mental health experts
              </h3>

              <p className="mt-3 text-lg font-semibold dark:text-gray-400">
                We are associated with a highly qualified team of some of the
                best names in Psychology who come with years of experience in
                providing excellent care.
              </p>
              <p className="mt-3 text-lg dark:text-gray-400">
                Our consultants cover a range of specific areas to meet your
                concerns
              </p>
              <div className="max-w-[30vw] mt-5">
                <ul className="flex items-center flew-row flex-wrap gap-3">
                  {topics.map((topic, index) => (
                    <li key={index}>
                      <Chip color="secondary" variant="shadow">
                        {topic}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-start-1 md:w-[30vw] md:mx-20">
              <TabsComponent />
            </div>
          </div>
        </div>
      </>
      {/* tabs topics component */}

      {/* book session */}
      <>
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10 text-center dark:text-gray-50">
                Get your counselling done with us
              </h3>

              <div className="grid grid-cols-2 gap-y-10 gap-x-6 ">
                {counselingServices.map((service, index) => (
                  <Card key={index}>
                    <CardBody>
                      <h2 className="text-xl font-bold">{service.title}</h2>
                      <ul className=''>
                        {" "}
                        <li className="text-gray-600 list-outside list-disc ml-6">
                          {service.description}
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 md:w-[30vw] md:mx-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </>
      {/* book session */}
    </div>
  );
}

export default Page