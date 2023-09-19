"use client";

import Landing from "@/components/Index/Landing";
// import About from "@/Sections/Index/About";
// import Skills from "@/Sections/Index/Skills";
// import Portfolio from "@/Sections/Index/Portfolio";
// import Certificates from "@/Sections/Index/Certificates";
// import Contact from "@/Sections/Index/Contact";

import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef<HTMLElement>();
  const portfolioRef = useRef<HTMLElement>();
  const contactRef = useRef<HTMLElement>();

  return (
    <>
      <Landing
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      {/* 

      <About aboutRef={aboutRef} settings={props.settings} />

      <Skills skills={props.skills} otherSkills={props.otherSkills} />

      <Portfolio portfolioRef={portfolioRef} portfolios={props.portfolios} />

      <Certificates certificates={props.certificates} />

      <Contact contactRef={contactRef} settings={props.settings} /> */}
    </>
  );
}
