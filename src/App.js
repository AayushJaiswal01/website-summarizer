import "./App.css";
import Demo from "./components/Search";
import Hero from "./components/Intro";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default App;
