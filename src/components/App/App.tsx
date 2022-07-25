import "./App.scss";

// Components
import { Header } from "../Header/Header";
import { ContactBar } from "../ContactBar/ContactBar";
import { Landing } from "../Landing/Landing";
import { About } from "../About/About";

function App() {
  return (
    <div className="App">
      {/* <ContactBar /> */}
      <Header />
      <Landing />
      <About />
    </div>
  );
}

export default App;
