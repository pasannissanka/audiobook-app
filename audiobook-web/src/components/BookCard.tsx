"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import {
  ArrowTopRightOnSquareIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Dropdown, { DropdownItem } from "./Dropdown";
import { Menu } from "@headlessui/react";
import Modal from "./Modal";
import { BookForm } from "./BookForm";

export type BookCardProps = {
  title: string;
  id: string;
  path: string;
  imageSrc: string;
  authorName: string;
};

export const BookCard = ({
  id,
  imageSrc,
  path,
  title,
  authorName,
}: BookCardProps) => {
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  return (
    <>
      <div
        className="relative flex flex-col p-2 mx-2 w-48 border rounded-md min-w-fit shadow-lg"
        key={id}
      >
        <span className="absolute top-o right-0 p-3">
          <Dropdown
            button={
              <Menu.Button className="inline-flex w-full text-white rounded-full hover:bg-gray-100 hover:text-black">
                <EllipsisVerticalIcon className="w-5 h-5 " />
              </Menu.Button>
            }
          >
            <DropdownItem type="link" href={`/dashboard/book/${id}`}>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              <span>View</span>
            </DropdownItem>
            <DropdownItem type="button" onClick={() => setIsEditOpen(true)}>
              <PencilSquareIcon className="w-4 h-4" />
              <span>Edit</span>
            </DropdownItem>
            <DropdownItem type="button" onClick={() => console.log("clicked")}>
              <TrashIcon className="w-4 h-4" />
              <span>Delete</span>
            </DropdownItem>
          </Dropdown>
        </span>
        <Image
          width={200}
          height={250}
          src={imageSrc}
          alt={`${title} book cover}`}
          className="rounded-md"
        />
        <span className="break-all py-2 text-lg font-bold">{title}</span>
        <span className="break-all pb-2 text-base">by {authorName}</span>
        <Button text="Listen" target={path} type="link" variant="outline" />
      </div>
      <Modal
        title="Edit book"
        description="Edit book details"
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        type="fullscreen"
      >
        <BookForm />
      </Modal>
    </>
  );
};
