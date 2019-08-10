import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive	 {
    allMarkdownRemark(limit: 5, sort: {
    	order:DESC,
      fields:[frontmatter___date]
    }) {
      edges {
        node {
  				frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            rating
          }
        }
      }
    }
  }
`

const Archive = () => {
  const { allMarkdownRemark } =  useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <h3>Archive</h3>
      <ul>
        {allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Archive
