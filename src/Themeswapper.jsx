import { useState } from "react";
import { createUseStyles, ThemeProvider } from "react-jss";

// Define theme variable with two theme objects
const themes = {
  theme1: {
    primaryColor: "blue",
    secondaryColor: "yellow",
  },
  theme2: {
    primaryColor: "green",
    secondaryColor: "orange",
  },
};

// Create JSS styles with useStyles and createUseStyles from JSS import
const useStyles = createUseStyles({
  container: {
    // backgroundColor and color properties are set dynamically by using the theme parameter provided with createUseStyles
    backgroundColor: (theme) => theme.primaryColor,
    color: (theme) => theme.secondaryColor,
    padding: "20px",
  },
});

// This function creates a state with the useState hook called currentTheme that is initially set to theme1
const Themeswapper = () => {
  const [currentTheme, setCurrentTheme] = useState("theme1");
  // currentTheme is passed via useStyles to the themes object
  const classes = useStyles(themes[currentTheme]);

  // This functions sets a new state
  const handleThemeChange = () => {
    setCurrentTheme((currentTheme) =>
      // currentTheme is being checked for whether theme1 is already checked. if true, it will set currentTheme to theme2. If not set to theme1 it will set it to theme1
      currentTheme === "theme1" ? "theme2" : "theme1"
    );
    console.log(currentTheme);
  };

  return (
    // ThemeProvider is a component that is used to provide the current theme to its child components
    // the theme inside of ThemeProvider is linked to the theme param found on line 20 and 21
    <ThemeProvider theme={themes[currentTheme]}>
      <div className={classes.container}>Hello, React-JSS!</div>
      <button onClick={handleThemeChange}>Switch Theme</button>
    </ThemeProvider>
  );
};

export default Themeswapper;
