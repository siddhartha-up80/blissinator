"use client"

import { Dial } from "@/components/ui/SpeedDial";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Handle successful submission, e.g., show a success message or redirect
        console.log("Form submitted successfully!");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {/* contact section */}
      <>
        <section className="text-gray-800 body-font relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-purple-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?q=Bhopal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ filter: "purplescale(1) contrast(1.2) opacity(0.4)" }}
              />
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-purple-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Stay tuned for official offline contact center
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-purple-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-purple-500 leading-relaxed">
                    siddhartha.singh.work@gmail.com
                  </a>
                  {/* <h2 className="title-font font-semibold text-purple-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p> */}
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            >
              <h2 className="text-purple-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-800">
                Contact Us and we will hear your feedback
              </p>
              <div className="relative mb-4">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <Textarea
                  isRequired
                  label="Message"
                  placeholder="Enter your message"
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white h-32 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <Button
                type="submit"
                className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                Send Now
              </Button>
              <p className="text-xs text-purple-500 mt-3">
                Send your message now!
              </p>
            </form>
          </div>
        </section>
      </>

      {/* contact section */}
      <div className="">
        <Dial />
      </div>
    </div>
  );
};

export default Contact;
