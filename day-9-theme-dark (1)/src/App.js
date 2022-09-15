import { useContext } from "react";
import { AppContext } from "./Components/AppContext";
import "./styles.css";

const style = {
  light: {
    color: "black",
    background: "RED",
    padding: "50px"
  },
  dark: {
    color: "white",
    background: "TEAL",
    padding: "50px"
  }
};

export default function App() {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div className="App" style={theme === "dark" ? style.dark : style.light}>
      <h1>Theme is {theme}</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button
        style={
          theme === "dark"
            ? {
                background: "ORANGE",
                color: "WHITE",
                border: "none",
                padding: "10px"
              }
            : {
                background: "GREEN",
                color: "black",
                border: "none",
                padding: "10px"
              }
        }
        onClick={toggleTheme}
      >
        TOGGLE BUTTON
      </button>
    </div>
  );
}
