import React, { useRef } from "react";
import shortid from "shortid";
import { useFormContext } from "react-hook-form";

export default function Option({
  name,
  value,
  label,
  errorMessage,
  type
}) {
  const id = useRef(shortid.generate());
  const { register } = useFormContext();
  const validation = errorMessage ? { required: errorMessage } : undefined;

  return (
    <>
      <input
        className="hidden peer"
        name={name}
        id={id.current}
        {...register(name, validation)}
        value={value}
        type={type}
      />
      <label
        htmlFor={id.current}
        className="text-textColor flex justify-center items-center h-9 w-32 border border-main rounded-mainRadious peer-checked:bg-main peer-checked:text-white peer-checked:border-none "
      >
        {label}
      </label>
    </>
  );
}