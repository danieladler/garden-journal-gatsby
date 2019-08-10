import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import AppContext from "../context/AppContext";

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
    <AppContext.Consumer>
      {context => (
        <>
          <h2>Posts:</h2>
          <ul>
            {allMarkdownRemark.edges.map(({node}) => (
              <li key={node.frontmatter.slug}>
                <article>
                  <button onClick={() => {context.setFeaturedPost(node.frontmatter)}}>{node.frontmatter.title}</button>
                </article>
                {/*
                  <article>
                    <Link to={`/posts${node.frontmatter.slug}`}>
                      <h3>{node.frontmatter.title}</h3>
                    </Link>
                    <p>{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                  </article>
                */}
              </li>
            ))}
          </ul>
        </>
      )}
    </AppContext.Consumer>
  );
}

export default Listing;
