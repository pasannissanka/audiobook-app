import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden max-h-screen">
      <header className="fixed flex justify-center right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16 w-full">
        <div className="relative w-full">
          {/* TODO make search bar center */}
          <input className="border p-2 w-1/4" />
        </div>
      </header>
      <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60"></aside>
      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="m-3 py-2 flex justify-center">TEST</div>
      </main>
    </div>
  );
}
