import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <div className="main__section d-flex justify-content-center">
        <SearchEngine />
      </div>
      <footer className="text-center">
        {" "}
        <a
          href="https://github.com/Atefeh-Mirzabeigi/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source
        </a>{" "}
        project coded by Atefeh Mirzabeigi{" "}
      </footer>
    </div>
  );
}

export default App;
