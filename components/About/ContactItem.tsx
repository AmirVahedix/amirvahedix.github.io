import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  content: string;
};

export default function ContactItem({ icon, title, content }: Props) {
  return (
    <div>
      <div className="flex items-center font-bold text-base text-grey">
        {icon}
        <span className="ml-1">{title}</span>
      </div>
      <span className="font-medium text-xl">{content}</span>
    </div>
  );
}
