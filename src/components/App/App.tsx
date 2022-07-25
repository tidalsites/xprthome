import "./App.scss";

// Components
import { Header } from "../Header/Header";
import { ContactBar } from "../ContactBar/ContactBar";
import { Landing } from "../Landing/Landing";
import { About } from "../About/About";
import { Hours } from "../Hours/Hours";

function App() {
  return (
    <div className="App">
      {/* <ContactBar /> */}
      <Header />
      <Landing />
      <About />
      <Hours />
    </div>
  );
}

export default App;
