import { FilterPanel } from "./components/FilterPanel";
import { Table } from "./components/Table";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Filter Table Dashboard</h1>
      <FilterPanel />
      <Table />
    </main>
  );
}
