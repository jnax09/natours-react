import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./themes";
import GlobalStyle from "./themes/globalStyles";
import Header from "./components/header/header.component";
import AboutSection from "./components/about/about-section.component";
import FeaturesSection from "./components/features/features-section.component";
import ToursSection from "./components/tours/tours-section.component";
import StoriesSection from "./components/stories/stories-section.component";
import BookSection from "./components/book-section/book-section.component";
import Footer from "./components/footer/footer.component";
import Popup from "./components/popup/popup.component";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <main>
        <AboutSection />
        <FeaturesSection />
        <ToursSection />
        <StoriesSection />
        <BookSection />
        <Popup />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
