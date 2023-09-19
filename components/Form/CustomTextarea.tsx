export default function CustomTextarea({
  name,
  label,
  onChange,
  value,
  className,
  inputClassName,
  rows = 5,
}: any) {
  return (
    <div className={`flex flex-col mt-4 ${className}`}>
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`
            px-3 py-2 bg-lightgray mt-1 border-grey transition-all shadow-none focus:border-black outline-none rounded
            ${inputClassName}
        `}
      />
    </div>
  );
}
