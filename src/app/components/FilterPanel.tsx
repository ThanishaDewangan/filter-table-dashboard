"use client";

import { useState } from "react";
import { filters } from "../utils/filters";

export const FilterPanel = () => {
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string }>({});

  const handleFilterChange = (filterKey: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-4">
      {filters.map((filter) => (
        <div key={filter.id} className="flex flex-col">
          <label htmlFor={filter.id} className="text-sm font-medium text-gray-700">
            {filter.label}
          </label>
          <select
            id={filter.id}
            className="mt-1 block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={selectedFilters[filter.id] || ""}
            onChange={(e) => handleFilterChange(filter.id, e.target.value)}
          >
            <option value="">All</option>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
