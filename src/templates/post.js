import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { createUseStyles } from "react-jss"
import classNames from "classnames"
import { withLayout } from "../components/layout"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here
const useStyles = createUseStyles({
  blogContent: {
    width: '80%',
    fontSize: '1rem',
  },
});

const PageTemplate = withLayout(({ data, children }) => {
  const classes = useStyles();  
  return (
    <div className={classNames('blog-content', classes.blogContent)}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </div>
  )
});

export default PageTemplate;

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`