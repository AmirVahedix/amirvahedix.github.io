import { MutableRefObject, RefObject } from "react";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";

import ContactItem from "./ContactItem";
import Heading from "../Heading";

type Props = {
  aboutRef: RefObject<HTMLDivElement>;
};

export default function About({ aboutRef }: Props) {
  return (
    <div className="pt-8 pb-16 md:pb-28 lg:pb-48" ref={aboutRef}>
      <Heading title="Know Me More" badge="About me" />
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-3/4 flex flex-col mt-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex flex-col pr-4">
              <div className="flex flex-col md:flex-row items-center md:items-baseline">
                <span className=" mr-2 text-3xl">Hello, I am</span>
                <h2 className="font-bold border-b-4 border-yellow">
                  Amir Vahedi
                </h2>
              </div>
              <p className="mt-8 md:mt-3 text-lg text-justify font-light leading-8">
                I{"'"}m a full-stack developer specializing in Laravel, Next.js,
                and Python. My passion for technology extends into the realm of
                Medical AI, where I apply Python{"'"}s capabilities to create
                innovative solutions. My versatile skill set enables me to build
                robust applications and impactful solutions for many facilities.
                Staying updated with industry trends, I{"'"}m an adaptable asset
                for any project.
              </p>
            </div>
            <div className="w-full md:w-96 mt-8 md:mt-0 flex flex-col items-center justify-center">
              <div
                style={{ borderRadius: "32% 68% 62% 38% / 40% 59% 41% 60%" }}
                className="relative fancy_border bg-yellow w-32 h-32 flex items-center justify-center"
              >
                <span className="text-9xl font-extrabold">10</span>
              </div>
              <div className="flex mt-5">
                <span className="text-3xl font-bold mr-1">Finished</span>
                <span className="text-3xl">Projects</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col md:flex-row mt-16 justify-between">
            <ContactItem
              icon={<HiOutlineMail className="text-lg" />}
              title="Email:"
              content="AmirVahedix@gmail.com"
            />
            <ContactItem
              icon={<HiOutlinePhone className="text-lg" />}
              title="Phone:"
              content="(+98) 913 367 2471"
            />
            <ContactItem
              icon={<HiOutlineLocationMarker className="text-lg" />}
              title="From:"
              content="Tehran, Iran"
            />
            <ContactItem
              icon={<HiOutlineUser className="text-lg" />}
              title="Birth:"
              content="2001 Jan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
