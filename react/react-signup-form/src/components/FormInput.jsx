import React from "react";

const FormInput = ({ id, label, inputProps }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight"
        autoComplete="off"
        {...inputProps}
      />
      <div className="mt-1 mb-3 text-xs text-red-500"></div>
    </div>
  );
};

export default FormInput;
