import * as React from "react"
import { createUseStyles } from "react-jss";
import { Link } from "gatsby"

const useStyles = createUseStyles({
  nav: {
    width: '100%',
    color: 'black',
    "& ul": {
      "listStyleType": "none",
      "margin": "0",
      "padding": "0",
      "overflow": "hidden",
      backgroundColor: 'white',
    },
    "& li": {
      "float": "right"
    },
    "& li a": {
      "display": "block",
      "textAlign": "center",
      color: 'black',
      fontSize: '1.5rem',
      "padding": "14px 16px",
      "textDecoration": "none"
    },
    "& li a:hover": {
      "backgroundColor": "lightgrey"
    },
    borderBottom: '1px solid black',
  },
});

export const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>);
};
