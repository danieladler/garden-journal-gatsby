import React from "react"
import AppContext from "../context/AppContext"

const ListItem = (props) => {

  const { data, pctGrowth } = props;

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <button onClick={() => {context.setFeaturedPost(data.frontmatter)}}>
            {data.frontmatter.title}
          </button> :
          { pctGrowth }
        </>
      )}
    </AppContext.Consumer>
  )
}

export default ListItem
