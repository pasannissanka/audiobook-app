import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { ErrorMessage } from "formik";
import { Fragment } from "react";
import Select, { SingleValue } from "react-select";

export interface SelectValue {
  id: number;
  value?: string;
  isDisabled?: boolean;
  data?: any;
}

type SelectFieldProps = {
  name: string;
  title: string;
  placeholder?: string;
  values: SelectValue[] | undefined;
  selected: SelectValue | null;
  onChange: (value: SingleValue<SelectValue>) => void;
};

const SelectField = ({
  onChange,
  selected,
  values,
  name,
  title,
  placeholder = "",
}: SelectFieldProps) => {
  return (
    <div className="relative mt-1">
      <label className="pb-1 text-sm text-gray-500" htmlFor={name}>
        {title}
      </label>
      <Select
        options={values}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        // value={selected}
      />

      <ErrorMessage
        className="mt-1 text-xs text-red-700"
        component="div"
        name={name}
      />
    </div>
  );
};

export default SelectField;
