# Test project with CSS-in-JS library JSS - Javascript Style Sheet

This is a small project using the JSS library for CSS styling in React. What it does is swap between colours depending on states and theme with props.

## How to install

To install React JSS, the version of JSS used for this project, you install it by typing npm install react-jss in the terminal.
After that you're ready to start styling with JSS.

To import from react you type import { the items you want to import } from "react-jss";
(See example in the Themeswapper.jsx of how to import). Importing createUseStyles is the minimum if you just want to create styles with JSS.

### How to use JSS

Firstly, you start by initializing styles by declaring a variable followed by the JSS function createUseStyles.
const nameOfVariable = createUseStyles({})

Inside of the {} you declare style objects that you can use on different elements within your component. These styles will not spill over to any other elements in your project, despite them sharing the same names. This is because styles with JSS live inside of the components they're styling.

See the Component.jsx file if you want to see how to use JSS styling directly on the returned elements without using state.

### usage of themes in JSS

To set a theme you declare a variable: See Themewrapper.jsx for an example. Inside of your variable you can declare as many variables are you like, holding different values.

These can then be set on to your components by using React state. See Themewrapper.jsx for an example using themes and state.

In your return you wrap your elements with the ThemeProver function, setting the attribute theme to your state. Example

 <ThemeProvider theme={themes[nameOfYourState]}>
    your elements goes here
 </themeProvider>

the themes you've declared in your theme variable can then be set to style your elements through usage of state where the styling receives their values through (theme) => theme.nameOfYourThemeValues

See ThemeWrapper.jsx for further details.
