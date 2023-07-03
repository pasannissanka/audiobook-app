import Button from "@/components/Button";
import Image from "next/image";

export default function BookPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col">
      <div className="flex p-2 gap-4">
        <div className="w-1/4">
          <Image
            width={200}
            height={250}
            src={"https://picsum.photos/200/300"}
            alt={`book cover}`}
            className="rounded-md"
          />
        </div>
        <div className="w-3/4">
          <div className="text-2xl font-bold">The Hobbit</div>
          <div className="text-sm">J.R.R. Tolkien</div>
          <div className="text-sm">Language: English</div>
          <div className="text-sm">Genres: Fiction, Fantasy Fiction</div>
          <div className="text-base my-2">
            An Unexpected Party In a hole in the ground there lived a hobbit.
            Not a nasty, dirty, wet hole, filled with the ends of worms and an
            oozy smell, nor yet a dry, bare, sandy hole with nothing in it to
            sit down on or to eat: it was a hobbit-hole, and that means comfort.
          </div>
        </div>
      </div>
      <div className="border-b text-lg p-2 mt-4 mb-1">Chapters</div>
      <div className="flex justify-start p-4 border rounded-md my-2">
        <div className="w-1/4">Chapter 1</div>
        <div className="w-3/4">
          <div className="text-base">An Unexpected Party</div>
          <div className="text-base">
            In a hole in the ground there lived a hobbit. Not a nasty, dirty,
            wet hole, filled with the ends of worms and an oozy smell, nor yet a
            dry, bare, sandy hole with nothing in it to sit down on or to eat:
            it was a hobbit-hole, and that means comfort.
          </div>
          <div className="flex justify-end my-2">
            <Button type="link" target={""} text="Listen" variant="outline" />
          </div>
        </div>
      </div>
    </div>
  );
}
