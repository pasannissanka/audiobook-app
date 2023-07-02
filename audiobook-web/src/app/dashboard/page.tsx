import { BookCard } from "@/components/BookCard";

function Dashboard() {
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

export default Dashboard;
