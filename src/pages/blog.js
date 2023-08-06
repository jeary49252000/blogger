import * as React from "react"
import { graphql, StaticQuery } from "gatsby";
import { withLayout } from "../components/layout.js";
import { PostCard } from "../components/post-card.js";

const BlogPage = withLayout(() => {
  return (
    <StaticQuery  query={indexQuery} render={data => (
      <div>
        {(data.allMdx.edges.map(({ node }) => (<PostCard
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          author={node.frontmatter.author}
          slug={node.frontmatter.slug}
        />)))}
      </div>
    )} />  
  );
})

const indexQuery = graphql`
query MyQuery {
  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
      }}
  }
}
  `;

export default BlogPage
