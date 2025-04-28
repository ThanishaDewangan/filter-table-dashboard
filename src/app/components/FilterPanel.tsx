"use client";

import { useState } from "react";

export const FilterPanel = () => {
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-wrap gap-6 justify-between mb-8">
      {/* Status */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg p-2 w-40 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Role */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-lg p-2 w-40 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      {/* Department */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-lg p-2 w-40 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
        </select>
      </div>
    </div>
  );
};
