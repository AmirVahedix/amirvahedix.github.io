import { RefObject } from "react";
import Link from "next/link";

import Heading from "../Heading";
import PortfolioItem from "./PortfolioItem";

import RadioBamikImage from "@/public/images/radiobamik.jpg";
import ShiftImage from "@/public/images/shift.jpg";
import AVCImage from "@/public/images/avc.jpg";
import HamrahFelezImage from "@/public/images/hamrahfelez.jpg";
import NeuroSurgeryImage from "@/public/images/ns.jpg";
import FahimImage from "@/public/images/fahim.jpg";
import HitalImage from "@/public/images/hital.jpg";
import AHVImage from "@/public/images/ahv.jpg";
import MoboplazImage from "@/public/images/moboplaz.jpg";

type Props = {
  portfolioRef: RefObject<HTMLDivElement>;
};

export default function Portfolio({ portfolioRef }: Props) {
  return (
    <div className="pt-10" ref={portfolioRef}>
      <Heading title="My Recent Projects" badge="Portfolio" />

      <div className="flex flex-col items-center mb-10 -mt-6">
        <div className="flex flex-wrap w-11/12 lg:w-3/4">
          <PortfolioItem
            title="RadioBamik"
            imageUrl={RadioBamikImage}
            link="https://radiobamik.com/"
          />
          <PortfolioItem
            title="Shift Agency"
            imageUrl={ShiftImage}
            link="https://shift-agency.vercel.app/"
          />
          <PortfolioItem
            title="HamrahFelez"
            imageUrl={HamrahFelezImage}
            link="https://hamrahfelez.org/"
          />
          <PortfolioItem
            title="AVC Books"
            imageUrl={AVCImage}
            link="https://avc-books.vercel.app/"
          />
          <PortfolioItem
            title="Neurosurgery Association"
            imageUrl={NeuroSurgeryImage}
            link="https://neuro-surgery.info/"
          />
          <PortfolioItem
            title="Dr Farzan Fahim"
            imageUrl={FahimImage}
            link="https://drfarzanfahim.com/"
          />
          <PortfolioItem
            title="Hital Dev"
            imageUrl={HitalImage}
            link="https://hitaldev.com/"
          />
          <PortfolioItem
            title="Amir Vahedi"
            imageUrl={AHVImage}
            link="https://amirvahedix.github.io/"
          />
          <PortfolioItem
            title="Moboplaz"
            imageUrl={MoboplazImage}
            link="https://moboplaz,com/"
          />
        </div>
        {/* <Link
          href="/projects"
          as="button"
          className="bg-black text-lg rounded py-2 px-5 text-white mt-3"
        >
          All Projects
        </Link> */}
      </div>
    </div>
  );
}
