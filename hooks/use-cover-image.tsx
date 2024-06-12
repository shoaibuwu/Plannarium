import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};

export const useCoverImage = create<CoverImageStore>((set, get) => ({
  url: undefined,
  isOpen: false,
  onClose: () => set({ isOpen: false, url: undefined }),
  onOpen: () => set({ isOpen: true }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));
