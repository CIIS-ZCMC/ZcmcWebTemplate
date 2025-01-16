import { create } from "zustand";
import { sidebarRoutes } from "../Routes/PageRoutes";

const usePageTitleHook = create((set) => ({
  title: sidebarRoutes[0].name,
  description: sidebarRoutes[0].description,
  setTitle: (title) => set({ title: title }),
  setDescription: (description) => set({ description: description }),
}));

export default usePageTitleHook;
