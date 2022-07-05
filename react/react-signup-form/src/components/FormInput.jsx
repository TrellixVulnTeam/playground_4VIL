import React, { useEffect, useRef, useContext } from "react";
import { FormContext } from "../App";

const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const FormInput = ({ id, label, inputProps }) => {
  //useEffect - 실행 시점을 지정하기 위한 용도
  //useRef - 바닐라로 작성할 땐 DOM으로 짚어오는데, 리액트에서의 DOM에 접근하기 위한 용도
  const inputRef = useRef(null);
  const { formData, setFormData } = useContext(FormContext);

  const checkRegex = () => {
    const value = formData[id];
    if (value.length === 0) {
      return "required";
    } else {
      switch (id) {
        case "id":
          return ID_REGEX.test(value) ? true : "invalidId";
        case "pw":
          return PW_REGEX.test(value) ? true : "invalidPw";
        case "confirmPw":
          return value === formData["pw"] ? true : "invalidPwCheck";
        default:
          return;
      }
    }
  };

  useEffect(() => {
    if (id === "id") {
      inputRef.current.focus();
    }
  }, []);

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
        ref={inputRef}
        value={formData[id]}
        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
        onBlur={() => console.log(checkRegex())}
        {...inputProps}
      />
      <div className="mt-1 mb-3 text-xs text-red-500"></div>
    </div>
  );
};

export default FormInput;
