import { createContext, RefObject, useContext } from "react";

// The page scrolls inside a div (see pages/index.tsx), not the window.
// Scroll-linked effects need that element, so it is shared through context.
export const ScrollContainerContext =
  createContext<RefObject<HTMLDivElement> | null>(null);

export const useScrollContainer = () => useContext(ScrollContainerContext);
