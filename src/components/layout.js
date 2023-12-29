import * as React from "react"
import { Nav } from "./navbar";
import { createUseStyles } from "react-jss";
import {
      FluentProvider,
      webLightTheme,
} from "@fluentui/react-components";
import "prismjs/themes/prism-funky.css";

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: '0',
      fontFamily: "Microsoft Sans Serif, Arial, Helvetica, sans-serif",
      fontSize: '14px',
    },
  },
  body: {
    margin: '0 auto',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 375px)': {
      '& .gatsby-highlight': {
        width: '350px',
      },
    },
    '@media (max-width: 549px) and (min-width: 376px)': {
      '& .gatsby-highlight': {
        width: '390px',
      },
    },
    '@media (max-width: 768px) and (min-width: 550px)': {
      '& .gatsby-highlight': {
        width: '550px',
      },
    },
  }
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <FluentProvider theme={webLightTheme}>
      <div className={classes.body}>
        <Nav />
        {children}
      </div>
    </FluentProvider>
  );
};

export const withLayout = (Component) => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);
