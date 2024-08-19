import { Box } from "@mui/material";

// Global css
import '../styles/globals.css'
// Components - Navigation
import Header from "@/components/Homepage/Header";
import Footer from "@/components/Homepage/Footer";

export const metadata = {
  title: 'Dublanc Fc',
  description: 'Dublanc Football Club Official Website',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

          <Header />
          
          {children}

      </body>
    </html>
  )
}
