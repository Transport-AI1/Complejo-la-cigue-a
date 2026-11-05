import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#17231f", forest: "#263d32", sand: "#e9e3d7", copper: "#b8875b" }, fontFamily: { display: ["Georgia", "serif"] } } },
  plugins: []
};
export default config;