import { create } from "zustand";

// Define the type properly
interface PreviewDataType {
  creative_id: string;
  creative_name: string;
  country: string;
  tags: string[]; // Add whatever you have in data
  ad_network: string;
  os: string;
  campaign: string;
  ad_group: string;
  ipm: number;
  ctr: number;
  spend: number;
  impressions: number;
  clicks: number;
  cpm: number;
  cost_per_click: number;
  cost_per_install: number;
  installs: number;
}

interface PreviewState {
  previewData: PreviewDataType | null;
  isExpanded: boolean;
  setPreview: (data: PreviewDataType) => void;
  clearPreview: () => void;
  expandPreview: () => void;
  closeExpandPreview: () => void;
}

export const usePreviewStore = create<PreviewState>((set) => ({
  previewData: null,
  isExpanded: false,
  setPreview: (data) => set({ previewData: data }),
  clearPreview: () => set({ previewData: null, isExpanded: false }),
  expandPreview: () => set({ isExpanded: true }),
  closeExpandPreview: () => set({ isExpanded: false }),
}));
