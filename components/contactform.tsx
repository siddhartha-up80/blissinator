// @ts-nocheck
"use client";

import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

export default function ContactForm() {
  const [selected, setSelected] = React.useState("login");
  const [file, setFile] = React.useState();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    gender: "",
    filename: "",
  });
  const [formData2, setFormData2] = React.useState({
    name: "",
    email: "",
    phone: "",
    timings: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) formData.filename = file.name;
    //  console.log(file)
    // console.log(formData);
    try {
      if (file) formData.filename = file.name;

      if (file) {
        const data = new FormData();
        data.set("file", file);

        const result = await fetch("/api/fileupload", {
          method: "POST",
          body: data,
        });
        if (result.status === 201) {
          // Handle successful submission, e.g., show a success message or redirect
          console.log("File submitted successfully!");
        }
      }

      const response = await fetch("/api/session", {
        //
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData2),
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

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  };

  const AllSexualAndGenderIdentities = [
    // LGBTQIA+
    {
      label: "Male",
      value: "male",
      description:
        "A man who is romantically and/or sexually attracted to other women.",
      type: "Sexual Orientation",
    },
    {
      label: "Female",
      value: "female",
      description:
        "A woman who is romantically and/or sexually attracted to other men.",
      type: "Sexual Orientation",
    },
    {
      label: "BTS",
      value: "bts",
      description:
        "A woman/man who is romantically and/or sexually attracted to BTS.",
      type: "Sexual Orientation",
    },
    {
      label: "Lesbian",
      value: "lesbian",
      description:
        "A woman who is romantically and/or sexually attracted to other women.",
      type: "Sexual Orientation",
    },
    {
      label: "Gay",
      value: "gay",
      description:
        "A person who is romantically and/or sexually attracted to people of the same sex.",
      type: "Sexual Orientation",
    },
    {
      label: "Bisexual",
      value: "bisexual",
      description:
        "A person who is romantically and/or sexually attracted to people of more than one gender.",
      type: "Sexual Orientation",
    },
    {
      label: "Transgender",
      value: "transgender",
      description:
        "A person whose gender identity differs from the sex assigned at birth.",
      type: "Gender Identity",
    },
    {
      label: "Queer",
      value: "queer",
      description:
        "An umbrella term that can encompass a range of sexual orientations and gender identities.",
      type: "Sexual Orientation/Gender Identity",
    },
    {
      label: "Intersex",
      value: "intersex",
      description:
        "A person born with physical and/or genetic characteristics that do not fit typical definitions of male or female.",
      type: "Sex Characteristics",
    },
    {
      label: "Asexual",
      value: "asexual",
      description:
        "A person who experiences little or no sexual attraction to others.",
      type: "Sexual Orientation",
    },
    {
      label: "Pansexual",
      value: "pansexual",
      description:
        "A person who is romantically and/or sexually attracted to people regardless of their gender or gender identity.",
      type: "Sexual Orientation",
    },
    {
      label: "Non-binary",
      value: "nonbinary",
      description:
        "A person whose gender identity doesn't fit within the traditional binary concept of male or female.",
      type: "Gender Identity",
    },
    {
      label: "Two-Spirit",
      value: "two-spirit",
      description:
        "A term used by some Indigenous cultures to describe a person who embodies both masculine and feminine qualities.",
      type: "Gender Identity",
    },
    {
      label: "Genderqueer",
      value: "genderqueer",
      description: "A person whose gender identity is queer or non-normative.",
      type: "Gender Identity",
    },
    {
      label: "Questioning",
      value: "questioning",
      description:
        "A person who is exploring or questioning their sexual orientation or gender identity.",
      type: "Sexual Orientation/Gender Identity",
    },

    // Other Sexual Orientations
    {
      label: "Heterosexual",
      value: "heterosexual",
      description:
        "A person who is romantically and/or sexually attracted to people of the opposite sex.",
      type: "Sexual Orientation",
    },
    {
      label: "Demisexual",
      value: "demisexual",
      description:
        "A person who experiences sexual attraction only after forming a strong emotional connection.",
      type: "Sexual Orientation",
    },
    {
      label: "Polyamorous",
      value: "polyamorous",
      description:
        "A person who engages in or is open to having multiple consensual romantic or sexual relationships.",
      type: "Relationship Style",
    },
    {
      label: "Aromantic",
      value: "aromantic",
      description:
        "A person who experiences little or no romantic attraction to others.",
      type: "Sexual Orientation",
    },

    // Other Gender Identities
    {
      label: "Cisgender",
      value: "cisgender",
      description:
        "A person whose gender identity aligns with the sex assigned at birth.",
      type: "Gender Identity",
    },
    {
      label: "Agender",
      value: "agender",
      description:
        "A person who identifies as having no gender or being gender-neutral.",
      type: "Gender Identity",
    },
    {
      label: "Bigender",
      value: "bigender",
      description:
        "A person who identifies as having two gender identities, either simultaneously or at different times.",
      type: "Gender Identity",
    },
  ];

  return (
    <div className="flex flex-col w-full h-[85vh] dark:text-white">
      <Card className="max-w-full w-[340px] h-[85vh]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="call" title="Get Call Support">
              <form
                className="flex flex-col gap-4 h-max dark:text-white"
                onSubmit={handleSubmit2}
              >
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  value={formData2.name}
                  onChange={handleInputChange2}
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={formData2.email}
                  onChange={handleInputChange2}
                />
                <Input
                  isRequired
                  label="Phone"
                  placeholder="Enter your Phone Number"
                  type="text"
                  name="phone"
                  value={formData2.phone}
                  onChange={handleInputChange2}
                />
                <Input
                  isRequired
                  label="Timings"
                  placeholder="Enter your timings"
                  type="text"
                  name="timings"
                  value={formData2.timings}
                  onChange={handleInputChange2}
                />
                <Select
                  label="Select a gender identity"
                  className="max-w-xs"
                  name="gender"
                  value={formData2.gender}
                  onChange={handleInputChange2}
                >
                  {AllSexualAndGenderIdentities.map((identity) => (
                    <SelectItem key={identity.value} value={identity.value}>
                      {identity.label}
                    </SelectItem>
                  ))}
                </Select>
                <p className="text-center text-small">
                  Discuss your concern with us
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="secondary" type="submit">
                    Bliss Up
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="book" title="Book Session">
              <form
                className="flex flex-col gap-4 h-max"
                onSubmit={handleSubmit}
              >
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  label="Phone"
                  placeholder="Enter your Phone Number"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  label="Concern"
                  placeholder="Enter your Concern"
                  type="text"
                  name="concern"
                  value={formData.concern}
                  onChange={handleInputChange}
                />
                <Select
                  label="Select a gender identity"
                  className="max-w-xs"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  {AllSexualAndGenderIdentities.map((identity) => (
                    <SelectItem key={identity.value} value={identity.value}>
                      {identity.label}
                    </SelectItem>
                  ))}
                </Select>

                <Input
                  label="Upload your previous Medical Record"
                  placeholder="Upload File"
                  type="file"
                  name="file"
                  onChange={(e) => {
                    setFile(e.target.files?.[0]);
                  }}
                />

                <p className="text-center text-small">
                  Discuss your concern with us
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="secondary" type="submit">
                    Bliss Up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
