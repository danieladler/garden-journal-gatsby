import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import AppContext from "../context/AppContext";
import ListItem from "../components/listItem";

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
              rating
            }
          }
        }
      }
    }
`;

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);
  const appContext = useContext(AppContext);
  const { date } = appContext.state

  let filteredMapped = allMarkdownRemark.edges.filter(({node}) => {
      return node.frontmatter.rating >= date // update from static to value from context.state
    }
  ).map((node, i) => {
    return <ListItem data={node} key={i} />
  })

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <h2>Posts:</h2>
          <ul>
            {filteredMapped}
          </ul>
        </>
      )}
    </AppContext.Consumer>
  );
}

export default Listing;
