import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn merges Tailwind class names, resolving conflicts sensibly
 * (e.g. "px-2 px-4" becomes "px-4"). Used throughout the UI components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
