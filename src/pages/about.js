import * as React from "react"
import { createUseStyles } from "react-jss";
import { withLayout } from "../components/layout.js";

const useStyles = createUseStyles({
  main: {
    margin: "4px",
  }
});

const AboutPage = withLayout(() => {
  const classes = useStyles();
  return (
    <div className={classes.main}>Hi! I am Chun-Hao Lai. Welcome to my Page.</div>
  );
})

export default AboutPage
