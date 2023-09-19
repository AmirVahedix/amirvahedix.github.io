type Props = {
  title: string;
  badge: string;
};

export default function Heading({ title, badge }: Props) {
  return (
    <div className="flex flex-col items-center py-10">
      <span className="bg-yellow text-black py-1 px-2 font-bold text-sm rounded">
        {badge}
      </span>

      <h2 className="mt-2 font-extrabold text-center">{title}</h2>
    </div>
  );
}
