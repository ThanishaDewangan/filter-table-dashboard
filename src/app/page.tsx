// src/app/page.tsx
import FiltersDropdown from "./components/FiltersDropdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Top Logo and Title */}
      <div className="mb-10 flex flex-col items-center">
        <img
          src="/segwise-logo.png" // place your logo in public folder as segwise-logo.png
          alt="Segwise Logo"
          className="h-12 mb-2"
        />
        <h1 className="text-gray-700 text-xl font-semibold">Segwise Front End Test</h1>
      </div>

      {/* Filter Dropdown Area */}
      <div className="w-full max-w-3xl p-6 bg-white rounded-md border-2 border-dashed border-gray-300">
        <FiltersDropdown />
      </div>
    </main>
  );
}
