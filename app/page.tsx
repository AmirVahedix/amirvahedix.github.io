"use client";

import { useRef } from "react";

import About from "@/components/About/About";
import Landing from "@/components/Landing";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Certificates from "@/components/Certificates/Certificates";

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

      <Certificates />

      {/* 

      <Contact contactRef={contactRef} settings={props.settings} /> */}
    </>
  );
}
