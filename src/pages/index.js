import * as React from "react"
import { createUseStyles } from "react-jss";
import { withLayout } from "../components/layout.js";
import MeImg from '../images/me.png';

const useStyles = createUseStyles({
  main: {
    marginTop: '20px',
    display: 'flex',
    fontSize: '1.5rem',
    lineHeight: '1.8rem',
    flexDirection: 'column',
    alignItems: 'center',
    '& span': {
      marginBottom: '10px',
      textAlign: 'center',
    },
    '& img': {
      position: 'absolute',
      marginTop: '60px',
    }
  }
});

const IndexPage = withLayout(() => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <span>My name is Chun-Hao Lai. Welcome to my Page.</span>
      <img src={MeImg}/>
    </div>
  );
})

export default IndexPage

export const Head = () => <title>Chun-Hao Lai</title>
