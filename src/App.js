import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import { removeLngPrefix } from "./i18n";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
const App = () => {
  const {
    t,
    i18n,
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    const currentPathname = window.location.href.replace(
      window.location.origin,
      ""
    );
    const newPathname = `/${language}${removeLngPrefix(currentPathname)}`;

    if (currentPathname !== newPathname) {
      window.history.replaceState({}, "", newPathname);
    }
  }, [language, i18n]);

  return (
    <>
    <Header />
      <Routes basename={`/${language}`}>      
        <Route path="/" Component={Homepage} />
        <Route path="/about-us" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </>
  );
};

export default App;
