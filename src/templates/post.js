import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { withLayout } from "../components/layout"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here

const PageTemplate = withLayout(({ data, children }) => {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </>
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