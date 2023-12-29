import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { createUseStyles } from "react-jss"
import classNames from "classnames"
import { withLayout } from "../components/layout"
import { Link } from "gatsby"
import { preToCodeBlock } from './pre-to-code'
import Code from './code'

const shortcodes = {
  Link,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) { return <Code {...props} /> }
    return <pre {...preProps} />
  },
} // Provide common components here

const useStyles = createUseStyles({
  blogContent: {
    margin: '0 auto',
    fontSize: '1rem',
    '& h1': {
      lineHeight: '2.3rem',
    },
    '& h2': {
      lineHeight: '1.8rem',
    },
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