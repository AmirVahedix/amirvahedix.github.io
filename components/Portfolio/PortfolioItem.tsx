import type { StaticImageData } from "next/image";
import Image from "next/image";

type Props = { title: string; imageUrl: StaticImageData; link: string };

export default function PortfolioItem({ title, imageUrl, link }: Props) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-yellow cursor-pointer rounded overflow-hidden transition-all hover:shadow-lg">
        <a href={link} target="_blank">
          <Image
            className="object-cover h-[180px] w-full border-x-2 border-t-2 rounded-t"
            src={imageUrl}
            width={600}
            height={400}
            alt={title}
          />
          <div className="p-2">
            <h4 className="text-xl font-bold">{title}</h4>
          </div>
        </a>
      </div>
    </div>
  );
}
