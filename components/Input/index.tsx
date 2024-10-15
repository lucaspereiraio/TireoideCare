import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputFieldProps {
  name: string;
  control: any;
  label: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  isPassword?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type,
  placeholder,
  errorMessage,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-y-2">
      <label className="text-sm text-neuters-gray-70" htmlFor={name}>
        {label}
      </label>
      <div className="relative w-full">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              id={name}
              type={showPassword && isPassword ? "text" : type}
              placeholder={placeholder}
              className={`border border-neuters-gray-70 w-full ${
                errorMessage
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : " focus:border-primary-100 focus:ring-primary-100"
              } border-opacity-50 rounded-lg h-11 px-4 focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100`}
            />
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-neuters-gray-50"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        )}
      </div>
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
