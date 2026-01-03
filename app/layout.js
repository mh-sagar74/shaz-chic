import { Roboto } from "next/font/google";
import "./globals.css";
import { Box, Toolbar } from "@mui/material";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shaz-Chic | Shazia Atifi's Business Corner",
  description: "Shazia Atifi offers you the best products available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <ThemeRegistry>
          <Navbar />
          <Toolbar />
          <Breadcrumbs />
          <Box>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
