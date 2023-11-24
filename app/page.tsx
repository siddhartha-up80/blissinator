// "use client";

import React from "react";
import HeroSection from "@/components/heroVideo";
import Intro from "@/components/intro";

import { Dial } from "@/components/ui/SpeedDial";


export default function Home() {
	

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
