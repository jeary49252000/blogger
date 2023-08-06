import * as React from "react"
import { Nav } from "./navbar";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
    },
  },
});

export const Layout = ({ children }) => {
  useStyles();
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export const withLayout = (Component) => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);
