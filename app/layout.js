import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

//layout du projet - charge la page choisie selon la route (ici, une seule page)

export const metadata = {
  title: "Cours du bitcoin",
  description: "Découvrez le cours du bitcoin !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
