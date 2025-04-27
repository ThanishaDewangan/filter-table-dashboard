// filepath: c:\Users\musud\segwise_project\filter-table-dashboard\src\app\components\ExpandedModal.tsx
import React from "react";

export const ExpandedModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">Expanded Preview</h2>
        <p>Details about the preview go here.</p>
        <button className="mt-4 text-blue-600 hover:underline">Close</button>
      </div>
    </div>
  );
};