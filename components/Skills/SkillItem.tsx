type Props = {
  title: string;
  icon: string;
  percent: number;
};

export default function SkillItem({ title, icon, percent }: Props) {
  return (
    <div className="w-full md:w-1/2 flex flex-col px-4 lg:px-10 py-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h5 className="mr-2 text-lg font-bold">{title}</h5>
          <img src={icon} alt="" className="w-7" />
        </div>
        <span>{percent}%</span>
      </div>
      <div>
        <div className="relative rounded-full bg-lightgray h-3 mt-2 overflow-hidden">
          <span
            className="absolute left-0 rounded-full bg-yellow h-3"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
