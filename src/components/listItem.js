import React from "react"
import AppContext from "../context/AppContext"
import "../scss/grid.scss";

const ListItem = (props) => {

  const { data, pctGrowth } = props;

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <div className="grid-item" onClick={() => {context.setFeaturedPost(data.frontmatter)}}>
            <div className="grid-item__content">
              {data.frontmatter.title}: { pctGrowth }
            </div>
            <div className="grid-item__growth" style={{width: `${pctGrowth * 100}%`, height: `${pctGrowth * 100}%`}}/>
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default ListItem
