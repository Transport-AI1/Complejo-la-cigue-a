import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Propuesta digital · Demo de Transport AI",
  description: "Demostración conceptual de experiencia digital para Complejo La Cigüeña.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}