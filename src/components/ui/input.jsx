export function Input({ placeholder, value, onChange, className, type = "text", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`bg-[#1a1a1a] border border-gray-700 text-white rounded-md px-3 py-2 outline-none focus:border-blue-500 shadow-sm transition-colors placeholder-gray-500 ${className}`}
      {...props}
    />
  );
}
