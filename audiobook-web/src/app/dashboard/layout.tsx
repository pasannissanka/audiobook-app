import SideIcon from "@/components/SideIcon";
import {
  BoltIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden max-h-screen">
      <header className="fixed flex justify-center z-10 right-0 top-0 bg-white py-3 px-4 h-16 w-full">
        <div className="flex justify-between w-full">
          <div className="pl-10">
            <Image
              priority
              src="/logo-no-background.svg"
              alt="Logo"
              width={120}
              height={50}
            />
          </div>
          <div className="right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </button>
              </span>
              <input className="justify-center border rounded-md p-2 w-full pl-12" />
            </div>
          </div>
          <div className="rounded-full border p-2">
            <UserIcon className="h-6 w-6" />
          </div>
        </div>
      </header>
      <aside className="fixed inset-y-0 z-0 left-0 bg-white max-h-screen w-60 mt-20 p-2">
        <SideIcon
          title="Explore"
          href="/dashboard"
          icon={<BookOpenIcon className="h-6 w-6" />}
        />
        <SideIcon
          title="Popular"
          href="/dashboard/popular"
          icon={<BoltIcon className="h-6 w-6" />}
        />
        <SideIcon
          title="Genre"
          href="/dashboard/genre"
          icon={<QueueListIcon className="h-6 w-6" />}
        />
        <SideIcon
          title="Authors"
          href="/dashboard/authors"
          icon={<UserIcon className="h-6 w-6" />}
        />
      </aside>
      <main className="fixed pt-16 left-60 right-0 max-h-screen h-full">
        <div className="relative">
          <div className="flex justify-center">
            <div className="w-1/2">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
