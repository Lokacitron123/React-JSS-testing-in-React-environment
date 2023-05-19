import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (props) => props.backgroundColor,
    color: "#333",
  },
});

const Component = (props) => {
  const classes = useStyles(props);

  return <div className={classes.container}>Hello, {props.name}!</div>;
};

export default Component;
