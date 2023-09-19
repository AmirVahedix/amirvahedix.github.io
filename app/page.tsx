"use client";

import About from "@/components/About/About";
import Landing from "@/components/Landing";
// import About from "@/Sections/Index/About";
// import Skills from "@/Sections/Index/Skills";
// import Portfolio from "@/Sections/Index/Portfolio";
// import Certificates from "@/Sections/Index/Certificates";
// import Contact from "@/Sections/Index/Contact";

import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLElement>();
  const contactRef = useRef<HTMLElement>();

  return (
    <>
      <Landing
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      <About aboutRef={aboutRef} />

      {/* 


      <Skills skills={props.skills} otherSkills={props.otherSkills} />

      <Portfolio portfolioRef={portfolioRef} portfolios={props.portfolios} />

      <Certificates certificates={props.certificates} />

      <Contact contactRef={contactRef} settings={props.settings} /> */}
    </>
  );
}
