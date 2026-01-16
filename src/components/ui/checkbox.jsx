import { FiCheck } from "react-icons/fi";

export function Checkbox({ checked, onCheckedChange }) {
  return (
    <div 
      onClick={() => onCheckedChange(!checked)}
      className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors ${
        checked 
          ? "bg-white border-white" 
          : "bg-[#1a1a1a] border-gray-500 hover:border-gray-400"
      }`}
    >
      {checked && <FiCheck className="text-black" />}
    </div>
  );
}
