import React, { useState } from "react";

interface FloatingLabelInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

export function FloatingLabelInput({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.trim().length > 0;

  return (
    <div className="relative mb-6 font-dm-sans">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 rounded-md border-2 bg-transparent focus:outline-none focus:ring-2 transition-colors peer ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-[#1d84d0] focus:ring-[#1d84d0]"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none bg-[#f5f5f5] px-1 ${
          isFocused || hasValue
            ? "-top-2.5 left-3 text-xs text-[#1d84d0]"
            : "top-3 text-gray-500"
        }`}
      >
        {placeholder}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
