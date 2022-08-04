import { useState, useReducer, useEffect } from "react";
import "./App.scss";

// Components
import { Header } from "../Header/Header";
import { ContactBar } from "../ContactBar/ContactBar";
import { Landing } from "../Landing/Landing";
import { About } from "../About/About";
import { Hours } from "../Hours/Hours";
import { Services } from "../Services/Services";
import { Footer } from "../Footer/Footer";

// State
import { LangContext } from "../../state/context/Lang";
import { LangReducer } from "../../state/reducer/Lang";

function App() {
  const [lang, dispatchLang] = useReducer(LangReducer, "es");
  const [checked, setChecked] = useState<boolean>(true);

  useEffect(() => {
    checked ? dispatchLang("es") : dispatchLang("en");
  }, [checked]);
  return (
    <LangContext.Provider value={{ lang: lang, dispatchLang }}>
      <div className="App">
        {/* <ContactBar /> */}
        <div className="language-toggle">
          <span>EN</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            ></input>
            <span className="slider"></span>
          </label>
          <span>ES</span>
        </div>
        <Header />
        <Landing />
        <About />
        <Hours />
        <Services />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
