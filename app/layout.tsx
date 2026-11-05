import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Complejo La Cigüeña | Naturaleza, descanso y experiencias",
  description: "Descubre los bungalows, gastronomía, naturaleza y eventos de Complejo La Cigüeña en Arganda del Rey.",
  metadataBase: new URL("https://www.complejolaciguena.com")
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}