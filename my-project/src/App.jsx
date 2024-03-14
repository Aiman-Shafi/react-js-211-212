import { useState } from "react";
import "./assets/style.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className={`App ${theme}`}>
        <Header />
        <div>{theme}</div>
        <button onClick={handleDarkMode}>
          Enable {theme === "light" ? "dark" : "light"} Mode
        </button>
        <Footer />
      </div>
    </>
  );
}

function AboutSection() {
  return (
    <>
      <h1>About Section</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        quo, amet accusamus laudantium ut quia facere obcaecati a eum incidunt.
      </p>
      <a href="#">Hello</a>
    </>
  );
}

export default App;
