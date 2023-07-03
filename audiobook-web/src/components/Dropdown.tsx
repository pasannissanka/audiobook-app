"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

type DropdownProps = {
  button: React.ReactNode;
  children: React.ReactNode;
};

export default function Dropdown({ button, children }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>{button}</div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-1 py-1 w-full">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

type DropdownItemProps =
  | {
      children: React.ReactNode;
      type: "button";
      onClick: () => void;
    }
  | {
      children: React.ReactNode;
      type: "link";
      href: string;
    };

export const DropdownItem = (props: DropdownItemProps) => {
  if (props.type === "button") {
    return (
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={props.onClick}
            className={`${
              active ? "bg-blue-500 text-white" : "text-gray-900"
            } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-150 gap-2 justify-start`}
          >
            {props.children}
          </button>
        )}
      </Menu.Item>
    );
  }

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          className={`${
            active && "bg-blue-500 text-white"
          } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-150 gap-2`}
          href={props.href}
        >
          {props.children}
        </a>
      )}
    </Menu.Item>
  );
};
