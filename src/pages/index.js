import * as React from "react"
import { createUseStyles } from "react-jss";
import { withLayout } from "../components/layout.js";

const useStyles = createUseStyles({
  main: {
    marginTop: '20px',
    display: 'flex',
    fontSize: '1.5rem',
    flexDirection: 'column',
    alignItems: 'center',
    '& span': {
      marginBottom: '10px',
    }
  }
});

const IndexPage = withLayout(() => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <span>Hi! I am Chun-Hao Lai. Welcome to my Page.</span>
      <span>This page is for some notes about my daily life.</span>
    </div>
  );
})

export default IndexPage

export const Head = () => <title>Chun-Hao Lai</title>
