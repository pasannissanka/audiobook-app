"use client";

import { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { BookCard, BookCardProps } from "./BookCard";

type HorizontalListViewProps = {
  title: string;
  data: BookCardProps[];
  options: EmblaOptionsType;
};

export const HorizontalListView = ({
  title,
  data,
  options,
}: HorizontalListViewProps) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="flex flex-col w-full">
      <div className="text-xl px-2 my-3 pb-3 border-b">{title}</div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2 pb-6">
          {data.map((item, index) => (
            <div key={index}>
              <BookCard key={index} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
