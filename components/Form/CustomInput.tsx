export default function CustomInput({
  name,
  label,
  onChange,
  value,
  className,
  inputClassName,
  type = "text",
  readOnly,
}: any) {
  return (
    <div className={`flex flex-col mt-4 ${className}`}>
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`
            px-3 bg-lightgray mt-1 border-grey transition-all shadow-none focus:border-black outline-none rounded h-10
            ${inputClassName}
        `}
        readOnly={readOnly}
      />
    </div>
  );
}
