import { FC, useState, useEffect, useContext } from "react";
import { LangContext } from "../../state/context/Lang";
import "./LangToggle.scss";

interface ILangToggleProps {
  alt: boolean;
}

export const LangToggle: FC<ILangToggleProps> = ({ alt }) => {
  const [checked, setChecked] = useState<boolean>(true);
  const { dispatchLang } = useContext(LangContext);

  useEffect(() => {
    checked ? dispatchLang("es") : dispatchLang("en");
  }, [checked]);

  return (
    <div
      className={
        alt ? "language-toggle language-toggle-alt" : "language-toggle"
      }
    >
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
  );
};
