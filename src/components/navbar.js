import * as React from "react"
import { createUseStyles } from "react-jss";
import { Link } from "gatsby"

const useStyles = createUseStyles({
  nav: {
    "& ul": {
      "listStyleType": "none",
      "margin": "0",
      "padding": "0",
      "overflow": "hidden",
      "backgroundColor": "#333"
    },
    "& li": {
      "float": "left"
    },
    "& li a": {
      "display": "block",
      "color": "white",
      "textAlign": "center",
      "padding": "14px 16px",
      "textDecoration": "none"
    },
    "& li a:hover": {
      "backgroundColor": "#111"
    },
    '& a[aria-current]': {
      "backgroundColor": '#04AA6D',
    },
  },
});

export const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>);
};
