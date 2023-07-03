"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type ModalProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  type?: "fullscreen" | "default";
};

export default function Modal({
  children,
  description,
  isOpen,
  setIsOpen,
  title,
  type = "default",
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div
          className={`fixed ${
            type === "fullscreen" ? "right-0 w-1/2" : "inset-0"
          } overflow-y-auto`}
        >
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`${
                  type === "fullscreen"
                    ? "w-full h-screen rounded-l-2xl"
                    : "max-w-lg w-full rounded-2xl"
                } transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all relative`}
              >
                <div className="absolute top-0 left-0 right-0 z-10 bg-white p-4 border-b h-20">
                  <Dialog.Title
                    as="h1"
                    className="text-lg font-medium leading-1 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  {description && (
                    <Dialog.Description className="text-gray-500 text-sm my-1">
                      {description}
                    </Dialog.Description>
                  )}
                </div>
                <div className="absolute top-20 bottom-0 right-0 left-0 overflow-auto pb-2">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
