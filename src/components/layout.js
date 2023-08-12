import * as React from "react"
import { Nav } from "./navbar";
import { createUseStyles } from "react-jss";

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
  }
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Nav />
      {children}
    </div>
  );
};

export const withLayout = (Component) => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);
