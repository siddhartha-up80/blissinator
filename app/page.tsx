"use client";

import React, {useState} from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HeroSection from "@/components/heroVideo";
import Intro from "@/components/intro";

import { Dial } from "@/components/ui/SpeedDial";


export default function Home() {
	const [open, setOpen] = useState(false);

	return (
    <>
      <section className="">
        <HeroSection />
        <Intro />
        <div className="">
		  <Dial />
        </div>
      </section>
    </>
  );
}
