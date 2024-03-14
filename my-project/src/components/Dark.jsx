function Dark() {
  const [theme, setTheme] = useState("light");

  function handleDarkMode() {
    setTheme(theme == "light" ? "dark" : "light");
  }

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

export default Dark;
