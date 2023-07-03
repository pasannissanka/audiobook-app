import { BookCard, BookCardProps } from "@/components/BookCard";
import { HorizontalListView } from "@/components/HorizontalListView";
import Image from "next/image";

const DATA: BookCardProps[] = [
  {
    id: "1",
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    imageSrc: "https://picsum.photos/200/300",
    path: "/1",
  },
  {
    id: "2",
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    imageSrc: "https://picsum.photos/200/300",
    path: "/2",
  },
  {
    id: "2",
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    imageSrc: "https://picsum.photos/200/300",
    path: "/3",
  },
  {
    id: "2",
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    imageSrc: "https://picsum.photos/200/300",
    path: "/4",
  },
  {
    id: "2",
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    imageSrc: "https://picsum.photos/200/300",
    path: "/5",
  },
  {
    id: "2",
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    imageSrc: "https://picsum.photos/200/300",
    path: "/6",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full p-4">
        <HorizontalListView
          title="Popular"
          data={DATA}
          options={{ align: "start", slidesToScroll: 1 }}
        />
      </div>
      <div className="flex w-full p-4">
        <HorizontalListView
          title="Popular"
          data={DATA}
          options={{ align: "start", slidesToScroll: 1 }}
        />
      </div>
      <div className="flex w-full p-4">
        <HorizontalListView
          title="Popular"
          data={DATA}
          options={{ align: "start", slidesToScroll: 1 }}
        />
      </div>
      <div className="flex w-full p-4">
        <HorizontalListView
          title="Popular"
          data={DATA}
          options={{ align: "start", slidesToScroll: 1 }}
        />
      </div>
    </div>
  );
}
