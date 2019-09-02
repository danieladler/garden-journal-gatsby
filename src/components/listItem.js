import React from "react"
import AppContext from "../context/AppContext"
import "../scss/grid.scss";

const ListItem = (props) => {

  const { data, pctGrowth, endOfHarvest } = props;

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <div className="grid-item" onClick={() => {context.setFeaturedPost(data.frontmatter)}}>
            <div className="grid-item__content">
              {/* TODO: just show pctGrowth on hover */}
              <p><strong>{data.frontmatter.title}</strong></p>
              <p>Growth: { pctGrowth }</p>
              <p>Harvest: { endOfHarvest }</p>
            </div>
            <div
              className="grid-item__growth"
              style={{
                width: `${pctGrowth * 100}%`,
                height: `${pctGrowth * 100}%`,
                opacity: `${endOfHarvest}`
              }}
            />
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default ListItem
