const isProd = process.env.NODE_ENV === "production";
const repo = "sarrabousnina.github.io"; // 👈 your repo name

export function getAssetPath(path: string) {
  return isProd ? `/${repo}${path}` : path;
}
