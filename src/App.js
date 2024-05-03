import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // Scroll to top when click Link/Router
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <HelmetProvider>
      <div className="scroll-smooth">
        <ScrollToTop />
        <Header />
        <Main />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
