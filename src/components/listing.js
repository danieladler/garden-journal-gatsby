import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LISTING_QUERY = graphql`
  query BlogPostListing {
      allMarkdownRemark(limit: 10, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              slug
            }
          }
        }
      }
    }
`;

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);

  return (
    <>
      <h2>Posts:</h2>
      <ul>
        {allMarkdownRemark.edges.map(({node}) => (
          <li key={node.slug}>
            <article>
              <Link to={`/posts${node.frontmatter.slug}`}>
                <h3>{node.frontmatter.title}</h3>
              </Link>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listing;
