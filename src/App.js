import "./App.css";
import NavBar from "./components/NavBar";
import Formulir from "./components/Formulir";
import Dua from "./components/Dua";
import Main from "./components/Main";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Formulir />
      <Dua />
      <Main />
      <MovieSection />
    </div>
  );
}

export default App;
