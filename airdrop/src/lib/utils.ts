import { clsx, type ClassValue } from "clsx"
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTruncatedAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Address copied to clipboard");
};