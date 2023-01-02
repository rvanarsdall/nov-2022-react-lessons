import "./App.css";
import ChallengeOneInstructions from "./components/challenges/ChallengeOneInstructions";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello from App.js</h1>
      <ChallengeOneInstructions />
      <Footer />
    </div>
  );
}

export default App;
