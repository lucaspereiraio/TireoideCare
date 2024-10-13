import React from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  control: any;
  label: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <label className="text-sm text-neuters-gray-70" htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            className={`border ${
              errorMessage ? "border-red-500" : "border-neuters-gray-70"
            } border-opacity-50 rounded-lg h-11 px-4 focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100`}
          />
        )}
      />
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
