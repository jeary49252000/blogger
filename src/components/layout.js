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
      '& .gatsby-highlight': {
      },
      '& pre.prism-code': {
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
