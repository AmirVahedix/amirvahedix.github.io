"use client";

import About from "@/components/About/About";
import Landing from "@/components/Landing";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
// import About from "@/Sections/Index/About";
// import Skills from "@/Sections/Index/Skills";
// import Portfolio from "@/Sections/Index/Portfolio";
// import Certificates from "@/Sections/Index/Certificates";
// import Contact from "@/Sections/Index/Contact";

import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Landing
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      <About aboutRef={aboutRef} />

      <Skills />

      <Portfolio portfolioRef={portfolioRef} />

      {/* 

      <Certificates certificates={props.certificates} />

      <Contact contactRef={contactRef} settings={props.settings} /> */}
    </>
  );
}
