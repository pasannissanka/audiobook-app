"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

type BookCardProps = {
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
  return (
    <div className="flex flex-col p-2 mx-2 w-48 border rounded-md min-w-fit" key={id}>
      <Image
        width={200}
        height={250}
        src={imageSrc}
        alt={`${title} book cover}`}
        className="rounded-md"
      />
      <span className="break-all py-2 text-lg font-bold">{title}</span>
      <span className="break-all pb-2 text-base">by {authorName}</span>
      <Button text="Read more" target={path} type="link" variant="outline" />
    </div>
  );
};
