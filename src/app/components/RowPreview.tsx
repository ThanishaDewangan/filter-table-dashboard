"use client";

import { usePreviewStore } from "../store/previewStore";
import { ExpandedModal } from "./ExpandedModal";

export const RowPreview = () => {
  const { previewData, clearPreview, expandPreview } = usePreviewStore();

  if (!previewData) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 w-64 bg-white shadow-lg rounded-lg p-4 z-40">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold">{previewData.creative_name}</h4>
            <p className="text-sm text-gray-500">{previewData.country}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600" onClick={clearPreview}>
            ✕
          </button>
        </div>
        <button
          className="mt-2 text-blue-600 hover:underline text-sm"
          onClick={expandPreview}
        >
          Expand
        </button>
      </div>

      <ExpandedModal />
    </>
  );
};
