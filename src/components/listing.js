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
      <div className="grid-item-ctnr" key={i}>
        <ListItem data={node} pctGrowth={appContext.getPlantGrowth(node)} endOfHarvest={appContext.getPlantHarvest(node)} />
      </div>
    )
  })

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <h2>Plants:</h2>
          <div className="grid">
            {plantGrowthList}
          </div>
        </>
      )}
    </AppContext.Consumer>
  );
}

export default Listing;
