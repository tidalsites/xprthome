import "./App.scss";

// Components
import { Header } from "../Header/Header";
import { ContactBar } from "../ContactBar/ContactBar";
import { Landing } from "../Landing/Landing";
import { About } from "../About/About";
import { Hours } from "../Hours/Hours";
import { Services } from "../Services/Services";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <ContactBar /> */}
      <Header />
      <Landing />
      <About />
      <Hours />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
