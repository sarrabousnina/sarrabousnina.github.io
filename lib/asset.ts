const isProd = process.env.NODE_ENV === "production";

export function getAssetPath(path: string) {
  return path; // keep it simple since deployed at root
}
