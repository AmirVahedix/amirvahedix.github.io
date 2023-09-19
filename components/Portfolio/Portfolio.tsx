import { RefObject } from "react";
import Link from "next/link";

import Heading from "../Heading";
import PortfolioItem from "./PortfolioItem";

type Props = {
  portfolioRef: RefObject<HTMLDivElement>;
};

export default function Portfolio({ portfolioRef }: Props) {
  return (
    <div className="pt-10" ref={portfolioRef}>
      <Heading title="My Recent Projects" badge="Portfolio" />

      <div className="flex flex-col items-center mb-10 -mt-6">
        <div className="flex flex-wrap w-11/12 lg:w-3/4">
          <PortfolioItem title="SHIT" imageUrl="SHIT" link="/SHIT" />
        </div>
        <Link
          href="/projects"
          as="button"
          className="bg-black text-lg rounded py-2 px-5 text-white mt-3"
        >
          All Projects
        </Link>
      </div>
    </div>
  );
}
