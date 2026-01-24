import { create } from "zustand"

export const useModal = create((set) => ({
  isModal: false,
  openModal: () => set({ isModal: true }),
  closeModal: () => set({ isModal: false }),
}));