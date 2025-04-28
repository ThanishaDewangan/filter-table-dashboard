// src/app/components/FiltersDropdown.tsx
"use client";

import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, TrashIcon } from "@heroicons/react/24/outline";

const categories = ["Dimensions", "Tags", "Metrics"];
const tagOptions = ["Character", "Background", "Elements", "CTA Position", "CTA Text"];
const metricOptions = ["Spend", "Impressions", "Clicks"];
const dimensionOptions = ["Country", "Device", "Platform"];

const conditionOptions = {
  Metrics: ["Lesser than", "Greater than", "Equals"],
  Tags: ["is", "is not", "contains", "does not contain"],
  Dimensions: ["is", "is not", "contains", "does not contain"],
};

export default function FiltersDropdown() {
  const [filters, setFilters] = useState([
    { id: Date.now(), category: "", value: "", condition: "", inputValue: "" }
  ]);

  const addFilter = () => {
    setFilters([...filters, { id: Date.now(), category: "", value: "", condition: "", inputValue: "" }]);
  };

  const removeFilter = (id: number) => {
    setFilters(filters.filter(filter => filter.id !== id));
  };

  const updateFilter = (id: number, key: string, value: string) => {
    setFilters(filters.map(filter => filter.id === id ? { ...filter, [key]: value } : filter));
  };

  return (
    <div className="space-y-6">
      {filters.map((filter) => (
        <div key={filter.id} className="p-4 bg-gray-50 rounded-md border flex flex-col gap-4 relative">
          {/* Delete Icon */}
          <button
            onClick={() => removeFilter(filter.id)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700"
          >
            <TrashIcon className="h-5 w-5" />
          </button>

          {/* Category Dropdown */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Select Category</label>
            <SelectBox
              options={categories}
              selected={filter.category}
              onChange={(value) => updateFilter(filter.id, "category", value)}
            />
          </div>

          {/* Value Dropdown */}
          {filter.category && (
            <div>
              <label className="block text-xs text-gray-500 mb-1">Select Value</label>
              <SelectBox
                options={
                  filter.category === "Tags" ? tagOptions :
                  filter.category === "Metrics" ? metricOptions :
                  dimensionOptions
                }
                selected={filter.value}
                onChange={(value) => updateFilter(filter.id, "value", value)}
              />
            </div>
          )}

          {/* Condition and Input */}
          {filter.value && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Condition</label>
                <SelectBox
                  options={conditionOptions[filter.category as keyof typeof conditionOptions]}
                  selected={filter.condition}
                  onChange={(value) => updateFilter(filter.id, "condition", value)}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Enter Value</label>
                <input
                  type="text"
                  value={filter.inputValue}
                  onChange={(e) => updateFilter(filter.id, "inputValue", e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:border-green-400"
                  placeholder="Enter Value"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add Filter Button */}
      <button
        onClick={addFilter}
        className="px-4 py-2 bg-green-100 hover:bg-green-200 rounded-md text-green-800 flex items-center gap-2 text-sm"
      >
        + Add Filter
      </button>
    </div>
  );
}

function SelectBox({ options, selected, onChange }: { options: string[]; selected: string; onChange: (value: string) => void; }) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="w-full p-2 border rounded-md text-left bg-white hover:border-gray-400 focus:ring-2 focus:ring-green-400">
          <span className="block truncate">{selected || "Select"}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 w-full bg-white border max-h-60 rounded-md py-1 text-sm overflow-auto shadow-lg z-10">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none relative py-2 pl-4 pr-10 ${
                    active ? "bg-green-100 text-green-700" : "text-gray-900"
                  }`
                }
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
