import { BookCard } from "@/components/BookCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col overflow-auto">
      <div className="flex w-full p-4">
        {/* TODO - fix responsiveness */}
        <BookCard
          id="1"
          authorName="Author name"
          imageSrc="https://picsum.photos/200/300"
          path="/dashboard/books/1"
          title="Book name"
        />
        <BookCard
          id="1"
          authorName="Author name"
          imageSrc="https://picsum.photos/200/300"
          path="/dashboard/books/1"
          title="Book name"
        />
        <BookCard
          id="1"
          authorName="Author name"
          imageSrc="https://picsum.photos/200/300"
          path="/dashboard/books/1"
          title="Book name"
        />
      </div>
    </div>
  );
}
