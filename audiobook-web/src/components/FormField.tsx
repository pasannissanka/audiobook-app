"use client";

import { ErrorMessage, Field } from "formik";

type FormFieldProps = {
  name: string;
  placeholder: string;
  title: string;
  type?: React.HTMLInputTypeAttribute;
};

export const FormField = ({
  name,
  placeholder,
  type = "text",
  title,
}: FormFieldProps) => {
  return (
    <div
      className={`flex ${
        type !== "checkbox"
          ? "my-2 flex-col"
          : "my-5 flex-row items-center gap-4"
      } w-full`}
    >
      <label className="text-sm text-gray-500 pb-1" htmlFor={name}>
        {title}
      </label>
      <div className="flex flex-col">
        <Field
          className="rounded-md border-gray-300 duration-300"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
        />
        <ErrorMessage
          className="mt-1 text-xs text-red-700"
          component="div"
          name={name}
        />
      </div>
    </div>
  );
};
