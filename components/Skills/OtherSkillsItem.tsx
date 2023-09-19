type Props = {
  title: string;
};

export default function OtherSkillsItem({ title }: Props) {
  return (
    <span className="rounded-full font-bold bg-lightgray py-1 px-3 text-black mr-2">
      {title}
    </span>
  );
}
