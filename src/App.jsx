// Example with react-jss

import { useState } from "react";
import { createUseStyles, ThemeProvider } from "react-jss";

// Creates some global themes
const themes = {
  theme1: {
    backgroundColor: "red",
  },
  theme2: {
    backgroundColor: "blue",
  },
};

// Creates styling using react-jss style hooks
const useStyles = createUseStyles({
  container: {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    backgroundColor: (theme) => theme.backgroundColor,
  },
});

const App = () => {
  // Creates a state
  const [currentTheme, setCurrentTheme] = useState("theme1");
  // creates a classes variable with useStyles that takes in our global themes variable
  const classes = useStyles(themes[currentTheme]);

  const handleButtonClick = () => {
    // Changes theme based on on true and false values
    // The ? aka ternay operator is a concice way for writing conditional statements
    // The expression before the ? is the condition being evaluated
    // if theme1 is is true, theme2 will be set as the new state. If theme1 is false, theme1 will be the set state
    // the colon, : , stands for or
    setCurrentTheme(currentTheme === "theme1" ? "theme2" : "theme1");
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <div className={classes.container}>
        <button onClick={handleButtonClick}>Change Color</button>
      </div>
    </ThemeProvider>
  );
};

export default App;

// example without react-jss

// import React, { useState } from 'react';

// const themes = {
//   theme1: {
//     backgroundColor: 'red',
//   },
//   theme2: {
//     backgroundColor: 'blue',
//   },
// };

// const containerStyle = {
//   width: 200,
//   height: 200,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: '#fff',
// };

// const App = () => {
//   const [currentTheme, setCurrentTheme] = useState('theme1');

//   const handleButtonClick = () => {
//     setCurrentTheme(currentTheme === 'theme1' ? 'theme2' : 'theme1');
//   };

//   return (
//     <div style={{ ...containerStyle, backgroundColor: themes[currentTheme].backgroundColor }}>
//       <button onClick={handleButtonClick}>Change Color</button>
//     </div>
//   );
// };

// export default App;
