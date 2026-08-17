import { CATEGORIES } from "./constants";

export function getCategory(filename) {
  const dot = filename.lastIndexOf(".");
  if (dot === -1) return null;
  const ext = filename.substring(dot + 1).toLowerCase();
  for (const [cat, exts] of Object.entries(CATEGORIES)) {
    if (exts.includes(ext)) return cat;
  }
  return "Others";
}