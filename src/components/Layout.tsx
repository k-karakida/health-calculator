import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import "./Layout.css";
import "./calculator/Calculator.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />

      <main className="layout__main">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;