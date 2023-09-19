import { ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
  percent: number;
  color: string;
};

export default function SkillItem({ title, icon, color, percent }: Props) {
  return (
    <div className="w-full md:w-1/2 flex flex-col px-4 lg:px-10 py-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h5 className="mr-2 text-lg font-bold">{title}</h5>
          <span className="text-2xl" style={{ color: color }}>
            {icon}
          </span>
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
