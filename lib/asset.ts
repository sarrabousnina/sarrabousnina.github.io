const isProd = process.env.NODE_ENV === "production";
const repo = "Sarra_Bousnina_Portfolio"; // 👈 your repo name

export function getAssetPath(path: string) {
  return isProd ? `/${repo}${path}` : path;
}
