import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function tailwindClassesMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
