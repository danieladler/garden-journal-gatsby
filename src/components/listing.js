import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import AppContext from "../context/AppContext";
import ListItem from "../components/listItem";

const LISTING_QUERY = graphql`
  query AllPlantListing {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            daysToHarvest
            plantedDate
            harvestWindow
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

  let plantGrowthList = allMarkdownRemark.edges.map(({node}, i) => {
    return (
      <div key={i}>
        <ListItem data={node} pctGrowth={appContext.getPlantGrowth(node)}/>
      </div>
    )
  })

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <h2>Plants:</h2>
          <ul>
            {plantGrowthList}
          </ul>
        </>
      )}
    </AppContext.Consumer>
  );
}

export default Listing;
