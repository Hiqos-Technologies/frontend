import React, { useState } from "react";

interface FloatingLabelTextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows?: number;
  error?: string;
}

export function FloatingLabelTextarea({
  id,
  name,
  value,
  onChange,
  placeholder,
  rows = 5,
  error,
}: FloatingLabelTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.trim().length > 0;

  return (
    <div className="relative mb-6 font-dm-sans">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        className={`w-full px-4 py-3 font-dm-sans rounded-md border-2 bg-transparent focus:outline-none focus:ring-2 transition-colors resize-none peer ${
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
