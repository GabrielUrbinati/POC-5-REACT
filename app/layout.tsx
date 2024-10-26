import React from "react"; 
import "./globals.css";
interface LayoutProps {
  children: React.ReactNode; 
}
export default function LayoutRaiz({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>POC 5</h1>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "#282c34", 
            color: "#ffffff", 
            textAlign: "center", 
            padding: "10px 0", 
            position: "fixed", 
            bottom: 0, 
            width: "100%", 
            zIndex: 999, 
          }}
        >
          <p>Nomes</p>
        </footer>
      </body>
    </html>
  );
}
