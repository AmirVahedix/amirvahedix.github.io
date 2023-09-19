import React, { MutableRefObject, RefObject } from "react";
import Link from "next/link";
import { HiArrowSmDown } from "react-icons/hi";
import ProfileImage from "@/public/images/amirvahedix.jpg";
import Image from "next/image";

type Props = {
  aboutRef: RefObject<HTMLDivElement>;
  portfolioRef: MutableRefObject<HTMLElement | undefined>;
  contactRef: MutableRefObject<HTMLElement | undefined>;
};

export default function Landing({ aboutRef, portfolioRef, contactRef }: Props) {
  const scrollToAboutHandler = () => aboutRef.current?.scrollIntoView();
  const scrollToPortfolioHandler = () => portfolioRef.current?.scrollIntoView();
  const scrollToContactHandler = () => contactRef.current?.scrollIntoView();

  return (
    <div className="h-screen flex flex-col">
      <div className="h-full bg-yellow flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-3/4 h-full flex flex-col md:flex-row items-center justify-around">
          <div className="order-2 md:order-1 text-center md:mt-0 md:text-left">
            <span className="text-2xl font-thin">Hey it{"'"}s</span>
            <h1 className="font-extrabold text-6xl lg:text-7xl my-3">
              Amir Vahedi
            </h1>

            <h4 className="text-2xl lg:text-3xl font-light">
              Full Stack Developer
            </h4>
            <div className="mt-6">
              <Link
                href="/projects"
                className="text-white bg-black px-5 py-3 rounded mr-4"
                as="button"
              >
                My Projects
              </Link>
              <button
                onClick={scrollToContactHandler}
                className="text-black px-2 py-3"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="order-1 px-12 pt-8 md:order-2 lg:p-0">
            <Image
              className="w-96 rounded-full border-8 border-white"
              src={ProfileImage}
              alt="Amir Vahedi"
              width={512}
              height={512}
            />
          </div>
        </div>
        <div className="h-16 pb-4">
          <button onClick={scrollToAboutHandler}>
            <HiArrowSmDown className="text-4xl cursor-pointer transition-all transform hover:-translate-y-1" />
          </button>
        </div>
      </div>
      <div className="bg-white h-0 lg:h-8" />
    </div>
  );
}
