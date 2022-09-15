import { createContext, useState } from "react";

// <!-- STEP 1. CREATE CONTEXT -->
//  import createContext
// use

export const AppContext = createContext();

// 2.A Provide
// create custom Provider Component;
function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("dark"); // "dark", "light"

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // data is provided here
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
