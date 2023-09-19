type Props = { title: string; imageUrl: string; link: string };

export default function PortfolioItem({ title, imageUrl, link }: Props) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-yellow cursor-pointer rounded overflow-hidden transition-all hover:shadow-lg">
        <a href={link} target="_blank">
          <img
            className="object-cover h-40 w-full"
            src={imageUrl}
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
